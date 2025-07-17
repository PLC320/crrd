import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Calendar, Search, ArrowRight, Tag } from 'lucide-react';

const News = () => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const newsArticles = [
    {
      id: 1,
      title: 'Khởi động dự án phát triển nông nghiệp bền vững tại Quảng Bình',
      excerpt: 'CRRD chính thức khởi động dự án nghiên cứu và ứng dụng công nghệ IoT trong sản xuất nông nghiệp, hứa hẹn mang lại hiệu quả kinh tế cao cho nông dân địa phương...',
      content: 'Nội dung chi tiết về dự án phát triển nông nghiệp bền vững...',
      date: '2024-01-15',
      category: 'projects',
      author: 'CRRD',
      tags: ['Nông nghiệp thông minh', 'IoT', 'Bền vững'],
      image: '/placeholder-news-1.jpg',
      featured: true
    },
    {
      id: 2,
      title: 'Hội thảo quốc tế "Nông thôn số trong thời đại 4.0"',
      excerpt: 'Sự kiện quy tụ hơn 200 chuyên gia hàng đầu về phát triển nông thôn từ 15 quốc gia, chia sẻ kinh nghiệm và xu hướng mới nhất trong lĩnh vực nông nghiệp số...',
      content: 'Nội dung chi tiết về hội thảo quốc tế...',
      date: '2024-01-10',
      category: 'events',
      author: 'CRRD',
      tags: ['Hội thảo', 'Quốc tế', 'Nông thôn số'],
      image: '/placeholder-news-2.jpg',
      featured: true
    },
    {
      id: 3,
      title: 'CRRD chính thức thành lập với tầm nhìn đột phá',
      excerpt: 'Với sự ủng hộ của Hội Làm vườn tỉnh Quảng Bình, CRRD ra đời với sứ mệnh tiên phong trong nghiên cứu và phát triển các giải pháp bền vững cho khu vực nông thôn...',
      content: 'Nội dung chi tiết về việc thành lập CRRD...',
      date: '2024-01-05',
      category: 'news',
      author: 'CRRD',
      tags: ['Thành lập', 'CRRD', 'Nông thôn'],
      image: '/placeholder-news-3.jpg',
      featured: false
    },
    {
      id: 4,
      title: 'Chương trình đào tạo nông dân về công nghệ sinh học',
      excerpt: 'CRRD tổ chức khóa đào tạo chuyên sâu về ứng dụng công nghệ sinh học trong chăn nuôi và trồng trọt, thu hút sự tham gia của hơn 150 nông dân từ 20 xã...',
      content: 'Nội dung chi tiết về chương trình đào tạo...',
      date: '2024-01-01',
      category: 'training',
      author: 'Ban Đào tạo',
      tags: ['Đào tạo', 'Công nghệ sinh học', 'Nông dân'],
      image: '/placeholder-news-4.jpg',
      featured: false
    },
    {
      id: 5,
      title: 'Ký kết hợp tác với Đại học Nông nghiệp Hà Nội',
      excerpt: 'Thỏa thuận hợp tác chiến lược trong nghiên cứu và phát triển công nghệ nông nghiệp tiên tiến, mở ra cơ hội trao đổi chuyên gia và sinh viên thực tập...',
      content: 'Nội dung chi tiết về hợp tác...',
      date: '2023-12-28',
      category: 'cooperation',
      author: 'Ban Hợp tác',
      tags: ['Hợp tác', 'Đại học', 'Nghiên cứu'],
      image: '/placeholder-news-5.jpg',
      featured: false
    },
    {
      id: 6,
      title: 'Triển khai dự án "Nông trại thông minh" tại huyện Bố Trạch',
      excerpt: 'Dự án pilot áp dụng hệ thống giám sát tự động, tưới tiêu thông minh và quản lý dinh dưỡng cây trồng bằng AI tại 5 hợp tác xã nông nghiệp...',
      content: 'Nội dung chi tiết về dự án nông trại thông minh...',
      date: '2023-12-25',
      category: 'projects',
      author: 'Ban Nghiên cứu',
      tags: ['Nông trại thông minh', 'AI', 'Pilot'],
      image: '/placeholder-news-6.jpg',
      featured: false
    }
  ];

  const categories = [
    { id: 'all', name: 'Tất cả', count: newsArticles.length },
    { id: 'news', name: 'Tin tức', count: newsArticles.filter(n => n.category === 'news').length },
    { id: 'events', name: 'Sự kiện', count: newsArticles.filter(n => n.category === 'events').length },
    { id: 'projects', name: 'Dự án', count: newsArticles.filter(n => n.category === 'projects').length },
    { id: 'training', name: 'Đào tạo', count: newsArticles.filter(n => n.category === 'training').length },
    { id: 'cooperation', name: 'Hợp tác', count: newsArticles.filter(n => n.category === 'cooperation').length }
  ];

  const filteredArticles = newsArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredArticles = filteredArticles.filter(article => article.featured);
  const regularArticles = filteredArticles.filter(article => !article.featured);

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="bg-gradient-hero text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-roboto-slab font-bold text-4xl md:text-5xl mb-6">
            {t('nav.news')}
          </h1>
          <p className="font-lato text-xl max-w-3xl mx-auto opacity-90">
            Cập nhật những tin tức mới nhất về hoạt động nghiên cứu, dự án và sự kiện của CRRD
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Tìm kiếm tin tức..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className="text-sm"
                >
                  {category.name} ({category.count})
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-roboto-slab font-bold text-2xl text-primary mb-8">
              Tin tức nổi bật
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredArticles.map((article) => (
                <Card key={article.id} className="shadow-card hover:shadow-professional transition-shadow duration-300 group cursor-pointer">
                  <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <span className="text-primary font-semibold">Hình ảnh nổi bật</span>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{article.date}</span>
                      </div>
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">
                        Nổi bật
                      </span>
                    </div>
                    <CardTitle className="font-roboto-slab group-hover:text-primary transition-colors">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4 line-clamp-3">
                      {article.excerpt}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.slice(0, 2).map((tag, index) => (
                        <span key={index} className="flex items-center text-xs bg-muted px-2 py-1 rounded-full">
                          <Tag className="w-3 h-3 mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 p-0">
                      {t('common.readMore')} <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Articles */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {featuredArticles.length > 0 && (
            <h2 className="font-roboto-slab font-bold text-2xl text-primary mb-8">
              Tin tức khác
            </h2>
          )}
          
          {filteredArticles.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                Không tìm thấy tin tức phù hợp với từ khóa tìm kiếm.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularArticles.map((article) => (
                <Card key={article.id} className="shadow-card hover:shadow-professional transition-shadow duration-300 group cursor-pointer">
                  <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-accent/20 to-secondary/20 flex items-center justify-center">
                      <span className="text-primary font-semibold">Hình ảnh</span>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center text-sm text-muted-foreground mb-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{article.date}</span>
                      <span className="mx-2">•</span>
                      <span>{article.author}</span>
                    </div>
                    <CardTitle className="font-roboto-slab group-hover:text-primary transition-colors text-lg">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4 line-clamp-2">
                      {article.excerpt}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.slice(0, 2).map((tag, index) => (
                        <span key={index} className="flex items-center text-xs bg-muted px-2 py-1 rounded-full">
                          <Tag className="w-3 h-3 mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 p-0">
                      {t('common.readMore')} <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Load More Button */}
          {filteredArticles.length > 6 && (
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Xem thêm tin tức
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default News;