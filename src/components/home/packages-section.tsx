import Image from "next/image";
import Link from "next/link";
import { healthPackages, siteUrl } from "@/components/data/site-data";
import { Arrow } from "@/components/ui/icons";
import SiteContainer from "@/components/ui/site-container";

export default function PackagesSection() {
  return (
    <section id="health-packages" className="bg-[#f7f8f4] py-[108px] max-[900px]:py-20 max-[620px]:py-[65px]">
      <SiteContainer>
        <div className="reveal-section mb-10 flex items-end justify-between gap-[30px] max-[620px]:mb-[27px] max-[620px]:flex-col max-[620px]:items-start max-[620px]:gap-4">
          <div>
            <span className="inline-flex items-center gap-[9px] text-[10px] font-bold uppercase tracking-[.14em] text-[#537594]">A little care goes a long way</span>
            <h2 className="mt-[18px] font-serif text-[clamp(38px,4vw,54px)] leading-[1.06] font-normal tracking-[-.055em] text-forest-deep max-[900px]:text-[42px]">
              Make room for <em className="font-normal text-coral">wellness.</em>
            </h2>
          </div>
          <Link href={`${siteUrl}/contact-us/`} className="inline-flex items-center gap-2.5 text-[11px] font-bold text-forest transition hover:text-coral">
            Ask about health packages <Arrow />
          </Link>
        </div>
        <div className="grid grid-cols-4 gap-5 max-[900px]:grid-cols-2 max-[620px]:gap-[11px]">
          {healthPackages.map((item) => (
            <article
              className="group reveal-section overflow-hidden rounded-[22px] border border-[#e1e9f0] bg-white text-center shadow-[0_12px_30px_rgba(18,52,81,.14),0_3px_8px_rgba(18,52,81,.07)] transition duration-300 hover:-translate-y-1.5 hover:border-[#b7cbdc] hover:shadow-[0_22px_42px_rgba(18,52,81,.2),0_6px_12px_rgba(18,52,81,.1)]"
              key={item.name}
            >
              <div className="relative aspect-[1.14] overflow-hidden bg-[#e2e8de]">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  unoptimized
                  sizes="(max-width: 760px) 90vw, 25vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.04]"
                />
                <span className="absolute top-[13px] left-1/2 -translate-x-1/2 rounded-[20px] border border-white/65 bg-white/90 px-3 py-[7px] text-[10px] font-bold text-forest">
                  Wellness
                </span>
              </div>
              <div className="flex min-h-[190px] flex-col items-center px-[18px] pt-5 pb-[18px] max-[620px]:min-h-[175px] max-[620px]:px-3 max-[620px]:py-[15px]">
                <h3 className="m-0 text-lg leading-[1.3] font-extrabold text-forest-deep max-[620px]:min-h-10 max-[620px]:text-[15px]">{item.name}</h3>
                <p className="mt-[9px] mb-[17px] min-h-[34px] text-xs leading-[1.5] text-[#68798a] max-[620px]:mb-[17px] max-[620px]:min-h-[35px] max-[620px]:text-[10px]">
                  {item.detail}
                </p>
                <div className="mt-auto flex w-full items-center justify-center gap-2.5 border-t border-[#edf0ea] pt-[13px]">
                  <span className="text-xs font-bold text-forest max-[620px]:text-[10px]">Explore package</span>
                  <Link
                    href={`${siteUrl}/contact-us/`}
                    aria-label={`Learn about ${item.name}`}
                    className="grid h-[30px] w-[30px] place-items-center rounded-full border border-[#dce5dc] text-[#527465] transition hover:bg-forest hover:text-white max-[620px]:h-[27px] max-[620px]:w-[27px]"
                  >
                    <Arrow diagonal />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </SiteContainer>
    </section>
  );
}
