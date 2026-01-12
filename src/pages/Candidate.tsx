import { LanguageProvider } from '@/hooks/useLanguage';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SoomaalChat } from '@/components/SoomaalChat';
import { useLanguage } from '@/hooks/useLanguage';
import { Star, Quote, Calendar, MapPin } from 'lucide-react';

const CandidateContent = () => {
  const { language } = useLanguage();

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 inline-flex items-center gap-2 bg-primary/20 px-4 py-2 rounded-full">
              <Star className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold">
                {language === 'so' ? 'Musharraxa Madaxweynaha' : 'Presidential Candidate'}
              </span>
            </div>
            <h1 className="font-outfit text-5xl md:text-6xl font-bold text-secondary mb-6">
              Nasa Ige
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {language === 'so' 
                ? 'Hoggaamiye leh aragti fog iyo waayo-aragnimo 20 sano ka badan.'
                : 'A leader with far-reaching vision and over 20 years of experience.'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Candidate Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/favicon.png" 
                alt="Nasa Ige"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="font-outfit text-3xl font-bold text-secondary">
                {language === 'so' ? 'Hoggaamiye Wanaagsan' : 'Visionary Leader'}
              </h2>
              
              <div className="bg-muted/50 p-6 rounded-xl border-l-4 border-primary">
                <div className="flex items-start gap-3">
                  <Quote className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <p className="text-lg italic text-foreground">
                    {language === 'so' 
                      ? 'Hoggaamintu maaha doorashada soo socota oo kaliya, ee waa danta jiilka soo socda.'
                      : 'Leadership is not just about the next election, but about the next generation.'
                    }
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="text-foreground">
                    {language === 'so' ? 'Waayo-aragnimo: 20+ sano' : 'Experience: 20+ years'}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-foreground">
                    {language === 'so' ? 'Magaalooyinka: Muqdisho, Kismaayo' : 'Cities: Mogadishu, Kismayo'}
                  </span>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                {language === 'so' 
                  ? 'Nasa Ige waa hoggaamiye caan ka ah dalka Soomaaliya, oo horey u soo shaqeeyay hayaddaha kala duwan ee dowladda iyo shirkadaha gaarka ah. Waxay taageertaa horumarinta dhalinyarada iyo dhismaha dowlad xor ah.'
                  : 'Nasa Ige is a well-known leader in Somalia, having previously worked in various government agencies and private companies. He supports youth development and building a transparent government.'
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-outfit text-3xl font-bold text-secondary mb-8">
              {language === 'so' ? 'Aragtiyada Nasa Ige' : 'Nasa Ige\'s Vision'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">
                  {language === 'so' ? 'Nabadda' : 'Peace'}
                </h3>
                <p className="text-muted-foreground">
                  {language === 'so' 
                    ? 'Ku adkeyn nabadda guud ee dalka'
                    : 'Strengthen peace throughout the country'
                  }
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">
                  {language === 'so' ? 'Horumar' : 'Development'}
                </h3>
                <p className="text-muted-foreground">
                  {language === 'so' 
                    ? 'Higaadinta dhaqaalaha iyo bulshada'
                    : 'Economic and social progress'
                  }
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-semibold text-lg mb-2">
                  {language === 'so' ? 'Dhallinyarada' : 'Youth'}
                </h3>
                <p className="text-muted-foreground">
                  {language === 'so' 
                    ? 'Adeeginta dhallinyarada ee mustaqbalka'
                    : 'Empowering youth for the future'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

const Candidate = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Navbar />
        <CandidateContent />
        <Footer />
        <SoomaalChat />
      </div>
    </LanguageProvider>
  );
};

export default Candidate;
