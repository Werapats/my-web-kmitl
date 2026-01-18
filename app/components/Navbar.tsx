"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; // ต้องลง lucide-react แล้วนะครับ

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Why KMUTT", path: "/why" },
  { name: "Portfolio", path: "/portfolio" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false); // เช็คว่าเปิดเมนูอยู่ไหม

  return (
    <>
      <header className="sticky top-0 z-50 w-full h-16 border-b border-white/10 bg-[#050505]/80 backdrop-blur-md flex items-center justify-between px-6 lg:px-12">
        
        {/* Logo / Brand */}
        <Link 
            href="/" 
            className="text-xl font-bold tracking-tighter text-white hover:text-orange-500 transition-colors z-50 relative"
            onClick={() => setIsOpen(false)} // กด Logo ให้ปิดเมนูด้วย
        >
          WERAPAT<span className="text-orange-500">.</span>DEV
        </Link>

        {/* --- Desktop Menu (จอใหญ่) --- */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link key={item.path} href={item.path} className="relative py-1 group">
                <span className={`text-sm font-medium tracking-wide transition-colors ${isActive ? "text-white" : "text-stone-400 group-hover:text-white"}`}>
                  {item.name}
                </span>
                <span className={`absolute bottom-0 left-0 h-[2px] bg-orange-500 transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}></span>
              </Link>
            );
          })}
        </nav>

        {/* --- Mobile Menu Button (ปุ่ม 3 ขีด) --- */}
        <button 
            className="md:hidden text-white p-2 z-50 relative"
            onClick={() => setIsOpen(!isOpen)}
        >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </header>

      {/* --- Mobile Menu Overlay (ส่วนที่เด้งออกมา) --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#050505] pt-24 px-6 md:hidden"
          >
            <nav className="flex flex-col gap-6">
              {navItems.map((item, idx) => {
                 const isActive = pathname === item.path;
                 return (
                    <motion.div
                        key={item.path}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + idx * 0.1 }}
                    >
                        <Link 
                            href={item.path} 
                            onClick={() => setIsOpen(false)} // กดแล้วปิดเมนู
                            className={`text-2xl font-bold block ${isActive ? "text-orange-500" : "text-stone-400"}`}
                        >
                            {item.name}
                        </Link>
                    </motion.div>
                 )
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}