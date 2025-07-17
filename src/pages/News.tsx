import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Calendar, Search, ArrowRight, Tag } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

interface Article {
  id: string;
  title: string;
  title_en: string | null;
  excerpt: string | null;
  excerpt_en: string | null;
  content: string;
  content_en: string | null;
  published_at: string;
  category: string;
  featured_image: string | null;
}

const News = () => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .eq('status', 'published')
        .order('published_at', { ascending: false });

      if (error) {
        console.error('Error fetching articles:', error);
      } else {
        setArticles(data || []);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const categories = [
    { id: 'all', name: 'Tất cả', count: articles?.length || 0 },
    { id: 'news', name: 'Tin tức', count: articles?.filter(n => n.category === 'news')?.length || 0 },
    { id: 'events', name: 'Sự kiện', count: articles?.filter(n => n.category === 'events')?.length || 0 },
    { id: 'projects', name: 'Dự án', count: articles?.filter(n => n.category === 'projects')?.length || 0 },
    { id: 'training', name: 'Đào tạo', count: articles?.filter(n => n.category === 'training')?.length || 0 },
    { id: 'cooperation', name: 'Hợp tác', count: articles?.filter(n => n.category === 'cooperation')?.length || 0 }
  ];

  const filteredArticles = (articles || []).filter(article => {
    const title = language === 'vi' ? article.title : (article.title_en || article.title);
    const excerpt = language === 'vi' ? (article.excerpt || '') : (article.excerpt_en || article.excerpt || '');
    
    const matchesSearch = (title || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
                         excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // For now, treat first 2 articles as featured
  const featuredArticles = filteredArticles.slice(0, 2);
  const regularArticles = filteredArticles.slice(2);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Đang tải tin tức...</p>
        </div>
      </div>
    );
  }

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
                        <span>{new Date(article.published_at).toLocaleDateString('vi-VN')}</span>
                      </div>
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">
                        Nổi bật
                      </span>
                    </div>
                    <CardTitle className="font-roboto-slab group-hover:text-primary transition-colors">
                      {language === 'vi' ? article.title : (article.title_en || article.title)}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4 line-clamp-3">
                      {language === 'vi' ? article.excerpt : (article.excerpt_en || article.excerpt)}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="flex items-center text-xs bg-muted px-2 py-1 rounded-full">
                        <Tag className="w-3 h-3 mr-1" />
                        {article.category === 'news' ? 'Tin tức' : 
                         article.category === 'events' ? 'Sự kiện' : 
                         article.category === 'projects' ? 'Dự án' : article.category}
                      </span>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-primary hover:text-primary/80 p-0"
                      onClick={() => navigate(`/news/${article.id}`)}
                    >
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
                      <span>{new Date(article.published_at).toLocaleDateString('vi-VN')}</span>
                      <span className="mx-2">•</span>
                      <span>CRRD</span>
                    </div>
                    <CardTitle className="font-roboto-slab group-hover:text-primary transition-colors text-lg">
                      {language === 'vi' ? article.title : (article.title_en || article.title)}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4 line-clamp-2">
                      {language === 'vi' ? article.excerpt : (article.excerpt_en || article.excerpt)}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="flex items-center text-xs bg-muted px-2 py-1 rounded-full">
                        <Tag className="w-3 h-3 mr-1" />
                        {article.category === 'news' ? 'Tin tức' : 
                         article.category === 'events' ? 'Sự kiện' : 
                         article.category === 'projects' ? 'Dự án' : article.category}
                      </span>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-primary hover:text-primary/80 p-0"
                      onClick={() => navigate(`/news/${article.id}`)}
                    >
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