import { Navbar } from '@/components/layout/Navbar';
import { HeroSection } from '@/components/home/HeroSection';
import { TrustMetrics } from '@/components/home/TrustMetrics';
import { FeaturesSection } from '@/components/home/FeaturesSection';
import { VideoSection } from '@/components/home/VideoSection';
import { CTASection } from '@/components/home/CTASection';
import { HelpChatbot } from '@/components/chat/HelpChatbot';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <TrustMetrics />
        <FeaturesSection />
        <VideoSection />
        <CTASection />
      </main>
      <HelpChatbot />
      
      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-muted-foreground">
              © 2024 CoreInvest. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
