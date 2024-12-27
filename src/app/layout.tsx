import "./globals.css";
import type { Metadata } from "next"; 
import { Geist, Geist_Mono } from "next/font/google"; 
import Slider from "../app/companent/slider/page";
import Menu from "../app/companent/menu/navbar";
import CardGrid from "../app/companent/homecard/homecard"; // CardGrid'i doğru dosyadan import edin.
import { cardData } from "../app/companent/homecard/vericard"; // cardData'yı doğru dosyadan import edin.

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div>
          <Menu />
          <div className="content-container">
            <Slider />
            <h1>Card Grid Example</h1>
            <CardGrid cards={cardData} /> {/* CardGrid bileşenini doğru bir şekilde çağırın */}
          </div>
        </div>
      </body>
    </html>
  );
}
