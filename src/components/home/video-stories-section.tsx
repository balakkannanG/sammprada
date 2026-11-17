"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { hospitalVideos } from "@/components/data/site-data";
import SiteContainer from "@/components/ui/site-container";

export default function VideoStoriesSection() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  function scrollCarousel(direction: -1 | 1) {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const firstCard = carousel.querySelector<HTMLElement>(".video-card");
    const gap = Number.parseFloat(getComputedStyle(carousel).columnGap) || 0;
    const distance = firstCard ? firstCard.offsetWidth + gap : carousel.clientWidth;
    carousel.scrollBy({ left: direction * distance, behavior: "smooth" });
  }

  return (
    <section className="overflow-hidden bg-[#edf3f7] py-[108px] max-[900px]:py-20 max-[620px]:py-[65px]" aria-labelledby="video-stories-title">
      <SiteContainer>
        <div className="mb-10 flex items-end justify-between gap-[30px] max-[620px]:mb-[27px] max-[620px]:flex-col max-[620px]:items-start max-[620px]:gap-4">
          <div>
            <span className="inline-flex items-center gap-[9px] text-[10px] font-bold uppercase tracking-[.14em] text-[#537594]">From Sammprada</span>
            <h2 id="video-stories-title" className="mt-[18px] font-serif text-[clamp(38px,4vw,54px)] leading-[1.06] font-normal tracking-[-.055em] text-forest-deep max-[900px]:text-[42px]">
              Care stories &amp; <em className="font-normal text-coral">expert voices.</em>
            </h2>
          </div>
          <p className="mb-1 max-w-[340px] text-xs leading-[1.8] text-[#75827b] max-[620px]:max-w-full max-[620px]:text-[11px]">
            Hear from our specialists, patients and care teams through the latest
            videos from Sammprada Hospital.
          </p>
        </div>

        <div className="mb-5 flex items-center justify-between max-[620px]:mt-0" aria-label="Video carousel controls">
          <a
            className="text-[11px] font-bold text-forest max-[620px]:max-w-[180px] max-[620px]:text-[10px]"
            href="https://www.youtube.com/@sammpradahospital"
            target="_blank"
            rel="noreferrer"
          >
            Visit our YouTube channel <span className="ml-[5px] text-coral" aria-hidden="true">↗</span>
          </a>
          <div className="flex gap-2">
            <button className="grid h-10 w-10 place-items-center rounded-full border border-[#c9d8e2] text-lg text-forest transition hover:bg-forest hover:text-white max-[620px]:h-9 max-[620px]:w-9" type="button" onClick={() => scrollCarousel(-1)} aria-label="Previous videos">
              <span aria-hidden="true">←</span>
            </button>
            <button className="grid h-10 w-10 place-items-center rounded-full border border-[#c9d8e2] text-lg text-forest transition hover:bg-forest hover:text-white max-[620px]:h-9 max-[620px]:w-9" type="button" onClick={() => scrollCarousel(1)} aria-label="Next videos">
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>

        <div className="flex snap-x snap-mandatory gap-[18px] overflow-x-auto scroll-smooth px-0 pt-0.5 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden max-[620px]:gap-[14px]" ref={carouselRef} aria-label="Sammprada Hospital videos">
          {hospitalVideos.map((video) => (
            <article className="min-w-0 basis-[calc((100%-36px)/3)] shrink-0 snap-start max-[900px]:basis-[calc((100%-18px)/2)] max-[620px]:basis-[84vw]" key={video.id}>
              <div className="relative aspect-video overflow-hidden rounded-[5px_28px_5px_5px] bg-[#0c2340]">
                {playingVideo === video.id ? (
                  <iframe
                    className="absolute inset-0 h-full w-full border-0"
                    src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                ) : (
                  <button
                    type="button"
                    className="group relative grid h-full w-full place-items-center overflow-hidden bg-[#0c2340] p-0 after:pointer-events-none after:absolute after:inset-0 after:bg-[linear-gradient(0deg,#081a2b50,transparent_70%)]"
                    onClick={() => setPlayingVideo(video.id)}
                    aria-label={`Play: ${video.title}`}
                  >
                    <Image
                      src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                      alt=""
                      fill
                      unoptimized
                      sizes="(max-width: 620px) 84vw, (max-width: 900px) 60vw, 36vw"
                      className="object-cover transition duration-300 group-hover:scale-[1.04]"
                    />
                    <span className="relative z-[1] grid h-[54px] w-[54px] place-items-center rounded-full border border-white/65 bg-[#011954d9] pl-[3px] text-[17px] text-white transition group-hover:scale-[1.08] group-hover:bg-coral" aria-hidden="true">▶</span>
                  </button>
                )}
              </div>
              <h3 className="mt-[14px] font-serif text-[17px] leading-[1.4] font-normal text-forest-deep max-[900px]:text-[15px] max-[620px]:text-base">{video.title}</h3>
            </article>
          ))}
        </div>
      </SiteContainer>
    </section>
  );
}
