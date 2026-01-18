import type { Metadata } from "next";
import { Kanit } from "next/font/google"; 
import "./globals.css";
import Navbar from "./components/Navbar";

const kanit = Kanit({
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-kanit",
});

export const metadata: Metadata = {
  title: "Weerapat | Portfolio",
  description: "Satree Angthong School Student Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* ลบ pb-24 ออก เพราะเมนูอยู่ข้างบนแล้ว ไม่ต้องเผื่อที่ด้านล่าง */}
      <body className={`${kanit.className} antialiased bg-[#050505] text-white`}>
        
        {/* เมนูจะกินพื้นที่ด้านบนไปเลย 64px (h-16) เนื้อหาข้างล่างจะต่อจากเมนูเอง */}
        <Navbar />
        
        {children}
      </body>
    </html>
  );
}