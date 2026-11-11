import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sammprada Hospital | Thoughtful, specialist-led care",
  description:
    "Discover expert-led multispecialty and cancer care at Sammprada Hospital, Bengaluru. Care that sees the whole you.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
