import type { Metadata } from "next";
import OurDoctorsPageContent from "@/components/doctor/our-doctors-page";

export const metadata: Metadata = {
  title: "Our Doctors | Sammprada Hospital",
  description:
    "Meet the specialist doctors at Sammprada Hospital, Bengaluru, and find the right care for you.",
};

export default function OurDoctorsPage() {
  return <OurDoctorsPageContent />;
}
