import type { Metadata } from "next";
import "../style/globals.css";
import React from "react";

export const metadata: Metadata = {
  title: "Maya Esar",
  description: "Generated by create next app",
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
