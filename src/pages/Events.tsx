import { LanguageProvider } from '@/hooks/useLanguage';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SoomaalChat } from '@/components/SoomaalChat';
import { useLanguage } from '@/hooks/useLanguage';
import { Calendar, MapPin, Clock, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '@/components/ScrollReveal';

const EventsContent = () => {
  const { language } = useLanguage();

  const events = [
    {
      date: { day: '25', month: { so: 'JAN', en: 'JAN' } },
      titleSo: 'Isu-soobaxa Weyn ee Muqdisho',
      titleEn: 'Grand Rally in Mogadishu',
      location: 'Konis Stadium',
      time: '15:00',
      color: 'primary',
    },
    {
      date: { day: '30', month: { so: 'JAN', en: 'JAN' } },
      titleSo: 'Kulanka Dhallinyarada Kismaayo',
      titleEn: 'Youth Convention in Kismayo',
      location: 'Jubba Hotel',
      time: '09:00',
      color: 'accent',
    },
    {
      date: { day: '05', month: { so: 'FEB', en: 'FEB' } },
      titleSo: 'Kulan Wadahadal Caafimaad',
      titleEn: 'Healthcare Policy Forum',
      location: 'Online Event',
      time: '14:00',
      color: 'secondary',
    },
    {
      date: { day: '12', month: { so: 'FEB', en: 'FEB' } },
      titleSo: 'Shirka Waxbarashada',
      titleEn: 'Education Summit',
      location: 'University of Mogadishu',
      time: '10:00',
      color: 'primary',
    },
    {
      date: { day: '18', month: { so: 'FEB', en: 'FEB' } },
      titleSo: 'Hawlgalka Bulshada',
      titleEn: 'Community Service Day',
      location: 'Various Locations',
      time: '08:00',
      color: 'accent',
    },
    {
      date: { day: '25', month: { so: 'FEB', en: 'FEB' } },
      titleSo: 'Munaasibadda Xoraynta',
      titleEn: 'Independence Celebration',
      location: 'City Square',
      time: '16:00',
      color: 'secondary',
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal as="div" className="mb-8 inline-flex items-center gap-2 bg-primary/20 px-4 py-2 rounded-full" variant="up">
              <Calendar className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold">
                {language === 'so' ? 'Dhaqdhaqaaqa' : 'Campaign Events'}
              </span>
            </ScrollReveal>
            <ScrollReveal as="h1" className="font-outfit text-5xl md:text-6xl font-bold text-secondary mb-6" variant="up" delayMs={80}>
              {language === 'so' ? 'Ololaha Doorashada' : 'Election Campaign'}
            </ScrollReveal>
            <ScrollReveal as="p" className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto" variant="up" delayMs={140}>
              {language === 'so' 
                ? 'Ku biir shirarkayaga iyo kulamayaga'
                : 'Join our rallies and meetings'
              }
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event, index) => (
                <ScrollReveal
                  key={index}
                  as="div"
                  className="group bg-card rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-xl"
                  variant="up"
                  delayMs={index * 90}
                >
                  {/* Date Header */}
                  <div 
                    className={`p-6 text-center ${
                      event.color === 'primary' ? 'bg-primary' :
                      event.color === 'accent' ? 'bg-accent' : 'bg-secondary'
                    }`}
                  >
                    <div className={`text-5xl font-bold ${
                      event.color === 'accent' ? 'text-accent-foreground' : 'text-primary-foreground'
                    }`}>
                      {event.date.day}
                    </div>
                    <div className={`text-sm font-semibold ${
                      event.color === 'accent' ? 'text-accent-foreground/80' : 'text-primary-foreground/80'
                    }`}>
                      {event.date.month[language]}
                    </div>
                  </div>

                  {/* Event Details */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-lg font-bold text-foreground">
                      {language === 'so' ? event.titleSo : event.titleEn}
                    </h3>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4 text-primary" />
                        {event.location}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 text-primary" />
                        {event.time}
                      </div>
                    </div>

                    <Link
                      to="/register"
                      className="w-full mt-4 py-3 bg-muted hover:bg-primary hover:text-primary-foreground rounded-xl font-medium text-sm transition-all duration-300 flex items-center justify-center gap-2 group-hover:bg-primary group-hover:text-primary-foreground"
                    >
                      {language === 'so' ? 'Isdiiwaangeli' : 'Register'}
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal as="h2" className="font-outfit text-3xl font-bold text-secondary mb-12 text-center" variant="up">
              {language === 'so' ? 'Dhacdooyii Hore' : 'Past Events'}
            </ScrollReveal>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ScrollReveal as="div" className="bg-white p-6 rounded-xl shadow-md" variant="up">
                <div className="flex items-center gap-3 mb-4">
                  <Star className="w-6 h-6 text-yellow-500" />
                  <h3 className="font-semibold text-lg">
                    {language === 'so' ? 'Shirka Ugu Horeeyay' : 'First Conference'}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  {language === 'so' ? '15 Diseembar 2025' : 'December 15, 2025'}
                </p>
                <p className="text-muted-foreground">
                  {language === 'so' 
                    ? 'Waxaa qayb ka ahaa 5,000+ oo qof oo ka kala socday gobolada kala duwan.'
                    : 'Over 5,000 attendees from different regions participated.'
                  }
                </p>
              </ScrollReveal>
              
              <ScrollReveal as="div" className="bg-white p-6 rounded-xl shadow-md" variant="up" delayMs={90}>
                <div className="flex items-center gap-3 mb-4">
                  <Star className="w-6 h-6 text-yellow-500" />
                  <h3 className="font-semibold text-lg">
                    {language === 'so' ? 'Hawlgaga Bulshada' : 'Community Outreach'}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  {language === 'so' ? '1 Diseembar 2025' : 'December 1, 2025'}
                </p>
                <p className="text-muted-foreground">
                  {language === 'so' 
                    ? 'Ku tiirsanaa 10 magaalo oo koodna waxaa ka faa\'iidayay 50,000+ oo qof.'
                    : 'Reached 50,000+ people across 10 cities.'
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
                {language === 'so' ? 'Qayb Ka Noqo Dhacdada Xorta' : 'Be Part of the Next Event'}
              </ScrollReveal>
              <ScrollReveal as="p" className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto" variant="up" delayMs={80}>
                {language === 'so' 
                  ? 'Waxaan kugu soo dhaweynayaa inaad noqoto mid ka mid ah xubnaha siyaasadda cusub ee Soomaaliya.'
                  : 'We welcome you to be part of the new political movement in Somalia.'
                }
              </ScrollReveal>
              <ScrollReveal as="div" variant="up" delayMs={140}>
                <Link 
                  to="/register"
                  className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary/90 transition-all duration-300 hover:-translate-y-1"
                >
                  {language === 'so' ? 'Isdiiwaangeli Hadda' : 'Register Now'}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </ScrollReveal>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
};

const Events = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Navbar />
        <EventsContent />
        <Footer />
        <SoomaalChat />
      </div>
    </LanguageProvider>
  );
};

export default Events;
