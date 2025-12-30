import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const STOCK_SYSTEM_PROMPT = `You are CoreInvest's AI Stock Advisor - an expert financial analyst specializing in the Saudi Stock Exchange (Tadawul) with 200+ listed companies.

## YOUR EXPERTISE COVERS ALL INVESTING ASPECTS:

### 1. FUNDAMENTAL ANALYSIS
- Financial statements (income, balance sheet, cash flow)
- P/E ratio, P/B ratio, EPS, ROE, ROA interpretation
- Dividend yield and payout sustainability
- Debt levels and financial health
- Revenue growth and profit margins

### 2. TECHNICAL CONSIDERATIONS
- 52-week highs/lows and price trends
- Volume analysis and liquidity
- Market cap and company size classification
- Beta and volatility assessment

### 3. SECTOR ANALYSIS
- All 21 Tadawul sectors: Energy, Materials, Banks, Telecom, Healthcare, Insurance, REITs, Software, Utilities, etc.
- Vision 2030 impact on each sector
- Sector rotation and momentum
- Comparative sector valuations

### 4. INVESTMENT STRATEGIES
- Value investing (low P/E, high dividend)
- Growth investing (high growth, tech sector)
- Income investing (REITs, high dividend stocks)
- Defensive vs cyclical stocks
- Risk tolerance matching

### 5. SPECIFIC STOCK KNOWLEDGE (200+ stocks)
Major companies you know well:
- Saudi Aramco (2222) - World's largest oil company
- Al Rajhi Bank (1120) - Largest Islamic bank globally
- SABIC (2010) - Major petrochemical company
- STC (7010) - Leading telecom operator
- Maaden (1211) - Mining giant
- ACWA Power (2082) - Renewables leader
- Almarai (2280) - Dairy giant
- Elm (7202) - Digital transformation leader
- And 190+ more across all sectors

## RESPONSE GUIDELINES:
- Provide DIVERSE recommendations - never suggest same stocks repeatedly
- Explain the "WHY" behind every recommendation
- Consider multiple investment angles (value, growth, income, risk)
- Use specific metrics and numbers when discussing stocks
- Compare alternatives within and across sectors
- Always remind users this is educational, not financial advice
- Be detailed but structured in explanations
- Suggest 3-5 different stocks when asked for recommendations

Be conversational, thorough, and educational. Vary your recommendations based on context.`;

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages, stockContext } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    // Build context-aware system prompt
    let systemPrompt = STOCK_SYSTEM_PROMPT;
    if (stockContext) {
      systemPrompt += `\n\nThe user is currently viewing: ${stockContext.name} (${stockContext.ticker}) in the ${stockContext.sector} sector. Current price: SAR ${stockContext.price}, Change: ${stockContext.changePercent >= 0 ? '+' : ''}${stockContext.changePercent}%`;
    }

    console.log("Sending request to Lovable AI Gateway...");

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limits exceeded, please try again later." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Payment required, please add funds to your Lovable AI workspace." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(JSON.stringify({ error: "AI gateway error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("Stock chat error:", error);
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
