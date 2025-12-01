"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardNine from '@/components/sections/feature/FeatureCardNine';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardFour from '@/components/sections/testimonial/TestimonialCardFour';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
      contentWidth="large"
      sizing="medium"
      background="floatingGradient"
      cardStyle="gradient-bordered"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="minimal"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="Розроб очек"
          navItems={[
            { name: "About", id: "about" },
            { name: "Services", id: "features" },
            { name: "Team", id: "team" },
            { name: "Contact", id: "contact" }
          ]}
          button={{ text: "Get Started", href: "contact" }}
          className="sticky top-4 z-50"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroCarouselLogo
          logoText="РОЗРОБ ОЧЕК"
          description="Інноваційні IT-рішення для вашого бізнесу. Ми створюємо технології, які змінюють світ"
          buttons={[
            { text: "Дізнатися більше", href: "about" },
            { text: "Контактуйте нас", href: "contact" }
          ]}
          slides={[
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/tmp/modern-office-workspace-technology-1764602502113-876dcb09.jpg", imageAlt: "Modern IT workspace" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/tmp/software-development-team-working-1764602503661-83438020.jpg", imageAlt: "Development team collaboration" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/tmp/digital-innovation-technology-1764602505125-f2312de1.jpg", imageAlt: "Technology innovation" }
          ]}
          autoplayDelay={4000}
          showDimOverlay={true}
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          title="Ми розробляємо цифрові рішення, які допомагають українським компаніям конкурувати на світовому ринку"
          buttons={[
            { text: "Наші послуги", href: "features" },
            { text: "Портфоліо проектів", href: "#" }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardNine
          title="Наші можливості"
          description="Повний спектр IT-послуг для розвитку вашого бізнесу"
          features={[
            {
              id: 1,
              title: "Веб-розробка",
              description: "Створення сучасних, відзивчивих вебсайтів та веб-застосунків з найновішими технологіями",
              phoneOne: { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/tmp/mobile-app-interface-design-1764602506391-ca100131.jpg" },
              phoneTwo: { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/tmp/smartphone-application-screen-1764602507603-675d1024.jpg" }
            },
            {
              id: 2,
              title: "Мобільні додатки",
              description: "Розробка iOS та Android додатків, які забезпечують найкращий користувацький досвід",
              phoneOne: { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/tmp/mobile-app-interface-design-1764602506391-ca100131.jpg" },
              phoneTwo: { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/tmp/smartphone-application-screen-1764602507603-675d1024.jpg" }
            }
          ]}
          showStepNumbers={true}
          textboxLayout="default"
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Наша команда"
          description="Талановиті фахівці з досвідом розробки для міжнародних компаній"
          members={[
            {
              id: "1",
              name: "Ілля Петренко",
              role: "Lead Developer",
              description: "Експерт з React та Node.js. 10 років досвіду в企业級розробці",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/tmp/professional-business-portrait-1764602508851-7e936a36.jpg"
            },
            {
              id: "2",
              name: "Марія Соколова",
              role: "Product Manager",
              description: "Керує розробкою інноваційних продуктів. Досвід з FAANG компаніями",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/tmp/tech-professional-headshot-1764602510348-107b35d9.jpg"
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          textboxLayout="default"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFour
          title="Що про нас кажуть клієнти"
          description="Задоволення наших клієнтів - найкраща репутація"
          testimonials={[
            {
              id: "1",
              name: "Олег Морозов",
              role: "CEO",
              company: "TechStart Ukraine",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/tmp/business-professional-portrait-1764602511917-efafbf9f.jpg"
            },
            {
              id: "2",
              name: "Ольга Левицька",
              role: "CTO",
              company: "Innovation Labs",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/tmp/corporate-team-member-photo-1764602513600-eb50848b.jpg"
            },
            {
              id: "3",
              name: "Василь Коваленко",
              role: "Founder",
              company: "Digital Solutions",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/tmp/business-person-headshot-1764602515321-45be557a.jpg"
            },
            {
              id: "4",
              name: "Наталія Іванова",
              role: "Project Manager",
              company: "Creative Agency",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/tmp/professional-workplace-portrait-1764602516582-d6c15169.jpg"
            }
          ]}
          textboxLayout="default"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Контакти"
          title="Почніть ваш проект сьогодні"
          description="Маємо питання? Хочете обговорити можливість співпраці? Напишіть нам - ми відповімо найскоріше"
          inputPlaceholder="Введіть ваш email"
          buttonText="Відправити"
          termsText="Натиснувши кнопку, ви погоджуєтесь з нашою політикою конфіденційності"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="Розроб очек"
          copyrightText="© 2025 | Розроб очек. Всі права захищені"
          columns={[
            {
              title: "Продукти",
              items: [
                { label: "Веб-розробка", href: "#" },
                { label: "Мобільні додатки", href: "#" },
                { label: "Консалтинг", href: "#" }
              ]
            },
            {
              title: "Компанія",
              items: [
                { label: "Про нас", href: "about" },
                { label: "Команда", href: "team" },
                { label: "Контакти", href: "contact" }
              ]
            },
            {
              title: "Правова інформація",
              items: [
                { label: "Умови використання", href: "#" },
                { label: "Політика конфіденційності", href: "#" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}