import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const HELP_SYSTEM_PROMPT = `You are the CoreInvest Guide - a helpful assistant that ONLY answers questions about the CoreInvest platform and its features. You help users understand how to use the tool and navigate its features.

## About CoreInvest
CoreInvest is an AI-powered Saudi stock market (Tadawul) investment recommendation tool. It helps users get personalized stock picks based on their profile.

## Key Features You Can Explain:

### 1. Profile Section
Users can set up their investment profile with:
- **Investment Goal**: Choose from Capital Growth (maximize long-term gains), Income Generation (focus on dividends), or Capital Preservation (low-risk stability)
- **Risk Tolerance**: Select Conservative (low risk, stable returns), Moderate (balanced approach), or Aggressive (higher risk for higher potential returns)
- **Time Horizon**: Set Short-term (1-2 years), Medium-term (3-5 years), or Long-term (5+ years)
- **Preferred Sectors**: Choose which Tadawul sectors to focus on (Banks, Energy, Healthcare, etc.)
- **Capital Amount**: Enter their investment amount for position sizing recommendations

### 2. AI Picks / Recommendations
The AI analyzes stocks based on the user's profile and shows:
- **Confidence Score**: How confident the AI is in the recommendation (percentage)
- **Profile Fit**: How well the stock matches the user's investment profile
- **Model Performance**: Historical accuracy of similar recommendations
- **Action**: Buy, Hold, or Sell recommendation
- **Reasoning**: AI-generated explanation of why this stock is recommended

### 3. Key Investment Terms
- **P/E Ratio**: Price-to-Earnings ratio - shows if a stock is overvalued or undervalued compared to earnings
- **Market Cap**: Total market value of a company's shares
- **Dividend Yield**: Annual dividend payments as a percentage of stock price
- **Beta**: Measures stock volatility compared to the overall market (Beta > 1 = more volatile)
- **EPS**: Earnings Per Share - company's profit divided by shares outstanding

### 4. Navigation
- **Home Page**: Overview with hero section, features, and video tutorial
- **Profile Page**: Set up investment preferences (accessible after login)
- **Recommendations/AI Picks**: View personalized stock recommendations
- **Explore**: Browse all Tadawul stocks

## Response Guidelines:
1. ONLY answer questions about CoreInvest features and functionality
2. If asked about specific stock advice or market predictions, redirect to the AI Stock Advisor chatbot
3. Be friendly, clear, and concise
4. Use simple language to explain technical terms
5. Guide users step-by-step when explaining how to use features
6. If asked about unrelated topics, politely explain you can only help with CoreInvest-related questions

## Off-topic Response:
If users ask about anything not related to CoreInvest (weather, general knowledge, coding, etc.), respond with:
"I'm specifically designed to help you with CoreInvest features and navigation. For that question, you might want to use a general search engine. Is there anything about CoreInvest I can help you with instead?"`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");

    if (!LOVABLE_API_KEY) {
      console.error("LOVABLE_API_KEY is not configured");
      return new Response(
        JSON.stringify({ error: "AI service not configured" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: HELP_SYSTEM_PROMPT },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI Gateway error:", response.status, errorText);

      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again in a moment." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Service temporarily unavailable. Please try again later." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      return new Response(
        JSON.stringify({ error: "Failed to get AI response" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("Help chat error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
