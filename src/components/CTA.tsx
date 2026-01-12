import { ArrowRight, Star, Sparkles } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

export function CTA() {
  const { t } = useLanguage();

  return (
    <section id="join" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Floating Elements */}
      <div className="absolute top-10 left-10 floating-star opacity-20">
        <Star className="w-16 h-16 text-primary-foreground" />
      </div>
      <div className="absolute bottom-10 right-10 floating-star-delayed opacity-20">
        <Star className="w-20 h-20 text-primary-foreground" />
      </div>
      <div className="absolute top-1/2 right-1/4 floating-star opacity-10">
        <Sparkles className="w-12 h-12 text-accent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-5 py-2.5 rounded-full mb-8">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse-glow" />
            <span className="text-primary-foreground/90 text-sm font-medium">
              {t('ctaSubtitle')}
            </span>
          </div>

          {/* Title */}
          <h2 className="font-outfit text-4xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground mb-8 leading-tight">
            {t('ctaTitle')}
          </h2>

          {/* CTA Button */}
          <a
            href="https://somaliyouthparty.com/join"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-card text-secondary font-bold px-10 py-5 rounded-2xl text-lg hover:bg-card/90 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl group"
          >
            {t('ctaButton')}
            <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
          </a>

          {/* Bottom Text */}
          <p className="mt-8 text-primary-foreground/60 text-sm">
            {t('footerTagline')} — SYP 2026
          </p>
        </div>
      </div>
    </section>
  );
}
