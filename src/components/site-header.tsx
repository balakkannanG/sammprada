"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { navigation, siteLogo, siteUrl, type MenuItem } from "@/components/data/site-data";
import { Arrow } from "@/components/ui/icons";
import SiteContainer from "@/components/ui/site-container";

function Dropdown({ item }: { item: MenuItem }) {
  return (
    <li className="group/menu relative list-none">
      <Link
        href={item.href}
        className="flex min-h-[42px] items-center gap-[5px] whitespace-nowrap px-1.5 text-[11px] font-semibold text-[#355575] transition-colors hover:text-coral group-focus-within/menu:text-coral max-[1200px]:px-[7px] max-[1200px]:text-[10px]"
      >
        {item.label}
        {item.children && (
          <span className="inline-flex h-[14px] w-[14px] shrink-0 items-center justify-center text-[#8098ae]" aria-hidden="true">
            <svg className="h-3 w-3 overflow-visible [&_path]:stroke-current [&_path]:[stroke-linecap:round] [&_path]:[stroke-linejoin:round] [&_path]:[stroke-width:1.4]" viewBox="0 0 12 12" fill="none">
              <path d="m3 4.5 3 3 3-3" />
            </svg>
          </span>
        )}
      </Link>
      {item.children && (
        <ul className={`invisible absolute top-full left-0 z-30 m-0 max-h-[min(72vh,680px)] w-[228px] list-none rounded-xl border border-[#e4eaf0] bg-white p-[9px] opacity-0 shadow-[0_18px_42px_#0119541a] transition-[opacity,transform,visibility] duration-[180ms] group-hover/menu:visible group-hover/menu:translate-y-0 group-hover/menu:opacity-100 group-focus-within/menu:visible group-focus-within/menu:translate-y-0 group-focus-within/menu:opacity-100 [transform:translateY(7px)] ${item.children.some((child) => child.children) ? "overflow-visible" : "overflow-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"}`}>
          {item.children.map((child) => (
            <li className="group/sub relative list-none" key={child.label}>
              <Link
                href={child.href}
                className="flex min-h-[38px] items-center justify-between gap-[5px] rounded-[7px] px-3 text-xs font-medium text-[#355575] transition-colors hover:bg-[#eef4fa] hover:text-coral group-focus-within/sub:bg-[#eef4fa] group-focus-within/sub:text-coral"
              >
                {child.label}
                {child.children && (
                  <span className="inline-flex h-[14px] w-[14px] shrink-0 items-center justify-center text-[#8098ae]" aria-hidden="true">
                    <svg className="h-3 w-3 overflow-visible [&_path]:stroke-current [&_path]:[stroke-linecap:round] [&_path]:[stroke-linejoin:round] [&_path]:[stroke-width:1.4]" viewBox="0 0 12 12" fill="none">
                      <path d="m4.5 3 3 3-3 3" />
                    </svg>
                  </span>
                )}
              </Link>
              {child.children && (
                <ul className="invisible absolute top-0 left-full z-40 m-0 max-h-[min(72vh,680px)] w-[228px] list-none overflow-auto rounded-xl border border-[#e4eaf0] bg-white p-[9px] opacity-0 shadow-[0_18px_42px_#0119541a] transition-[opacity,transform,visibility] duration-[180ms] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden [transform:translateY(7px)] group-hover/sub:visible group-hover/sub:translate-y-0 group-hover/sub:opacity-100 group-focus-within/sub:visible group-focus-within/sub:translate-y-0 group-focus-within/sub:opacity-100">
                  {child.children.map((grandchild) => (
                    <li className="list-none" key={grandchild.label}>
                      <Link
                        href={grandchild.href}
                        className="flex min-h-[38px] items-center rounded-[7px] px-3 text-xs font-medium text-[#355575] hover:bg-[#eef4fa] hover:text-coral"
                      >
                        {grandchild.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <div className="fixed top-0 right-0 left-0 z-50">
      <div className="bg-forest-deep text-[11px] tracking-[.045em] text-[#e4edf5]">
        <SiteContainer className="flex min-h-9 items-center justify-between max-[620px]:min-h-[34px] max-[620px]:justify-center">
          <span className="max-[620px]:hidden">Thoughtful care. For every stage of life.</span>
          <div className="flex items-center gap-5 max-[620px]:gap-[11px] max-[620px]:text-[9px]">
            <a className="hover:text-coral" href="tel:+919900018131">Call: +91 99000 18131</a>
            <span className="h-3 w-px bg-[#708ca7]" />
            <a className="hover:text-coral" href={`${siteUrl}/contact-us/`}>Find us in Bengaluru</a>
          </div>
        </SiteContainer>
      </div>

      <header className="relative z-20 border-b border-[rgba(1,25,84,.1)] bg-[rgba(248,250,252,.97)]">
        <SiteContainer className="flex min-h-[88px] items-center justify-between gap-6 max-[1200px]:gap-3 max-[900px]:min-h-[76px] max-[620px]:min-h-[70px]">
          <Link href="#top" className="flex flex-none items-center gap-[10px]" aria-label="Sammprada Hospital home">
            <Image
              src={siteLogo}
              alt="Sammprada Hospital"
              width={190}
              height={190}
              unoptimized
              priority
              className="h-auto w-[174px] object-contain object-left max-[1200px]:w-[155px] max-[620px]:w-[158px]"
            />
          </Link>

          <nav className="max-[1200px]:hidden" aria-label="Main navigation">
            <ul className="m-0 flex list-none items-center gap-0 p-0">{navigation.map((item) => <Dropdown key={item.label} item={item} />)}</ul>
          </nav>

          <Link href={`${siteUrl}/contact-us/`} className="inline-flex min-h-[42px] items-center justify-center gap-[13px] whitespace-nowrap rounded bg-forest px-[15px] text-[10px] font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#1b4f80] max-[1200px]:hidden">
            Book an appointment <Arrow diagonal />
          </Link>
          <button
            type="button"
            className="grid h-[42px] w-[42px] content-center justify-items-center gap-[6px] rounded-full border border-[#dce5db] bg-transparent text-forest transition max-[1200px]:grid min-[1201px]:hidden"
            onClick={() => setMobileOpen((value) => !value)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <span className={`block h-px w-4 bg-current transition-transform ${mobileOpen ? "translate-y-[3.5px] rotate-45" : ""}`} />
            <span className={`block h-px w-4 bg-current transition-transform ${mobileOpen ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
          </button>
        </SiteContainer>
        <AnimatePresence>
          {mobileOpen && (
            <motion.nav
              className="absolute top-full right-0 left-0 z-30 flex max-h-[calc(100vh-112px)] flex-col overflow-auto border-t border-[#e7ece5] bg-paper px-[22px] pt-2 pb-[22px] shadow-[0_20px_32px_#123b3012] max-[620px]:max-h-[calc(100vh-104px)] min-[1201px]:hidden"
              aria-label="Mobile navigation"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
            >
              {navigation.map((item) => (
                item.children ? (
                  <details key={item.label} className="border-b border-[#e3e9e1]">
                    <summary className="flex cursor-pointer list-none justify-between py-[13px] text-[13px] font-semibold text-[#315575] [&::-webkit-details-marker]:hidden">
                      {item.label}<span className="text-coral">+</span>
                    </summary>
                    <Link className="block border-b border-[#e3e9e1] py-3 pl-[13px] text-xs text-[#315575]" href={item.href} onClick={() => setMobileOpen(false)}>
                      Explore {item.label}
                    </Link>
                    {item.children.map((child) => (
                      child.children ? (
                        <details key={child.label} className="ml-[10px] border-l border-[#dce5ef] py-0 pl-[10px]">
                          <summary className="flex cursor-pointer list-none justify-between py-[13px] text-xs font-semibold text-[#315575] [&::-webkit-details-marker]:hidden">
                            {child.label}<span className="text-coral">+</span>
                          </summary>
                          {child.children.map((leaf) => (
                            <Link className="block border-b border-[#e3e9e1] py-3 pl-[13px] text-xs text-[#315575]" key={leaf.label} href={leaf.href} onClick={() => setMobileOpen(false)}>
                              {leaf.label}
                            </Link>
                          ))}
                        </details>
                      ) : (
                        <Link className="block border-b border-[#e3e9e1] py-3 pl-[13px] text-xs text-[#315575]" key={child.label} href={child.href} onClick={() => setMobileOpen(false)}>
                          {child.label}
                        </Link>
                      )
                    ))}
                  </details>
                ) : (
                  <Link className="block border-b border-[#e3e9e1] py-3 text-[13px] text-[#315575]" key={item.label} href={item.href} onClick={() => setMobileOpen(false)}>
                    {item.label}
                  </Link>
                )
              ))}
              <Link
                href={`${siteUrl}/contact-us/`}
                className="mt-[17px] inline-flex min-h-12 self-start items-center justify-center gap-[13px] rounded bg-forest px-[19px] text-[11px] font-bold text-white transition hover:bg-[#1b4f80]"
                onClick={() => setMobileOpen(false)}
              >
                Book an appointment <Arrow />
              </Link>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
      </div>
      <div className="h-[124px] min-[621px]:h-[112px] min-[901px]:h-[124px] max-[620px]:h-[104px]" aria-hidden="true" />
    </>
  );
}
