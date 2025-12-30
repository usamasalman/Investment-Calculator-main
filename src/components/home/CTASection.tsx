import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const CTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10" />
      
      <div className="container px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Transform Your{' '}
            <span className="text-gradient">Investment Strategy?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Join thousands of investors who trust CoreInvest to navigate the Tadawul market. 
            Start your journey to smarter investing today.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/auth?mode=signup">
              <Button 
                size="lg" 
                className="btn-glow bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 group"
              >
                Create Free Account
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/explore">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-border hover:border-primary/50 hover:bg-primary/5 text-lg px-8 py-6"
              >
                View Stock Analysis
              </Button>
            </Link>
          </div>

          <p className="text-sm text-muted-foreground mt-8">
            No credit card required • Free forever for basic features
          </p>
        </div>
      </div>
    </section>
  );
};
