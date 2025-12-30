import { Link } from 'react-router-dom';
import { Suspense } from 'react';
import { Button } from '@/components/ui/button';
import { AIParticles } from '@/components/ui/AIParticles';
import { StockAI3DScene } from '@/components/3d/StockAI3DScene';
import { ArrowRight, Sparkles } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* AI Particles Background */}
      <AIParticles />
      
      {/* 3D Stock/AI Scene */}
      <Suspense fallback={null}>
        <StockAI3DScene />
      </Suspense>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background pointer-events-none z-[1]" />

      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">AI-Powered Investment Advisory</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
            <span className="text-foreground">Invest Smarter with</span>
            <br />
            <span className="text-gradient glow-text">AI-Driven Insights</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-delay-1">
            Experience the future of investing. Our AI analyzes Tadawul markets in real-time, 
            delivering personalized stock recommendations tailored to your financial goals.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-delay-2">
            <Link to="/auth?mode=signup">
              <Button 
                size="lg" 
                className="btn-glow bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 group"
              >
                Start Investing
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/explore">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-border hover:border-primary/50 hover:bg-primary/5 text-lg px-8 py-6"
              >
                Explore Stocks
              </Button>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="flex items-center justify-center gap-8 mt-16 text-sm text-muted-foreground animate-fade-in-delay-3">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span>Live Market Data</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-border" />
            <div className="hidden sm:flex items-center gap-2">
              <span>200+ Tadawul Stocks</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-border" />
            <div className="hidden sm:flex items-center gap-2">
              <span>Bank-Level Security</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};
