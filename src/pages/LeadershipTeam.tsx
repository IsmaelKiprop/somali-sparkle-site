import { LanguageProvider } from '@/hooks/useLanguage';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SoomaalChat } from '@/components/SoomaalChat';
import { useLanguage } from '@/hooks/useLanguage';
import { Star, Users, Award, Target } from 'lucide-react';

const LeadershipContent = () => {
  const { language } = useLanguage();

  const leadership = [
    {
      name: 'Nasa Ige',
      position: language === 'so' ? 'Musharraxa Madaxweynaha' : 'Presidential Candidate',
      bio: language === 'so' 
        ? 'Hoggaamiye leh 20+ sano waayo-aragnimo siyaasadeed iyo maamul.'
        : 'Leader with 20+ years of political and administrative experience.',
      image: '/favicon.png'
    },
    {
      name: 'Amina Hassan',
      position: language === 'so' ? 'Gudoomiye Xisbiga' : 'Party Chairperson',
      bio: language === 'so' 
        ? 'Hogaamiye hore ee ururka dhallinyarada iyo taageeraha xuquuqda dumarka.'
        : 'Former youth organization leader and women\'s rights advocate.',
      image: '/Amina Abdi Hassan.png'
    },
    {
      name: 'Ahmed Mohamed',
      position: language === 'so' ? 'Xoghayaha Guud' : 'Secretary General',
      bio: language === 'so' 
        ? 'Khabiir maaliyadeed oo horey u soo shaqeeyay hayadaha caalamiga ah.'
        : 'Financial expert who has worked with international organizations.',
      image: '/Ahmed Hassan Mohamed.png'
    },
    {
      name: 'Fatima Ali',
      position: language === 'so' ? 'Gudoomiye Arrimaha Bulshada' : 'Social Affairs Chair',
      bio: language === 'so' 
        ? 'Aqoonyahan bulsho oo taageeraha horumarka bulshada.'
        : 'Social scientist and community development advocate.',
      image: '/Mariam Hassan Yusuf.png'
    }
  ];

  const values = [
    {
      icon: Star,
      title: language === 'so' ? 'Amar-gelin' : 'Integrity',
      description: language === 'so' 
        ? 'Waan ku adkeynaa danahaynta iyo xoraynta.'
        : 'We uphold transparency and independence.'
    },
    {
      icon: Users,
      title: language === 'so' ? 'Iskaashato' : 'Collaboration',
      description: language === 'so' 
        ? 'Waxaan ka shaqeynaa midna midka kale.'
        : 'We work together as one team.'
    },
    {
      icon: Award,
      title: language === 'so' ? 'Wanaag' : 'Excellence',
      description: language === 'so' 
        ? 'Waxaan raadinaa waxtama ugu fiican.'
        : 'We strive for the best results.'
    },
    {
      icon: Target,
      title: language === 'so' ? 'Aragti' : 'Vision',
      description: language === 'so' 
        ? 'Waxaan leenahay mustaqbal fog.'
        : 'We have a forward-looking vision.'
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 inline-flex items-center gap-2 bg-primary/20 px-4 py-2 rounded-full">
              <Users className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold">
                {language === 'so' ? 'Hoggaanka Xisbiga' : 'Party Leadership'}
              </span>
            </div>
            <h1 className="font-outfit text-5xl md:text-6xl font-bold text-secondary mb-6">
              {language === 'so' ? 'La Kulanka Hoggaamiyaha' : 'Meet Leadership'}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {language === 'so' 
                ? 'Hoggaamiyada ugu wanaagsan ee ay dhalinyarada Soomaaliyeed ku raaxaystaan karaan.'
                : 'The best leadership that Somali youth can count on.'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {leadership.map((leader, index) => (
                <div key={index} className="text-center group">
                  <div className="relative mb-6 overflow-hidden rounded-2xl">
                    <img 
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <h3 className="font-outfit text-xl font-bold text-secondary mb-2">
                    {leader.name}
                  </h3>
                  <p className="text-primary font-semibold mb-3">
                    {leader.position}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {leader.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-outfit text-3xl font-bold text-secondary mb-12 text-center">
              {language === 'so' ? 'Mabaadi\'da Xisbiga' : 'Party Values'}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Join Leadership */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-12 rounded-2xl text-center">
              <h2 className="font-outfit text-3xl font-bold text-secondary mb-6">
                {language === 'so' ? 'Ku Biir Hoggaanka' : 'Join Leadership'}
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                {language === 'so' 
                  ? 'Waxaan raadinaa dhalinyarada leh aqoon iyo khibrad oo ay noqon karaan hoggaamiyaal mustaqbalka.'
                  : 'We are looking for educated and experienced youth who can become future leaders.'
                }
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/80 p-6 rounded-xl">
                  <div className="text-3xl font-bold text-primary mb-2">100+</div>
                  <div className="text-sm text-muted-foreground">
                    {language === 'so' ? 'Hoggaamiye' : 'Leaders'}
                  </div>
                </div>
                <div className="bg-white/80 p-6 rounded-xl">
                  <div className="text-3xl font-bold text-secondary mb-2">18</div>
                  <div className="text-sm text-muted-foreground">
                    {language === 'so' ? 'Gobol' : 'Regions'}
                  </div>
                </div>
                <div className="bg-white/80 p-6 rounded-xl">
                  <div className="text-3xl font-bold text-accent mb-2">50%</div>
                  <div className="text-sm text-muted-foreground">
                    {language === 'so' ? 'Dumar' : 'Women'}
                  </div>
                </div>
              </div>
              
              <a 
                href="/register"
                className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary/90 transition-all duration-300 hover:-translate-y-1"
              >
                {language === 'so' ? 'Noqo Hoggaamiye' : 'Become a Leader'}
                <Star className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

const LeadershipTeam = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Navbar />
        <LeadershipContent />
        <Footer />
        <SoomaalChat />
      </div>
    </LanguageProvider>
  );
};

export default LeadershipTeam;
