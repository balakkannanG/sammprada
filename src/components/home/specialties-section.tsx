import Image from "next/image";
import Link from "next/link";
import { siteUrl, specialties, specialtyImages, specialtyItems } from "@/components/data/site-data";
import { Arrow, Mark } from "@/components/ui/icons";
import SiteContainer from "@/components/ui/site-container";

export default function SpecialtiesSection() {
  return (
    <section id="specialties" className="bg-[radial-gradient(ellipse_at_10%_12%,#e1edf5_0,transparent_34%),#f5f8fa] py-[108px] max-[900px]:py-20 max-[620px]:py-[65px]">
      <SiteContainer>
        <div className="reveal-section mb-10 flex items-end justify-between gap-[30px] max-[620px]:mb-[27px] max-[620px]:flex-col max-[620px]:items-start max-[620px]:gap-4">
          <div>
            <span className="inline-flex items-center gap-[9px] text-[10px] font-bold uppercase tracking-[.14em] text-[#537594]">One team. Many specialties.</span>
            <h2 className="mt-[18px] font-serif text-[clamp(38px,4vw,54px)] leading-[1.06] font-normal tracking-[-.055em] text-forest-deep max-[900px]:text-[42px]">
              Expertise for <em className="font-normal text-coral">every you.</em>
            </h2>
          </div>
          <p className="mb-1 max-w-[340px] text-xs leading-[1.8] text-[#75827b] max-[620px]:max-w-full max-[620px]:text-[11px]">
            Thoughtful, joined-up care from specialists who look beyond symptoms to understand the person.
          </p>
        </div>
        <div className="grid grid-cols-4 gap-4 max-[900px]:grid-cols-3 max-[620px]:grid-cols-2">
          {specialties.map((specialty, index) => (
            <Link
              href={specialtyItems[index].href}
              key={specialty}
              className="group relative isolate flex min-h-[170px] flex-col justify-between overflow-hidden rounded-xl border border-[#dce5ed] bg-[#244a67] p-[19px] shadow-[0_7px_18px_#18344b0c] transition duration-300 hover:z-[1] hover:-translate-y-1 hover:border-[#9fb7c8] hover:shadow-[0_17px_30px_#18344b24] max-[620px]:min-h-[146px] max-[620px]:p-[15px]"
            >
              <Image
                src={specialtyImages[specialty]}
                alt=""
                aria-hidden="true"
                fill
                unoptimized
                sizes="(max-width: 620px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="absolute inset-0 -z-10 object-cover"
              />
              <span className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(180deg,#0000001f_0%,#00000014_38%,#0000008c_100%)] transition-colors group-hover:bg-[linear-gradient(180deg,#0000002e_0%,#0000001f_34%,#000000a6_100%)]" />
              <span className="relative z-[1] grid h-[39px] w-[39px] place-items-center rounded-full border border-white/35 bg-white/90 text-[#315d7e] shadow-[0_4px_12px_#0e2b4426] [&>svg]:h-[21px] [&>svg]:w-[21px]">
                <Mark kind={index % 2 ? "plus" : "heart"} />
              </span>
              <strong className="relative z-[1] mt-6 max-w-[calc(100%-18px)] text-[13px] leading-[1.45] font-bold text-white [text-shadow:0_2px_10px_#0a2038aa] max-[620px]:max-w-[145px] max-[620px]:text-[11px]">
                {specialty}
              </strong>
              <span className="absolute right-[14px] bottom-[17px] z-[1] grid h-[27px] w-[27px] place-items-center rounded-full border border-white/45 bg-white/90 text-[#315d7e] transition duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:bg-coral group-hover:text-white max-[620px]:right-3 max-[620px]:bottom-[14px]">
                <Arrow diagonal />
              </span>
            </Link>
          ))}
        </div>
        <div className="flex items-center justify-between gap-[18px] pt-[22px] text-[10px] text-[#8a978f] max-[620px]:flex-col max-[620px]:items-start max-[620px]:text-[9px]">
          <span>And many more services, all connected to your care.</span>
          <Link href={`${siteUrl}/specialities/`} className="inline-flex items-center gap-2.5 text-[11px] font-bold text-forest transition hover:text-coral">
            View all specialties <Arrow />
          </Link>
        </div>
      </SiteContainer>
    </section>
  );
}
