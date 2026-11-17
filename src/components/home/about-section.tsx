"use client";

import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { siteUrl } from "@/components/data/site-data";
import SiteContainer from "@/components/ui/site-container";

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);
    const section = sectionRef.current;
    if (!section) return;

    const context = gsap.context(() => {
      const readMore = section.querySelector<HTMLElement>(".about-read-more");

      gsap.set(readMore, { autoAlpha: 0, y: 18 });

      SplitText.create(section.querySelectorAll<HTMLElement>(".about-line-text"), {
        type: "lines",
        linesClass: "about-line",
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

          if (readMore) {
            timeline.to(readMore, { autoAlpha: 1, y: 0, duration: 0.3, ease: "none" });
          }

          return timeline;
        },
      });
    }, section);

    return () => context.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="relative isolate overflow-hidden bg-forest-deep py-[120px] text-white max-[900px]:py-20 max-[620px]:py-[65px]">
      <Image
        src={`${siteUrl}/wp-content/uploads/2025/07/about-sammprada-collage.webp`}
        alt=""
        fill
        unoptimized
        sizes="100vw"
        aria-hidden="true"
        className="absolute inset-0 -z-20 object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(5,25,48,.96)_0%,rgba(9,43,70,.88)_48%,rgba(9,43,70,.48)_100%)] max-[620px]:bg-[linear-gradient(180deg,rgba(5,25,48,.88)_0%,rgba(9,43,70,.94)_100%)]" />
      <SiteContainer className="relative">
        <div className="max-w-[730px]">
          <span className="about-line-text inline-flex items-center gap-[9px] text-[10px] font-bold uppercase tracking-[.18em] text-[#a9dce4]">
            Every patient matters
          </span>
          <h2 className="about-line-text mt-5 mb-6 max-w-[650px] font-serif text-[clamp(40px,5vw,68px)] leading-[1.02] font-normal tracking-[-.045em] text-white max-[620px]:text-[38px]">
            About Sammprada <em className="font-normal text-[#71d0d5]">Hospital</em>
          </h2>
          <p className="about-line-text max-w-[650px] text-[16px] leading-[1.8] text-white/85 max-[620px]:text-[14px]">
            Rooted in the Sanskrit word Sammprada, meaning to bestow, grant, or impart, our philosophy centers on delivering ethical, high-quality, and trustworthy healthcare in a modern setting.
          </p>
          <p className="about-line-text mt-5 max-w-[650px] text-[16px] leading-[1.8] text-white/85 max-[620px]:mt-4 max-[620px]:text-[14px]">
            Under the leadership of Dr. Radheshyam Naik—one of India’s foremost medical oncologists and a pioneer in Bone Marrow Transplants with over 500 procedures—the hospital has grown into a respected cancer care destination in Bangalore.
          </p>
          <p className="about-line-text mt-5 max-w-[650px] text-[16px] leading-[1.8] text-white/85 max-[620px]:mt-4 max-[620px]:text-[14px]">
            Originally known as Rajalakshmi Hospital, we began a new chapter in 2020 with a renewed focus on excellence, innovation, and compassionate care. Our team of expert consultants, advanced medical technology, and caring staff work together to ensure the highest standards in treatment.
          </p>
          <Link href={`${siteUrl}/about-us/`} className="about-read-more mt-8 inline-flex min-h-[50px] items-center justify-center rounded-xl border border-white/30 bg-white px-[25px] text-[15px] font-semibold text-forest-deep transition-colors hover:bg-[#dff5f5] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
            Read More
          </Link>
        </div>
      </SiteContainer>
    </section>
  );
}
