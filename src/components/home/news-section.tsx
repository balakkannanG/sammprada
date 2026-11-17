import Image from "next/image";
import Link from "next/link";
import { articles, siteUrl } from "@/components/data/site-data";
import { Arrow } from "@/components/ui/icons";
import SiteContainer from "@/components/ui/site-container";

export default function NewsSection() {
  return (
    <section id="news" className="bg-white py-[108px] max-[900px]:py-20 max-[620px]:py-[65px]">
      <SiteContainer>
        <div className="reveal-section mb-10 flex items-end justify-between gap-[30px] max-[620px]:mb-[27px] max-[620px]:flex-col max-[620px]:items-start max-[620px]:gap-4">
          <div>
            <span className="inline-flex items-center gap-[9px] text-[10px] font-bold uppercase tracking-[.14em] text-[#537594]">Knowledge worth sharing</span>
            <h2 className="mt-[18px] font-serif text-[clamp(38px,4vw,54px)] leading-[1.06] font-normal tracking-[-.055em] text-forest-deep max-[900px]:text-[42px]">
              From our <em className="font-normal text-coral">care journal.</em>
            </h2>
          </div>
          <Link href={`${siteUrl}/news/`} className="inline-flex items-center gap-2.5 text-[11px] font-bold text-forest transition hover:text-coral">
            Visit our journal <Arrow />
          </Link>
        </div>
        <div className="grid grid-cols-3 gap-5 max-[620px]:grid-cols-1 max-[620px]:gap-7">
          {articles.map((article) => (
            <article key={article.title} className="group reveal-section">
              <Link href={article.href} className="relative block aspect-[1.48] overflow-hidden bg-[#e4e9e1] max-[620px]:aspect-[1.56]">
                <Image
                  src={article.image}
                  alt=""
                  fill
                  unoptimized
                  sizes="(max-width: 760px) 90vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.04]"
                />
                <span className="absolute right-3 bottom-3 grid h-[37px] w-[37px] place-items-center rounded-full bg-[#f7f8f4] text-forest">
                  <Arrow diagonal />
                </span>
              </Link>
              <div className="mt-4 flex items-center justify-between gap-[15px] text-[9px] text-[#91a096]">
                <span className="font-bold text-[#b77658]">{article.category}</span>
                <span>From Sammprada Hospital</span>
              </div>
              <h3 className="mt-[11px] max-w-[340px] font-serif text-xl leading-[1.3] font-normal text-[#24483f] max-[620px]:text-[19px]">
                <Link href={article.href} className="transition hover:text-[#b77658]">{article.title}</Link>
              </h3>
            </article>
          ))}
        </div>
      </SiteContainer>
    </section>
  );
}
