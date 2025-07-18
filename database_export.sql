-- Database Export for Articles Table
-- Generated for phpMyAdmin import

-- Create articles table
CREATE TABLE IF NOT EXISTS `articles` (
  `id` varchar(36) NOT NULL,
  `title` text NOT NULL,
  `title_en` text,
  `content` text NOT NULL,
  `content_en` text,
  `excerpt` text,
  `excerpt_en` text,
  `featured_image` text,
  `category` varchar(50) DEFAULT 'news',
  `status` enum('draft','published') DEFAULT 'published',
  `published_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Insert sample data
INSERT INTO `articles` (`id`, `title`, `title_en`, `content`, `content_en`, `excerpt`, `excerpt_en`, `category`) VALUES
(UUID(), 'Phát triển nông nghiệp bền vững tại Quảng Bình', 'Sustainable Agriculture Development in Quang Binh', 'Trung tâm nghiên cứu và phát triển nông thôn đã triển khai dự án phát triển nông nghiệp bền vững...', 'The Centre for Rural Research and Development has implemented sustainable agriculture projects...', 'Dự án phát triển nông nghiệp bền vững', 'Sustainable agriculture development project', 'news'),
(UUID(), 'Hội thảo khoa học về phát triển nông thôn', 'Scientific Conference on Rural Development', 'Hội thảo khoa học quốc gia về phát triển nông thôn sẽ được tổ chức tại Quảng Bình...', 'National scientific conference on rural development will be held in Quang Binh...', 'Hội thảo khoa học quốc gia', 'National scientific conference', 'events'),
(UUID(), 'Nghiên cứu giống lúa chất lượng cao', 'Research on High-Quality Rice Varieties', 'Trung tâm đã thành công trong việc nghiên cứu các giống lúa chất lượng cao...', 'The center has succeeded in researching high-quality rice varieties...', 'Nghiên cứu giống lúa mới', 'New rice variety research', 'news');

-- Create view for published articles
CREATE VIEW `published_articles_view` AS 
SELECT * FROM `articles` WHERE `status` = 'published';