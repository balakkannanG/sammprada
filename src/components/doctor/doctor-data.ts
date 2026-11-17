export type DoctorProfile = {
  name: string;
  qualifications: string;
  image?: string;
  profilePath?: string;
};

export type DoctorDepartment = {
  name: string;
  doctors: DoctorProfile[];
};

const portrait = (path: string) =>
  `/images/doctors/${path.replace(/\.[^.]+$/, ".webp")}`;

export const doctorDepartments: DoctorDepartment[] = [
  {
    name: "Medical Oncology",
    doctors: [
      {
        name: "Dr. Radheshyam Naik",
        qualifications: "MD (Gen Med), DM (Medical Oncology)",
        image: portrait("2025/12/Dr-Radheshyam-Naik-1.png"),
      },
      {
        name: "Dr. Sivacharan P. V.",
        qualifications: "MD, MRCP (UK), Fe.H.O, Fe.EMd.",
        image: portrait("2026/11/Sivacharan.png"),
      },
      {
        name: "Dr. Intezar Mehdi",
        qualifications: "MBBS, DNB (Paediatrics), MRCPCH (UK), FRCPCH (UK)",
        image: portrait("2026/04/dr.-intezar@3x-scaled.png"),
      },
    ],
  },
  {
    name: "Laparoscopic & General Surgery",
    doctors: [
      {
        name: "Dr. Ramesh S. K.",
        qualifications: "MBBS, MS, FIAGES, FALS, FMAS",
        image: portrait("2025/12/Dr-Ramesh-SK-1.png"),
      },
      {
        name: "Dr. Subhash R. C.",
        qualifications: "MBBS, MS (General Surgery)",
      },
    ],
  },
  {
    name: "General Medicine",
    doctors: [
      {
        name: "Dr. Ravindra H. S.",
        qualifications: "MBBS, FCIP, Dip. Diabetology, C.Diab (Australia)",
        image: portrait("2025/12/Ravindra-HS.png"),
      },
      {
        name: "Dr. Mahesh R. Nadagouda",
        qualifications: "MBBS, MD (General Medicine)",
        image: portrait("2026/02/Mahesh-R-Nadagouda.png"),
      },
    ],
  },
  {
    name: "Surgical Oncology",
    doctors: [
      {
        name: "Dr. M. Chandrashekar",
        qualifications: "MBBS, MS, FICS",
        image: portrait("2025/11/Dr-Chandrashekar-scaled.png"),
      },
      {
        name: "Dr. P. S. Prabhakaran",
        qualifications: "MBBS, MS",
        image: portrait("2026/11/Prabhakaran.png"),
      },
      {
        name: "Dr. Pavan Prasad",
        qualifications: "MBBS, MS, DNB, M.Ch (Surgical Oncology)",
        image: portrait("2024/07/Pavan-Prasad.jpg"),
      },
    ],
  },
  {
    name: "Radiation Oncology",
    doctors: [
      {
        name: "Dr. Belliappa",
        qualifications: "MBBS, MD, DNB, DMRT, FAIMS",
        image: portrait("2025/11/Dr-Belliappa-scaled.png"),
      },
      {
        name: "Dr. Gowshikk Rajkumar",
        qualifications: "MBBS, DMRT, DNB",
        image: portrait("2025/07/8.png"),
      },
    ],
  },
  {
    name: "Cancer Prevention",
    doctors: [
      {
        name: "Dr. Vinod K. Ramani",
        qualifications: "MBBS, MD (Community Medicine), MPH",
        image: portrait("2026/11/Vinod-Ramani.png"),
      },
    ],
  },
  {
    name: "Haematology & Bone Marrow Transplantation",
    doctors: [
      {
        name: "Dr. Radheshyam Naik",
        qualifications: "MD (Gen Med), DM (Medical Oncology)",
        image: portrait("2025/12/Dr-Radheshyam-Naik-1.png"),
      },
    ],
  },
  {
    name: "Paediatric Oncology",
    doctors: [
      {
        name: "Dr. Suma T. L.",
        qualifications: "MBBS, DCH, DNB, Paediatric Oncology",
        image: portrait("2026/11/Suma.png"),
      },
    ],
  },
  {
    name: "Gynaec-Oncology",
    doctors: [
      {
        name: "Dr. Abhilasha Narayan",
        qualifications: "MBBS, DCH, DNB, Paediatric Oncology",
        image: portrait("2026/11/Abhilasha-Narayan.png"),
      },
      {
        name: "Dr. Shobha K.",
        qualifications: "MBBS, MS, M.Ch (Surgical Oncology)",
        image: portrait("2024/07/Shobha.jpg"),
      },
    ],
  },
  {
    name: "Ayurveda, Integrative & Preventive Oncology",
    doctors: [
      {
        name: "Dr. Lalith Kumar G.",
        qualifications: "MD (Ayu), MD (AM), Regenerative Medicine",
        image: portrait("2026/06/Lalith-scaled.png"),
      },
      {
        name: "Dr. P. K. L. Nandini",
        qualifications:
          "B.A.M.S., P.D.C.R., PhD; Integrative Oncologist & Wellness Consultant",
        image: portrait("2026/09/PKL-Nandini-1.png"),
      },
    ],
  },
  {
    name: "Sri Sri Ayurveda Hospital Faculty",
    doctors: [
      {
        name: "Dr. Nisha Manikantan",
        qualifications: "BAMS, MD (AM)",
        image: portrait("2024/07/nisha.png"),
      },
      {
        name: "Dr. Vivek J.",
        qualifications: "BAMS, MS (Shalya), DVV, PhD",
        image: portrait("2024/07/Vivek-J.png"),
      },
      {
        name: "Dr. Yogeshwar Chippa",
        qualifications: "BAMS, MD (Panchakarma), Nadi Expert",
        image: portrait("2025/07/Yogeshwar-chippa.png"),
      },
    ],
  },
  {
    name: "Vascular Surgery",
    doctors: [
      {
        name: "Dr. Vivekananda",
        qualifications: "MBBS, MS (Surgery), FVS, FVES (Vascular & Endovascular Surgery)",
        image: portrait("2025/12/Dr-Vivekananda-1.png"),
      },
    ],
  },
  {
    name: "Orthopaedics",
    doctors: [
      {
        name: "Dr. Basil S. Mathew",
        qualifications: "MBBS, MS (Orthopaedics)",
        image: portrait("2026/06/Basil-Mathew-1-scaled.png"),
      },
      {
        name: "Dr. Sushruth J.",
        qualifications: "MBBS, MS (Orthopaedics)",
        image: portrait("2026/03/Sushruth.png"),
      },
      {
        name: "Dr. Rakesh Kumar V.",
        qualifications: "MBBS, MS (Orthopaedics)",
        image: portrait("2026/04/Dr.-Rakesh-Kumar-V-1@3x-scaled.png"),
      },
    ],
  },
  {
    name: "ENT",
    doctors: [
      {
        name: "Dr. Lakshmi",
        qualifications: "MBBS, DLO, DNB (ENT)",
      },
      {
        name: "Dr. P. Harihara Murthy",
        qualifications: "MBBS, MS (ENT), DLO",
        image: portrait("2026/09/Hariharamu7rthy.png"),
      },
    ],
  },
  {
    name: "Nephrology",
    doctors: [
      {
        name: "Dr. Jyothi Hebbur",
        qualifications: "MBBS, MRCP, CCT (Nephrology)",
      },
      {
        name: "Dr. Arun G. Munappil",
        qualifications: "MBBS, MD (General Medicine), DrNB (Nephrology)",
        image: portrait("2026/03/Arun-G-Munappil.png"),
      },
    ],
  },
  {
    name: "Gastroenterology",
    doctors: [
      {
        name: "Dr. Ravindranath N. S.",
        qualifications: "MBBS, MD (GM), FAMS",
        image: portrait("2026/11/Ravindranath-NS.png"),
      },
      {
        name: "Dr. Prakash Mahantappa",
        qualifications: "MBBS, MS, DNB, MCh, FMAS, FALS, FACRSI, FISCP",
        image: portrait("2026/11/Prakash-Mahantappa-1.png"),
      },
    ],
  },
  {
    name: "Plastic Surgery",
    doctors: [
      {
        name: "Dr. Jithendran N.",
        qualifications: "MCh (Plastic Surgery), DNB (Plastic Surgery), MS (Orthopaedics)",
        image: portrait("2025/12/Dr-Jitendhar.png"),
      },
      {
        name: "Dr. Thilak",
        qualifications: "MBBS, MS (General Surgery), MCh (Plastic Surgery)",
        image: portrait("2026/11/Tilak.png"),
      },
    ],
  },
  {
    name: "Gynaecology",
    doctors: [
      {
        name: "Dr. Shobha K.",
        qualifications: "MBBS, MS, MCh",
        image: portrait("2024/07/Shobha.jpg"),
      },
      {
        name: "Dr. Swetha K. M.",
        qualifications: "MBBS, DNB (OBG), FMAS",
        image: portrait("2026/04/Swetha.png"),
      },
    ],
  },
  {
    name: "ICU & Critical Care",
    doctors: [
      {
        name: "Dr. Sagar Srinivas",
        qualifications: "MBBS, MD, FIPM",
        image: portrait("2024/07/Sagar-Srinivas.jpg"),
      },
      {
        name: "Dr. Kisan S. A.",
        qualifications: "MBBS, DA",
      },
      {
        name: "Dr. Vanitha N.",
        qualifications: "MBBS, MD (PGIMER), DNB, DRNB (Critical Care Medicine), EDIC, FPIM",
        image: portrait("2026/09/Vanitha-2.png"),
      },
    ],
  },
  {
    name: "Pulmonology",
    doctors: [
      {
        name: "Dr. Vivek K. U.",
        qualifications: "MBBS, MD, DNB",
      },
    ],
  },
  {
    name: "Ophthalmology",
    doctors: [
      {
        name: "Dr. Jayashree Bhat",
        qualifications: "MBBS, DNB (Ophthalmology)",
      },
    ],
  },
  {
    name: "Anaesthesiology",
    doctors: [
      {
        name: "Dr. Manjunath",
        qualifications: "MBBS, MD (Anaesthesiology)",
        image: portrait("2026/11/Manjunath.png"),
      },
      {
        name: "Dr. Kiran S. A.",
        qualifications: "MBBS, DA",
      },
      {
        name: "Dr. Ravi Kumar I. R.",
        qualifications: "MBBS, MD (Anaesthesiology)",
      },
      {
        name: "Dr. Pranav J. Adoni",
        qualifications: "MBBS, MD, DM (Cardiac Anaesthesia)",
        image: portrait("2024/07/pranav.jpg"),
      },
    ],
  },
  {
    name: "Urology",
    doctors: [
      {
        name: "Dr. Vishruth K. Raj",
        qualifications: "MBBS, MS, MCh (Urology), Fellow (Uro-Oncology & Robotic Surgery)",
        image: portrait("2026/11/Vishruth-K-Raj.png"),
      },
    ],
  },
  {
    name: "Physiotherapy",
    doctors: [
      {
        name: "Dr. Rajasree K.",
        qualifications: "BPT, MPT, MIAP, ICCT, CDNT, AOMPT, FMCP",
        image: portrait("2026/05/Rajasree-K-1-scaled.png"),
      },
    ],
  },
];

const doctorProfilePaths: Record<string, string> = {
  "Dr. Radheshyam Naik": "/dr-radheshyam-naik/",
  "Dr. Sivacharan P. V.": "/dr-sivacharan-p-v/",
  "Dr. Intezar Mehdi": "/dr_intezar-mehdi/",
  "Dr. Ramesh S. K.": "/dr-ramesh-sk/",
  "Dr. Subhash R. C.": "/dr-subhash-r-c/",
  "Dr. Ravindra H. S.": "/dr-ravindra-h-s/",
  "Dr. Mahesh R. Nadagouda": "/dr-mahesh-r-nadagouda/",
  "Dr. M. Chandrashekar": "/dr-m-chandrashekar/",
  "Dr. Pavan Prasad": "/dr-pavan-prasad/",
  "Dr. Belliappa": "/our-doctors/dr-belliappa/",
  "Dr. Gowshikk Rajkumar": "/our-doctors/dr-gowshikk-rajkumar/",
  "Dr. Vinod K. Ramani": "/our-doctors/dr-vinod-k-ramani/",
  "Dr. Suma T. L.": "/our-doctors/dr-suma-ti/",
  "Dr. Abhilasha Narayan": "/our-doctors/dr-abhilasha-narayan/",
  "Dr. Shobha K.": "/dr-shobha-k/",
  "Dr. Lalith Kumar G.": "/dr-lalith-kumar-g/",
  "Dr. P. K. L. Nandini": "/dr-p-k-l-nandini/",
  "Dr. Nisha Manikantan": "/dr-nisha-manikantan/",
  "Dr. Vivek J.": "/dr-vivek-j/",
  "Dr. Yogeshwar Chippa": "/dr-yogeshwar-chippa/",
  "Dr. Vivekananda": "/dr-vivekananda/",
  "Dr. Basil S. Mathew": "/dr-basil-mathew/",
  "Dr. Sushruth J.": "/dr_sushruth_j/",
  "Dr. Rakesh Kumar V.": "/dr_rakeshkumar-v/",
  "Dr. Lakshmi": "/dr-lakshmi-shantaram/",
  "Dr. P. Harihara Murthy": "/dr-p-harihara-murthy/",
  "Dr. Jyothi Hebbur": "/dr-jyothi-hebbur-ramachandra/",
  "Dr. Arun G. Munappil": "/dr-arun_g/",
  "Dr. Prakash Mahantappa": "/dr_prakash_mahantappa/",
  "Dr. Jithendran N.": "/our-doctors/dr-jitendran-n/",
  "Dr. Thilak": "/dr-b-g-thilak/",
  "Dr. Swetha K. M.": "/dr_swetha_k_m/",
  "Dr. Sagar Srinivas": "/dr-sagar-srinivas/",
  "Dr. Vanitha N.": "/dr-vanitha-n/",
  "Dr. Vivek K. U.": "/dr-vivek-k-u/",
  "Dr. Jayashree Bhat": "/dr-jayashree-bhat/",
  "Dr. Manjunath": "/dr-pavana/",
  "Dr. Kiran S. A.": "/dr-kiran-s-a/",
  "Dr. Ravi Kumar I. R.": "/dr-ravi-kumar-i-r/",
  "Dr. Pranav J. Adoni": "/dr-pranav-j-adoni/",
  "Dr. Vishruth K. Raj": "/our-doctors/dr-vishrut-raj/",
  "Dr. Rajasree K.": "/dr-rajasree_k/",
};

for (const department of doctorDepartments) {
  for (const doctor of department.doctors) {
    doctor.profilePath = doctorProfilePaths[doctor.name] ?? "/our-doctors/#";
  }
}
