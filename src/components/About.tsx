import { Flag, Users, Target, Shield } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import somaliaFlag from '@/assets/somalia-flag-hero.png';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Parallax } from '@/components/Parallax';
import { ScrollProgress } from '@/components/ScrollProgress';

const pillars = [
  {
    icon: Flag,
    titleKey: 'pillar1Title',
    descKey: 'pillar1Desc',
    color: 'primary',
  },
  {
    icon: Users,
    titleKey: 'pillar2Title',
    descKey: 'pillar2Desc',
    color: 'accent',
  },
  {
    icon: Shield,
    titleKey: 'pillar3Title',
    descKey: 'pillar3Desc',
    color: 'secondary',
  },
];

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <Parallax
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl"
        strengthPx={28}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image Side */}
          <ScrollReveal as="div" className="relative order-2 lg:order-1" variant="right">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={somaliaFlag} 
                alt="Somalia Flag" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-6 py-3 rounded-xl shadow-lg font-bold">
              SYP 2026
            </div>
          </ScrollReveal>
          
          {/* Content Side */}
          <ScrollProgress as="div" className="sp-stage">
            <ScrollReveal as="div" className="order-1 lg:order-2 space-y-6" variant="left" delayMs={80}>
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              {t('aboutTag')}
            </span>
            <h2 className="font-outfit text-4xl md:text-5xl font-bold text-secondary">
              {t('aboutTitle')}
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t('aboutSubtitle')}
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="bg-card rounded-xl px-6 py-4 shadow-sm">
                <div className="text-3xl font-bold text-primary">20+</div>
                <p className="text-sm text-muted-foreground">Years Vision</p>
              </div>
              <div className="bg-card rounded-xl px-6 py-4 shadow-sm">
                <div className="text-3xl font-bold text-accent">26</div>
                <p className="text-sm text-muted-foreground">Regions</p>
              </div>
              <div className="bg-card rounded-xl px-6 py-4 shadow-sm">
                <div className="text-3xl font-bold text-secondary">1</div>
                <p className="text-sm text-muted-foreground">United Nation</p>
              </div>
            </div>
            </ScrollReveal>
          </ScrollProgress>
        </div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <ScrollProgress key={pillar.titleKey} as="div" className="sp-card">
              <ScrollReveal as="div" className="card-elevated p-8 group" variant="fade" delayMs={index * 90}>
                <div 
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${
                    pillar.color === 'primary' ? 'bg-primary/10' :
                    pillar.color === 'accent' ? 'bg-accent/10' : 'bg-secondary/10'
                  }`}
                >
                  <pillar.icon 
                    className={`w-8 h-8 ${
                      pillar.color === 'primary' ? 'text-primary' :
                      pillar.color === 'accent' ? 'text-accent' : 'text-secondary'
                    }`} 
                  />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {t(pillar.titleKey)}
                </h3>
                <p className="text-muted-foreground">
                  {t(pillar.descKey)}
                </p>
              </ScrollReveal>
            </ScrollProgress>
          ))}
        </div>
      </div>
    </section>
  );
}
