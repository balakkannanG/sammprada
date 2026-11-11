import SiteContainer from "@/components/ui/site-container";

const hospitalStats = [
  { value: "300+", label: "Qualified Surgeons", icon: "surgeons" },
  { value: "50+", label: "Years of Experience", icon: "experience" },
  { value: "650", label: "Beds", icon: "beds" },
  { value: "25", label: "Health Departments", icon: "departments" },
] as const;

function StatIcon({ kind }: { kind: (typeof hospitalStats)[number]["icon"] }) {
  const iconClassName = "h-12 w-12 shrink-0 text-white max-[620px]:h-6 max-[620px]:w-6";

  if (kind === "surgeons") {
    return (
      <svg className={iconClassName} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
        <path d="M17 18c0-6 3-10 8-10s8 4 8 10-3 10-8 10-8-4-8-10Z" />
        <path d="M17 16c3 2 11 2 16 0M14 43v-5c0-6 5-10 11-10s11 4 11 10v5M14 36l-5 2-3 5M36 36l5 2 3 5M20 31l5 5 5-5M25 36v7M9 39v4m30-4v4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (kind === "experience") {
    return (
      <svg className={iconClassName} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
        <circle cx="24" cy="21" r="15" />
        <path d="m24 11 3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1 3-6ZM17 35v9l7-4 7 4v-9" strokeLinejoin="round" />
      </svg>
    );
  }

  if (kind === "beds") {
    return (
      <svg className={iconClassName} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
        <path d="M8 9v32M8 34h34v7M8 27h34v7M14 27v-9h9a5 5 0 0 1 5 5v4M28 27v-6a4 4 0 0 1 4-4h5a5 5 0 0 1 5 5v5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg className={iconClassName} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <path d="M24 41 7 25C-2 14 12 3 22 13l2 3 3-3C37 3 50 14 41 25L24 41Z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 24h9l4-7 6 15 4-8h9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function CareRibbon() {
  return (
    <section
      className="relative z-10 -mt-[52px] bg-transparent pb-8 max-[620px]:-mt-10"
      aria-label="Sammprada Hospital at a glance"
    >
      <SiteContainer>
        <div className="grid min-h-[130px] grid-cols-4 overflow-hidden rounded-[26px] bg-[#103665] px-5 py-5 text-white shadow-[0_16px_34px_#0c2d5226] max-[900px]:grid-cols-2 max-[620px]:min-h-0 max-[620px]:rounded-[18px] max-[620px]:px-2 max-[620px]:py-2">
          {hospitalStats.map((stat) => (
            <div
              key={stat.label}
              className="flex items-center justify-center gap-4 border-r border-white/25 px-4 last:border-r-0 max-[900px]:min-h-[66px] max-[900px]:border-r-0 max-[900px]:border-b max-[900px]:last:border-b-0 max-[900px]:[&:nth-child(odd)]:border-r max-[620px]:min-h-[54px] max-[620px]:gap-1.5 max-[620px]:px-1.5"
            >
              <StatIcon kind={stat.icon} />
              <span className="flex min-w-0 flex-col items-start">
                <strong className="font-sans text-[40px] leading-none font-bold tracking-tight text-white max-[900px]:text-[32px] max-[620px]:text-[22px]">
                  {stat.value}
                </strong>
                <span className="mt-1 text-[15px] leading-tight font-semibold text-[#d5e0ee] max-[900px]:text-[13px] max-[620px]:mt-0.5 max-[620px]:text-[9px]">
                  {stat.label}
                </span>
              </span>
            </div>
          ))}
        </div>
      </SiteContainer>
    </section>
  );
}
