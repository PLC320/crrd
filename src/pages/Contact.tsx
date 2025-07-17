import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { MapPin, Phone, Mail, Clock, Send, Facebook, Twitter, Linkedin } from 'lucide-react';

const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Gửi thành công!",
        description: "Chúng tôi đã nhận được tin nhắn của bạn và sẽ phản hồi trong thời gian sớm nhất.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Có lỗi xảy ra",
        description: "Vui lòng thử lại sau hoặc liên hệ trực tiếp qua email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Địa chỉ',
      content: ['Số 2, Lâm Úy, Đồng Hải', 'Quảng Bình, Việt Nam'],
      link: 'https://maps.google.com/?q=Số+2+Lâm+Úy+Đồng+Hải+Quảng+Bình'
    },
    {
      icon: Phone,
      title: 'Điện thoại',
      content: ['0912414863'],
      link: 'tel:0912414863'
    },
    {
      icon: Mail,
      title: 'Email',
      content: ['crrdqb@gmail.com'],
      link: 'mailto:crrdqb@gmail.com'
    },
    {
      icon: Clock,
      title: 'Giờ làm việc',
      content: ['Thứ 2 - Thứ 6: 8:00 - 17:00', 'Thứ 7: 8:00 - 12:00']
    }
  ];

  const departments = [
    {
      name: 'Ban Nghiên cứu và Phát triển',
      email: 'research@crrdqb.gmail.com',
      phone: '0912414864'
    },
    {
      name: 'Ban Tư vấn và Dịch vụ',
      email: 'service@crrdqb.gmail.com',
      phone: '0912414865'
    },
    {
      name: 'Ban Hợp tác và Đối ngoại',
      email: 'cooperation@crrdqb.gmail.com',
      phone: '0912414866'
    },
    {
      name: 'Ban Đào tạo và Truyền thông',
      email: 'training@crrdqb.gmail.com',
      phone: '0912414867'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="bg-gradient-hero text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-roboto-slab font-bold text-4xl md:text-5xl mb-6">
            {t('contact.title')}
          </h1>
          <p className="font-lato text-xl max-w-3xl mx-auto opacity-90">
            Liên hệ với chúng tôi để được tư vấn và hỗ trợ về các dự án phát triển nông thôn
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center shadow-card hover:shadow-professional transition-shadow duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="font-roboto-slab text-primary">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1">
                    {info.content.map((line, lineIndex) => (
                      <p key={lineIndex} className="text-muted-foreground">
                        {info.link && lineIndex === 0 ? (
                          <a href={info.link} className="hover:text-primary transition-colors">
                            {line}
                          </a>
                        ) : (
                          line
                        )}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="font-roboto-slab font-bold text-2xl text-primary mb-6">
                Gửi tin nhắn cho chúng tôi
              </h2>
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Họ và tên *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Nhập họ và tên của bạn"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Nhập địa chỉ email"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Chủ đề *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Nhập chủ đề tin nhắn"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Nội dung *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Nhập nội dung tin nhắn chi tiết..."
                        rows={6}
                        required
                      />
                    </div>
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full"
                      size="lg"
                    >
                      {isSubmitting ? (
                        'Đang gửi...'
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Gửi tin nhắn
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              {/* Embedded Map */}
              <div>
                <h2 className="font-roboto-slab font-bold text-2xl text-primary mb-6">
                  Vị trí của chúng tôi
                </h2>
                <Card className="shadow-card overflow-hidden">
                  <div className="aspect-video bg-muted">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3847.123456789!2d106.123456!3d17.456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI3JzI0LjQiTiAxMDbCsDA3JzI0LjQiRQ!5e0!3m2!1svi!2s!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="CRRD Location"
                    ></iframe>
                  </div>
                </Card>
              </div>

              {/* Department Contacts */}
              <div>
                <h3 className="font-roboto-slab font-bold text-xl text-primary mb-4">
                  Liên hệ theo từng bộ phận
                </h3>
                <div className="space-y-4">
                  {departments.map((dept, index) => (
                    <Card key={index} className="shadow-sm">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-primary mb-2">{dept.name}</h4>
                        <div className="space-y-1 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Mail className="w-4 h-4 mr-2" />
                            <a href={`mailto:${dept.email}`} className="hover:text-primary transition-colors">
                              {dept.email}
                            </a>
                          </div>
                          <div className="flex items-center">
                            <Phone className="w-4 h-4 mr-2" />
                            <a href={`tel:${dept.phone}`} className="hover:text-primary transition-colors">
                              {dept.phone}
                            </a>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="font-roboto-slab font-bold text-xl text-primary mb-4">
                  Kết nối với chúng tôi
                </h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors">
                    <Facebook className="w-6 h-6 text-primary" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors">
                    <Twitter className="w-6 h-6 text-primary" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors">
                    <Linkedin className="w-6 h-6 text-primary" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;