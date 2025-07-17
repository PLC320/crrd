import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Organization Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <div>
                <h3 className="font-roboto-slab font-bold text-lg">CRRD</h3>
                <p className="text-sm opacity-90">Rural Research & Development</p>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              Trung tâm Nghiên cứu và Phát triển Nông thôn - Tiên phong trong các giải pháp bền vững cho cộng đồng nông thôn.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-roboto-slab font-bold text-lg mb-4">{t('contact.title')}</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-0.5 opacity-80" />
                <div className="text-sm">
                  <p>Số 2, Lâm Úy, Đồng Hải</p>
                  <p>Quảng Bình, Việt Nam</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 opacity-80" />
                <span className="text-sm">0912414863</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 opacity-80" />
                <span className="text-sm">crrdqb@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Social Media & Links */}
          <div>
            <h4 className="font-roboto-slab font-bold text-lg mb-4">Kết nối với chúng tôi</h4>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            
            {/* Quick Links */}
            <div className="text-sm space-y-2">
              <p className="font-semibold">Liên kết nhanh:</p>
              <ul className="space-y-1 opacity-90">
                <li><a href="/about-us" className="hover:underline">Giới thiệu</a></li>
                <li><a href="/projects" className="hover:underline">Dự án</a></li>
                <li><a href="/news" className="hover:underline">Tin tức</a></li>
                <li><a href="/contact" className="hover:underline">Liên hệ</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-80">
            © 2024 Centre for Rural Research and Development (CRRD). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;