import AboutSection from "@/components/about-section";
import CareRibbon from "@/components/care-ribbon";
import ClosingCta from "@/components/closing-cta";
import DoctorsSection from "@/components/doctors-section";
import FaqSection from "@/components/faq-section";
import HeroSection from "@/components/hero-section";
import NewsSection from "@/components/news-section";
import OncologySection from "@/components/oncology-section";
import PackagesSection from "@/components/packages-section";
import QuoteSection from "@/components/quote-section";
import SiteAnimations from "@/components/site-animations";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import SpecialtiesSection from "@/components/specialties-section";
import VideoStoriesSection from "@/components/video-stories-section";

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
