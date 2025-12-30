import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Navbar } from '@/components/layout/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { 
  TrendingUp, TrendingDown, Brain, ChevronDown, 
  Lightbulb, BarChart3, LineChart, Activity,
  FileDown, RefreshCw, Settings, PieChart,
  Target, Shield, DollarSign, Percent
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { LineChart as RechartsLineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Area, AreaChart, PieChart as RechartsPie, Pie, Cell } from 'recharts';
import { loadProfile, UserProfile, getRiskLabel, investmentGoals } from '@/types/profile';
import { generateRecommendations } from '@/lib/aiRecommendationEngine';
import { PortfolioSummary } from '@/types/profile';
import { generatePortfolioPDF } from '@/lib/pdfGenerator';
import { toast } from 'sonner';
import { tadawulSectors, tadawulStocks } from '@/data/tadawulStocks';

const COLORS = [
  'hsl(var(--chart-1))',
  'hsl(var(--chart-2))',
  'hsl(var(--chart-3))',
  'hsl(var(--chart-4))',
  'hsl(var(--chart-5))',
];

const Recommendations = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [expandedStock, setExpandedStock] = useState<string | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [portfolio, setPortfolio] = useState<PortfolioSummary | null>(null);
  const [generatingPDF, setGeneratingPDF] = useState(false);

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (!session?.user) {
        navigate('/auth');
      } else {
        setUser(session.user);
        loadUserProfile();
      }
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session?.user) {
        navigate('/auth');
      } else {
        setUser(session.user);
        loadUserProfile();
      }
    });
  }, [navigate]);

  const loadUserProfile = () => {
    const savedProfile = loadProfile();
    if (savedProfile) {
      setProfile(savedProfile);
      const recommendations = generateRecommendations(savedProfile, 5, Date.parse(savedProfile.updatedAt) || Date.now());
      setPortfolio(recommendations);
    }
    setLoading(false);
  };

  const handleRefreshRecommendations = () => {
    if (profile) {
      const recommendations = generateRecommendations(profile, 5, Date.now());
      setPortfolio(recommendations);
      toast.success('Recommendations refreshed!');
    }
  };

  const handleDownloadPDF = () => {
    if (profile && portfolio) {
      setGeneratingPDF(true);
      try {
        generatePortfolioPDF(profile, portfolio);
        toast.success('PDF report downloaded!');
      } catch (error) {
        toast.error('Failed to generate PDF');
      } finally {
        setGeneratingPDF(false);
      }
    }
  };

  const generatePriceHistory = (basePrice: number, trend: number) => {
    return Array.from({ length: 30 }, (_, i) => ({
      day: i + 1,
      price: basePrice * (0.95 + Math.random() * 0.1) + (trend * i * 0.01),
    }));
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse-glow w-16 h-16 rounded-full bg-primary/20" />
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="container px-4 pt-24 pb-16">
          <div className="max-w-2xl mx-auto text-center">
            <Brain className="w-16 h-16 mx-auto text-primary mb-4" />
            <h1 className="text-2xl font-bold mb-4">Complete Your Profile First</h1>
            <p className="text-muted-foreground mb-8">
              We need your investment preferences to generate personalized AI recommendations.
            </p>
            <Button onClick={() => navigate('/profile')} className="btn-glow">
              <Settings className="w-4 h-4 mr-2" />
              Set Up Profile
            </Button>
          </div>
        </main>
      </div>
    );
  }

  const goalInfo = investmentGoals.find(g => g.value === profile.investmentGoal);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container px-4 pt-24 pb-16">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <Brain className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">AI-Powered Picks</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Your Personalized <span className="text-gradient">Recommendations</span>
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Based on your investment profile, our AI has analyzed {tadawulStocks.length} Tadawul stocks
              to identify these top opportunities.
            </p>
          </div>

          {/* Profile Summary Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Card className="glass-card">
              <CardContent className="pt-4 text-center">
                <DollarSign className="w-5 h-5 mx-auto text-primary mb-2" />
                <div className="text-xl font-bold">SAR {profile.capital.toLocaleString()}</div>
                <div className="text-xs text-muted-foreground">Investment Capital</div>
              </CardContent>
            </Card>
            <Card className="glass-card">
              <CardContent className="pt-4 text-center">
                <Shield className="w-5 h-5 mx-auto text-primary mb-2" />
                <div className="text-xl font-bold">{getRiskLabel(profile.riskTolerance)}</div>
                <div className="text-xs text-muted-foreground">Risk Profile</div>
              </CardContent>
            </Card>
            <Card className="glass-card">
              <CardContent className="pt-4 text-center">
                <Target className="w-5 h-5 mx-auto text-primary mb-2" />
                <div className="text-xl font-bold">{goalInfo?.label || profile.investmentGoal}</div>
                <div className="text-xs text-muted-foreground">Investment Goal</div>
              </CardContent>
            </Card>
            <Card className="glass-card">
              <CardContent className="pt-4 text-center">
                <Percent className="w-5 h-5 mx-auto text-primary mb-2" />
                <div className="text-xl font-bold">{profile.desiredROI}%</div>
                <div className="text-xs text-muted-foreground">Target ROI</div>
              </CardContent>
            </Card>
          </div>

          {/* Portfolio Summary */}
          {portfolio && (
            <Card className="glass-card mb-8 animate-fade-in">
              <CardHeader>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <CardTitle className="text-xl">Portfolio Summary</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">
                      AI-optimized allocation across {portfolio.stockCount} stocks
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={handleRefreshRecommendations}
                    >
                      <RefreshCw className="w-4 h-4 mr-2" />
                      Refresh
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => navigate('/profile')}
                    >
                      <Settings className="w-4 h-4 mr-2" />
                      Edit Profile
                    </Button>
                    <Button 
                      size="sm"
                      onClick={handleDownloadPDF}
                      disabled={generatingPDF}
                      className="btn-glow"
                    >
                      <FileDown className="w-4 h-4 mr-2" />
                      {generatingPDF ? 'Generating...' : 'Download PDF'}
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                  <div>
                    <div className="text-sm text-muted-foreground">Total Investment</div>
                    <div className="text-2xl font-bold text-foreground">
                      SAR {portfolio.totalInvestment.toLocaleString()}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Expected Return</div>
                    <div className="text-2xl font-bold text-green-500">
                      {portfolio.expectedAnnualReturn.toFixed(1)}%
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Dividend Income</div>
                    <div className="text-2xl font-bold text-primary">
                      SAR {portfolio.dividendIncome.toLocaleString()}/yr
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Risk Level</div>
                    <div className={cn(
                      "text-2xl font-bold capitalize",
                      portfolio.riskLevel === 'low' ? 'text-green-500' :
                      portfolio.riskLevel === 'medium' ? 'text-yellow-500' : 'text-red-500'
                    )}>
                      {portfolio.riskLevel}
                    </div>
                  </div>
                </div>

                {/* Sector Allocation Chart */}
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="w-full md:w-1/2 h-48">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsPie>
                        <Pie
                          data={portfolio.sectorDiversification}
                          dataKey="percentage"
                          nameKey="sector"
                          cx="50%"
                          cy="50%"
                          innerRadius={40}
                          outerRadius={80}
                          paddingAngle={2}
                        >
                          {portfolio.sectorDiversification.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip 
                          formatter={(value: number) => `${value.toFixed(1)}%`}
                          contentStyle={{
                            backgroundColor: 'hsl(220, 35%, 10%)',
                            border: '1px solid hsl(220, 25%, 18%)',
                            borderRadius: '8px',
                          }}
                        />
                      </RechartsPie>
                    </ResponsiveContainer>
                  </div>
                  <div className="w-full md:w-1/2 space-y-2">
                    {portfolio.sectorDiversification.map((item, index) => (
                      <div key={item.sector} className="flex items-center gap-3">
                        <div 
                          className="w-3 h-3 rounded-full" 
                          style={{ backgroundColor: COLORS[index % COLORS.length] }}
                        />
                        <div className="flex-1 text-sm">{item.sector}</div>
                        <div className="text-sm font-medium">{item.percentage.toFixed(1)}%</div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Recommendations */}
          <div className="space-y-6">
            {portfolio?.recommendations.map((stock, index) => (
              <Card 
                key={stock.id} 
                className={cn(
                  "glass-card overflow-hidden transition-all duration-300 animate-fade-in-up",
                  expandedStock === stock.id && "border-primary/50"
                )}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-2">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-lg bg-primary/10 flex flex-col items-center justify-center">
                        <span className="text-lg font-bold text-primary">{stock.ticker}</span>
                        <span className="text-[10px] text-muted-foreground">#{index + 1}</span>
                      </div>
                      <div>
                        <CardTitle className="text-xl">{stock.name}</CardTitle>
                        <div className="flex items-center gap-2 mt-1 flex-wrap">
                          <Badge variant="secondary" className="bg-muted text-muted-foreground">
                            {stock.sector}
                          </Badge>
                          <span className="text-sm text-muted-foreground">
                            {stock.marketCap}
                          </span>
                          <Badge 
                            variant="outline" 
                            className={cn(
                              "text-xs",
                              stock.modelPerformance >= 50 ? "border-green-500 text-green-500" :
                              stock.modelPerformance >= 40 ? "border-yellow-500 text-yellow-500" : 
                              "border-muted text-muted-foreground"
                            )}
                          >
                            {stock.modelPerformance}% Model Performance
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <div className="text-2xl font-bold text-foreground">
                          SAR {stock.price.toFixed(2)}
                        </div>
                        <div className={cn(
                          "flex items-center gap-1 text-sm justify-end",
                          stock.changePercent >= 0 ? "text-green-500" : "text-red-500"
                        )}>
                          {stock.changePercent >= 0 ? (
                            <TrendingUp className="w-4 h-4" />
                          ) : (
                            <TrendingDown className="w-4 h-4" />
                          )}
                          {stock.changePercent >= 0 ? '+' : ''}{stock.changePercent.toFixed(1)}%
                        </div>
                      </div>

                      <div className="text-center bg-primary/10 rounded-lg px-4 py-2">
                        <div className="text-sm text-muted-foreground mb-1">AI Score</div>
                        <div className={cn(
                          "text-2xl font-bold",
                          stock.aiScore >= 80 ? "text-green-500" : 
                          stock.aiScore >= 60 ? "text-primary" : "text-yellow-500"
                        )}>
                          {stock.aiScore}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 p-4 bg-muted/30 rounded-lg">
                    <div>
                      <div className="text-xs text-muted-foreground">Suggested Shares</div>
                      <div className="font-semibold">{stock.suggestedShares} shares</div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Investment</div>
                      <div className="font-semibold">SAR {stock.investmentAmount.toLocaleString()}</div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Allocation</div>
                      <div className="font-semibold">{stock.suggestedAllocation.toFixed(1)}%</div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Expected Return</div>
                      <div className="font-semibold text-green-500">{stock.expectedReturn.toFixed(1)}% / yr</div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <Collapsible 
                    open={expandedStock === stock.id}
                    onOpenChange={() => setExpandedStock(expandedStock === stock.id ? null : stock.id)}
                  >
                    <CollapsibleTrigger asChild>
                      <Button 
                        variant="ghost" 
                        className="w-full justify-between text-muted-foreground hover:text-foreground"
                      >
                        <span className="flex items-center gap-2">
                          <Lightbulb className="w-4 h-4" />
                          Why AI Picked This For You
                        </span>
                        <ChevronDown className={cn(
                          "w-4 h-4 transition-transform duration-200",
                          expandedStock === stock.id && "rotate-180"
                        )} />
                      </Button>
                    </CollapsibleTrigger>

                    <CollapsibleContent className="space-y-6 pt-4">
                      {/* Profile Fit Explanation */}
                      <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                        <div className="flex items-start gap-3">
                          <Target className="w-5 h-5 text-primary mt-0.5" />
                          <div>
                            <h4 className="font-semibold text-primary mb-1">Why This Stock</h4>
                            <p className="text-sm text-muted-foreground">
                              {stock.profileFitExplanation}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* AI Reasoning */}
                      <div className="p-4 rounded-lg bg-muted/50 border border-border">
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <Brain className="w-4 h-4 text-primary" />
                          AI Analysis
                        </h4>
                        <ul className="space-y-2">
                          {stock.reasoning.map((reason, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                              {reason}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Risk Analysis */}
                      <div className="p-4 rounded-lg bg-red-500/5 border border-red-500/20">
                        <h4 className="font-semibold mb-2 flex items-center gap-2 text-red-500">
                          <Shield className="w-4 h-4" />
                          Risk Assessment
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {stock.riskAnalysis}
                        </p>
                      </div>

                      {/* Charts */}
                      <Tabs defaultValue="price" className="w-full">
                        <TabsList className="grid w-full grid-cols-3 bg-muted">
                          <TabsTrigger value="price" className="flex items-center gap-2">
                            <LineChart className="w-4 h-4" />
                            <span className="hidden sm:inline">Price</span>
                          </TabsTrigger>
                          <TabsTrigger value="dividend" className="flex items-center gap-2">
                            <BarChart3 className="w-4 h-4" />
                            <span className="hidden sm:inline">Dividend</span>
                          </TabsTrigger>
                          <TabsTrigger value="volatility" className="flex items-center gap-2">
                            <Activity className="w-4 h-4" />
                            <span className="hidden sm:inline">Volatility</span>
                          </TabsTrigger>
                        </TabsList>

                        <TabsContent value="price" className="pt-4">
                          <div className="h-48">
                            <ResponsiveContainer width="100%" height="100%">
                              <AreaChart data={generatePriceHistory(stock.price, stock.changePercent)}>
                                <defs>
                                  <linearGradient id={`gradient-${stock.id}`} x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="hsl(45, 100%, 50%)" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="hsl(45, 100%, 50%)" stopOpacity={0} />
                                  </linearGradient>
                                </defs>
                                <XAxis 
                                  dataKey="day" 
                                  stroke="hsl(220, 15%, 40%)"
                                  fontSize={12}
                                  tickLine={false}
                                />
                                <YAxis 
                                  stroke="hsl(220, 15%, 40%)"
                                  fontSize={12}
                                  tickLine={false}
                                  axisLine={false}
                                  domain={['auto', 'auto']}
                                />
                                <Tooltip 
                                  contentStyle={{
                                    backgroundColor: 'hsl(220, 35%, 10%)',
                                    border: '1px solid hsl(220, 25%, 18%)',
                                    borderRadius: '8px',
                                  }}
                                  labelStyle={{ color: 'hsl(45, 100%, 96%)' }}
                                  formatter={(value: number) => [`SAR ${value.toFixed(2)}`, 'Price']}
                                />
                                <Area
                                  type="monotone"
                                  dataKey="price"
                                  stroke="hsl(45, 100%, 50%)"
                                  strokeWidth={2}
                                  fill={`url(#gradient-${stock.id})`}
                                />
                              </AreaChart>
                            </ResponsiveContainer>
                          </div>
                        </TabsContent>

                        <TabsContent value="dividend" className="pt-4">
                          <div className="p-6 text-center">
                            <div className="text-4xl font-bold text-gradient mb-2">
                              {stock.dividendYield?.toFixed(1) || 'N/A'}%
                            </div>
                            <p className="text-muted-foreground">Annual Dividend Yield</p>
                            {stock.dividendYield && stock.investmentAmount && (
                              <p className="text-sm text-primary mt-2">
                                Estimated annual dividend: SAR {((stock.investmentAmount * stock.dividendYield) / 100).toLocaleString()}
                              </p>
                            )}
                          </div>
                        </TabsContent>

                        <TabsContent value="volatility" className="pt-4">
                          <div className="p-6 text-center">
                            <div className="text-4xl font-bold text-gradient mb-2">
                              {stock.beta?.toFixed(2) || 'N/A'}
                            </div>
                            <p className="text-muted-foreground">Beta (Market Volatility)</p>
                            <p className="text-sm text-muted-foreground mt-2">
                              {stock.beta && stock.beta > 1 
                                ? 'Higher volatility than market average' 
                                : 'Lower volatility than market average'}
                            </p>
                          </div>
                        </TabsContent>
                      </Tabs>
                    </CollapsibleContent>
                  </Collapsible>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Disclaimer */}
          <div className="mt-8 p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
            <p className="text-sm text-muted-foreground text-center">
              <strong className="text-yellow-500">Disclaimer:</strong> This AI-generated report is for educational purposes only 
              and does not constitute financial advice. Always conduct your own research and consult with a 
              qualified financial advisor before making investment decisions.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Recommendations;
