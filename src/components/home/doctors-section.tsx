import Image from "next/image";
import Link from "next/link";
import { doctors, siteUrl } from "@/components/data/site-data";
import { Arrow } from "@/components/ui/icons";
import SiteContainer from "@/components/ui/site-container";

export default function DoctorsSection() {
  return (
    <section id="doctors" className="bg-[#f3f6fa] py-[108px] max-[900px]:py-20 max-[620px]:py-[65px]">
      <SiteContainer>
        <div className="reveal-section mb-10 flex items-end justify-between gap-[30px] max-[620px]:mb-[27px] max-[620px]:flex-col max-[620px]:items-start max-[620px]:gap-4">
          <div>
            <span className="inline-flex items-center gap-[9px] text-[10px] font-bold uppercase tracking-[.14em] text-[#537594]">Meet the people behind your care</span>
            <h2 className="mt-[18px] font-serif text-[clamp(38px,4vw,54px)] leading-[1.06] font-normal tracking-[-.055em] text-forest-deep max-[900px]:text-[42px]">
              Our <em className="font-normal text-coral">doctors.</em>
            </h2>
          </div>
          <Link href={`${siteUrl}/our-doctors/`} className="inline-flex items-center gap-2.5 text-[11px] font-bold text-forest transition hover:text-coral">
            View all doctors <Arrow />
          </Link>
        </div>
        <div className="grid grid-cols-3 gap-[18px] max-[900px]:grid-cols-2 max-[900px]:gap-[13px] max-[620px]:grid-cols-1 max-[620px]:gap-[11px]">
          {doctors.map((doctor) => (
            <article key={doctor.name} className="group reveal-section flex min-h-[176px] min-w-0 items-center gap-[14px] overflow-hidden rounded-[14px] border border-[#e7e9ed] bg-white p-[11px] transition duration-300 hover:-translate-y-[3px] hover:border-[#d3dce6] hover:shadow-[0_12px_28px_#102e4c12] max-[900px]:min-h-[150px] max-[900px]:gap-[10px] max-[900px]:p-[9px] max-[620px]:min-h-[148px]">
              <Link
                href={`${siteUrl}/our-doctors/`}
                className="relative block h-[150px] w-[140px] min-w-[115px] basis-[40%] overflow-hidden rounded-[10px] bg-[#e3ebf2] max-[900px]:h-[130px] max-[900px]:w-[112px] max-[900px]:min-w-[95px] max-[620px]:h-[126px] max-[620px]:w-[126px] max-[620px]:min-w-[112px] max-[620px]:basis-[38%]"
                aria-label={`View ${doctor.name}`}
              >
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  unoptimized
                  sizes="(max-width: 620px) 42vw, (max-width: 900px) 28vw, 13vw"
                  className="object-cover object-top transition duration-500 group-hover:scale-[1.035]"
                />
                <span className="absolute bottom-2 left-2 grid h-[30px] w-[30px] place-items-center rounded-full bg-white text-forest transition group-hover:bg-coral group-hover:text-white">
                  <Arrow diagonal />
                </span>
              </Link>
              <div className="relative flex min-w-0 flex-1 flex-col items-start justify-center gap-[7px] overflow-hidden py-1 pr-0 pb-[37px] pl-0.5">
                <h3 className="m-0 text-[clamp(13px,1vw,16px)] leading-[1.35] font-bold text-[#202b38] max-[900px]:text-sm max-[620px]:text-[15px]">
                  {doctor.name}
                </h3>
                <span className="text-[11px] leading-[1.4] font-medium text-[#1596c8]">{doctor.specialty}</span>
                <p className="m-0 text-[10px] leading-[1.45] text-[#6d7986]">Specialist-led care at Sammprada Hospital</p>
                <Link
                  href={`${siteUrl}/contact-us/`}
                  className="invisible pointer-events-none absolute inset-x-0 bottom-0 flex min-h-[30px] translate-y-[calc(100%+8px)] items-center justify-center gap-[7px] rounded-[5px] bg-forest text-[10px] font-bold text-white opacity-0 transition duration-300 group-hover:visible group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100 hover:bg-forest-deep"
                >
                  Book now <Arrow diagonal />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </SiteContainer>
    </section>
  );
}
