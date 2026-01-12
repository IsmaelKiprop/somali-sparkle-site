import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

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
];

export function Events() {
  const { language } = useLanguage();

  return (
    <section id="events" className="py-24 bg-muted/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
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
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {events.map((event, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2"
              style={{ boxShadow: 'var(--card-shadow)' }}
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

                <button className="w-full mt-4 py-3 bg-muted hover:bg-primary hover:text-primary-foreground rounded-xl font-medium text-sm transition-all duration-300 flex items-center justify-center gap-2 group-hover:bg-primary group-hover:text-primary-foreground">
                  {language === 'so' ? 'Isdiiwaangeli' : 'Register'}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
