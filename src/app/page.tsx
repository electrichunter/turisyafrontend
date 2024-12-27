import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
 import Slider from "../app/companent/slider/page";
 import Menu from "./companent/menu/navbar";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <>
   <Menu />
   <br /><br /><br />
   <Slider />
   </>
  );
}
