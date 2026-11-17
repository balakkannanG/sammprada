import Link from "next/link";
import { siteUrl } from "@/components/data/site-data";
import { Arrow } from "@/components/ui/icons";
import SiteContainer from "@/components/ui/site-container";

export default function ClosingCta() {
  return (
    <section className="bg-[#b8cde0] py-[72px] max-[620px]:py-14">
      <SiteContainer className="reveal-section flex items-center justify-between gap-[35px] max-[620px]:flex-col max-[620px]:items-start max-[620px]:gap-[25px]">
        <div>
          <span className="inline-flex items-center gap-[9px] text-[10px] font-bold uppercase tracking-[.14em] text-[#315779]">Your next step starts here</span>
          <h2 className="mt-[15px] font-serif text-[clamp(39px,4.4vw,57px)] leading-[1.04] font-normal tracking-[-.045em] text-forest-deep max-[620px]:text-[44px]">
            Let’s find the care<br /><em className="font-normal text-[#318ba7]">that feels right.</em>
          </h2>
        </div>
        <Link href={`${siteUrl}/contact-us/`} className="inline-flex min-h-12 shrink-0 items-center justify-center gap-[13px] rounded bg-forest px-[19px] text-[11px] font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#315779]">
          Book an appointment <Arrow diagonal />
        </Link>
      </SiteContainer>
    </section>
  );
}
