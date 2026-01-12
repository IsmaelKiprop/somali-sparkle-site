import { useState } from 'react';
import { Menu, X, Star } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { key: 'navCandidate', href: '#candidate' },
    { key: 'navAbout', href: '#about' },
    { key: 'navAgenda', href: '#agenda' },
    { key: 'navEvents', href: '#events' },
    { key: 'navLeadership', href: '#leadership' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <Star className="w-6 h-6 text-primary-foreground fill-current" />
            </div>
            <div className="hidden sm:block">
              <span className="font-outfit font-bold text-xl text-secondary">SYP</span>
              <p className="text-[10px] text-muted-foreground font-medium tracking-wide uppercase">
                {language === 'so' ? 'Xisbiga Dhallinyarada' : 'Youth Party'}
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200"
              >
                {t(item.key)}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Language Toggle */}
            <div className="flex items-center bg-muted rounded-full p-1">
              <button
                onClick={() => setLanguage('so')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                  language === 'so'
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                SO
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                  language === 'en'
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                EN
              </button>
            </div>

            {/* Join Button */}
            <a
              href="#join"
              className="hidden sm:flex items-center gap-2 bg-secondary text-secondary-foreground px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-secondary/90 transition-all duration-200 hover:-translate-y-0.5"
            >
              {t('navJoin')}
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-up">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-muted rounded-lg transition-colors"
                >
                  {t(item.key)}
                </a>
              ))}
              <a
                href="#join"
                onClick={() => setIsOpen(false)}
                className="mx-4 mt-2 flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-5 py-3 rounded-xl font-semibold text-sm"
              >
                {t('navJoin')}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
