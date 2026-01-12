import { Star, ArrowRight, Eye } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { useEffect, useState, useRef } from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Parallax } from '@/components/Parallax';

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
  const tiltRef = useRef<HTMLDivElement | null>(null);
  const [tiltEnabled, setTiltEnabled] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false;
    const hasFinePointer = window.matchMedia?.('(hover: hover) and (pointer: fine)')?.matches ?? false;
    setTiltEnabled(!prefersReducedMotion && hasFinePointer);
  }, []);

  const handleTiltMove = (e: React.PointerEvent) => {
    if (!tiltEnabled) return;
    const el = tiltRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    const maxDeg = 8;
    const ry = (px - 0.5) * (maxDeg * 2);
    const rx = (0.5 - py) * (maxDeg * 2);

    el.style.setProperty('--rx', `${rx.toFixed(2)}deg`);
    el.style.setProperty('--ry', `${ry.toFixed(2)}deg`);
  };

  const handleTiltLeave = () => {
    const el = tiltRef.current;
    if (!el) return;
    el.style.setProperty('--rx', '0deg');
    el.style.setProperty('--ry', '0deg');
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-stage" />
      <div className="absolute inset-0 hero-stage-pattern opacity-30" />
      <div className="absolute inset-0 hero-stage-vignette" />
      
      {/* Floating Stars */}
      <Parallax className="absolute top-32 right-[15%] floating-star opacity-20" strengthPx={14}>
        <Star className="w-32 h-32 text-primary" />
      </Parallax>
      <Parallax className="absolute bottom-32 left-[10%] floating-star-delayed opacity-10" strengthPx={20}>
        <Star className="w-24 h-24 text-secondary" />
      </Parallax>
      <Parallax className="absolute top-1/2 right-[8%] floating-star opacity-15" strengthPx={10}>
        <div className="w-4 h-4 rounded-full bg-accent" />
      </Parallax>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Tag */}
            <ScrollReveal as="div" className="inline-flex items-center gap-2 bg-card/80 backdrop-blur px-4 py-2 rounded-full" variant="up">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse-glow" />
              <span className="text-sm font-medium text-muted-foreground">{t('heroTag')}</span>
            </ScrollReveal>

            {/* Headlines */}
            <ScrollReveal as="div" className="space-y-2" variant="up" delayMs={80}>
              <h1 className="font-outfit text-5xl md:text-6xl lg:text-7xl font-extrabold text-secondary leading-tight">
                {t('heroTitle1')}
              </h1>
              <h1 className="font-outfit text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary leading-tight">
                {t('heroTitle2')}
              </h1>
            </ScrollReveal>

            {/* Subtitle */}
            <ScrollReveal as="p" className="text-lg md:text-xl text-muted-foreground max-w-xl" variant="up" delayMs={140}>
              {t('heroSubtitle')}
            </ScrollReveal>

            {/* CTAs */}
            <ScrollReveal as="div" className="flex flex-wrap gap-4" variant="up" delayMs={200}>
              <a href="#join" className="btn-primary-hero inline-flex items-center gap-2 group">
                {t('heroCta1')}
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#agenda" className="inline-flex items-center gap-2 border-2 border-muted-foreground/30 text-foreground font-semibold px-8 py-4 rounded-xl hover:bg-muted transition-all duration-300">
                <Eye className="w-5 h-5" />
                {t('heroCta2')}
              </a>
            </ScrollReveal>

            {/* Stats */}
            <ScrollReveal as="div" className="grid grid-cols-3 gap-6 pt-8 border-t border-border" variant="up" delayMs={260}>
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
            </ScrollReveal>
          </div>

          {/* Right Content - Hero Image Card */}
          <ScrollReveal as="div" className="relative flex justify-center lg:justify-end" variant="scale" delayMs={120}>
            <div
              ref={tiltRef}
              className="relative w-full max-w-md hero-tilt hero-avoid-select"
              onPointerMove={handleTiltMove}
              onPointerLeave={handleTiltLeave}
            >
              {/* Glassmorphism Card */}
              <div className="glass-card hero-tilt-card rounded-3xl p-6 space-y-4">
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
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
