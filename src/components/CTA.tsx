import { ArrowRight, Star, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Parallax } from '@/components/Parallax';
import { ScrollProgress } from '@/components/ScrollProgress';

export function CTA() {
  const { t } = useLanguage();

  return (
    <section id="join" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Floating Elements */}
      <Parallax className="absolute top-10 left-10 floating-star opacity-20" strengthPx={14}>
        <Star className="w-16 h-16 text-primary-foreground" />
      </Parallax>
      <Parallax className="absolute bottom-10 right-10 floating-star-delayed opacity-20" strengthPx={18}>
        <Star className="w-20 h-20 text-primary-foreground" />
      </Parallax>
      <Parallax className="absolute top-1/2 right-1/4 floating-star opacity-10" strengthPx={10}>
        <Sparkles className="w-12 h-12 text-accent" />
      </Parallax>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollProgress as="div" className="sp-stage">
            {/* Badge */}
            <ScrollReveal as="div" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-5 py-2.5 rounded-full mb-8" variant="up">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse-glow" />
              <span className="text-primary-foreground/90 text-sm font-medium">
                {t('ctaSubtitle')}
              </span>
            </ScrollReveal>

            {/* Title */}
            <ScrollReveal as="h2" className="font-outfit text-4xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground mb-8 leading-tight" variant="up" delayMs={80}>
              {t('ctaTitle')}
            </ScrollReveal>
          </ScrollProgress>

          {/* CTA Button */}
          <ScrollReveal as="div" variant="up" delayMs={140}>
            <Link
              to="/register"
              className="btn-premium micro-press px-10 py-5 text-lg group"
            >
              {t('ctaButton')}
              <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
            </Link>
          </ScrollReveal>

          {/* Bottom Text */}
          <ScrollReveal as="p" className="mt-8 text-primary-foreground/60 text-sm" variant="fade" delayMs={200}>
            {t('footerTagline')} — SYP 2026
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
