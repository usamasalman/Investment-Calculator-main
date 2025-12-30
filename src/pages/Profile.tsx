import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Navbar } from '@/components/layout/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';
import { ArrowRight, ArrowLeft, Check, DollarSign, Shield, Target, Percent, Clock } from 'lucide-react';
import { 
  UserProfile, 
  InvestmentGoal, 
  TimeHorizon,
  investmentGoals, 
  getRiskLabel, 
  getRiskLevelFromScore,
  saveProfile,
  loadProfile 
} from '@/types/profile';

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  
  // Form state
  const [capital, setCapital] = useState<number>(50000);
  const [riskTolerance, setRiskTolerance] = useState<number[]>([50]);
  const [investmentGoal, setInvestmentGoal] = useState<InvestmentGoal>('balanced');
  const [timeHorizon, setTimeHorizon] = useState<TimeHorizon>('medium');
  const [desiredROI, setDesiredROI] = useState<number[]>([10]);
  const [maxPricePerStock, setMaxPricePerStock] = useState<number>(500);

  useEffect(() => {
    // Load existing profile if any
    const existingProfile = loadProfile();
    if (existingProfile) {
      setCapital(existingProfile.capital);
      setRiskTolerance([existingProfile.riskTolerance]);
      setInvestmentGoal(existingProfile.investmentGoal);
      setTimeHorizon(existingProfile.timeHorizon || 'medium');
      setDesiredROI([existingProfile.desiredROI]);
      setMaxPricePerStock(existingProfile.maxPricePerStock || 500);
    }
    
    supabase.auth.onAuthStateChange((event, session) => {
      if (!session?.user) {
        navigate('/auth');
      } else {
        setUser(session.user);
        setLoading(false);
      }
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session?.user) {
        navigate('/auth');
      } else {
        setUser(session.user);
        setLoading(false);
      }
    });
  }, [navigate]);

  const handleSaveProfile = async () => {
    setSaving(true);
    try {
      const profile: UserProfile = {
        capital,
        maxPricePerStock,
        riskTolerance: riskTolerance[0],
        riskLevel: getRiskLevelFromScore(riskTolerance[0]),
        investmentGoal,
        timeHorizon,
        preferredSectors: [], // AI will scan all sectors automatically
        desiredROI: desiredROI[0],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      
      saveProfile(profile);
      toast.success('Profile saved! Generating AI recommendations...');
      navigate('/recommendations');
    } catch (error: any) {
      toast.error(error.message || 'Failed to save profile');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse-glow w-16 h-16 rounded-full bg-primary/20" />
      </div>
    );
  }

  const totalSteps = 5;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container px-4 pt-24 pb-16">
        <div className="max-w-2xl mx-auto">
          {/* Progress indicator */}
          <div className="flex items-center justify-center mb-12">
            {[1, 2, 3, 4, 5].map((step) => (
              <div key={step} className="flex items-center">
                <div
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-300",
                    currentStep >= step
                      ? "bg-primary text-primary-foreground shadow-glow"
                      : "bg-muted text-muted-foreground"
                  )}
                >
                  {currentStep > step ? <Check className="w-5 h-5" /> : step}
                </div>
                {step < totalSteps && (
                  <div
                    className={cn(
                      "w-8 md:w-12 h-1 mx-1 rounded transition-all duration-300",
                      currentStep > step ? "bg-primary" : "bg-muted"
                    )}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Step 1: Capital Input */}
          {currentStep === 1 && (
            <Card className="glass-card animate-fade-in">
              <CardHeader className="text-center">
                <div className="mx-auto p-4 rounded-full bg-primary/10 w-fit mb-4">
                  <DollarSign className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Investment Capital</CardTitle>
                <CardDescription>
                  How much are you planning to invest? (SAR)
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="space-y-4">
                  <Label htmlFor="capital">Investment Amount</Label>
                  <Input
                    id="capital"
                    type="number"
                    value={capital}
                    onChange={(e) => setCapital(Number(e.target.value))}
                    className="text-2xl h-14 text-center bg-input border-border"
                    min={1000}
                    step={1000}
                  />
                  <p className="text-center text-muted-foreground">
                    SAR {capital.toLocaleString()}
                  </p>
                </div>

                <div className="space-y-4">
                  <Label htmlFor="maxPrice">Maximum Price Per Stock (SAR)</Label>
                  <Input
                    id="maxPrice"
                    type="number"
                    value={maxPricePerStock}
                    onChange={(e) => setMaxPricePerStock(Number(e.target.value))}
                    className="text-2xl h-14 text-center bg-input border-border"
                    min={10}
                    step={10}
                  />
                  <p className="text-center text-muted-foreground">
                    Max SAR {maxPricePerStock.toLocaleString()} per share
                  </p>
                </div>

                <Button
                  onClick={() => setCurrentStep(2)}
                  className="w-full btn-glow bg-primary text-primary-foreground"
                  disabled={capital < 1000}
                >
                  Continue
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Step 2: Risk Tolerance */}
          {currentStep === 2 && (
            <Card className="glass-card animate-fade-in">
              <CardHeader className="text-center">
                <div className="mx-auto p-4 rounded-full bg-primary/10 w-fit mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Risk Tolerance</CardTitle>
                <CardDescription>
                  How comfortable are you with investment risk?
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="space-y-6">
                  <div className="text-center">
                    <span className="text-3xl font-bold text-gradient">
                      {getRiskLabel(riskTolerance[0])}
                    </span>
                  </div>
                  
                  <Slider
                    value={riskTolerance}
                    onValueChange={setRiskTolerance}
                    max={100}
                    step={1}
                    className="py-4"
                  />
                  
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Conservative</span>
                    <span>Aggressive</span>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-muted/50 border border-border">
                  <p className="text-sm text-muted-foreground">
                    {riskTolerance[0] <= 40
                      ? "You prefer stability over high returns. We'll focus on dividend stocks and established companies."
                      : riskTolerance[0] <= 70
                      ? "You're open to moderate risk for better growth. We'll balance growth stocks with stable investments."
                      : "You're comfortable with volatility for maximum growth. We'll include high-growth opportunities."}
                  </p>
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    onClick={() => setCurrentStep(1)}
                    className="flex-1 border-border"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back
                  </Button>
                  <Button
                    onClick={() => setCurrentStep(3)}
                    className="flex-1 btn-glow bg-primary text-primary-foreground"
                  >
                    Continue
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 3: Desired ROI */}
          {currentStep === 3 && (
            <Card className="glass-card animate-fade-in">
              <CardHeader className="text-center">
                <div className="mx-auto p-4 rounded-full bg-primary/10 w-fit mb-4">
                  <Percent className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Desired Return on Investment</CardTitle>
                <CardDescription>
                  What annual return are you targeting?
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="space-y-6">
                  <div className="text-center">
                    <span className="text-4xl font-bold text-gradient">
                      {desiredROI[0]}%
                    </span>
                  </div>
                  
                  <Slider
                    value={desiredROI}
                    onValueChange={setDesiredROI}
                    min={2}
                    max={30}
                    step={1}
                    className="py-4"
                  />
                  
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>2%</span>
                    <span>30%+</span>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-muted/50 border border-border">
                  <p className="text-sm text-muted-foreground">
                    Higher returns typically require accepting more risk and volatility. 
                    Your {desiredROI[0]}% target will influence our AI recommendations.
                  </p>
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    onClick={() => setCurrentStep(2)}
                    className="flex-1 border-border"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back
                  </Button>
                  <Button
                    onClick={() => setCurrentStep(4)}
                    className="flex-1 btn-glow bg-primary text-primary-foreground"
                  >
                    Continue
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 4: Time Horizon */}
          {currentStep === 4 && (
            <Card className="glass-card animate-fade-in">
              <CardHeader className="text-center">
                <div className="mx-auto p-4 rounded-full bg-primary/10 w-fit mb-4">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Investment Time Horizon</CardTitle>
                <CardDescription>
                  How long do you plan to hold your investments?
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  {[
                    { value: 'short' as const, label: 'Short Term', range: '0 - 6 months', description: 'Quick gains, higher volatility tolerance' },
                    { value: 'medium' as const, label: 'Medium Term', range: '6 - 24 months', description: 'Balanced approach with moderate growth expectations' },
                    { value: 'long' as const, label: 'Long Term', range: '24+ months', description: 'Patient investing for sustained growth' },
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setTimeHorizon(option.value)}
                      className={cn(
                        "w-full p-4 rounded-lg border text-left transition-all duration-300",
                        timeHorizon === option.value
                          ? "border-primary bg-primary/10 shadow-glow-sm"
                          : "border-border bg-card hover:border-primary/50"
                      )}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="font-semibold text-foreground mb-1">
                            {option.label}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {option.description}
                          </div>
                        </div>
                        <div className="text-xs text-primary bg-primary/10 px-2 py-1 rounded-full">
                          {option.range}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

                <div className="p-4 rounded-lg bg-muted/50 border border-border">
                  <p className="text-sm text-muted-foreground">
                    Your time horizon affects stock selection. Longer horizons allow for more growth-oriented picks.
                  </p>
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    onClick={() => setCurrentStep(3)}
                    className="flex-1 border-border"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back
                  </Button>
                  <Button
                    onClick={() => setCurrentStep(5)}
                    className="flex-1 btn-glow bg-primary text-primary-foreground"
                  >
                    Continue
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 5: Investment Goals */}
          {currentStep === 5 && (
            <Card className="glass-card animate-fade-in">
              <CardHeader className="text-center">
                <div className="mx-auto p-4 rounded-full bg-primary/10 w-fit mb-4">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Investment Goals</CardTitle>
                <CardDescription>
                  What's your primary investment objective?
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  {investmentGoals.map((goal) => (
                    <button
                      key={goal.value}
                      onClick={() => setInvestmentGoal(goal.value)}
                      className={cn(
                        "w-full p-4 rounded-lg border text-left transition-all duration-300",
                        investmentGoal === goal.value
                          ? "border-primary bg-primary/10 shadow-glow-sm"
                          : "border-border bg-card hover:border-primary/50"
                      )}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="font-semibold text-foreground mb-1">
                            {goal.label}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {goal.description}
                          </div>
                        </div>
                        <div className="text-xs text-primary bg-primary/10 px-2 py-1 rounded-full">
                          {goal.expectedROI}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Summary */}
                <div className="p-4 rounded-lg bg-muted/50 border border-border space-y-2">
                  <h4 className="font-semibold text-sm">Profile Summary</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                    <div>Capital: <span className="text-foreground">SAR {capital.toLocaleString()}</span></div>
                    <div>Risk: <span className="text-foreground">{getRiskLabel(riskTolerance[0])}</span></div>
                    <div>Target ROI: <span className="text-foreground">{desiredROI[0]}%</span></div>
                    <div>Time Horizon: <span className="text-foreground">{timeHorizon === 'short' ? 'Short (0-6m)' : timeHorizon === 'medium' ? 'Medium (6-24m)' : 'Long (24+m)'}</span></div>
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    variant="outline"
                    onClick={() => setCurrentStep(4)}
                    className="flex-1 border-border"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back
                  </Button>
                  <Button
                    onClick={handleSaveProfile}
                    disabled={saving}
                    className="flex-1 btn-glow bg-primary text-primary-foreground"
                  >
                    {saving ? 'Generating...' : 'Get AI Recommendations'}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
};

export default Profile;
