// User Investment Profile Types

export type InvestmentGoal = 'capital_preservation' | 'income' | 'balanced' | 'growth' | 'aggressive_growth';
export type RiskLevel = 'low' | 'medium' | 'high';
export type TimeHorizon = 'short' | 'medium' | 'long';

export interface UserProfile {
  capital: number;
  maxPricePerStock: number;
  riskTolerance: number; // 0-100
  riskLevel: RiskLevel;
  investmentGoal: InvestmentGoal;
  timeHorizon: TimeHorizon;
  preferredSectors: string[];
  desiredROI: number; // percentage
  createdAt: string;
  updatedAt: string;
}

export interface AIRecommendation {
  id: string;
  ticker: string;
  name: string;
  sector: string;
  sectorId: string;
  price: number;
  change: number;
  changePercent: number;
  dividendYield: number | null;
  peRatio: number | null;
  marketCap: string;
  beta?: number;
  
  // AI-generated fields
  aiScore: number; // 0-100
  matchScore: number; // How well it matches profile
  suggestedAllocation: number; // Percentage of portfolio
  suggestedShares: number;
  investmentAmount: number;
  expectedReturn: number; // Annual %
  modelPerformance: number; // 30-60%
  reasoning: string[];
  riskAnalysis: string;
  profileFitExplanation: string;
}

export interface PortfolioSummary {
  totalInvestment: number;
  stockCount: number;
  expectedAnnualReturn: number;
  dividendIncome: number;
  riskLevel: RiskLevel;
  sectorDiversification: { sector: string; percentage: number }[];
  recommendations: AIRecommendation[];
}

export const investmentGoals = [
  { value: 'capital_preservation' as const, label: 'Capital Preservation', description: 'Focus on protecting your investment with stable, low-risk assets', expectedROI: '2-5%' },
  { value: 'income' as const, label: 'Dividend Income', description: 'Generate regular income through high-dividend stocks', expectedROI: '4-7%' },
  { value: 'balanced' as const, label: 'Balanced Growth', description: 'Balance between income and growth with moderate risk', expectedROI: '6-10%' },
  { value: 'growth' as const, label: 'Growth Focus', description: 'Prioritize capital appreciation with higher risk tolerance', expectedROI: '10-15%' },
  { value: 'aggressive_growth' as const, label: 'Aggressive Growth', description: 'Maximum growth potential, accept high volatility', expectedROI: '15-25%' },
];

export const getRiskLevelFromScore = (score: number): RiskLevel => {
  if (score <= 35) return 'low';
  if (score <= 70) return 'medium';
  return 'high';
};

export const getRiskLabel = (value: number): string => {
  if (value <= 20) return 'Very Conservative';
  if (value <= 40) return 'Conservative';
  if (value <= 60) return 'Moderate';
  if (value <= 80) return 'Aggressive';
  return 'Very Aggressive';
};

// LocalStorage helpers
const PROFILE_STORAGE_KEY = 'tadawul_user_profile';

export const saveProfile = (profile: UserProfile): void => {
  localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(profile));
};

export const loadProfile = (): UserProfile | null => {
  const stored = localStorage.getItem(PROFILE_STORAGE_KEY);
  if (!stored) return null;
  try {
    return JSON.parse(stored) as UserProfile;
  } catch {
    return null;
  }
};

export const clearProfile = (): void => {
  localStorage.removeItem(PROFILE_STORAGE_KEY);
};
