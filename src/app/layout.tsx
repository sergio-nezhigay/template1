import React from "react";
import { Metadata, Viewport } from "next";

import Footer from "@/layout/Footer";
import Header from "@/layout/Header";

import meta from "@/data/meta";

import { caveat, montserrat } from "./fonts";

import "@/src/app/globals.css";

export const metadata: Metadata = meta;

const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export { viewport };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk" className={`${montserrat.variable} ${caveat.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
