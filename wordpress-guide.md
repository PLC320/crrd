# Hướng dẫn sử dụng CRRD Design cho WordPress

## Giới thiệu
Đây là bộ file HTML/CSS được export từ thiết kế React gốc để sử dụng làm tham khảo cho việc phát triển WordPress theme.

## Cấu trúc Files

### 1. wordpress-export.html
- Chứa cấu trúc HTML hoàn chỉnh của trang chủ
- Bao gồm: Header, Hero section, Introduction, News, Projects, Footer
- Sử dụng Lucide icons để hiển thị biểu tượng

### 2. wordpress-styles.css
- CSS stylesheet hoàn chỉnh với design system từ dự án gốc
- Responsive design cho mobile và desktop
- Sử dụng CSS variables để quản lý màu sắc và spacing

### 3. database_export.sql
- Cấu trúc database MySQL/phpMyAdmin
- Bảng articles với các trường tiếng Việt và tiếng Anh
- Dữ liệu mẫu

## Cách sử dụng cho WordPress

### Bước 1: Tạo WordPress Theme
```
wp-content/themes/crrd-theme/
├── style.css (copy từ wordpress-styles.css)
├── index.php
├── header.php
├── footer.php
├── functions.php
├── single.php
├── page.php
└── screenshot.png
```

### Bước 2: Chuyển đổi HTML sang PHP
Chia `wordpress-export.html` thành các file PHP:

#### header.php
```php
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php wp_title('|', true, 'right'); ?></title>
    
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;700&family=Lato:wght@300;400;600;700&display=swap" rel="stylesheet">
    
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>

<!-- Copy header HTML từ wordpress-export.html -->
<header class="header">
    <!-- Header content -->
</header>
```

#### footer.php
```php
<!-- Copy footer HTML từ wordpress-export.html -->
<footer class="footer">
    <!-- Footer content -->
</footer>

<!-- Lucide Icons -->
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.js"></script>
<script>
    lucide.createIcons();
</script>

<?php wp_footer(); ?>
</body>
</html>
```

#### index.php / front-page.php
```php
<?php get_header(); ?>

<!-- Copy main content từ wordpress-export.html -->
<main>
    <!-- Hero Section -->
    <!-- Introduction Section -->
    <!-- News Section với WordPress loop -->
    <!-- Projects Section -->
</main>

<?php get_footer(); ?>
```

### Bước 3: WordPress Loop cho News
```php
<!-- Latest News Section -->
<section class="news-section">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">Tin tức mới nhất</h2>
            <a href="<?php echo get_permalink(get_option('page_for_posts')); ?>" class="btn btn-outline dark">
                <span>Xem tất cả</span>
                <i data-lucide="arrow-right"></i>
            </a>
        </div>

        <div class="news-grid">
            <?php
            $recent_posts = wp_get_recent_posts(array(
                'numberposts' => 3,
                'post_status' => 'publish'
            ));
            
            foreach($recent_posts as $post) : ?>
                <article class="news-card">
                    <div class="news-image">
                        <?php if(has_post_thumbnail($post['ID'])) : ?>
                            <?php echo get_the_post_thumbnail($post['ID'], 'medium'); ?>
                        <?php else : ?>
                            <div class="placeholder-image">Hình ảnh tin tức</div>
                        <?php endif; ?>
                    </div>
                    <div class="news-content">
                        <div class="news-meta">
                            <i data-lucide="calendar"></i>
                            <span><?php echo get_the_date('d-m-Y', $post['ID']); ?></span>
                        </div>
                        <h3 class="news-title"><?php echo $post['post_title']; ?></h3>
                        <p class="news-excerpt"><?php echo wp_trim_words($post['post_content'], 20); ?></p>
                        <a href="<?php echo get_permalink($post['ID']); ?>" class="read-more">
                            Đọc thêm <i data-lucide="arrow-right"></i>
                        </a>
                    </div>
                </article>
            <?php endforeach; ?>
        </div>
    </div>
</section>
```

### Bước 4: functions.php
```php
<?php
function crrd_theme_setup() {
    // Theme support
    add_theme_support('post-thumbnails');
    add_theme_support('title-tag');
    add_theme_support('html5', array('search-form', 'comment-form', 'comment-list'));
    
    // Menus
    register_nav_menus(array(
        'primary' => 'Primary Menu',
    ));
}
add_action('after_setup_theme', 'crrd_theme_setup');

function crrd_theme_scripts() {
    wp_enqueue_style('crrd-style', get_stylesheet_uri());
    wp_enqueue_script('lucide', 'https://unpkg.com/lucide@latest/dist/umd/lucide.js', array(), null, true);
}
add_action('wp_enqueue_scripts', 'crrd_theme_scripts');

// Custom post type cho Projects (tùy chọn)
function crrd_create_projects_post_type() {
    register_post_type('projects',
        array(
            'labels' => array(
                'name' => 'Dự án',
                'singular_name' => 'Dự án'
            ),
            'public' => true,
            'has_archive' => true,
            'supports' => array('title', 'editor', 'thumbnail', 'custom-fields')
        )
    );
}
add_action('init', 'crrd_create_projects_post_type');
?>
```

### Bước 5: Database
1. Import `database_export.sql` vào phpMyAdmin
2. Hoặc tạo custom fields trong WordPress để lưu nội dung tiếng Việt/Anh

## Tính năng chính

### Design System
- **Colors**: Primary (SeaGreen), Secondary (SaddleBrown), Accent (SteelBlue)
- **Typography**: Roboto Slab (headings), Lato (body text)
- **Spacing**: Sử dụng rem units
- **Gradients**: Hero gradient, Rural gradient
- **Shadows**: Professional, Card shadows

### Responsive Design
- Mobile-first approach
- Breakpoints: 640px, 768px, 1024px
- Grid system responsive
- Mobile menu với toggle

### Components
- Header với logo, navigation, language switcher
- Hero section với background image
- Card components cho news và projects
- Button variants (primary, outline)
- Footer với social links

## Customization

### Thay đổi màu sắc
Chỉnh sửa CSS variables trong `:root`:
```css
:root {
  --primary: 147 50% 35%; /* Thay đổi màu chính */
  --secondary: 25 59% 31%; /* Màu phụ */
  --accent: 207 44% 49%; /* Màu nhấn */
}
```

### Thêm tính năng
1. Multilingual: Sử dụng WPML hoặc Polylang
2. SEO: Yoast SEO plugin
3. Performance: WP Rocket, Autoptimize
4. Contact forms: Contact Form 7

## Lưu ý
- Đảm bảo tải Google Fonts
- Lucide icons cần JavaScript để hoạt động
- Test responsive trên nhiều thiết bị
- Tối ưu hóa hình ảnh cho web
- Sử dụng CDN cho hiệu suất tốt hơn

## Hỗ trợ
- Tham khảo thêm tại WordPress Codex
- Sử dụng CSS Grid và Flexbox cho layout
- Tuân thủ WordPress coding standards