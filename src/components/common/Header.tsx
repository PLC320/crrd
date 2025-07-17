import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  const navigationItems = [
    { key: 'home', href: '/', label: t('nav.home') },
    { key: 'about', href: '/about-us', label: t('nav.about') },
    { key: 'news', href: '/news', label: t('nav.news') },
    { key: 'projects', href: '/projects', label: t('nav.projects') },
    { key: 'contact', href: '/contact', label: t('nav.contact') },
  ];

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <header className="bg-background border-b border-border shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-roboto-slab font-bold text-xl text-primary">CRRD</span>
              <div className="text-xs text-muted-foreground">Rural Research & Development</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.key}
                to={item.href}
                className={`font-lato transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-primary font-semibold border-b-2 border-primary'
                    : 'text-foreground hover:text-primary'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Language Switcher */}
          <div className="flex items-center space-x-2">
            <Globe className="w-4 h-4 text-muted-foreground" />
            <div className="flex border border-border rounded-md overflow-hidden">
              <button
                onClick={() => setLanguage('vi')}
                className={`px-3 py-1 text-sm font-medium transition-colors ${
                  language === 'vi'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-background text-foreground hover:bg-muted'
                }`}
              >
                VI
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 text-sm font-medium transition-colors ${
                  language === 'en'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-background text-foreground hover:bg-muted'
                }`}
              >
                EN
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="sm"
            className="md:hidden"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <nav className="md:hidden py-4 border-t border-border mt-4">
          <div className="flex flex-col space-y-2">
            {navigationItems.map((item) => (
              <Link
                key={item.key}
                to={item.href}
                className={`font-lato py-2 px-4 rounded-md transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-primary bg-primary/10 font-semibold'
                    : 'text-foreground hover:text-primary hover:bg-muted'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;