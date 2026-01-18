"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Code2, Database, Cpu, MapPin } from "lucide-react";
// Import จากไฟล์ที่สร้างไว้ในข้อ 2
import PixelSnow from "@/app/components/PixelSnow"; 

export default function Home() {
  return (
    // min-h-[calc(100vh-4rem)] เพื่อหักลบ Navbar ไม่ให้หน้าจอยืดเกินไป
    <main className="min-h-[calc(100vh-4rem)] w-full relative overflow-hidden flex flex-col items-center justify-center selection:bg-orange-500/30 selection:text-orange-200 bg-[#050505]">
      
      {/* --- 1. Background Layer: PixelSnow --- */}
      {/* ใส่ไว้ชั้นล่างสุด (z-0) และครอบเต็มพื้นที่ */}
      <div className="absolute inset-0 z-0">
        <PixelSnow 
            color="#ff8624" // สีส้มตามธีม
            flakeSize={0.02} // ขนาดเม็ดพิกเซล
            speed={1.0}      // ความเร็ว
            density={0.4}    // ความหนาแน่น
        />
      </div>

      {/* --- 2. Overlay Texture (Grid Pattern) --- */}
      {/* ลายจุดจางๆ ซ้อนทับเพื่อให้ดูมีมิติ */}
      <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute h-full w-full bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      {/* --- 3. Glowing Blob --- */}
      {/* แสงฟุ้งๆ ตรงกลางหลังรูป */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-900/10 blur-[120px] rounded-full pointer-events-none animate-pulse z-0" />

      {/* --- Content (z-10 เพื่อให้อยู่เหนือ Background) --- */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 w-full max-w-4xl">
        
        {/* Profile Image Section */}
        <div className="relative mb-8 group cursor-default">
            {/* Glow effect behind profile */}
            <div className="absolute inset-[-4px] rounded-full bg-gradient-to-tr from-orange-500/40 to-purple-600/40 blur-md opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <motion.div 
               initial={{ scale: 0.5, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
               className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full border-[3px] border-[#1a1a1a] bg-black overflow-hidden shadow-2xl"
            >
               <Image 
                 src="https://i.ibb.co/Jj5Rs8JW/222.jpg" 
                 alt="Werapat Profile"
                 fill
                 className="object-cover transition-transform duration-700 group-hover:scale-110"
                 priority
               />
            </motion.div>

            {/* Floating Icons */}
            <motion.div animate={{ y: [-6, 6, -6] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute -top-1 -right-4 sm:-right-6 bg-[#111]/90 p-2.5 rounded-full border border-white/10 shadow-lg backdrop-blur-sm">
               <Code2 size={18} className="text-blue-400" />
            </motion.div>
            <motion.div animate={{ y: [6, -6, 6] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute bottom-6 -left-4 sm:-left-6 bg-[#111]/90 p-2.5 rounded-full border border-white/10 shadow-lg backdrop-blur-sm">
               <Database size={18} className="text-emerald-400" />
            </motion.div>
            <motion.div animate={{ x: [-4, 4, -4] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="absolute -bottom-5 right-6 bg-[#111]/90 p-2.5 rounded-full border border-white/10 shadow-lg backdrop-blur-sm">
               <Cpu size={18} className="text-purple-400" />
            </motion.div>
        </div>

        {/* Text Content */}
        <div className="space-y-6">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.3 }}
           >
             <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-white leading-tight">
               Werapat <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-200">Thanomsri</span>
             </h1>
           </motion.div>

           <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.4 }}
             className="flex items-center justify-center gap-2 text-stone-400 text-lg sm:text-xl font-light tracking-wide"
           >
              <MapPin size={20} className="text-orange-500" />
              <span>Satri Angthong School</span>
           </motion.div>
        </div>

        {/* Action Button */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.6 }}
           className="mt-10"
        >
           <Link href="/about">
              <button className="group relative px-9 py-3.5 bg-white text-black rounded-full font-bold text-sm tracking-[0.2em] hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_40px_rgba(249,115,22,0.5)] flex items-center gap-3">
                About Me
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
           </Link>
        </motion.div>

      </div>
    </main>
  );
}