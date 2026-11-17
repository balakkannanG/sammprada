"use client";

import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { siteAssets, siteUrl } from "@/components/data/site-data";
import { Arrow } from "@/components/ui/icons";
import SiteContainer from "@/components/ui/site-container";

const benefits = [
  "Infection-free healing environment",
  "Expert-led personalized care",
  "Disease-specific approach",
  "Evidence-based treatments",
  "Integrative wellness therapies",
  "Yoga, meditation, Ayurveda",
];

export default function OncologySection() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);
    const section = sectionRef.current;
    if (!section) return;

    const context = gsap.context(() => {
      const link = section.querySelector<HTMLElement>(".oncology-read-more");

      gsap.set(link, { autoAlpha: 0, y: 18 });

      SplitText.create(section.querySelectorAll<HTMLElement>(".oncology-line-text"), {
        type: "lines",
        linesClass: "oncology-line",
        mask: "lines",
        autoSplit: true,
        onSplit: (splitText) => {
          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: "top 72%",
              end: () => `+=${Math.max(window.innerHeight * 0.85, splitText.lines.length * 48)}`,
              scrub: 0.6,
              invalidateOnRefresh: true,
            },
          });

          timeline.from(splitText.lines, {
            autoAlpha: 0,
            yPercent: 100,
            duration: 1,
            stagger: 0.12,
            ease: "none",
          });

          if (link) {
            timeline.to(link, { autoAlpha: 1, y: 0, duration: 0.3, ease: "none" });
          }

          return timeline;
        },
      });
    }, section);

    return () => context.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-forest-deep py-[120px] text-white max-[900px]:py-20 max-[620px]:py-[65px]"
      aria-label="Oncology and wellness care"
    >
      <Image
        src={`${siteAssets}/2025/10/Onco-wellness-entrance-board-Website-scaled.png`}
        alt=""
        fill
        unoptimized
        sizes="100vw"
        aria-hidden="true"
        className="absolute inset-0 -z-20 object-cover object-[center_35%]"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(5,25,48,.96)_0%,rgba(9,43,70,.9)_52%,rgba(9,43,70,.55)_100%)] max-[620px]:bg-[linear-gradient(180deg,rgba(5,25,48,.9)_0%,rgba(9,43,70,.95)_100%)]" />
      <SiteContainer className="relative">
        <div className="max-w-[730px]">
          <span className="oncology-line-text inline-flex items-center gap-[9px] text-[10px] font-bold uppercase tracking-[.18em] text-[#a9dce4]">
            Care that sees the whole person
          </span>
          <h2 className="oncology-line-text mt-5 mb-6 max-w-[650px] font-serif text-[clamp(40px,5vw,68px)] leading-[1.02] font-normal tracking-[-.045em] text-white max-[620px]:text-[38px]">
            Sammprada advantages <em className="font-normal text-[#71d0d5]">include</em>
          </h2>
          <p className="oncology-line-text max-w-[650px] text-[16px] leading-[1.8] text-white/85 max-[620px]:text-[14px]">
            Sammprada Hospital is a new-age super-specialty center with a patient-first philosophy. We go beyond treating disease to enhance our patients’ overall quality of life. Our distinctive multi-modality approach empowers individuals to live fully, without compromise.
          </p>
          <ul className="mt-6 mb-8 grid list-none gap-3 p-0">
            {benefits.map((benefit) => (
              <li
                key={benefit}
                className="flex min-h-7 items-center gap-3 text-[15px] leading-[1.5] text-[#e6edf2] max-[620px]:text-sm"
              >
                <span className="grid h-[25px] w-[25px] shrink-0 place-items-center rounded-full border border-[#8bd1dd] bg-[#69bfd01c] text-[#8bd1dd]" aria-hidden="true">
                  <svg className="h-[15px] w-[15px]" viewBox="0 0 16 16" fill="none">
                    <path d="m3.5 8.2 2.8 2.7 6.2-6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
                  </svg>
                </span>
                <span className="oncology-line-text">{benefit}</span>
              </li>
            ))}
          </ul>
          <Link
            href={`${siteUrl}/about-oncology/`}
            className="oncology-read-more inline-flex min-h-12 items-center justify-center gap-[13px] rounded bg-[#edf3f8] px-[19px] text-[11px] font-bold text-forest-deep transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Explore Onco + Wellness <Arrow />
          </Link>
        </div>
      </SiteContainer>
    </section>
  );
}
