import { LanguageProvider } from '@/hooks/useLanguage';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SoomaalChat } from '@/components/SoomaalChat';
import { useLanguage } from '@/hooks/useLanguage';
import { Star, Users, Target, Heart } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';

const AboutContent = () => {
  const { language } = useLanguage();

  const pillars = [
    {
      icon: Star,
      title: language === 'so' ? 'Hoggaaminta Qaranka' : 'National Leadership',
      description: language === 'so' ? 'Soomaaliya ku hoggaamino midnimo' : 'Leading Somalia with unity'
    },
    {
      icon: Users,
      title: language === 'so' ? 'Codka Dhallinyarada' : 'Voice of Youth',
      description: language === 'so' ? 'Metela hammiga dhallinyarada' : 'Representing youth aspirations'
    },
    {
      icon: Heart,
      title: language === 'so' ? 'Midnimada Ummadda' : 'National Unity',
      description: language === 'so' ? 'Qaranimada iyo isku-duubnaanta' : 'Nationhood and togetherness'
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
                {language === 'so' ? 'Naguka Saabsan' : 'About Us'}
              </span>
            </ScrollReveal>
            <ScrollReveal as="div" className="mb-8 flex justify-center" variant="scale" delayMs={60}>
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-3xl bg-card/70 backdrop-blur border border-border/60 shadow-lg flex items-center justify-center p-4">
                <img
                  src="/favicon.png"
                  alt="SYP"
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal as="h1" className="font-outfit text-5xl md:text-6xl font-bold text-secondary mb-6" variant="up" delayMs={100}>
              {language === 'so' ? 'Xisbiga Dhallinyarada Soomaaliyeed' : 'Somali Youth Party'}
            </ScrollReveal>
            <ScrollReveal as="p" className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto" variant="up" delayMs={160}>
              {language === 'so' 
                ? 'Horseedka siyaasadda jiilka cusub'
                : 'Pioneers of the new generation politics'
              }
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <ScrollReveal as="div" variant="right">
                <h2 className="font-outfit text-3xl font-bold text-secondary mb-6">
                  {language === 'so' ? 'Ku Saabsan Xisbiga' : 'About the Party'}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {language === 'so' 
                    ? 'Xisbiga Dhallinyarada Soomaaliyeed (SYP) waa xisbi siyaasadeed oo aasaasay doorashooyinkii 2026-kii, oo ka dhashay baahinta lagu qabo hoggaamiye ka dhalinyarada ah oo fahamsan dhibaatooyinka bulshada Soomaaliyeed.'
                    : 'The Somali Youth Party (SYP) is a political party founded in the 2026 elections, born from the need for young leadership that understands the challenges of Somali society.'
                  }
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {language === 'so' 
                    ? 'Waxaan nahay xisbiga ugu wanaagsan ee taageerta nabadda, horumarka, iyo midnimada dalka Soomaaliya. Waxaan rumaysanahay in dhalinyaradu ay yihiin horgaleha mustaqbalka.'
                    : 'We are the best party supporting peace, development, and unity in Somalia. We believe that youth are the pioneers of the future.'
                  }
                </p>
              </ScrollReveal>
              <ScrollReveal as="div" className="bg-gradient-to-br from-primary/20 to-secondary/20 p-8 rounded-2xl" variant="left" delayMs={80}>
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">50K+</div>
                    <div className="text-sm text-muted-foreground">
                      {language === 'so' ? 'Xubnaha' : 'Members'}
                    </div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-secondary mb-2">18</div>
                    <div className="text-sm text-muted-foreground">
                      {language === 'so' ? 'Gobol' : 'Regions'}
                    </div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-accent mb-2">100+</div>
                    <div className="text-sm text-muted-foreground">
                      {language === 'so' ? 'Mashruuc' : 'Projects'}
                    </div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">2026</div>
                    <div className="text-sm text-muted-foreground">
                      {language === 'so' ? 'La Aasaasay' : 'Founded'}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Pillars */}
            <ScrollReveal as="div" className="text-center mb-12" variant="up">
              <h2 className="font-outfit text-3xl font-bold text-secondary mb-4">
                {language === 'so' ? 'Tiirarka Asaasiga' : 'Core Pillars'}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {language === 'so' 
                  ? 'Aasaabyahayaga waxay ku salaysan yihiin mabaadi\'da soo socda:'
                  : 'Our foundation is based on the following principles:'
                }
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pillars.map((pillar, index) => (
                <ScrollReveal key={index} as="div" className="text-center p-6 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors" variant="up" delayMs={index * 90}>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <pillar.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-xl mb-3">{pillar.title}</h3>
                  <p className="text-muted-foreground">{pillar.description}</p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ScrollReveal as="div" className="p-8 bg-white rounded-2xl shadow-lg" variant="up">
                <Target className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-outfit text-2xl font-bold text-secondary mb-4">
                  {language === 'so' ? 'Araggita' : 'Mission'}
                </h3>
                <p className="text-muted-foreground">
                  {language === 'so' 
                    ? 'Inaan abuurno Soomaaliya xor ah, ammaan ah, oo horumarsan oo ay dhalinyaradu ku raaxaystaan nolol wanaagsan.'
                    : 'To create a free, peaceful, and prosperous Somalia where youth can enjoy a good life.'
                  }
                </p>
              </ScrollReveal>
              <ScrollReveal as="div" className="p-8 bg-white rounded-2xl shadow-lg" variant="up" delayMs={90}>
                <Star className="w-12 h-12 text-secondary mb-4" />
                <h3 className="font-outfit text-2xl font-bold text-secondary mb-4">
                  {language === 'so' ? 'Arinta' : 'Vision'}
                </h3>
                <p className="text-muted-foreground">
                  {language === 'so' 
                    ? 'Inaan noqono xisbiga ugu saameynta badan ee bulshada Soomaaliyeed ee 2030-kii.'
                    : 'To become the most influential party in Somali society by 2030.'
                  }
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

const AboutPage = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Navbar />
        <AboutContent />
        <Footer />
        <SoomaalChat />
      </div>
    </LanguageProvider>
  );
};

export default AboutPage;
