import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Menu from "./components/menu/Menu.js";
import Loader from "./components/loader/loader";
import { useEffect, useState } from "react";
import ClientLayout from "./ClientLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Valentin Touzinaud Portfolio",
  description: "Valentin Touzinaud Portfolio Webdesign and Graphic",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
            <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
