import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import BaseLayout from "@/components/layouts/BaseLayouts";

export const metadata: Metadata = {
  title: "moviesite-mandlake",
  description: "this is site by mandlake",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased bg-white text-[#2B2B2B]`}>
        <BaseLayout>{children}</BaseLayout>
      </body>
    </html>
  );
}
