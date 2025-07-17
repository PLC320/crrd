import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
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

const ArticleDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetchArticle(id);
    }
  }, [id]);

  const fetchArticle = async (articleId: string) => {
    try {
      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .eq('id', articleId)
        .eq('status', 'published')
        .single();

      if (error) {
        console.error('Error fetching article:', error);
      } else {
        setArticle(data);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const getCategoryName = (category: string) => {
    const categoryMap: { [key: string]: string } = {
      'news': 'Tin tức',
      'events': 'Sự kiện',
      'projects': 'Dự án',
      'training': 'Đào tạo',
      'cooperation': 'Hợp tác'
    };
    return categoryMap[category] || category;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Đang tải bài viết...</p>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Không tìm thấy bài viết</h1>
          <Button onClick={() => navigate('/news')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Quay lại tin tức
          </Button>
        </div>
      </div>
    );
  }

  const title = language === 'vi' ? article.title : (article.title_en || article.title);
  const content = language === 'vi' ? article.content : (article.content_en || article.content);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-hero text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/news')}
            className="text-white hover:bg-white/10 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Quay lại tin tức
          </Button>
          
          <div className="flex items-center text-sm opacity-90 mb-4">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{new Date(article.published_at).toLocaleDateString('vi-VN')}</span>
            <span className="mx-3">•</span>
            <Tag className="w-4 h-4 mr-1" />
            <span>{getCategoryName(article.category)}</span>
          </div>
          
          <h1 className="font-roboto-slab font-bold text-3xl md:text-4xl">
            {title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-card">
            {article.featured_image && (
              <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <span className="text-primary font-semibold">Hình ảnh bài viết</span>
                </div>
              </div>
            )}
            
            <CardHeader>
              <CardTitle className="font-roboto-slab text-2xl text-primary">
                {title}
              </CardTitle>
            </CardHeader>
            
            <CardContent>
              <div className="prose max-w-none">
                <div 
                  className="text-foreground leading-relaxed whitespace-pre-wrap"
                  dangerouslySetInnerHTML={{ __html: content.replace(/\n/g, '<br>') }}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default ArticleDetail;