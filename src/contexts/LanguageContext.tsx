import React, { createContext, useContext, useState } from 'react';

export type Language = 'vi' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  vi: {
    // Navigation
    'nav.home': 'Trang chủ',
    'nav.about': 'Giới thiệu',
    'nav.news': 'Tin tức & Sự kiện',
    'nav.projects': 'Dự án',
    'nav.contact': 'Liên hệ',
    
    // Home page
    'home.hero.title': 'Trung tâm Nghiên cứu và Phát triển Nông thôn (CRRD)',
    'home.hero.tagline': 'Tiên phong trong các giải pháp bền vững cho cộng đồng nông thôn',
    'home.intro.title': 'Chào mừng đến với CRRD',
    'home.intro.text': 'Trung tâm Nghiên cứu và Phát triển Nông thôn là tổ chức tiên phong trong việc nghiên cứu và phát triển các giải pháp bền vững cho khu vực nông thôn tỉnh Quảng Bình.',
    'home.news.title': 'Tin tức mới nhất',
    'home.projects.title': 'Dự án nổi bật',
    
    // About page
    'about.title': 'Giới thiệu về CRRD',
    'about.mission.title': 'Sứ mệnh của chúng tôi',
    'about.history.title': 'Lịch sử hình thành',
    'about.team.title': 'Đội ngũ của chúng tôi',
    
    // Contact
    'contact.title': 'Liên hệ với chúng tôi',
    'contact.address': 'Địa chỉ',
    'contact.phone': 'Điện thoại',
    'contact.email': 'Email',
    
    // Common
    'common.readMore': 'Đọc thêm',
    'common.viewAll': 'Xem tất cả',
    'common.contact': 'Liên hệ',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.news': 'News & Events',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    
    // Home page
    'home.hero.title': 'Centre for Rural Research and Development (CRRD)',
    'home.hero.tagline': 'Pioneering sustainable solutions for rural communities',
    'home.intro.title': 'Welcome to CRRD',
    'home.intro.text': 'The Centre for Rural Research and Development is a pioneering organization in researching and developing sustainable solutions for rural areas in Quảng Bình province.',
    'home.news.title': 'Latest News',
    'home.projects.title': 'Featured Projects',
    
    // About page
    'about.title': 'About CRRD',
    'about.mission.title': 'Our Mission',
    'about.history.title': 'Our History',
    'about.team.title': 'Our Team',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.address': 'Address',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    
    // Common
    'common.readMore': 'Read More',
    'common.viewAll': 'View All',
    'common.contact': 'Contact',
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('vi');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['vi']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};