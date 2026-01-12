import { Star, ArrowRight, Eye } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { useEffect, useState, useRef } from 'react';

function AnimatedCounter({ end, suffix = '', duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-50" />
      
      {/* Floating Stars */}
      <div className="absolute top-32 right-[15%] floating-star opacity-20">
        <Star className="w-32 h-32 text-primary" />
      </div>
      <div className="absolute bottom-32 left-[10%] floating-star-delayed opacity-10">
        <Star className="w-24 h-24 text-secondary" />
      </div>
      <div className="absolute top-1/2 right-[8%] floating-star opacity-15">
        <div className="w-4 h-4 rounded-full bg-accent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur px-4 py-2 rounded-full animate-fade-up">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse-glow" />
              <span className="text-sm font-medium text-muted-foreground">{t('heroTag')}</span>
            </div>

            {/* Headlines */}
            <div className="space-y-2 animate-fade-up animation-delay-200">
              <h1 className="font-outfit text-5xl md:text-6xl lg:text-7xl font-extrabold text-secondary leading-tight">
                {t('heroTitle1')}
              </h1>
              <h1 className="font-outfit text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary leading-tight">
                {t('heroTitle2')}
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl animate-fade-up animation-delay-400">
              {t('heroSubtitle')}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-up animation-delay-600">
              <a href="#join" className="btn-primary-hero inline-flex items-center gap-2 group">
                {t('heroCta1')}
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#agenda" className="inline-flex items-center gap-2 border-2 border-muted-foreground/30 text-foreground font-semibold px-8 py-4 rounded-xl hover:bg-muted transition-all duration-300">
                <Eye className="w-5 h-5" />
                {t('heroCta2')}
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border animate-fade-up animation-delay-600">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-secondary">
                  <AnimatedCounter end={10} suffix="K+" />
                </div>
                <p className="text-sm text-muted-foreground mt-1">{t('statMembers')}</p>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-secondary">
                  <AnimatedCounter end={26} />
                </div>
                <p className="text-sm text-muted-foreground mt-1">{t('statRegions')}</p>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-secondary">
                  <AnimatedCounter end={100} suffix="%" />
                </div>
                <p className="text-sm text-muted-foreground mt-1">{t('statTransparency')}</p>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image Card */}
          <div className="relative flex justify-center lg:justify-end animate-scale-in animation-delay-400">
            <div className="relative w-full max-w-md">
              {/* Glassmorphism Card */}
              <div className="glass-card rounded-3xl p-6 space-y-4">
                {/* Image Container */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/30">
                  <img
                    src="https://somaliyouthparty.com/wp-content/uploads/2025/12/cropped-20251120_134403.png"
                    alt="Nasa Ige - Presidential Candidate"
                    className="w-full h-full object-cover object-top"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent" />
                  
                  {/* Text Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                    <p className="text-primary/80 font-semibold text-sm uppercase tracking-wider">
                      {t('candidateTag')}
                    </p>
                    <h3 className="text-3xl font-bold mt-1">Nasa Ige</h3>
                  </div>
                </div>

                {/* Bottom Info */}
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-accent fill-accent" />
                    <span className="font-medium text-foreground/80">SYP 2026</span>
                  </div>
                  <span className="text-muted-foreground">
                    {t('navCandidate')}
                  </span>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
