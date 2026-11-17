import Image from "next/image";
import Link from "next/link";
import { siteUrl } from "@/components/data/site-data";
import { Arrow } from "@/components/ui/icons";
import SiteAnimations from "@/components/site-animations";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import SiteContainer from "@/components/ui/site-container";
import { doctorDepartments } from "@/components/doctor/doctor-data";

const doctorCount = doctorDepartments.reduce(
  (count, department) => count + department.doctors.length,
  0,
);

function departmentId(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function doctorInitials(name: string) {
  return name
    .replace(/^Dr\.\s*/i, "")
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export default function OurDoctorsPageContent() {
  return (
    <div id="top" className="min-h-screen bg-[#f8fafc] text-[#152e4c]">
      <SiteAnimations />
      <SiteHeader />
      <main>
        <section className="relative isolate overflow-hidden bg-[#edf4f8] pt-[50px] pb-[76px] max-[900px]:pt-[145px] max-[900px]:pb-[62px] max-[620px]:pt-[128px] max-[620px]:pb-[48px]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-32 -right-20 -z-10 h-[430px] w-[430px] rounded-full border border-[#d6e4ec] max-[620px]:h-[300px] max-[620px]:w-[300px]"
          />
          <SiteContainer>
            <div className="reveal-section max-w-[760px]">
              <div className="mb-6 flex items-center gap-2 text-[11px] font-semibold text-[#60748a]">
                <Link href="/" className="transition hover:text-[#45a9c2]">
                  Home
                </Link>
                <span aria-hidden="true">/</span>
                <span className="text-[#152e4c]">Our doctors</span>
              </div>
              <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.16em] text-[#537594]">
                <span className="h-px w-7 bg-[#45a9c2]" />
                The people behind your care
              </span>
              <h1 className="mt-5 mb-0 font-serif text-[clamp(44px,6.2vw,78px)] leading-[.99] font-normal tracking-[-.06em] text-[#14395b] max-[620px]:text-[48px]">
                Meet your <em className="font-normal text-[#45a9c2]">doctors.</em>
              </h1>
              <p className="mt-6 mb-0 max-w-[570px] text-[15px] leading-[1.8] text-[#60748a] max-[620px]:mt-4 max-[620px]:text-[14px]">
                Expert guidance, thoughtful conversations, and care shaped around you.
                Get to know the specialists at Sammprada Hospital.
              </p>
            </div>
            <div className="reveal-section mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-[#d7e3eb] pt-5 text-[11px] font-medium text-[#60748a] max-[620px]:mt-7">
              <span>
                <strong className="mr-2 text-[19px] font-semibold text-[#14395b]">
                  {String(doctorCount).padStart(2, "0")}
                </strong>
                doctor listings
              </span>
              <span className="hidden h-4 w-px bg-[#cad8e2] min-[621px]:block" />
              <span>{doctorDepartments.length} departments with listed doctors</span>
            </div>
          </SiteContainer>
        </section>

        <section className="py-[78px] max-[900px]:py-[60px] max-[620px]:py-[46px]">
          <SiteContainer>
            <div className="reveal-section mb-7 flex items-end justify-between gap-5 max-[620px]:mb-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[.14em] text-[#537594]">
                  Sammprada Hospital
                </span>
                <h2 className="mt-3 mb-0 font-serif text-[clamp(30px,3.8vw,46px)] leading-[1.08] font-normal tracking-[-.045em] text-[#14395b]">
                  Find a specialist
                </h2>
              </div>
            </div>

            <nav aria-label="Doctor departments" className="reveal-section mb-12 flex flex-wrap gap-2 max-[620px]:mb-9">
              {doctorDepartments.map((department) => (
                <a
                  key={department.name}
                  href={`#${departmentId(department.name)}`}
                  className="rounded-full border border-[#dce5ef] bg-[linear-gradient(90deg,#45a9c233_0%,#45a9c200_100%)] px-3.5 py-2 text-[10px] font-semibold text-[#537594] transition hover:border-[#45a9c2] hover:bg-[linear-gradient(90deg,#45a9c255_0%,#45a9c200_100%)] hover:text-[#2586a4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2586a4]"
                >
                  {department.name}
                </a>
              ))}
            </nav>

            <div className="space-y-12 max-[620px]:space-y-9">
              {doctorDepartments.map((department) => (
                <section
                  id={departmentId(department.name)}
                  key={department.name}
                  aria-labelledby={`${departmentId(department.name)}-heading`}
                  className="scroll-mt-32"
                >
                  <div className="mb-5 flex items-center justify-between gap-4 border-b border-[#dce5ef] bg-[linear-gradient(90deg,#45a9c233_0%,#45a9c200_100%)] px-4 py-3">
                    <h3
                      id={`${departmentId(department.name)}-heading`}
                      className="m-0 font-serif text-[clamp(20px,2.4vw,27px)] leading-tight font-normal tracking-[-.025em] text-[#14395b]"
                    >
                      {department.name}
                    </h3>
                    <span className="shrink-0 rounded-full bg-[#eaf1f7] px-3 py-1.5 text-[10px] font-semibold text-[#537594]">
                      {department.doctors.length}{" "}
                      {department.doctors.length === 1 ? "doctor" : "doctors"}
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-[18px] max-[900px]:grid-cols-2 max-[900px]:gap-[13px] max-[620px]:grid-cols-1 max-[620px]:gap-[11px]">
                    {department.doctors.map((doctor) => (
                      <article
                        key={`${department.name}-${doctor.name}`}
                        className="reveal-section group flex min-h-[188px] min-w-0 items-center gap-[14px] overflow-hidden rounded-[14px] border border-[#e1e8ed] bg-white p-[11px] transition duration-300 hover:-translate-y-[3px] hover:border-[#cbdbe5] hover:shadow-[0_12px_28px_#14395b12] max-[900px]:min-h-[170px] max-[900px]:gap-[10px] max-[900px]:p-[9px] max-[620px]:min-h-[148px]"
                      >
                        <Link
                          href={`${siteUrl}${doctor.profilePath}`}
                          aria-label={`Know more about ${doctor.name}`}
                          className="relative grid aspect-square w-[40%] min-w-[112px] max-w-[160px] shrink-0 place-items-center overflow-hidden rounded-[10px] bg-[#e3ebf2] text-[24px] font-semibold text-[#537594] max-[900px]:min-w-0 max-[900px]:w-[40%] max-[620px]:w-[38%]"
                        >
                          {doctor.image ? (
                            <Image
                              src={doctor.image}
                              alt={doctor.name}
                              fill
                              unoptimized
                              sizes="(max-width: 620px) 38vw, (max-width: 900px) 20vw, 13vw"
                              className="object-cover object-top transition duration-500 group-hover:scale-[1.035]"
                            />
                          ) : (
                            <span aria-hidden="true">{doctorInitials(doctor.name)}</span>
                          )}
                          <span className="absolute bottom-2 left-2 grid h-[32px] w-[32px] place-items-center rounded-full bg-white text-[#14395b] shadow-sm transition group-hover:bg-[#45a9c2] group-hover:text-white">
                            <Arrow diagonal />
                          </span>
                        </Link>
                        <div className="relative flex min-w-0 flex-1 flex-col items-start justify-center gap-[7px] py-2 pb-[38px]">
                          <h4 className="m-0 text-[clamp(13px,1.15vw,17px)] leading-[1.35] font-bold text-[#202b38] max-[900px]:text-sm max-[620px]:text-[15px]">
                            {doctor.name}
                          </h4>
                          <p className="m-0 text-[11px] leading-[1.5] text-[#6d7986] max-[620px]:text-[10px]">
                            {doctor.qualifications}
                          </p>
                          <Link
                            href={`${siteUrl}${doctor.profilePath}`}
                            className="mt-1 inline-flex items-center gap-1.5 text-[10px] font-bold text-[#14395b] transition hover:text-[#2586a4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2586a4]"
                          >
                            Know more <Arrow diagonal />
                          </Link>
                          <Link
                            href={`${siteUrl}/contact-us/`}
                            aria-label={`Book an appointment with ${doctor.name}`}
                            className="doctor-book-appointment absolute inset-x-0 bottom-0 flex min-h-[30px] items-center justify-center gap-[7px] rounded-[5px] bg-[#14395b] px-2 text-[10px] font-bold text-white hover:bg-[#1b4f80] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#45a9c2]"
                          >
                            Book appointment <Arrow diagonal />
                          </Link>
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </SiteContainer>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
