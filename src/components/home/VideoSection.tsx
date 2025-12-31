import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, BookOpen, Target, Brain, TrendingUp, X } from 'lucide-react';
import { useState } from 'react';

// ⬇️ PUT YOUR VIDEO URL HERE ⬇️
const VIDEO_URL = "/AIroboadvisory1.mp4"; // Change this to your video path (e.g., "/videos/my-video.mp4" or "https://example.com/video.mp4")

const videoTopics = [
  {
    icon: <Target className="w-5 h-5" />,
    title: 'Profile Setup',
    description: 'Learn how to configure your investment goals, risk tolerance, and time horizon',
  },
  {
    icon: <Brain className="w-5 h-5" />,
    title: 'AI Picks Explained',
    description: 'Understand how our AI analyzes stocks and generates personalized recommendations',
  },
  {
    icon: <TrendingUp className="w-5 h-5" />,
    title: 'Reading Signals',
    description: 'Master confidence scores, profile fit ratings, and model performance metrics',
  },
  {
    icon: <BookOpen className="w-5 h-5" />,
    title: 'Investment Terms',
    description: 'Quick glossary of P/E ratio, market cap, dividends, and other key terms',
  },
];

export const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-20 relative bg-background">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            See How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Watch our quick tutorial to understand how to use CoreInvest's AI-powered 
            features and make the most of your investment journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Video Player Placeholder */}
          <div className="lg:col-span-3">
            <Card className="glass-card overflow-hidden aspect-video relative group">
              {!isPlaying ? (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-primary/10 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mx-auto backdrop-blur-sm border border-primary/30 group-hover:scale-110 transition-transform duration-300 cursor-pointer" onClick={() => setIsPlaying(true)}>
                      <Play className="w-10 h-10 text-primary ml-1" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-lg font-semibold text-foreground">Getting Started Guide</p>
                      <p className="text-sm text-muted-foreground">2 min tutorial</p>
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 text-xs text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    Video Tutorial
                  </div>
                  
                  {/* AI visualization in background */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-primary/5 blur-2xl" />
                    <div className="absolute bottom-10 left-10 w-24 h-24 rounded-full bg-primary/10 blur-xl" />
                  </div>
                </div>
              ) : (
                <div className="absolute inset-0 bg-background">
                  <video
                    src={VIDEO_URL}
                    controls
                    autoPlay
                    className="w-full h-full object-contain"
                  >
                    Your browser does not support the video tag.
                  </video>
                  <Button 
                    variant="outline" 
                    size="icon"
                    className="absolute top-2 right-2 z-10 bg-background/80 backdrop-blur-sm"
                    onClick={() => setIsPlaying(false)}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              )}
            </Card>
          </div>

          {/* Video Topics */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-lg font-semibold text-foreground mb-4">What You'll Learn</h3>
            {videoTopics.map((topic, index) => (
              <Card 
                key={topic.title}
                className="glass-card p-4 hover:border-primary/30 transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                    {topic.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground text-sm mb-1">
                      {topic.title}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {topic.description}
                    </p>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {index + 1}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Terms Quick Reference */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold text-foreground">Quick Terms Reference</h3>
            <p className="text-sm text-muted-foreground">Essential investing terms explained simply</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { term: 'P/E Ratio', desc: 'Price to earnings - shows if stock is over/undervalued' },
              { term: 'Market Cap', desc: 'Total value of company shares' },
              { term: 'Dividend Yield', desc: 'Annual dividend as % of stock price' },
              { term: 'Beta', desc: 'Volatility compared to overall market' },
            ].map((item) => (
              <Card key={item.term} className="glass-card p-4 text-center">
                <p className="font-medium text-primary text-sm mb-1">{item.term}</p>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
