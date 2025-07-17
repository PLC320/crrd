import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Calendar, MapPin, Users, Target, Award } from 'lucide-react';
import heroImage from '@/assets/hero-rural-quang-binh.jpg';

const Home = () => {
  const { t } = useLanguage();

  const featuredNews = [
    {
      id: 1,
      title: 'Khởi động dự án phát triển nông nghiệp bền vững',
      excerpt: 'CRRD chính thức khởi động dự án nghiên cứu và ứng dụng công nghệ trong sản xuất nông nghiệp...',
      date: '2024-01-15',
      image: '/placeholder-news-1.jpg'
    },
    {
      id: 2,
      title: 'Hội thảo quốc tế về phát triển nông thôn',
      excerpt: 'Sự kiện tập hợp các chuyên gia hàng đầu về phát triển nông thôn từ khắp nơi trên thế giới...',
      date: '2024-01-10',
      image: '/placeholder-news-2.jpg'
    },
    {
      id: 3,
      title: 'Thành lập trung tâm nghiên cứu mới',
      excerpt: 'CRRD chính thức thành lập với sứ mệnh đóng góp vào sự phát triển bền vững của khu vực nông thôn...',
      date: '2024-01-05',
      image: '/placeholder-news-3.jpg'
    }
  ];

  const featuredProjects = [
    {
      id: 1,
      title: 'Dự án Nông nghiệp thông minh',
      description: 'Ứng dụng IoT và AI trong nông nghiệp để tối ưu hóa năng suất và giảm chi phí sản xuất.',
      status: 'Đang triển khai',
      image: '/placeholder-project-1.jpg'
    },
    {
      id: 2,
      title: 'Chương trình Đào tạo Nông dân',
      description: 'Nâng cao kiến thức và kỹ năng cho nông dân về các phương pháp canh tác hiện đại.',
      status: 'Hoàn thành',
      image: '/placeholder-project-2.jpg'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h1 className="font-roboto-slab font-bold text-4xl md:text-6xl mb-6 leading-tight">
              {t('home.hero.title')}
            </h1>
            <p className="font-lato text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              {t('home.hero.tagline')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/about-us" className="flex items-center space-x-2">
                  <span>Tìm hiểu thêm</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white/20">
                <Link to="/contact" className="flex items-center space-x-2">
                  <span>{t('common.contact')}</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-gradient-rural">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-roboto-slab font-bold text-3xl md:text-4xl text-primary mb-6">
              {t('home.intro.title')}
            </h2>
            <p className="font-lato text-lg text-foreground max-w-3xl mx-auto leading-relaxed">
              {t('home.intro.text')}
            </p>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-roboto-slab font-bold text-2xl text-primary mb-2">15+</h3>
              <p className="text-muted-foreground">Chuyên gia nghiên cứu</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-roboto-slab font-bold text-2xl text-primary mb-2">25+</h3>
              <p className="text-muted-foreground">Dự án hoàn thành</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-roboto-slab font-bold text-2xl text-primary mb-2">5+</h3>
              <p className="text-muted-foreground">Năm kinh nghiệm</p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="font-roboto-slab font-bold text-3xl text-primary">
              {t('home.news.title')}
            </h2>
            <Button variant="outline" asChild>
              <Link to="/news" className="flex items-center space-x-2">
                <span>{t('common.viewAll')}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredNews.map((article) => (
              <Card key={article.id} className="shadow-card hover:shadow-professional transition-shadow duration-300 group cursor-pointer">
                <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <span className="text-primary font-semibold">Hình ảnh tin tức</span>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{article.date}</span>
                  </div>
                  <CardTitle className="font-roboto-slab group-hover:text-primary transition-colors">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    {article.excerpt}
                  </CardDescription>
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 p-0">
                    {t('common.readMore')} <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 bg-gradient-rural">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="font-roboto-slab font-bold text-3xl text-primary">
              {t('home.projects.title')}
            </h2>
            <Button variant="outline" asChild>
              <Link to="/projects" className="flex items-center space-x-2">
                <span>{t('common.viewAll')}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="shadow-card hover:shadow-professional transition-shadow duration-300 group cursor-pointer">
                <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-accent/20 to-secondary/20 flex items-center justify-center">
                    <span className="text-primary font-semibold">Hình ảnh dự án</span>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="font-roboto-slab group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Đang triển khai' 
                        ? 'bg-accent/20 text-accent' 
                        : 'bg-primary/20 text-primary'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    {project.description}
                  </CardDescription>
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 p-0">
                    {t('common.readMore')} <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;