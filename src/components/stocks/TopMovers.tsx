import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, ArrowUpRight, ArrowDownRight, Info } from 'lucide-react';
import { cn } from '@/lib/utils';
import { getTopGainers, getTopLosers, Stock } from '@/data/tadawulStocks';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface TopMoversProps {
  onStockSelect?: (stock: Stock) => void;
}

const getGainerExplanation = (stock: Stock): string => {
  const explanations: Record<string, string> = {
    '4071': 'MBC Group surged on strong advertising revenue growth and expanding digital streaming subscriptions across the MENA region.',
    '7202': 'Elm continues its rally on government digital transformation contracts and strong earnings growth in tech services.',
    '4030': 'BAHRI gained on rising shipping rates and increased oil exports, benefiting from global energy demand.',
    '2381': 'Aldrees Petroleum rose on expanded service station network and higher fuel margins.',
    '2082': 'ACWA Power climbed on new renewable energy project wins aligned with Vision 2030 sustainability goals.',
    '1212': 'Astra Industrial advanced on diversified industrial earnings and construction sector growth.',
    '2222': 'Saudi Aramco gained on higher oil prices and strong quarterly dividend announcements.',
    '7200': 'Solutions by STC rose on cloud computing contracts and digital transformation deals.',
    '2020': 'SAFCO surged on fertilizer price increases and strong agricultural demand.',
    '1211': 'Maaden advanced on gold and phosphate production increases and commodity price strength.',
  };
  return explanations[stock.ticker] || `${stock.name} gained on positive market sentiment and sector momentum.`;
};

const getLoserExplanation = (stock: Stock): string => {
  const explanations: Record<string, string> = {
    '4240': 'Fawaz Alhokair declined on weak retail sales and continued restructuring costs.',
    '2380': 'Petro Rabigh fell on refining margin pressures and higher operational costs.',
    '2290': 'Yanbu Cement dropped on construction sector slowdown and cement oversupply concerns.',
    '3040': 'Southern Cement declined on increased competition and pricing pressures.',
    '2010': 'SABIC retreated on lower petrochemical prices and global demand concerns.',
    '4004': 'Dallah Healthcare fell on healthcare spending normalization post-pandemic.',
    '5110': 'Saudi Electricity declined on regulatory rate discussions and high debt levels.',
    '4162': 'Lulu Retail dropped on grocery margin compression and competitive pressures.',
    '6020': 'SASCO fell on fuel distribution margin pressures.',
    '4180': 'Fitaihi declined on luxury spending slowdown.',
  };
  return explanations[stock.ticker] || `${stock.name} declined on profit-taking and sector rotation.`;
};

export const TopMovers = ({ onStockSelect }: TopMoversProps) => {
  const [activeTab, setActiveTab] = useState('gainers');
  const gainers = getTopGainers(10);
  const losers = getTopLosers(10);

  const renderStockCard = (stock: Stock, isGainer: boolean) => {
    const explanation = isGainer ? getGainerExplanation(stock) : getLoserExplanation(stock);
    
    return (
      <Card
        key={stock.ticker}
        className="glass-card hover:border-primary/30 cursor-pointer transition-all duration-200"
        onClick={() => onStockSelect?.(stock)}
      >
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={cn(
                "w-10 h-10 rounded-lg flex items-center justify-center",
                isGainer ? "bg-green-500/10" : "bg-red-500/10"
              )}>
                {isGainer ? (
                  <ArrowUpRight className="w-5 h-5 text-green-500" />
                ) : (
                  <ArrowDownRight className="w-5 h-5 text-red-500" />
                )}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-foreground">{stock.name}</span>
                  <Badge variant="outline" className="text-xs">
                    {stock.ticker}
                  </Badge>
                </div>
                <span className="text-sm text-muted-foreground">{stock.sector}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-right">
                <div className="font-bold text-foreground">
                  SAR {stock.price.toFixed(2)}
                </div>
                <div className={cn(
                  "flex items-center gap-1 text-sm justify-end font-medium",
                  isGainer ? "text-green-500" : "text-red-500"
                )}>
                  {isGainer ? '+' : ''}{stock.changePercent.toFixed(2)}%
                </div>
              </div>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button className="p-2 rounded-full hover:bg-muted/50 transition-colors">
                      <Info className="w-4 h-4 text-muted-foreground" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent side="left" className="max-w-[300px]">
                    <p className="text-sm">{explanation}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>

          {/* Mobile explanation */}
          <div className="mt-3 pt-3 border-t border-border lg:hidden">
            <p className="text-xs text-muted-foreground">{explanation}</p>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="space-y-4">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 bg-muted">
          <TabsTrigger value="gainers" className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4" />
            Top Gainers
          </TabsTrigger>
          <TabsTrigger value="losers" className="flex items-center gap-2">
            <TrendingDown className="w-4 h-4" />
            Top Losers
          </TabsTrigger>
        </TabsList>

        <TabsContent value="gainers" className="mt-4 space-y-3">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-muted-foreground">
              Stocks with the highest gains today
            </span>
          </div>
          {gainers.map((stock) => renderStockCard(stock, true))}
        </TabsContent>

        <TabsContent value="losers" className="mt-4 space-y-3">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-sm text-muted-foreground">
              Stocks with the biggest declines today
            </span>
          </div>
          {losers.map((stock) => renderStockCard(stock, false))}
        </TabsContent>
      </Tabs>
    </div>
  );
};
