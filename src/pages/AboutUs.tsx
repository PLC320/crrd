import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Users, Award, BookOpen, Handshake, Globe } from 'lucide-react';

const AboutUs = () => {
  const { t } = useLanguage();

  const departments = [
    {
      name: 'Ban Nghiên cứu và Phát triển',
      description: 'Chuyên trách nghiên cứu các giải pháp công nghệ tiên tiến cho nông nghiệp và nông thôn.',
      icon: BookOpen
    },
    {
      name: 'Ban Tư vấn và Dịch vụ',
      description: 'Cung cấp các dịch vụ tư vấn chuyên môn và hỗ trợ kỹ thuật cho nông dân và doanh nghiệp.',
      icon: Handshake
    },
    {
      name: 'Ban Hợp tác và Đối ngoại',
      description: 'Phát triển quan hệ hợp tác với các tổ chức trong và ngoài nước.',
      icon: Globe
    },
    {
      name: 'Ban Đào tạo và Truyền thông',
      description: 'Tổ chức các chương trình đào tạo và truyền thông về phát triển nông thôn.',
      icon: Users
    }
  ];

  const boardMembers = [
    {
      name: 'Ông Nguyễn Văn A',
      position: 'Chủ tịch Hội đồng Quản trị',
      qualification: 'Tiến sĩ Nông nghiệp, 20 năm kinh nghiệm'
    },
    {
      name: 'Bà Trần Thị B',
      position: 'Phó Chủ tịch',
      qualification: 'Thạc sĩ Kinh tế Nông nghiệp, 15 năm kinh nghiệm'
    },
    {
      name: 'Ông Lê Văn C',
      position: 'Giám đốc Điều hành',
      qualification: 'Tiến sĩ Công nghệ Sinh học, 18 năm kinh nghiệm'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="bg-gradient-hero text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-roboto-slab font-bold text-4xl md:text-5xl mb-6">
            {t('about.title')}
          </h1>
          <p className="font-lato text-xl max-w-3xl mx-auto opacity-90">
            Tìm hiểu về sứ mệnh, tầm nhìn và đội ngũ của Trung tâm Nghiên cứu và Phát triển Nông thôn
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-roboto-slab font-bold text-3xl text-primary mb-6">
              {t('about.mission.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center shadow-card">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="font-roboto-slab text-primary">Nghiên cứu</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Thực hiện các nghiên cứu khoa học ứng dụng phục vụ phát triển nông nghiệp và nông thôn bền vững.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-card">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Handshake className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="font-roboto-slab text-primary">Dịch vụ</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Cung cấp các dịch vụ tư vấn, đào tạo và chuyển giao công nghệ cho cộng đồng nông thôn.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-card">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-secondary" />
                </div>
                <CardTitle className="font-roboto-slab text-primary">Hợp tác</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Phát triển mạng lưới hợp tác với các tổ chức trong và ngoài nước để chia sẻ kinh nghiệm.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-gradient-rural">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-roboto-slab font-bold text-3xl text-primary text-center mb-12">
            {t('about.history.title')}
          </h2>

          <div className="max-w-4xl mx-auto">
            <Card className="shadow-card">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-roboto-slab font-bold text-xl text-primary mb-3">
                      Thành lập và Phát triển
                    </h3>
                    <p className="text-foreground leading-relaxed">
                      Trung tâm Nghiên cứu và Phát triển Nông thôn (CRRD) được thành lập theo Quyết định số 06/QĐ-HLV 
                      của Hội Làm vườn tỉnh Quảng Bình. Trung tâm đã chính thức đăng ký hoạt động với Giấy chứng nhận 
                      số 06/2024/SKHCN, khẳng định vị thế là tổ chức nghiên cứu uy tín trong lĩnh vực phát triển nông thôn.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-roboto-slab font-bold text-xl text-primary mb-3">
                      Tầm nhìn và Định hướng
                    </h3>
                    <p className="text-foreground leading-relaxed">
                      CRRD hướng tới trở thành trung tâm nghiên cứu hàng đầu khu vực về phát triển nông thôn bền vững, 
                      đóng góp tích cực vào việc nâng cao đời sống của cộng đồng nông dân và phát triển kinh tế nông nghiệp 
                      tỉnh Quảng Bình nói riêng và cả nước nói chung.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-roboto-slab font-bold text-xl text-primary mb-3">
                      Thành tựu nổi bật
                    </h3>
                    <ul className="space-y-2 text-foreground">
                      <li className="flex items-start">
                        <Award className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        Triển khai thành công hơn 25 dự án nghiên cứu ứng dụng
                      </li>
                      <li className="flex items-start">
                        <Award className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        Đào tạo và tư vấn cho hơn 1,000 hộ nông dân
                      </li>
                      <li className="flex items-start">
                        <Award className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        Hợp tác với 15 tổ chức quốc tế và trong nước
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-roboto-slab font-bold text-3xl text-primary text-center mb-12">
            {t('about.team.title')}
          </h2>

          {/* Board of Directors */}
          <div className="mb-16">
            <h3 className="font-roboto-slab font-bold text-2xl text-center mb-8">
              Ban Lãnh đạo
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {boardMembers.map((member, index) => (
                <Card key={index} className="text-center shadow-card">
                  <CardHeader>
                    <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-10 h-10 text-white" />
                    </div>
                    <CardTitle className="font-roboto-slab text-primary">
                      {member.name}
                    </CardTitle>
                    <p className="text-accent font-medium">{member.position}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {member.qualification}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Departments */}
          <div>
            <h3 className="font-roboto-slab font-bold text-2xl text-center mb-8">
              Các Ban Chuyên môn
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {departments.map((dept, index) => (
                <Card key={index} className="shadow-card">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <dept.icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="font-roboto-slab text-primary">
                        {dept.name}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground">
                      {dept.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;