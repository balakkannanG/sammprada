import Image from "next/image";
import Link from "next/link";
import {
  footerSpecialtyLabels,
  siteLogo,
  siteUrl,
  specialtyItems,
} from "@/components/data/site-data";
import { Arrow } from "@/components/ui/icons";
import SiteContainer from "@/components/ui/site-container";

export default function SiteFooter() {
  return (
    <footer id="footer" className="bg-forest-deep text-[#edf3f8]">
      <SiteContainer className="grid grid-cols-[1.2fr_.9fr_.82fr_.82fr_1fr] gap-[22px] py-16 pb-[53px] max-[1200px]:gap-[30px] max-[900px]:grid-cols-2 max-[900px]:gap-y-10 max-[620px]:gap-x-[22px] max-[620px]:gap-y-[34px] max-[620px]:py-12 max-[620px]:pb-[38px]">
        <div className="max-[620px]:col-span-full">
          <Link href="#top" className="inline-flex items-center gap-[10px]">
            <Image src={siteLogo} alt="Sammprada Hospital" width={185} height={185} unoptimized className="h-auto w-[170px] object-contain" />
          </Link>
          <p className="my-[19px] max-w-[255px] text-[11px] leading-[1.8] text-[#b8c8d6] max-[620px]:max-w-[300px]">
            Better care begins with a better connection. We’re here for you and the people you love.
          </p>
          <div className="flex gap-2">
            <a className="grid h-[29px] w-[29px] place-items-center rounded-full border border-[#607c98] text-[10px] font-bold text-[#e4edf5] transition hover:bg-[#eaf0e9] hover:text-forest" href="https://www.facebook.com/sammpradahospital/" aria-label="Facebook">f</a>
            <a className="grid h-[29px] w-[29px] place-items-center rounded-full border border-[#607c98] text-[10px] font-bold text-[#e4edf5] transition hover:bg-[#eaf0e9] hover:text-forest" href="https://www.instagram.com/sammpradahospital/" aria-label="Instagram">ig</a>
            <a className="grid h-[29px] w-[29px] place-items-center rounded-full border border-[#607c98] text-[10px] font-bold text-[#e4edf5] transition hover:bg-[#eaf0e9] hover:text-forest" href="https://www.linkedin.com/company/sammprada-hospital/" aria-label="LinkedIn">in</a>
          </div>
        </div>
        <div className="flex flex-col items-start gap-3">
          <h3 className="mt-[5px] mb-[9px] font-serif text-base font-normal text-[#f2f5ef] max-[620px]:text-sm">Quick Links</h3>
          <Link className="text-[10px] leading-[1.55] text-[#b8c8d6] hover:text-[#73c3d2]" href={`${siteUrl}/our-doctors/`}>Our Team</Link>
          <Link className="text-[10px] leading-[1.55] text-[#b8c8d6] hover:text-[#73c3d2]" href={`${siteUrl}/rd/`}>R&amp;D</Link>
          <Link className="text-[10px] leading-[1.55] text-[#b8c8d6] hover:text-[#73c3d2]" href="https://sammprada.com/international-patients/">International Patients</Link>
          <Link className="text-[10px] leading-[1.55] text-[#b8c8d6] hover:text-[#73c3d2]" href={`${siteUrl}/news/`}>Blogs</Link>
          <Link className="text-[10px] leading-[1.55] text-[#b8c8d6] hover:text-[#73c3d2]" href={`${siteUrl}/careers/`}>Careers</Link>
          <Link className="text-[10px] leading-[1.55] text-[#b8c8d6] hover:text-[#73c3d2]" href={`${siteUrl}/testimonials-2/`}>Testimonials</Link>
          <Link className="text-[10px] leading-[1.55] text-[#b8c8d6] hover:text-[#73c3d2]" href={`${siteUrl}/news-article/`}>News &amp; Articles</Link>
          <Link className="text-[10px] leading-[1.55] text-[#b8c8d6] hover:text-[#73c3d2]" href="https://sammprada.com/csr-activities/">CSR Activities</Link>
          <Link className="text-[10px] leading-[1.55] text-[#b8c8d6] hover:text-[#73c3d2]" href={`${siteUrl}/media-coverage/`}>Media Coverage</Link>
          <Link className="text-[10px] leading-[1.55] text-[#b8c8d6] hover:text-[#73c3d2]" href={`${siteUrl}/contact-us/`}>Contact Us</Link>
        </div>
        <div className="flex flex-col items-start gap-3">
          <h3 className="mt-[5px] mb-[9px] font-serif text-base font-normal text-[#f2f5ef] max-[620px]:text-sm">Oncology</h3>
          <Link className="text-[10px] leading-[1.55] text-[#b8c8d6] hover:text-[#73c3d2]" href={`${siteUrl}/medical-oncology/`}>Medical Oncology</Link>
          <Link className="text-[10px] leading-[1.55] text-[#b8c8d6] hover:text-[#73c3d2]" href={`${siteUrl}/radiation-oncology/`}>Radiation Oncology</Link>
          <Link className="text-[10px] leading-[1.55] text-[#b8c8d6] hover:text-[#73c3d2]" href={`${siteUrl}/surgical-oncology/`}>Surgical Oncology</Link>
          <Link className="text-[10px] leading-[1.55] text-[#b8c8d6] hover:text-[#73c3d2]" href={`${siteUrl}/preventive-oncology/`}>Cancer Prevention</Link>
          <Link className="text-[10px] leading-[1.55] text-[#b8c8d6] hover:text-[#73c3d2]" href={`${siteUrl}/palliative-oncology/`}>Palliative Cancer Care</Link>
          <Link className="text-[10px] leading-[1.55] text-[#b8c8d6] hover:text-[#73c3d2]" href={`${siteUrl}/haemato-oncology/`}>Haemato Oncology</Link>
          <Link className="text-[10px] leading-[1.55] text-[#b8c8d6] hover:text-[#73c3d2]" href={`${siteUrl}/bone-marrow-transplant/`}>Bone Marrow Transplant</Link>
        </div>
        <div className="flex flex-col items-start gap-3">
          <h3 className="mt-[5px] mb-[9px] font-serif text-base font-normal text-[#f2f5ef] max-[620px]:text-sm">Specialty</h3>
          {specialtyItems.map((item) => (
            <Link className="text-[10px] leading-[1.55] text-[#b8c8d6] hover:text-[#73c3d2]" href={item.href} key={item.label}>
              {footerSpecialtyLabels[item.label] ?? item.label}
            </Link>
          ))}
        </div>
        <div className="flex flex-col items-start gap-3">
          <h3 className="mt-[5px] mb-[9px] font-serif text-base font-normal text-[#f2f5ef] max-[620px]:text-sm">Reach us</h3>
          <p className="m-0 text-[10px] leading-[1.55] text-[#b8c8d6]">
            Sammprada Cancer<br />
            No 76, 1-1, Sarakki Main Rd<br />
            VR Layout, 1st Phase, J. P. Nagar<br />
            Bengaluru, Karnataka 560078
          </p>
          <a className="font-serif text-base text-white" href="mailto:info@sammprada.com">info@sammprada.com</a>
          <a className="text-[10px] leading-[1.55] text-[#b8c8d6] hover:text-[#73c3d2]" href="tel:+919900018131">+91 9900018131</a>
          <a className="text-[10px] leading-[1.55] text-[#b8c8d6] hover:text-[#73c3d2]" href="tel:+917760396162">+91 7760396162</a>
          <Link href={`${siteUrl}/contact-us/`} className="mt-[5px] inline-flex items-center gap-2 text-[#73c3d2]">
            Contact us <Arrow />
          </Link>
        </div>
      </SiteContainer>
      <SiteContainer className="flex min-h-[59px] items-center justify-between gap-4 border-t border-[#45637e] text-[9px] text-[#aab9c7] max-[620px]:flex-wrap max-[620px]:items-start max-[620px]:py-[18px] max-[620px]:text-[8px]">
        <span>© 2026 Sammprada Hospital. All rights reserved.</span>
        <div className="flex items-center gap-5 max-[620px]:order-2 max-[620px]:w-full max-[620px]:gap-[15px]">
          <Link href={`${siteUrl}/privacy-policy/`}>Privacy policy</Link>
          <Link href={`${siteUrl}/terms-and-conditions/`}>Terms of use</Link>
        </div>
        <a href="#top" className="ml-auto text-[#dae5dc]">Back to top ↑</a>
      </SiteContainer>
    </footer>
  );
}
