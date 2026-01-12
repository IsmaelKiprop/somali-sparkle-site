import { LanguageProvider } from '@/hooks/useLanguage';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SoomaalChat } from '@/components/SoomaalChat';
import { useLanguage } from '@/hooks/useLanguage';
import { Shield, Star } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';

import agendaJobs from '@/assets/agenda-jobs.jpg';
import agendaHealth from '@/assets/agenda-health.jpg';
import agendaEducation from '@/assets/agenda-education.jpg';
import agendaAgriculture from '@/assets/agenda-agriculture.jpg';

const AgendaContent = () => {
  const { language } = useLanguage();

  const agendaItems = [
    {
      image: agendaJobs,
      title: language === 'so' ? 'Shaqo Abuurka' : 'Job Creation',
      description: language === 'so' ? 'Xarumaha farsamada iyo aagag canshuur dhaaf ah' : 'Technical centers and tax-free zones',
      color: 'primary'
    },
    {
      image: agendaHealth,
      title: language === 'so' ? 'Caafimaadka' : 'Healthcare',
      description: language === 'so' ? 'Caafimaad lacag la\'aan ah carruurta' : 'Free healthcare for children',
      color: 'secondary'
    },
    {
      image: agendaEducation,
      title: language === 'so' ? 'Waxbarashada' : 'Education',
      description: language === 'so' ? 'Manaahijta casriga ah iyo IT-ga' : 'Modern curriculum and IT',
      color: 'accent'
    },
    {
      image: agendaAgriculture,
      title: language === 'so' ? 'Beeraha' : 'Agriculture',
      description: language === 'so' ? 'Nidaam waraab casri ah' : 'Modern irrigation systems',
      color: 'primary'
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal as="div" className="mb-8 inline-flex items-center gap-2 bg-primary/20 px-4 py-2 rounded-full" variant="up">
              <Star className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold">
                {language === 'so' ? 'Tiirarka Asaasiga' : 'Core Pillars'}
              </span>
            </ScrollReveal>
            <ScrollReveal as="h1" className="font-outfit text-5xl md:text-6xl font-bold text-secondary mb-6" variant="up" delayMs={80}>
              {language === 'so' ? 'Hiigsi Dhab ah' : 'Real Vision'}
            </ScrollReveal>
            <ScrollReveal as="p" className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto" variant="up" delayMs={140}>
              {language === 'so' 
                ? 'Ma ballanqaadno oo kaliya. Waan xisaabinnaa.'
                : 'We don\'t just promise. We deliver.'
              }
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Agenda Items */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {agendaItems.map((item, index) => (
                <ScrollReveal key={index} as="div" className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2" variant="up" delayMs={index * 90}>
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="font-outfit text-2xl font-bold text-secondary mb-4">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                    
                    <div className="mt-6 pt-6 border-t border-border">
                      <div className="flex items-center gap-2 text-sm text-primary font-medium">
                        <Shield className="w-4 h-4" />
                        {language === 'so' ? 'Hormar waara' : 'Guaranteed Progress'}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Plans */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal as="h2" className="font-outfit text-3xl font-bold text-secondary mb-12" variant="up">
              {language === 'so' ? 'Qorshaha Horumarinta' : 'Development Plans'}
            </ScrollReveal>
            
            <div className="space-y-8 text-left">
              <ScrollReveal as="div" className="bg-white p-6 rounded-xl shadow-md" variant="up">
                <h3 className="font-semibold text-xl mb-3 text-primary">
                  {language === 'so' ? 'Sannadkii 1-2: Aasaarinta' : 'Years 1-2: Foundation'}
                </h3>
                <p className="text-muted-foreground">
                  {language === 'so' 
                    ? 'Aasaaska xarumaha waxbarasho, caafimaad, iyo shaqooyinka ugu muhiimsan ee magaalooyinka waaweyn.'
                    : 'Establish education, health, and job centers in major cities.'
                  }
                </p>
              </ScrollReveal>
              
              <ScrollReveal as="div" className="bg-white p-6 rounded-xl shadow-md" variant="up" delayMs={90}>
                <h3 className="font-semibold text-xl mb-3 text-secondary">
                  {language === 'so' ? 'Sannadkii 3-4: Kobcinta' : 'Years 3-4: Growth'}
                </h3>
                <p className="text-muted-foreground">
                  {language === 'so' 
                    ? 'Kobcinta mashruucyada gobolada oo dhan iyo dhismaha wadahalinta bulshooyinka.'
                    : 'Expand projects across all regions and build community centers.'
                  }
                </p>
              </ScrollReveal>
              
              <ScrollReveal as="div" className="bg-white p-6 rounded-xl shadow-md" variant="up" delayMs={180}>
                <h3 className="font-semibold text-xl mb-3 text-accent">
                  {language === 'so' ? 'Sannadkii 5+: Xoraynta' : 'Years 5+: Independence'}
                </h3>
                <p className="text-muted-foreground">
                  {language === 'so' 
                    ? 'Xoraynta dhaqaalaha Soomaaliyeed iyo dhanka shidaalka iyo cunnada.'
                    : 'Achieve economic independence in energy and food sectors.'
                  }
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal as="div" className="bg-gradient-to-r from-primary/10 to-secondary/10 p-12 rounded-2xl" variant="up">
              <ScrollReveal as="h2" className="font-outfit text-3xl font-bold text-secondary mb-6" variant="up">
                {language === 'so' ? 'Ku Biir Tallaabada' : 'Join the Movement'}
              </ScrollReveal>
              <ScrollReveal as="p" className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto" variant="up" delayMs={80}>
                {language === 'so' 
                  ? 'Waxaan ka codsanayaa dhalinyarada Soomaaliyeed inay noqdaan qayb ka mid ah isbedelka aan rabno inay ka dhaco dalka.'
                  : 'We call on Somali youth to be part of the change we want to see in our country.'
                }
              </ScrollReveal>
              <ScrollReveal as="div" variant="up" delayMs={140}>
                <a 
                  href="/register"
                  className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary/90 transition-all duration-300 hover:-translate-y-1"
                >
                  {language === 'so' ? 'Isdiiwaangeli Hadda' : 'Register Now'}
                  <Star className="w-5 h-5" />
                </a>
              </ScrollReveal>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
};

const Agenda = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Navbar />
        <AgendaContent />
        <Footer />
        <SoomaalChat />
      </div>
    </LanguageProvider>
  );
};

export default Agenda;
