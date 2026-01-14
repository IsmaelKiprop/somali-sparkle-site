import { useLanguage } from '@/hooks/useLanguage';
import { Star, Quote } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Parallax } from '@/components/Parallax';
import { ScrollProgress } from '@/components/ScrollProgress';

export function Leadership() {
  const { t } = useLanguage();

  return (
    <section id="leadership" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <Parallax
        className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        strengthPx={22}
      />
      <Parallax
        className="absolute bottom-20 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl"
        strengthPx={16}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <ScrollProgress as="div" className="sp-stage">
          <ScrollReveal as="div" className="text-center max-w-2xl mx-auto mb-16" variant="up">
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
              {t('leadershipTag')}
            </span>
            <h2 className="font-outfit text-4xl md:text-5xl font-bold text-secondary mb-4">
              {t('leadershipTitle')}
            </h2>
          </ScrollReveal>
        </ScrollProgress>

        {/* Main Leader Card */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Image */}
            <ScrollReveal as="div" className="relative" variant="right">
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/favicon.png"
                  alt="Nasa Ige"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent" />
                
                {/* Name Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-5 h-5 text-accent fill-accent" />
                    <span className="text-primary-foreground/80 text-sm font-medium">
                      {t('candidateTag')}
                    </span>
                  </div>
                  <h3 className="text-4xl font-bold text-primary-foreground">
                    {t('candidateName')}
                  </h3>
                </div>
              </div>

              {/* Decorative Star */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent rounded-2xl flex items-center justify-center shadow-lg">
                <Star className="w-8 h-8 text-accent-foreground fill-current" />
              </div>
            </ScrollReveal>

            {/* Content */}
            <ScrollReveal as="div" className="space-y-6" variant="left" delayMs={80}>
              {/* Quote */}
              <div className="relative">
                <Quote className="w-12 h-12 text-primary/20 absolute -top-4 -left-2" />
                <blockquote className="text-2xl md:text-3xl font-outfit font-semibold text-secondary leading-relaxed pl-8">
                  {t('candidateQuote')}
                </blockquote>
              </div>

              <p className="text-lg text-muted-foreground pl-8">
                {t('candidateBio')}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 pl-8 pt-4">
                <div className="bg-card rounded-xl p-4 card-elevated">
                  <div className="text-2xl font-bold text-primary">20+</div>
                  <p className="text-sm text-muted-foreground">
                    {t('language') === 'so' ? 'Sannadood Waayo-aragnimo' : 'Years Experience'}
                  </p>
                </div>
                <div className="bg-card rounded-xl p-4 card-elevated">
                  <div className="text-2xl font-bold text-primary">SYP</div>
                  <p className="text-sm text-muted-foreground">
                    {t('language') === 'so' ? 'Guddoomiye' : 'Chairman'}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
