import AboutSection from "@/components/home/about-section";
import CareRibbon from "@/components/home/care-ribbon";
import ClosingCta from "@/components/home/closing-cta";
import DoctorsSection from "@/components/home/doctors-section";
import FaqSection from "@/components/home/faq-section";
import HeroSection from "@/components/home/hero-section";
import NewsSection from "@/components/home/news-section";
import OncologySection from "@/components/home/oncology-section";
import PackagesSection from "@/components/home/packages-section";
import QuoteSection from "@/components/home/quote-section";
import SiteAnimations from "@/components/site-animations";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import SpecialtiesSection from "@/components/home/specialties-section";
import VideoStoriesSection from "@/components/home/video-stories-section";

export default function Home() {
  return (
    <div id="top" className="min-h-screen bg-[#f8fafc] text-[#152e4c]">
      <SiteAnimations />
      <SiteHeader />
      <main>
        <HeroSection />
        <CareRibbon />
        <AboutSection />
        <SpecialtiesSection />
        <DoctorsSection />
        <OncologySection />
        <PackagesSection />
        <QuoteSection />
        <VideoStoriesSection />
        <NewsSection />
        <FaqSection />
        <ClosingCta />
      </main>
      <SiteFooter />
    </div>
  );
}
