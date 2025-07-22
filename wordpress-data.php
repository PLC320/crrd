<?php
/**
 * WordPress Data Arrays for CRRD Website
 * Chuyển đổi dữ liệu từ React sang PHP
 */

// Dữ liệu tin tức nổi bật cho trang chủ
$featured_news = [
    [
        'id' => 1,
        'title' => 'Khởi động dự án phát triển nông nghiệp bền vững',
        'excerpt' => 'CRRD chính thức khởi động dự án nghiên cứu và ứng dụng công nghệ trong sản xuất nông nghiệp...',
        'date' => '2024-01-15',
        'image' => '/wp-content/uploads/placeholder-news-1.jpg',
        'category' => 'news'
    ],
    [
        'id' => 2,
        'title' => 'Hội thảo quốc tế về phát triển nông thôn',
        'excerpt' => 'Sự kiện tập hợp các chuyên gia hàng đầu về phát triển nông thôn từ khắp nơi trên thế giới...',
        'date' => '2024-01-10',
        'image' => '/wp-content/uploads/placeholder-news-2.jpg',
        'category' => 'events'
    ],
    [
        'id' => 3,
        'title' => 'Thành lập trung tâm nghiên cứu mới',
        'excerpt' => 'CRRD chính thức thành lập với sứ mệnh đóng góp vào sự phát triển bền vững của khu vực nông thôn...',
        'date' => '2024-01-05',
        'image' => '/wp-content/uploads/placeholder-news-3.jpg',
        'category' => 'news'
    ]
];

// Dữ liệu dự án nổi bật cho trang chủ
$featured_projects = [
    [
        'id' => 1,
        'title' => 'Dự án Nông nghiệp thông minh',
        'description' => 'Ứng dụng IoT và AI trong nông nghiệp để tối ưu hóa năng suất và giảm chi phí sản xuất.',
        'status' => 'Đang triển khai',
        'image' => '/wp-content/uploads/placeholder-project-1.jpg',
        'category' => 'technology'
    ],
    [
        'id' => 2,
        'title' => 'Chương trình Đào tạo Nông dân',
        'description' => 'Nâng cao kiến thức và kỹ năng cho nông dân về các phương pháp canh tác hiện đại.',
        'status' => 'Hoàn thành',
        'image' => '/wp-content/uploads/placeholder-project-2.jpg',
        'category' => 'education'
    ]
];

// Dữ liệu đầy đủ các dự án
$all_projects = [
    [
        'id' => 1,
        'title' => 'Nông nghiệp thông minh với IoT',
        'description' => 'Phát triển hệ thống giám sát và điều khiển tự động cho sản xuất nông nghiệp sử dụng Internet of Things (IoT), AI và big data để tối ưu hóa năng suất và giảm chi phí.',
        'category' => 'technology',
        'status' => 'ongoing',
        'start_date' => '2024-01-01',
        'end_date' => '2024-12-31',
        'location' => 'Quảng Bình',
        'partners' => ['Đại học Bách khoa Hà Nội', 'Sở Nông nghiệp Quảng Bình'],
        'budget' => '2.5 tỷ VNĐ',
        'objectives' => [
            'Xây dựng hệ thống IoT cho 50 hộ nông dân',
            'Tăng năng suất 25% so với phương pháp truyền thống',
            'Giảm chi phí sản xuất 20%'
        ],
        'results' => [
            '30 hộ nông dân đã triển khai thành công',
            'Tăng năng suất trung bình 22%',
            'Tiết kiệm 30% nước tưới'
        ],
        'image' => '/wp-content/uploads/placeholder-project-1.jpg',
        'featured' => true
    ],
    [
        'id' => 2,
        'title' => 'Chương trình Đào tạo Nông dân Chuyên nghiệp',
        'description' => 'Nâng cao trình độ chuyên môn và kỹ năng quản lý cho nông dân thông qua các khóa đào tạo về công nghệ canh tác hiện đại, quản lý doanh nghiệp nông nghiệp.',
        'category' => 'education',
        'status' => 'completed',
        'start_date' => '2023-06-01',
        'end_date' => '2024-05-31',
        'location' => 'Toàn tỉnh Quảng Bình',
        'partners' => ['Trung tâm Khuyến nông', 'Hội Nông dân tỉnh'],
        'budget' => '1.8 tỷ VNĐ',
        'objectives' => [
            'Đào tạo 500 nông dân chuyên nghiệp',
            'Nâng cao thu nhập bình quân 30%',
            'Phát triển 20 mô hình sản xuất kiểu mẫu'
        ],
        'results' => [
            '650 nông dân hoàn thành khóa đào tạo',
            'Thu nhập tăng trung bình 35%',
            '25 mô hình được công nhận'
        ],
        'image' => '/wp-content/uploads/placeholder-project-2.jpg',
        'featured' => true
    ],
    [
        'id' => 3,
        'title' => 'Phát triển Chuỗi Giá trị Nông sản An toàn',
        'description' => 'Xây dựng chuỗi liên kết từ sản xuất đến tiêu thụ nông sản an toàn, áp dụng tiêu chuẩn GAP và truy xuất nguồn gốc điện tử.',
        'category' => 'supply-chain',
        'status' => 'ongoing',
        'start_date' => '2023-10-01',
        'end_date' => '2025-09-30',
        'location' => 'Huyện Bố Trạch, Lệ Thủy',
        'partners' => ['Big C', 'VinMart', 'Hiệp hội Nông sản Việt Nam'],
        'budget' => '3.2 tỷ VNĐ',
        'objectives' => [
            'Liên kết 200 hộ sản xuất nông sản an toàn',
            'Xây dựng 5 trung tâm thu gom và chế biến',
            'Đưa sản phẩm vào 100 siêu thị'
        ],
        'results' => [
            '150 hộ đã tham gia chương trình',
            '3 trung tâm đã hoàn thành và vận hành',
            'Sản phẩm có mặt tại 45 siêu thị'
        ],
        'image' => '/wp-content/uploads/placeholder-project-3.jpg',
        'featured' => false
    ],
    [
        'id' => 4,
        'title' => 'Nghiên cứu Giống Lúa Chống Chịu Hạn',
        'description' => 'Nghiên cứu, lai tạo và phát triển các giống lúa có khả năng chống chịu hạn hán, phù hợp với điều kiện khí hậu thay đổi.',
        'category' => 'research',
        'status' => 'planning',
        'start_date' => '2024-03-01',
        'end_date' => '2027-02-28',
        'location' => 'Trại thí nghiệm CRRD',
        'partners' => ['Viện Lúa Quốc gia', 'IRRI', 'Sở KH&CN Quảng Bình'],
        'budget' => '4.5 tỷ VNĐ',
        'objectives' => [
            'Tạo ra 3-5 giống lúa chống chịu hạn',
            'Năng suất đạt 6-7 tấn/hecta',
            'Thích ứng với 30-40 ngày khô hạn'
        ],
        'results' => [
            'Đang trong giai đoạn chuẩn bị',
            'Đã thu thập 50 dòng giống ban đầu',
            'Hoàn tất thiết kế phòng thí nghiệm'
        ],
        'image' => '/wp-content/uploads/placeholder-project-4.jpg',
        'featured' => false
    ],
    [
        'id' => 5,
        'title' => 'Mô hình Nông trại Sinh thái Tích hợp',
        'description' => 'Xây dựng mô hình nông trại sinh thái kết hợp trồng trọt, chăn nuôi, nuôi trồng thủy sản và du lịch nông nghiệp.',
        'category' => 'ecosystem',
        'status' => 'ongoing',
        'start_date' => '2023-08-01',
        'end_date' => '2025-07-31',
        'location' => 'Xã Phong Nha, Bố Trạch',
        'partners' => ['WWF Việt Nam', 'GIZ', 'UBND huyện Bố Trạch'],
        'budget' => '2.8 tỷ VNĐ',
        'objectives' => [
            'Tạo ra mô hình nông trại sinh thái hoàn chỉnh',
            'Thu hút 5,000 lượt khách/năm',
            'Tăng thu nhập địa phương 50%'
        ],
        'results' => [
            'Hoàn thành 70% cơ sở hạ tầng',
            'Đón 1,200 lượt khách trong 6 tháng đầu',
            'Thu nhập tăng 30% so với trước dự án'
        ],
        'image' => '/wp-content/uploads/placeholder-project-5.jpg',
        'featured' => false
    ],
    [
        'id' => 6,
        'title' => 'Ứng dụng Blockchain trong Nông nghiệp',
        'description' => 'Nghiên cứu và triển khai công nghệ blockchain để đảm bảo truy xuất nguồn gốc và minh bạch chuỗi cung ứng nông sản.',
        'category' => 'technology',
        'status' => 'completed',
        'start_date' => '2022-09-01',
        'end_date' => '2023-08-31',
        'location' => 'Quảng Bình',
        'partners' => ['FPT Software', 'Bộ TT&TT', 'Vietcombank'],
        'budget' => '1.5 tỷ VNĐ',
        'objectives' => [
            'Xây dựng nền tảng blockchain cho nông sản',
            'Kết nối 100 nhà sản xuất',
            'Tạo niềm tin cho người tiêu dùng'
        ],
        'results' => [
            'Nền tảng đã được triển khai thành công',
            '120 nhà sản xuất tham gia',
            'Tăng giá trị sản phẩm 15%'
        ],
        'image' => '/wp-content/uploads/placeholder-project-6.jpg',
        'featured' => false
    ]
];

// Danh mục tin tức
$news_categories = [
    'all' => 'Tất cả',
    'news' => 'Tin tức',
    'events' => 'Sự kiện',
    'projects' => 'Dự án',
    'training' => 'Đào tạo',
    'cooperation' => 'Hợp tác'
];

// Trạng thái dự án
$project_statuses = [
    'all' => 'Tất cả',
    'ongoing' => 'Đang triển khai',
    'completed' => 'Hoàn thành',
    'planning' => 'Lập kế hoạch'
];

// Danh mục dự án
$project_categories = [
    'all' => 'Tất cả lĩnh vực',
    'technology' => 'Công nghệ',
    'education' => 'Đào tạo',
    'research' => 'Nghiên cứu',
    'supply-chain' => 'Chuỗi cung ứng',
    'ecosystem' => 'Sinh thái'
];

// Thống kê cho trang chủ
$homepage_stats = [
    [
        'icon' => 'users',
        'number' => '15+',
        'label' => 'Chuyên gia nghiên cứu'
    ],
    [
        'icon' => 'target',
        'number' => '25+',
        'label' => 'Dự án hoàn thành'
    ],
    [
        'icon' => 'award',
        'number' => '5+',
        'label' => 'Năm kinh nghiệm'
    ]
];

// Functions để sử dụng trong WordPress

/**
 * Lấy tin tức nổi bật cho trang chủ
 */
function get_featured_news($limit = 3) {
    global $featured_news;
    return array_slice($featured_news, 0, $limit);
}

/**
 * Lấy dự án nổi bật cho trang chủ
 */
function get_featured_projects($limit = 2) {
    global $featured_projects;
    return array_slice($featured_projects, 0, $limit);
}

/**
 * Lọc dự án theo trạng thái
 */
function filter_projects_by_status($status = 'all') {
    global $all_projects;
    if ($status === 'all') {
        return $all_projects;
    }
    return array_filter($all_projects, function($project) use ($status) {
        return $project['status'] === $status;
    });
}

/**
 * Lọc dự án theo danh mục
 */
function filter_projects_by_category($category = 'all') {
    global $all_projects;
    if ($category === 'all') {
        return $all_projects;
    }
    return array_filter($all_projects, function($project) use ($category) {
        return $project['category'] === $category;
    });
}

/**
 * Lấy số lượng dự án theo trạng thái
 */
function count_projects_by_status($status = 'all') {
    global $all_projects;
    if ($status === 'all') {
        return count($all_projects);
    }
    return count(array_filter($all_projects, function($project) use ($status) {
        return $project['status'] === $status;
    }));
}

/**
 * Lấy nhãn trạng thái dự án
 */
function get_project_status_label($status) {
    global $project_statuses;
    return isset($project_statuses[$status]) ? $project_statuses[$status] : $status;
}

/**
 * Lấy nhãn danh mục dự án
 */
function get_project_category_label($category) {
    global $project_categories;
    return isset($project_categories[$category]) ? $project_categories[$category] : $category;
}

/**
 * Lấy CSS class cho trạng thái dự án
 */
function get_project_status_class($status) {
    switch ($status) {
        case 'ongoing':
            return 'status-ongoing';
        case 'completed':
            return 'status-completed';
        case 'planning':
            return 'status-planning';
        default:
            return 'status-default';
    }
}

/**
 * Format ngày tháng Việt Nam
 */
function format_vietnamese_date($date) {
    return date('d/m/Y', strtotime($date));
}

/**
 * Lấy thống kê cho trang chủ
 */
function get_homepage_stats() {
    global $homepage_stats;
    return $homepage_stats;
}

/**
 * Lấy excerpt từ content
 */
function get_excerpt_from_content($content, $limit = 20) {
    $words = explode(' ', strip_tags($content));
    if (count($words) > $limit) {
        return implode(' ', array_slice($words, 0, $limit)) . '...';
    }
    return $content;
}

/**
 * Lấy dự án theo ID
 */
function get_project_by_id($id) {
    global $all_projects;
    foreach ($all_projects as $project) {
        if ($project['id'] == $id) {
            return $project;
        }
    }
    return null;
}

/**
 * Lấy danh sách đối tác của dự án
 */
function get_project_partners_string($partners, $limit = 2) {
    if (count($partners) <= $limit) {
        return implode(', ', $partners);
    }
    return implode(', ', array_slice($partners, 0, $limit)) . '...';
}

/**
 * Kiểm tra dự án có nổi bật không
 */
function is_featured_project($project_id) {
    global $all_projects;
    foreach ($all_projects as $project) {
        if ($project['id'] == $project_id) {
            return isset($project['featured']) ? $project['featured'] : false;
        }
    }
    return false;
}

?>