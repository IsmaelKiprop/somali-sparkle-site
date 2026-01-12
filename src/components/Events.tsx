import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Parallax } from '@/components/Parallax';
import { ScrollProgress } from '@/components/ScrollProgress';

const events = [
  {
    date: { day: '25', month: { so: 'JAN', en: 'JAN' } },
    titleSo: 'Isu-soobaxa Weyn ee Muqdisho',
    titleEn: 'Grand Rally in Mogadishu',
    location: 'Konis Stadium',
    time: '15:00',
    color: 'primary',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&h=250&fit=crop&auto=format', // Political rally crowd
  },
  {
    date: { day: '30', month: { so: 'JAN', en: 'JAN' } },
    titleSo: 'Kulanka Dhallinyarada Kismaayo',
    titleEn: 'Youth Convention in Kismayo',
    location: 'Jubba Hotel',
    time: '09:00',
    color: 'accent',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=250&fit=crop&auto=format', // Youth conference
  },
  {
    date: { day: '05', month: { so: 'FEB', en: 'FEB' } },
    titleSo: 'Kulan Wadahadal Caafimaad',
    titleEn: 'Healthcare Policy Forum',
    location: 'Online Event',
    time: '14:00',
    color: 'secondary',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=250&fit=crop&auto=format', // Healthcare forum
  },
];

export function Events() {
  const { language } = useLanguage();

  return (
    <section id="events" className="py-24 relative overflow-hidden" style={{
      backgroundImage: 'url(/favicon.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-muted/80" />
      
      {/* Background decoration */}
      <Parallax
        className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        strengthPx={22}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <ScrollProgress as="div" className="sp-stage">
          <ScrollReveal as="div" className="text-center max-w-2xl mx-auto mb-16" variant="up">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              {language === 'so' ? 'Dhaqdhaqaaqa' : 'Campaign Events'}
            </span>
            <h2 className="font-outfit text-4xl md:text-5xl font-bold text-secondary mb-4">
              {language === 'so' ? 'Ololaha Doorashada' : 'Election Campaign'}
            </h2>
            <p className="text-lg text-muted-foreground">
              {language === 'so' 
                ? 'Ku biir shirarkayaga iyo kulamayaga'
                : 'Join our rallies and meetings'}
            </p>
          </ScrollReveal>
        </ScrollProgress>

        {/* Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {events.map((event, index) => (
            <ScrollProgress key={index} as="div" className="sp-card" start={0.12} end={0.7}>
              <ScrollReveal
                as="div"
                className="group bg-card rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2"
                variant="fade"
                delayMs={index * 90}
                style={{ boxShadow: 'var(--card-shadow)' }}
              >
                {/* Event Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={language === 'so' ? event.titleSo : event.titleEn}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

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
            </ScrollProgress>
          ))}
        </div>
      </div>
    </section>
  );
}
