-- Create articles table for news & events
CREATE TABLE public.articles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  title_en TEXT,
  content TEXT NOT NULL,
  content_en TEXT,
  excerpt TEXT,
  excerpt_en TEXT,
  featured_image TEXT,
  category TEXT DEFAULT 'news',
  status TEXT DEFAULT 'published' CHECK (status IN ('draft', 'published')),
  published_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.articles ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access to published articles
CREATE POLICY "Anyone can view published articles" 
ON public.articles 
FOR SELECT 
USING (status = 'published');

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_articles_updated_at
  BEFORE UPDATE ON public.articles
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Insert sample articles
INSERT INTO public.articles (title, title_en, content, content_en, excerpt, excerpt_en, category) VALUES
('Phát triển nông nghiệp bền vững tại Quảng Bình', 'Sustainable Agriculture Development in Quang Binh', 'Trung tâm nghiên cứu và phát triển nông thôn đã triển khai dự án phát triển nông nghiệp bền vững...', 'The Centre for Rural Research and Development has implemented sustainable agriculture projects...', 'Dự án phát triển nông nghiệp bền vững', 'Sustainable agriculture development project', 'news'),
('Hội thảo khoa học về phát triển nông thôn', 'Scientific Conference on Rural Development', 'Hội thảo khoa học quốc gia về phát triển nông thôn sẽ được tổ chức tại Quảng Bình...', 'National scientific conference on rural development will be held in Quang Binh...', 'Hội thảo khoa học quốc gia', 'National scientific conference', 'events'),
('Nghiên cứu giống lúa chất lượng cao', 'Research on High-Quality Rice Varieties', 'Trung tâm đã thành công trong việc nghiên cứu các giống lúa chất lượng cao...', 'The center has succeeded in researching high-quality rice varieties...', 'Nghiên cứu giống lúa mới', 'New rice variety research', 'news');