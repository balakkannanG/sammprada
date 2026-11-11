const site = "https://www.sammprada.com";
const assets = `${site}/wp-content/uploads`;

export const siteUrl = site;
export const siteAssets = assets;
export const siteLogo = `${assets}/al_opt_content/IMAGE/www.sammprada.com/wp-content/uploads/2025/06/Sammprada-Logo-1x1-1-scaled-e1761381978679.png.bv.webp`;

export type MenuItem = {
  label: string;
  href: string;
  children?: MenuItem[];
};

export const specialties = [
  "General Medicine",
  "General Surgery",
  "Orthopaedics",
  "Urology",
  "Nephrology",
  "Anesthesia",
  "Gynecology",
  "ENT",
  "Neurosurgery",
  "Psychiatry",
  "Vascular Surgery",
  "Cardiology",
  "Physiotherapy",
  "Plastic & Reconstructive Surgery",
  "Gastroenterology",
  "Ophthalmology",
  "Pulmonology",
  "Obesity Clinic",
  "Intensive Care Unit",
];

export const specialtyItems: MenuItem[] = specialties.map((label) => ({
  label: label === "Plastic & Reconstructive Surgery" ? "Plastic Surgery" : label,
  href: `${site}/${({
    Neurosurgery: "neuro-surgery",
    "Obesity Clinic": "obesity_clinic",
    "Plastic & Reconstructive Surgery": "plastic-surgery",
  }[label] ?? label.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-"))}/`,
}));

const optimizedAssets = `${assets}/al_opt_content/IMAGE/www.sammprada.com/wp-content/uploads`;

export const specialtyImages: Record<string, string> = {
  "General Medicine": `${optimizedAssets}/2022/12/GENDRAL-MEDCINE-1.png.bv.webp`,
  "General Surgery": `${optimizedAssets}/2022/12/General-Surgery-1.png.bv.webp`,
  Orthopaedics: `${optimizedAssets}/2023/01/orthopaedics-1.png.bv.webp`,
  Urology: `${optimizedAssets}/2023/01/Urology-1.png.bv.webp`,
  Nephrology: `${optimizedAssets}/2022/12/NEPHROLOGY-down-1.png.bv.webp`,
  Anesthesia: `${optimizedAssets}/2023/01/Anesthesia.png.bv.webp`,
  Gynecology: `${optimizedAssets}/2025/08/GYNECOLOGY-1.png.bv.webp`,
  ENT: `${optimizedAssets}/2022/12/ENT-1.png.bv.webp`,
  Neurosurgery: `${optimizedAssets}/2023/01/Neurosurgery.png.bv.webp`,
  Psychiatry: `${optimizedAssets}/2023/01/PSYCHIATRY.png.bv.webp`,
  "Vascular Surgery": `${optimizedAssets}/2023/01/VASCULAR-SURGERY-1.png.bv.webp`,
  Cardiology: `${optimizedAssets}/2022/12/Cardiology-1-1.png.bv.webp`,
  Physiotherapy: `${optimizedAssets}/2023/01/Physiotherapy.png.bv.webp`,
  "Plastic & Reconstructive Surgery": `${optimizedAssets}/2023/01/PLASTIC-SURGERY.png.bv.webp`,
  Gastroenterology: `${optimizedAssets}/2023/01/gastroenterology.png.bv.webp`,
  Ophthalmology: `${optimizedAssets}/2023/01/OPHTHALMOLOGY.png.bv.webp`,
  Pulmonology: `${optimizedAssets}/2023/01/pulmonology-4.png.bv.webp`,
  "Obesity Clinic": `${optimizedAssets}/2026/06/Artboard-2-1.png.bv.webp`,
  "Intensive Care Unit": `${optimizedAssets}/2026/07/24-hour-emergency-service-label-design.png.bv.webp`,
};

export const doctors = [
  {
    name: "Dr. Radheshyam Naik",
    specialty: "Medical Oncology",
    image: `${assets}/al_opt_content/IMAGE/www.sammprada.com/wp-content/uploads/2025/12/Dr-Radheshyam-Naik-1-480.png.bv.webp`,
  },
  {
    name: "Dr. Jithendran N",
    specialty: "Plastic Surgery",
    image: `${assets}/al_opt_content/IMAGE/www.sammprada.com/wp-content/uploads/2025/12/Dr-Jitendhar-480.png.bv.webp`,
  },
  {
    name: "Dr. Vivekananda",
    specialty: "Vascular Surgery",
    image: `${assets}/al_opt_content/IMAGE/www.sammprada.com/wp-content/uploads/2025/12/Dr-Vivekananda-1-480.png.bv.webp`,
  },
  {
    name: "Dr. Ravindra H S",
    specialty: "General Medicine",
    image: `${assets}/al_opt_content/IMAGE/www.sammprada.com/wp-content/uploads/2025/12/Ravindra-HS-480.png.bv.webp`,
  },
  {
    name: "Dr. Intezar Mehdi",
    specialty: "Medical Oncology",
    image: `${assets}/al_opt_content/IMAGE/www.sammprada.com/wp-content/uploads/2026/04/dr.-intezar@3x-scaled-480.png.bv.webp`,
  },
  {
    name: "Dr. Ramesh S K",
    specialty: "Laparoscopic & General Surgery",
    image: `${assets}/al_opt_content/IMAGE/www.sammprada.com/wp-content/uploads/2025/12/Dr-Ramesh-SK-1-480.png.bv.webp`,
  },
];

export const navigation: MenuItem[] = [
  { label: "HOME", href: "#top" },
  {
    label: "About Us",
    href: `${site}/about-us/`,
    children: [
      { label: "About Oncology", href: `${site}/about-oncology/` },
      { label: "Vision & Mission", href: `${site}/vision-mission/` },
    ],
  },
  {
    label: "MULTI – SPECIALTIES",
    href: "#specialties",
    children: specialtyItems,
  },
  {
    label: "ONCO + WELLNESS",
    href: `${site}/onco-wellness/`,
    children: [
      {
        label: "Oncology",
        href: site,
        children: [
          { label: "Medical Oncology", href: `${site}/medical-oncology/` },
          { label: "Surgical Oncology", href: `${site}/surgical-oncology/` },
          { label: "Radiation Oncology", href: `${site}/radiation-oncology/` },
          { label: "Paediatric Oncology", href: `${site}/paediatric-oncology/` },
          { label: "Psycho oncology", href: `${site}/psycho-oncology/` },
          { label: "Haemato Oncology", href: `${site}/haemato-oncology/` },
          { label: "Palliative Oncology", href: `${site}/palliative-oncology/` },
          { label: "Preventive Oncology", href: `${site}/preventive-oncology/` },
          { label: "Bone Marrow Transplant", href: `${site}/bone-marrow-transplant/` },
        ],
      },
      {
        label: "Wellness",
        href: site,
        children: [
          { label: "Ayurveda", href: `${site}/quality-of-life-jeevan/` },
          { label: "Nutrition", href: `${site}/nutrition-mitahara-program/` },
          {
            label: "Mental Wellness",
            href: `${site}/emotional-wellbeing-mitra-program-counselling-process/`,
          },
          { label: "Pain Management", href: `${site}/pain-management-rahata-program/` },
        ],
      },
    ],
  },
  { label: "OUR DOCTORS", href: `${site}/our-doctors/` },
  { label: "CONTACT US", href: `${site}/contact-us/` },
  { label: "SHOBHA TRUST", href: site },
  { label: "R&D", href: `${site}/rd/` },
  {
    label: "RESOURCES",
    href: site,
    children: [
      { label: "Blogs", href: `${site}/news/` },
      { label: "Careers", href: `${site}/careers/` },
      { label: "Testimonials", href: `${site}/testimonials-2/` },
      { label: "News & Article", href: `${site}/news-article/` },
      { label: "Media Coverage", href: `${site}/media-coverage/` },
    ],
  },
];

export const heroVideoSlides = [
  {
    src: "https://videos.pexels.com/video-files/6010955/6010955-hd_1920_1080_25fps.mp4",
    poster: "https://images.pexels.com/videos/6010955/pexels-photo-6010955.jpeg?auto=compress&cs=tinysrgb&w=1920",
    title: "Hospital patient receiving care",
  },
  {
    src: "https://videos.pexels.com/video-files/8311314/8311314-hd_1920_1080_25fps.mp4",
    poster: "https://images.pexels.com/videos/8311314/hospital-8311314.jpeg?auto=compress&cs=tinysrgb&w=1920",
    title: "Hospital care and treatment",
  },
  {
    src: "https://videos.pexels.com/video-files/6011420/6011420-hd_1920_1080_25fps.mp4",
    poster: "https://images.pexels.com/videos/6011420/pexels-photo-6011420.jpeg?auto=compress&cs=tinysrgb&w=1920",
    title: "Doctor consulting with a patient",
  },
  {
    src: "https://videos.pexels.com/video-files/6010947/6010947-hd_1920_1080_25fps.mp4",
    poster: "https://images.pexels.com/videos/6010947/pexels-photo-6010947.jpeg?auto=compress&cs=tinysrgb&w=1920",
    title: "Patient receiving hospital care",
  },
];

export const hospitalVideos = [
  {
    id: "7ELuMg0F7-I",
    title: "Sammprada Hospital | Advanced Cancer Care in Bangalore | Led by Dr. Radheshyam Naik",
  },
  {
    id: "SEdSwqG_0Ng",
    title: "Diabetes Patients, Don't Ignore This! Cancer Risk Explained by Dr. Radheshyam Naik",
  },
  {
    id: "5VKpxAEABpM",
    title: "Cancer Awareness & Education Podcast 01 | Sammprada Hospital | Expert Insights Every Saturday",
  },
  {
    id: "BcV2Xigasz8",
    title: "How Holistic Cancer Care Helped Me Heal | Sammprada Hospital Success Story",
  },
  {
    id: "kO1ybccVwf8",
    title: "Spine Surgery Success Story | Fast Recovery After Implant Replacement | Sammprada Hospital Bangalore",
  },
  {
    id: "wOrKcis1ujI",
    title: "Highlights from CME on Newer Advances in Oncology",
  },
  {
    id: "hRSYvZrKgJQ",
    title: "On International Nurses Day, we heard from the hearts behind the care.",
  },
  {
    id: "gM0ULGLhDEc",
    title: "Cancer Awareness & Educational Podcast 02 | Sammprada Hospital | Expert Insights Every Saturday",
  },
];

export const healthPackages = [
  {
    name: "Comprehensive Health Check",
    detail: "A thoughtful baseline for your wellbeing",
    image: `${assets}/2026/10/Comprehensive-Health-Check-package-1x1-1-300x300.jpg`,
  },
  {
    name: "Orthopaedic Health Check",
    detail: "Expert care for every step forward",
    image: `${assets}/2026/10/ORTHO-1X1-WD@3x-300x300.jpg`,
  },
  {
    name: "Diabetic Health Check",
    detail: "A clearer picture of your health",
    image: `${assets}/2026/10/Diabetic-1x1-wd@3x-300x300.jpg`,
  },
  {
    name: "Small Test Package",
    detail: "Essential tests, made simple",
    image: `${assets}/2026/10/small-test-1x1-wd@3x-300x300.jpg`,
  },
];

export const articles = [
  {
    category: "Wellness",
    title: "Is Regenerative Medicine the Future of Healthcare?",
    image: `${assets}/2026/06/resize1@3x-scaled.jpg`,
    href: `${site}/is-regenerative-medicine-the-future-of-healthcare/`,
  },
  {
    category: "Orthopaedics",
    title: "From Painkillers to Healing: A New Approach to Chronic Joint Pain",
    image: `${assets}/2026/06/resize2@3x-scaled.jpg`,
    href: `${site}/from-painkillers-to-healing-a-new-approach-to-chronic-joint-pain/`,
  },
  {
    category: "Obesity management",
    title: "Obesity Is Often Recognised Early. Effective Treatment Should Be Too.",
    image: `${assets}/2026/06/resize-1@3x-scaled.jpg`,
    href: `${site}/news/`,
  },
];

export const faqs = [
  {
    question: "Is Sammprada Hospital a multispeciality hospital?",
    answer:
      "Yes. Sammprada Hospital is a multispeciality hospital in Bangalore offering comprehensive healthcare services, including cancer care, general medicine, general surgery, critical care, orthopaedics, cardiology, ENT, ophthalmology, plastic surgery, obesity management, and more—all under one roof.",
  },
  {
    question: "Why is Sammprada Hospital considered one of the best hospitals in Bangalore?",
    answer:
      "Our experienced specialists, advanced medical technology, integrated treatment options and patient-first approach bring thoughtful care together under one roof.",
  },
  {
    question: "How can I find a hospital near me for emergency and specialist care?",
    answer:
      "Sammprada Hospital is in J. P. Nagar, Bengaluru. Call our care team for help with directions or to connect with a specialist.",
  },
  {
    question: "What specialties are available at Sammprada Hospital?",
    answer:
      "Our specialties include general medicine and surgery, orthopaedics, urology, nephrology, oncology, cardiology, ENT, neurosurgery, women's health, critical care and more.",
  },
  {
    question: "Does Sammprada Hospital provide cancer treatment?",
    answer:
      "Yes. Our oncology services include medical, surgical, radiation, paediatric, haemato, palliative and preventive oncology, along with bone marrow transplantation.",
  },
  {
    question: "Can I book a consultation with a specialist at Sammprada Hospital?",
    answer:
      "Yes. Contact our team by phone or through the appointment link and we’ll help connect you with the right specialist.",
  },
  {
    question: "Why should I choose Sammprada Hospital over other hospitals?",
    answer:
      "We bring expert-led care, advanced treatment, a healing environment and a whole-person approach together—so your care is thoughtful at every step.",
  },
  {
    question: "Does Sammprada Hospital offer preventive health check-ups?",
    answer:
      "Yes. Our health check packages support preventive care and can be selected to suit different needs. Contact us for package details.",
  },
];

export const footerSpecialtyLabels: Record<string, string> = {
  Anesthesia: "Anaesthesia",
  Gynecology: "Gynaecology",
  Neurosurgery: "Neuro Surgery",
  "Vascular Surgery": "Vascular",
  "Intensive Care Unit": "ICU",
};
