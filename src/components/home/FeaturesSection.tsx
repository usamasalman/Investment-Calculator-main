import { Card } from '@/components/ui/card';
import { Brain, LineChart, Shield, Zap, Target, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: 'AI-Powered Analysis',
    description: 'Advanced machine learning algorithms analyze market patterns, earnings reports, and sentiment to deliver accurate predictions.',
  },
  {
    icon: <LineChart className="w-8 h-8" />,
    title: 'Real-Time Insights',
    description: 'Get live market data and instant notifications when our AI identifies promising investment opportunities.',
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: 'Personalized Goals',
    description: 'Set your investment goals and risk tolerance. Our AI tailors recommendations to match your unique profile.',
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: 'Portfolio Tracking',
    description: 'Monitor your investments with beautiful visualizations and track performance against market benchmarks.',
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Risk Management',
    description: 'Intelligent risk assessment helps protect your portfolio with diversification suggestions and alerts.',
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Instant Execution',
    description: 'One-click access to detailed stock analysis and actionable insights for quick decision making.',
  },
];

export const FeaturesSection = () => {
  return (
    <section className="py-20 relative bg-secondary/30">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need to <span className="text-gradient">Succeed</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Powerful tools and intelligent features designed to help you make 
            confident investment decisions in the Saudi market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="glass-card p-6 group hover:border-primary/30 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
