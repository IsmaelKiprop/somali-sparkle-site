import { LanguageProvider } from '@/hooks/useLanguage';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Agenda } from '@/components/Agenda';
import { Events } from '@/components/Events';
import { Leadership } from '@/components/Leadership';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';
import { SoomaalChat } from '@/components/SoomaalChat';
const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Agenda />
          <Events />
          <Leadership />
          <CTA />
        </main>
        <Footer />
        <SoomaalChat />
      </div>
    </LanguageProvider>
  );
};

export default Index;
