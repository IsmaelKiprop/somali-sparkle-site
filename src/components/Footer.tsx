import { Star, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, PhoneCall } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

export function Footer() {
  const { language, t } = useLanguage();

  const socialLinks = [
    { icon: Facebook, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Instagram, href: '#' },
    { icon: Youtube, href: '#' },
    { icon: PhoneCall, href: '#' },
  ];

  const quickLinks = [
    { labelSo: 'Musharraxa', labelEn: 'Candidate', href: '#candidate' },
    { labelSo: 'Naguka Saabsan', labelEn: 'About Us', href: '#about' },
    { labelSo: 'Hiigsiga', labelEn: 'Agenda', href: '#agenda' },
    { labelSo: 'Hoggaanka', labelEn: 'Leadership', href: '#leadership' },
    { labelSo: 'Ku Biir', labelEn: 'Join Us', href: '#join' },
  ];

  return (
    <footer className="relative bg-secondary text-secondary-foreground overflow-hidden">
      {/* Somali Flag Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
        style={{ backgroundImage: 'url(/somalia-flag-hero.png)' }}
      />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                <Star className="w-7 h-7 text-primary-foreground fill-current" />
              </div>
              <div>
                <h3 className="font-outfit font-bold text-xl">SYP</h3>
                <p className="text-xs text-secondary-foreground/60">
                  {language === 'so' ? 'Xisbiga Dhallinyarada' : 'Youth Party'}
                </p>
              </div>
            </div>
            <p className="text-secondary-foreground/70 text-sm leading-relaxed">
              {language === 'so' 
                ? 'Horseedka siyaasadda jiilka cusub ee Soomaaliya.'
                : 'Pioneers of new generation politics in Somalia.'}
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors duration-200"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">
              {language === 'so' ? 'Bogagga' : 'Quick Links'}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-secondary-foreground/70 hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {language === 'so' ? link.labelSo : link.labelEn}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-6">
              {language === 'so' ? 'Nala Soo Xiriir' : 'Contact Us'}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm text-secondary-foreground/70">
                <Mail className="w-5 h-5 text-primary" />
                info@somaliyouthparty.com
              </li>
              <li className="flex items-center gap-3 text-sm text-secondary-foreground/70">
                <Phone className="w-5 h-5 text-primary" />
                +252 61 444 555
              </li>
              <li className="flex items-start gap-3 text-sm text-secondary-foreground/70">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                Mogadishu, Somalia
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-lg mb-6">
              {language === 'so' ? 'Ku Biir Liiska' : 'Newsletter'}
            </h4>
            <p className="text-secondary-foreground/70 text-sm mb-4">
              {language === 'so' 
                ? 'Hel wararkii ugu dambeeyay.'
                : 'Get the latest updates.'}
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder={language === 'so' ? 'Email-kaaga' : 'Your email'}
                className="flex-1 px-4 py-3 rounded-xl bg-secondary-foreground/10 border border-secondary-foreground/20 text-sm placeholder:text-secondary-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="px-5 py-3 bg-primary text-primary-foreground rounded-xl font-semibold text-sm hover:bg-primary/90 transition-colors"
              >
                {language === 'so' ? 'Dir' : 'Send'}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-secondary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-secondary-foreground/50 text-sm">
            © 2026 {t('footerTagline')}. {t('footerRights')}.
          </p>
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-accent fill-accent" />
            <span className="text-sm text-secondary-foreground/70">SYP 2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
