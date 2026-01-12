import { Briefcase, Heart, GraduationCap, Wheat, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const agendaItems = [
  {
    icon: Briefcase,
    titleKey: 'agendaJobs',
    descKey: 'agendaJobsDesc',
    stat: '85%',
    gradient: 'from-blue-500 to-cyan-400',
  },
  {
    icon: Heart,
    titleKey: 'agendaHealth',
    descKey: 'agendaHealthDesc',
    stat: '100%',
    gradient: 'from-rose-500 to-pink-400',
  },
  {
    icon: GraduationCap,
    titleKey: 'agendaEducation',
    descKey: 'agendaEducationDesc',
    stat: '95%',
    gradient: 'from-violet-500 to-purple-400',
  },
  {
    icon: Wheat,
    titleKey: 'agendaAgriculture',
    descKey: 'agendaAgricultureDesc',
    stat: '+300%',
    gradient: 'from-emerald-500 to-green-400',
  },
];

export function Agenda() {
  const { t } = useLanguage();

  return (
    <section id="agenda" className="py-24 bg-secondary/5 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">
            {t('agendaTag')}
          </span>
          <h2 className="font-outfit text-4xl md:text-5xl font-bold text-secondary mb-4">
            {t('agendaTitle')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('agendaSubtitle')}
          </p>
        </div>

        {/* Agenda Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {agendaItems.map((item, index) => (
            <div
              key={item.titleKey}
              className="group relative bg-card rounded-2xl p-6 overflow-hidden transition-all duration-300 hover:-translate-y-2"
              style={{ 
                boxShadow: '0 4px 20px hsl(210 50% 15% / 0.08)',
              }}
            >
              {/* Background Gradient on Hover */}
              <div 
                className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} 
              />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6`}>
                  <item.icon className="w-7 h-7 text-white" />
                </div>

                {/* Stat */}
                <div className="text-3xl font-bold text-foreground mb-2">
                  {item.stat}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {t(item.titleKey)}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4">
                  {t(item.descKey)}
                </p>

                {/* Arrow */}
                <div className="flex items-center gap-1 text-primary font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>{t('heroCta2')}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
