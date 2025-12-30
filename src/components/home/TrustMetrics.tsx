import { Card } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Brain, TrendingUp, Users, Shield, Info } from 'lucide-react';
import { useEffect, useState } from 'react';

interface MetricCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  tooltip: string;
  delay: number;
}

const MetricCard = ({ icon, value, label, tooltip, delay }: MetricCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [displayValue, setDisplayValue] = useState('0');

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!isVisible) return;
    
    const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
    const suffix = value.replace(/[0-9.]/g, '');
    const duration = 1500;
    const steps = 60;
    const stepValue = numericValue / steps;
    let current = 0;
    
    const interval = setInterval(() => {
      current += stepValue;
      if (current >= numericValue) {
        setDisplayValue(value);
        clearInterval(interval);
      } else {
        setDisplayValue(Math.floor(current) + suffix);
      }
    }, duration / steps);

    return () => clearInterval(interval);
  }, [isVisible, value]);

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Card 
            className={`glass-card p-6 relative overflow-hidden group cursor-help transition-all duration-500 hover:border-primary/30 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  {icon}
                </div>
                <Info className="w-4 h-4 text-muted-foreground" />
              </div>
              
              <div className="text-3xl font-bold text-foreground mb-1 text-gradient">
                {displayValue}
              </div>
              <div className="text-sm text-muted-foreground">{label}</div>
            </div>
          </Card>
        </TooltipTrigger>
        <TooltipContent 
          side="top" 
          className="max-w-xs bg-popover border-border text-popover-foreground"
        >
          <p>{tooltip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export const TrustMetrics = () => {
  const metrics = [
    {
      icon: <Brain className="w-6 h-6" />,
      value: '60%',
      label: 'Model Performance',
      tooltip: 'Our AI model has achieved a 60% performance rate in analyzing stock patterns based on backtested data.',
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      value: '262',
      label: 'Stocks Analyzed',
      tooltip: 'We continuously analyze 262 stocks listed on the Tadawul Saudi Stock Exchange, covering all major sectors.',
    },
    {
      icon: <Users className="w-6 h-6" />,
      value: '100+',
      label: 'Active Investors',
      tooltip: 'Join our growing community of over 100 active investors who trust CoreInvest for their investment decisions.',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      value: '256-bit',
      label: 'Encryption',
      tooltip: 'Your data is protected with bank-level 256-bit encryption, ensuring complete security and privacy.',
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by <span className="text-gradient">Thousands</span> of Investors
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our AI-powered platform delivers reliable, data-driven insights backed by 
            cutting-edge technology and rigorous analysis.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <MetricCard
              key={metric.label}
              {...metric}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
