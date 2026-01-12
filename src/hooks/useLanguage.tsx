import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'so' | 'en';

interface Translations {
  [key: string]: {
    so: string;
    en: string;
  };
}

export const translations: Translations = {
  // Navigation
  navCandidate: { so: 'Musharraxa', en: 'Candidate' },
  navAbout: { so: 'Naguka Saabsan', en: 'About Us' },
  navAgenda: { so: 'Hiigsiga', en: 'Agenda' },
  navEvents: { so: 'Dhacdooyinka', en: 'Events' },
  navLeadership: { so: 'Hoggaanka', en: 'Leadership' },
  navJoin: { so: 'Ku Biir', en: 'Join Us' },
  
  // Hero
  heroTag: { so: 'Tubta Guusha', en: 'Path to Victory' },
  heroTitle1: { so: 'Hal Qaran.', en: 'One Nation.' },
  heroTitle2: { so: 'Hal Mustaqbal.', en: 'One Future.' },
  heroSubtitle: { 
    so: 'Waxaan nahay xisbiga ficilka. Waxaan nahay xisbiga dhallinyarada.',
    en: 'We are the party of action. We are the party of youth.'
  },
  heroCta1: { so: 'Ku Biir Xisbiga', en: 'Join the Party' },
  heroCta2: { so: 'Eeg Xogta', en: 'View Agenda' },
  
  // Stats
  statMembers: { so: 'Xubnaha Firfircoon', en: 'Active Members' },
  statRegions: { so: 'Gobolada', en: 'Regions' },
  statTransparency: { so: 'Daah-furnaan', en: 'Transparency' },
  
  // Candidate
  candidateTag: { so: 'Musharraxa Madaxweynaha', en: 'Presidential Candidate' },
  candidateName: { so: 'Nasa Ige', en: 'Nasa Ige' },
  candidateQuote: {
    so: 'Hoggaamintu maaha doorashada soo socota oo kaliya, ee waa danta jiilka soo socda.',
    en: 'Leadership is not just about the next election, but about the next generation.'
  },
  candidateBio: {
    so: 'Hoggaamiye leh aragti fog iyo waayo-aragnimo 20 sano ka badan.',
    en: 'A leader with far-reaching vision and over 20 years of experience.'
  },
  
  // About
  aboutTag: { so: 'Naguka Saabsan', en: 'About Us' },
  aboutTitle: { so: 'Xisbiga Dhallinyarada Soomaaliyeed', en: 'Somali Youth Party' },
  aboutSubtitle: { 
    so: 'Horseedka siyaasadda jiilka cusub',
    en: 'Pioneers of the new generation politics'
  },
  
  // Pillars
  pillar1Title: { so: 'Hoggaaminta Qaranka', en: 'National Leadership' },
  pillar1Desc: { so: 'Soomaaliya ku hoggaamino midnimo', en: 'Leading Somalia with unity' },
  pillar2Title: { so: 'Codka Dhallinyarada', en: 'Voice of Youth' },
  pillar2Desc: { so: 'Metela hammiga dhallinyarada', en: 'Representing youth aspirations' },
  pillar3Title: { so: 'Midnimada Ummadda', en: 'National Unity' },
  pillar3Desc: { so: 'Qaranimada iyo isku-duubnaanta', en: 'Nationhood and togetherness' },
  
  // Agenda
  agendaTag: { so: 'Tiirarka Asaasiga', en: 'Core Pillars' },
  agendaTitle: { so: 'Hiigsi Dhab ah', en: 'Real Vision' },
  agendaSubtitle: { so: 'Ma ballanqaadno oo kaliya. Waan xisaabinnaa.', en: 'We don\'t just promise. We deliver.' },
  
  agendaJobs: { so: 'Shaqo Abuurka', en: 'Job Creation' },
  agendaJobsDesc: { so: 'Xarumaha farsamada iyo aagag canshuur dhaaf ah', en: 'Technical centers and tax-free zones' },
  agendaHealth: { so: 'Caafimaadka', en: 'Healthcare' },
  agendaHealthDesc: { so: 'Caafimaad lacag la\'aan ah carruurta', en: 'Free healthcare for children' },
  agendaEducation: { so: 'Waxbarashada', en: 'Education' },
  agendaEducationDesc: { so: 'Manaahijta casriga ah iyo IT-ga', en: 'Modern curriculum and IT' },
  agendaAgriculture: { so: 'Beeraha', en: 'Agriculture' },
  agendaAgricultureDesc: { so: 'Nidaam waraab casri ah', en: 'Modern irrigation systems' },
  
  // Leadership
  leadershipTag: { so: 'Hoggaanka Xisbiga', en: 'Party Leadership' },
  leadershipTitle: { so: 'La Kulanka Hoggaamiyaha', en: 'Meet the Leadership' },
  
  // CTA
  ctaTitle: { so: 'Mustaqbalka Waa Halkan', en: 'The Future is Here' },
  ctaSubtitle: { so: 'Qayb Ka Noqo Isbedelka', en: 'Be Part of the Change' },
  ctaButton: { so: 'Isdiiwaangeli Hadda', en: 'Register Now' },
  
  // Footer
  footerRights: { so: 'Xuquuqda oo dhan way Keydsan yihiin', en: 'All Rights Reserved' },
  footerTagline: { so: 'Xisbiga Dhallinyarada Soomaaliyeed', en: 'Somali Youth Party' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('so');

  const t = (key: string): string => {
    const translation = translations[key];
    if (!translation) return key;
    return translation[language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
