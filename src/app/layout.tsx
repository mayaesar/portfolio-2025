import type { Metadata } from "next";
import "../style/globals.css";
import React from "react";

export const metadata: Metadata = {
  title: "Maya Esar",
  description: "Full Stack Developer - Portfolio",
  openGraph: {
    title: "Maya Esar",
    description: "Full Stack Developer - Portfolio",
    images: ["https://mayaesar.com/_next/image?url=%2Fme.jpeg&w=3840&q=75"],
  },
  twitter: {
    title: "Maya Esar",
    description: "Full Stack Developer - Portfolio",
    images: ["https://mayaesar.com/_next/image?url=%2Fme.jpeg&w=3840&q=75"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="min-h-dvh h-full w-full">
      <body className="min-h-dvh h-full w-full flex flex-col bg-white dark:bg-slate-900 text-gray-900 dark:text-white">
        {children}
      </body>
    </html>
  );
}
