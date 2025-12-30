import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Search, Filter, TrendingUp, TrendingDown, ChevronRight, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { tadawulSectors, tadawulStocks, getStocksBySector, Stock, getSectorCount } from '@/data/tadawulStocks';

import { TopMovers } from '@/components/stocks/TopMovers';
import * as LucideIcons from 'lucide-react';

const Explore = () => {
  const [selectedSector, setSelectedSector] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStock, setSelectedStock] = useState<Stock | null>(null);
  const [activeTab, setActiveTab] = useState('browse');

  const currentStocks = getStocksBySector(selectedSector);
  const filteredStocks = currentStocks.filter(
    (stock) =>
      stock.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      stock.ticker.includes(searchQuery.toUpperCase()) ||
      stock.sector.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const currentSector = tadawulSectors.find((s) => s.id === selectedSector);

  const getIcon = (iconName: string) => {
    const Icon = (LucideIcons as any)[iconName] || LucideIcons.Building2;
    return Icon;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container px-4 pt-24 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Explore <span className="text-gradient">Tadawul Stocks</span>
            </h1>
            <p className="text-muted-foreground">
              Browse {tadawulStocks.length}+ stocks across {tadawulSectors.length - 1} sectors of the Saudi Stock Exchange.
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
            <TabsList className="grid w-full grid-cols-2 max-w-md">
              <TabsTrigger value="browse">Browse Stocks</TabsTrigger>
              <TabsTrigger value="movers">Top Movers</TabsTrigger>
            </TabsList>

            <TabsContent value="movers" className="mt-6">
              <TopMovers onStockSelect={setSelectedStock} />
            </TabsContent>

            <TabsContent value="browse" className="mt-6">
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    placeholder="Search by name, ticker, or sector..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 bg-input border-border"
                  />
                </div>
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" className="sm:hidden border-border">
                      <Filter className="w-4 h-4 mr-2" />
                      Sectors
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="bottom" className="h-[70vh]">
                    <SheetHeader>
                      <SheetTitle>Select Sector</SheetTitle>
                    </SheetHeader>
                    <div className="grid grid-cols-2 gap-3 mt-6 max-h-[50vh] overflow-y-auto">
                      {tadawulSectors.map((sector) => {
                        const Icon = getIcon(sector.icon);
                        return (
                          <button
                            key={sector.id}
                            onClick={() => setSelectedSector(sector.id)}
                            className={cn(
                              "p-3 rounded-lg border text-left transition-all duration-200",
                              selectedSector === sector.id
                                ? "border-primary bg-primary/10"
                                : "border-border bg-card hover:border-primary/50"
                            )}
                          >
                            <Icon className="w-4 h-4 mb-1 text-primary" />
                            <div className="font-medium text-foreground text-sm">{sector.name}</div>
                            <div className="text-xs text-muted-foreground">{getSectorCount(sector.id)} stocks</div>
                          </button>
                        );
                      })}
                    </div>
                  </SheetContent>
                </Sheet>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className="hidden lg:block">
                  <Card className="glass-card sticky top-24 max-h-[70vh] overflow-y-auto">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">Sectors</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-1">
                      {tadawulSectors.map((sector) => {
                        const Icon = getIcon(sector.icon);
                        return (
                          <button
                            key={sector.id}
                            onClick={() => setSelectedSector(sector.id)}
                            className={cn(
                              "w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 text-left",
                              selectedSector === sector.id
                                ? "bg-primary/10 text-primary"
                                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                            )}
                          >
                            <Icon className="w-4 h-4 flex-shrink-0" />
                            <span className="flex-1 text-sm font-medium truncate">{sector.name}</span>
                            <span className="text-xs">{getSectorCount(sector.id)}</span>
                          </button>
                        );
                      })}
                    </CardContent>
                  </Card>
                </div>

                <div className="lg:col-span-3">
                  <div className="flex items-center gap-2 mb-4 text-sm">
                    <HoverCard openDelay={100} closeDelay={200}>
                      <HoverCardTrigger asChild>
                        <button className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors">
                          {currentSector?.name}
                          <ChevronDown className="w-3 h-3" />
                        </button>
                      </HoverCardTrigger>
                      <HoverCardContent 
                        align="start" 
                        className="w-80 p-2 bg-popover border-border z-50"
                        sideOffset={8}
                      >
                        <div className="grid grid-cols-2 gap-1 max-h-80 overflow-y-auto">
                          {tadawulSectors.map((sector) => {
                            const Icon = getIcon(sector.icon);
                            return (
                              <button
                                key={sector.id}
                                onClick={() => setSelectedSector(sector.id)}
                                className={cn(
                                  "flex items-center gap-2 px-2 py-2 rounded-md text-left transition-all text-sm",
                                  selectedSector === sector.id
                                    ? "bg-primary/10 text-primary"
                                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                                )}
                              >
                                <Icon className="w-3 h-3 flex-shrink-0" />
                                <span className="truncate flex-1">{sector.name}</span>
                                <span className="text-xs opacity-70">{getSectorCount(sector.id)}</span>
                              </button>
                            );
                          })}
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                    <span className="text-muted-foreground">– {filteredStocks.length} stocks</span>
                  </div>

                  <div className="space-y-3">
                    {filteredStocks.map((stock, index) => (
                      <Card 
                        key={stock.ticker}
                        className="glass-card hover:border-primary/30 cursor-pointer transition-all duration-200 animate-fade-in"
                        style={{ animationDelay: `${Math.min(index, 10) * 30}ms` }}
                        onClick={() => setSelectedStock(stock)}
                      >
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                <span className="text-sm font-bold text-primary">{stock.ticker}</span>
                              </div>
                              <div>
                                <div className="font-semibold text-foreground">{stock.name}</div>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                  <Badge variant="outline" className="border-border text-xs">
                                    {stock.sector}
                                  </Badge>
                                  <span>Vol: {stock.volume}</span>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-4">
                              <div className="text-right">
                                <div className="text-lg font-bold text-foreground">SAR {stock.price.toFixed(2)}</div>
                                <div className={cn(
                                  "flex items-center gap-1 text-sm justify-end",
                                  stock.changePercent >= 0 ? "text-green-500" : "text-red-500"
                                )}>
                                  {stock.changePercent >= 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                                  {stock.changePercent >= 0 ? '+' : ''}{stock.changePercent.toFixed(2)}%
                                </div>
                              </div>
                              <ChevronRight className="w-5 h-5 text-muted-foreground" />
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                    {filteredStocks.length === 0 && (
                      <div className="text-center py-12 text-muted-foreground">No stocks found.</div>
                    )}
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Sheet open={!!selectedStock} onOpenChange={() => setSelectedStock(null)}>
        <SheetContent className="w-full sm:max-w-lg overflow-y-auto">
          {selectedStock && (
            <>
              <SheetHeader className="pb-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <span className="text-lg font-bold text-primary">{selectedStock.ticker}</span>
                  </div>
                  <div>
                    <SheetTitle className="text-xl">{selectedStock.name}</SheetTitle>
                    <Badge variant="secondary" className="mt-1">{selectedStock.sector}</Badge>
                  </div>
                </div>
              </SheetHeader>
              <div className="space-y-6">
                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-3xl font-bold text-foreground">SAR {selectedStock.price.toFixed(2)}</div>
                    <div className={cn("flex items-center gap-1 mt-1", selectedStock.changePercent >= 0 ? "text-green-500" : "text-red-500")}>
                      {selectedStock.changePercent >= 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                      <span className="font-medium">{selectedStock.changePercent >= 0 ? '+' : ''}{selectedStock.changePercent.toFixed(2)}%</span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-muted/50 border border-border">
                    <div className="text-sm text-muted-foreground mb-1">Volume</div>
                    <div className="text-lg font-semibold text-foreground">{selectedStock.volume}</div>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/50 border border-border">
                    <div className="text-sm text-muted-foreground mb-1">Market Cap</div>
                    <div className="text-lg font-semibold text-foreground">{selectedStock.marketCap}</div>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/50 border border-border">
                    <div className="text-sm text-muted-foreground mb-1">P/E Ratio</div>
                    <div className="text-lg font-semibold text-foreground">{selectedStock.peRatio || '--'}</div>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/50 border border-border">
                    <div className="text-sm text-muted-foreground mb-1">Div Yield</div>
                    <div className="text-lg font-semibold text-foreground">{selectedStock.dividendYield ? `${selectedStock.dividendYield}%` : '--'}</div>
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-muted/50 border border-border">
                  <div className="text-sm text-muted-foreground mb-2">52 Week Range</div>
                  <div className="flex justify-between text-sm">
                    <span>Low: SAR {selectedStock.low52w}</span>
                    <span>High: SAR {selectedStock.high52w}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{selectedStock.description}</p>
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>

      
    </div>
  );
};

export default Explore;
