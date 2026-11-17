import Link from "next/link";
import { faqs, siteUrl } from "@/components/data/site-data";
import { Arrow } from "@/components/ui/icons";
import SiteContainer from "@/components/ui/site-container";

export default function FaqSection() {
  return (
    <section className="bg-[#f4f6f0] py-[108px] max-[900px]:py-20 max-[620px]:py-[65px]">
      <SiteContainer className="reveal-section grid grid-cols-[.72fr_1.28fr] gap-[100px] max-[900px]:grid-cols-[.8fr_1.2fr] max-[900px]:gap-[45px] max-[620px]:grid-cols-1 max-[620px]:gap-[29px]">
        <div>
          <span className="inline-flex items-center gap-[9px] text-[10px] font-bold uppercase tracking-[.14em] text-[#537594]">A few helpful answers</span>
          <h2 className="mt-[18px] font-serif text-[clamp(38px,4vw,54px)] leading-[1.06] font-normal tracking-[-.055em] text-forest-deep max-[900px]:text-[42px]">
            Good to <em className="font-normal text-coral">know.</em>
          </h2>
          <p className="mt-[21px] mb-[23px] max-w-[290px] text-[13px] leading-[1.9] text-[#6d7c73] max-[620px]:text-xs">
            Planning a visit or looking for care? We’re here to help you feel at ease.
          </p>
          <Link href={`${siteUrl}/contact-us/`} className="inline-flex items-center gap-2.5 text-[11px] font-bold text-forest transition hover:text-coral">
            Talk to our team <Arrow />
          </Link>
        </div>
        <div className="border-t border-[#dce3d8]">
          {faqs.map((faq, index) => (
            <details key={faq.question} open={index === 0} className="group border-b border-[#dce3d8]">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-[18px] py-[21px] font-serif text-[17px] text-[#294c42] marker:hidden max-[620px]:py-[17px] max-[620px]:text-[15px] [&::-webkit-details-marker]:hidden">
                <span>{faq.question}</span>
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-[#cbd8cc] font-sans text-[17px] font-light text-[#688376] transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-[-4px] mr-10 mb-5 max-w-[580px] text-xs leading-[1.8] text-[#75837b] max-[620px]:text-[11px]">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </SiteContainer>
    </section>
  );
}
