"use client";

import { useState } from "react";
import { heroVideoSlides } from "@/components/data/site-data";

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  function showPreviousSlide() {
    setActiveSlide((current) => (current - 1 + heroVideoSlides.length) % heroVideoSlides.length);
  }

  function showNextSlide() {
    setActiveSlide((current) => (current + 1) % heroVideoSlides.length);
  }

  return (
    <section
      className="relative h-[clamp(300px,40vw,600px)] w-full overflow-hidden bg-[#061827] max-[620px]:h-[clamp(380px,78svh,620px)]"
      aria-label="Sammprada Hospital"
    >
      <div
        className="absolute inset-0 overflow-hidden bg-[#061827]"
        aria-roledescription="carousel"
        aria-label="Hospital video banner"
      >
        <div className="absolute inset-0 bg-[#061827] [&>video]:absolute [&>video]:inset-0 [&>video]:block [&>video]:h-full [&>video]:w-full [&>video]:object-cover [&>video]:object-center">
          <video
            key={heroVideoSlides[activeSlide].src}
            src={heroVideoSlides[activeSlide].src}
            poster={heroVideoSlides[activeSlide].poster}
            aria-label={heroVideoSlides[activeSlide].title}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
        </div>
        <div className="absolute right-6 bottom-20 z-[2] flex items-center overflow-hidden rounded-full border-[5px] border-white/90 bg-white shadow-[0_4px_12px_#0005] max-[620px]:right-4 max-[620px]:bottom-14 max-[620px]:border-4" aria-label="Video slide controls">
          <button
            className="group flex h-[30px] items-center gap-3 bg-gradient-to-b from-[#ff4c4c] to-[#d20d12] pr-5 pl-1.5 text-white transition-colors duration-200 hover:from-[#e93636] hover:to-[#bd090e] focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-[-5px] focus-visible:outline-white max-[620px]:h-8 max-[620px]:gap-2 max-[620px]:pr-3.5 max-[620px]:pl-1"
            type="button"
            onClick={showPreviousSlide}
            aria-label="Previous video"
          >
            <span className="grid h-[25px] w-[25px] shrink-0 place-items-center rounded-full bg-white text-[#dc2024] shadow-[0_1px_4px_#0003] transition-colors group-hover:bg-[#fff4f4] max-[620px]:h-[25px] max-[620px]:w-[25px]">
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M19 12H5m0 0 6 6m-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="text-[17px] font-semibold tracking-wide max-[620px]:text-sm">PREV</span>
          </button>
          <button
            className="group flex h-[30px] flex-row-reverse items-center gap-3 bg-gradient-to-b from-[#14395b] to-[#087cae] pr-1.5 pl-5 text-white transition-colors duration-200 hover:from-[#20a9dc] hover:to-[#066b98] focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-[-5px] focus-visible:outline-white max-[620px]:h-8 max-[620px]:gap-2 max-[620px]:pr-1 max-[620px]:pl-3.5"
            type="button"
            onClick={showNextSlide}
            aria-label="Next video"
          >
            <span className="grid h-[25px] w-[25px] shrink-0 place-items-center rounded-full bg-white text-[#149acb] shadow-[0_1px_4px_#0003] transition-colors group-hover:bg-[#f0fbff] max-[620px]:h-[25px] max-[620px]:w-[25px]">
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12h14m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="text-[17px] font-semibold tracking-wide max-[620px]:text-sm">NEXT</span>
          </button>
        </div>
        <div className="absolute bottom-5 left-1/2 z-[2] flex -translate-x-1/2 items-center gap-[7px] rounded-full border border-white/40 bg-[#061827]/50 px-3 py-2 backdrop-blur-sm max-[620px]:bottom-3 max-[620px]:gap-[5px] max-[620px]:px-[10px] max-[620px]:py-[6px]" aria-label="Choose a video slide">
          {heroVideoSlides.map((video, index) => (
              <button
                type="button"
                key={video.src}
                aria-label={`Show video ${index + 1}: ${video.title}`}
                aria-current={activeSlide === index ? "true" : undefined}
                className={`h-[7px] rounded-full transition-all duration-200 max-[620px]:h-[6px] ${activeSlide === index ? "w-5 bg-white max-[620px]:w-4" : "w-[7px] bg-white/60 max-[620px]:w-[6px]"}`}
                onClick={() => setActiveSlide(index)}
              />
            ))}
        </div>
      </div>
    </section>
  );
}
