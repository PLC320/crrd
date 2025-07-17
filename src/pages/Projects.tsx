import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Users, Target, ArrowRight, Filter } from 'lucide-react';

const Projects = () => {
  const { t } = useLanguage();
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Nông nghiệp thông minh với IoT',
      description: 'Phát triển hệ thống giám sát và điều khiển tự động cho sản xuất nông nghiệp sử dụng Internet of Things (IoT), AI và big data để tối ưu hóa năng suất và giảm chi phí.',
      category: 'technology',
      status: 'ongoing',
      startDate: '2024-01-01',
      endDate: '2024-12-31',
      location: 'Quảng Bình',
      partners: ['Đại học Bách khoa Hà Nội', 'Sở Nông nghiệp Quảng Bình'],
      budget: '2.5 tỷ VNĐ',
      objectives: [
        'Xây dựng hệ thống IoT cho 50 hộ nông dân',
        'Tăng năng suất 25% so với phương pháp truyền thống',
        'Giảm chi phí sản xuất 20%'
      ],
      results: [
        '30 hộ nông dân đã triển khai thành công',
        'Tăng năng suất trung bình 22%',
        'Tiết kiệm 30% nước tưới'
      ],
      image: '/placeholder-project-1.jpg',
      featured: true
    },
    {
      id: 2,
      title: 'Chương trình Đào tạo Nông dân Chuyên nghiệp',
      description: 'Nâng cao trình độ chuyên môn và kỹ năng quản lý cho nông dân thông qua các khóa đào tạo về công nghệ canh tác hiện đại, quản lý doanh nghiệp nông nghiệp.',
      category: 'education',
      status: 'completed',
      startDate: '2023-06-01',
      endDate: '2024-05-31',
      location: 'Toàn tỉnh Quảng Bình',
      partners: ['Trung tâm Khuyến nông', 'Hội Nông dân tỉnh'],
      budget: '1.8 tỷ VNĐ',
      objectives: [
        'Đào tạo 500 nông dân chuyên nghiệp',
        'Nâng cao thu nhập bình quân 30%',
        'Phát triển 20 mô hình sản xuất kiểu mẫu'
      ],
      results: [
        '650 nông dân hoàn thành khóa đào tạo',
        'Thu nhập tăng trung bình 35%',
        '25 mô hình được công nhận'
      ],
      image: '/placeholder-project-2.jpg',
      featured: true
    },
    {
      id: 3,
      title: 'Phát triển Chuỗi Giá trị Nông sản An toàn',
      description: 'Xây dựng chuỗi liên kết từ sản xuất đến tiêu thụ nông sản an toàn, áp dụng tiêu chuẩn GAP và truy xuất nguồn gốc điện tử.',
      category: 'supply-chain',
      status: 'ongoing',
      startDate: '2023-10-01',
      endDate: '2025-09-30',
      location: 'Huyện Bố Trạch, Lệ Thủy',
      partners: ['Big C', 'VinMart', 'Hiệp hội Nông sản Việt Nam'],
      budget: '3.2 tỷ VNĐ',
      objectives: [
        'Liên kết 200 hộ sản xuất nông sản an toàn',
        'Xây dựng 5 trung tâm thu gom và chế biến',
        'Đưa sản phẩm vào 100 siêu thị'
      ],
      results: [
        '150 hộ đã tham gia chương trình',
        '3 trung tâm đã hoàn thành và vận hành',
        'Sản phẩm có mặt tại 45 siêu thị'
      ],
      image: '/placeholder-project-3.jpg',
      featured: false
    },
    {
      id: 4,
      title: 'Nghiên cứu Giống Lúa Chống Chịu Hạn',
      description: 'Nghiên cứu, lai tạo và phát triển các giống lúa có khả năng chống chịu hạn hán, phù hợp với điều kiện khí hậu thay đổi.',
      category: 'research',
      status: 'planning',
      startDate: '2024-03-01',
      endDate: '2027-02-28',
      location: 'Trại thí nghiệm CRRD',
      partners: ['Viện Lúa Quốc gia', 'IRRI', 'Sở KH&CN Quảng Bình'],
      budget: '4.5 tỷ VNĐ',
      objectives: [
        'Tạo ra 3-5 giống lúa chống chịu hạn',
        'Năng suất đạt 6-7 tấn/hecta',
        'Thích ứng với 30-40 ngày khô hạn'
      ],
      results: [
        'Đang trong giai đoạn chuẩn bị',
        'Đã thu thập 50 dòng giống ban đầu',
        'Hoàn tất thiết kế phòng thí nghiệm'
      ],
      image: '/placeholder-project-4.jpg',
      featured: false
    },
    {
      id: 5,
      title: 'Mô hình Nông trại Sinh thái Tích hợp',
      description: 'Xây dựng mô hình nông trại sinh thái kết hợp trồng trọt, chăn nuôi, nuôi trồng thủy sản và du lịch nông nghiệp.',
      category: 'ecosystem',
      status: 'ongoing',
      startDate: '2023-08-01',
      endDate: '2025-07-31',
      location: 'Xã Phong Nha, Bố Trạch',
      partners: ['WWF Việt Nam', 'GIZ', 'UBND huyện Bố Trạch'],
      budget: '2.8 tỷ VNĐ',
      objectives: [
        'Tạo ra mô hình nông trại sinh thái hoàn chỉnh',
        'Thu hút 5,000 lượt khách/năm',
        'Tăng thu nhập địa phương 50%'
      ],
      results: [
        'Hoàn thành 70% cơ sở hạ tầng',
        'Đón 1,200 lượt khách trong 6 tháng đầu',
        'Thu nhập tăng 30% so với trước dự án'
      ],
      image: '/placeholder-project-5.jpg',
      featured: false
    },
    {
      id: 6,
      title: 'Ứng dụng Blockchain trong Nông nghiệp',
      description: 'Nghiên cứu và triển khai công nghệ blockchain để đảm bảo truy xuất nguồn gốc và minh bạch chuỗi cung ứng nông sản.',
      category: 'technology',
      status: 'completed',
      startDate: '2022-09-01',
      endDate: '2023-08-31',
      location: 'Quảng Bình',
      partners: ['FPT Software', 'Bộ TT&TT', 'Vietcombank'],
      budget: '1.5 tỷ VNĐ',
      objectives: [
        'Xây dựng nền tảng blockchain cho nông sản',
        'Kết nối 100 nhà sản xuất',
        'Tạo niềm tin cho người tiêu dùng'
      ],
      results: [
        'Nền tảng đã được triển khai thành công',
        '120 nhà sản xuất tham gia',
        'Tăng giá trị sản phẩm 15%'
      ],
      image: '/placeholder-project-6.jpg',
      featured: false
    }
  ];

  const statusOptions = [
    { value: 'all', label: 'Tất cả', count: projects.length },
    { value: 'ongoing', label: 'Đang triển khai', count: projects.filter(p => p.status === 'ongoing').length },
    { value: 'completed', label: 'Hoàn thành', count: projects.filter(p => p.status === 'completed').length },
    { value: 'planning', label: 'Lập kế hoạch', count: projects.filter(p => p.status === 'planning').length }
  ];

  const categoryOptions = [
    { value: 'all', label: 'Tất cả lĩnh vực' },
    { value: 'technology', label: 'Công nghệ' },
    { value: 'education', label: 'Đào tạo' },
    { value: 'research', label: 'Nghiên cứu' },
    { value: 'supply-chain', label: 'Chuỗi cung ứng' },
    { value: 'ecosystem', label: 'Sinh thái' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ongoing': return 'bg-accent text-accent-foreground';
      case 'completed': return 'bg-primary text-primary-foreground';
      case 'planning': return 'bg-secondary text-secondary-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'ongoing': return 'Đang triển khai';
      case 'completed': return 'Hoàn thành';
      case 'planning': return 'Lập kế hoạch';
      default: return status;
    }
  };

  const filteredProjects = projects.filter(project => {
    const matchesStatus = selectedStatus === 'all' || project.status === selectedStatus;
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    return matchesStatus && matchesCategory;
  });

  const featuredProjects = filteredProjects.filter(project => project.featured);
  const regularProjects = filteredProjects.filter(project => !project.featured);

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="bg-gradient-hero text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-roboto-slab font-bold text-4xl md:text-5xl mb-6">
            {t('nav.projects')}
          </h1>
          <p className="font-lato text-xl max-w-3xl mx-auto opacity-90">
            Khám phá các dự án nghiên cứu và phát triển đang được CRRD triển khai để phục vụ cộng đồng nông thôn
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Status Filter */}
            <div className="flex-1">
              <h3 className="font-roboto-slab font-semibold text-sm text-foreground mb-3 flex items-center">
                <Filter className="w-4 h-4 mr-2" />
                Trạng thái dự án
              </h3>
              <div className="flex flex-wrap gap-2">
                {statusOptions.map((option) => (
                  <Button
                    key={option.value}
                    variant={selectedStatus === option.value ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedStatus(option.value)}
                    className="text-sm"
                  >
                    {option.label} ({option.count})
                  </Button>
                ))}
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex-1">
              <h3 className="font-roboto-slab font-semibold text-sm text-foreground mb-3 flex items-center">
                <Target className="w-4 h-4 mr-2" />
                Lĩnh vực
              </h3>
              <div className="flex flex-wrap gap-2">
                {categoryOptions.map((option) => (
                  <Button
                    key={option.value}
                    variant={selectedCategory === option.value ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(option.value)}
                    className="text-sm"
                  >
                    {option.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-roboto-slab font-bold text-2xl text-primary mb-8">
              Dự án nổi bật
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredProjects.map((project) => (
                <Card key={project.id} className="shadow-card hover:shadow-professional transition-shadow duration-300 group cursor-pointer">
                  <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <span className="text-primary font-semibold">Hình ảnh dự án</span>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-3">
                      <Badge className={getStatusColor(project.status)}>
                        {getStatusLabel(project.status)}
                      </Badge>
                      <span className="text-xs text-muted-foreground bg-primary/10 px-2 py-1 rounded-full">
                        Nổi bật
                      </span>
                    </div>
                    <CardTitle className="font-roboto-slab group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <div className="flex items-center text-sm text-muted-foreground mt-2">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{project.location}</span>
                      <span className="mx-2">•</span>
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{project.startDate} - {project.endDate}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4 line-clamp-3">
                      {project.description}
                    </CardDescription>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-sm">
                        <Users className="w-4 h-4 mr-2 text-muted-foreground" />
                        <span className="font-medium">Đối tác:</span>
                        <span className="ml-2 text-muted-foreground">
                          {project.partners.slice(0, 2).join(', ')}
                          {project.partners.length > 2 && '...'}
                        </span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Target className="w-4 h-4 mr-2 text-muted-foreground" />
                        <span className="font-medium">Ngân sách:</span>
                        <span className="ml-2 text-primary font-semibold">{project.budget}</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 p-0">
                      Xem chi tiết <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Projects */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {featuredProjects.length > 0 && (
            <h2 className="font-roboto-slab font-bold text-2xl text-primary mb-8">
              Tất cả dự án
            </h2>
          )}
          
          {filteredProjects.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                Không tìm thấy dự án phù hợp với bộ lọc đã chọn.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularProjects.map((project) => (
                <Card key={project.id} className="shadow-card hover:shadow-professional transition-shadow duration-300 group cursor-pointer">
                  <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-accent/20 to-secondary/20 flex items-center justify-center">
                      <span className="text-primary font-semibold">Hình ảnh</span>
                    </div>
                  </div>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <Badge className={getStatusColor(project.status)} variant="secondary">
                        {getStatusLabel(project.status)}
                      </Badge>
                    </div>
                    <CardTitle className="font-roboto-slab group-hover:text-primary transition-colors text-lg">
                      {project.title}
                    </CardTitle>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <MapPin className="w-3 h-3 mr-1" />
                      <span>{project.location}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-3 text-sm line-clamp-2">
                      {project.description}
                    </CardDescription>
                    <div className="text-xs text-muted-foreground mb-3">
                      <span className="font-medium">Ngân sách:</span> {project.budget}
                    </div>
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 p-0 text-sm">
                      Xem chi tiết <ArrowRight className="w-3 h-3 ml-1" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Projects;