import SiteContainer from "@/components/ui/site-container";

export default function QuoteSection() {
  return (
    <section className="bg-[#e7eff8] py-[88px] text-center max-[620px]:py-[63px]">
      <SiteContainer className="reveal-section grid justify-items-center">
        <span className="h-9 font-serif text-[64px] leading-[.8] text-[#b77c60]">“</span>
        <blockquote className="my-[17px] font-serif text-[clamp(25px,3.4vw,41px)] leading-[1.25] tracking-[-.03em] text-forest-deep max-[620px]:text-[27px]">
          We go beyond treating the disease.<br />
          <em className="font-normal text-coral">We care for the person living with it.</em>
        </blockquote>
        <span className="text-[9px] uppercase tracking-[.13em] text-[#71847a]">The Sammprada care philosophy</span>
      </SiteContainer>
    </section>
  );
}
