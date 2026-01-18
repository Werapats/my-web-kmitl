"use client";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, Lightbulb, Users, Quote, Sparkles } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

export default function WhyPage() {
  return (
    <main className="h-screen w-full flex flex-col lg:flex-row bg-[#050505] text-white overflow-hidden relative selection:bg-orange-500/30 selection:text-orange-200">
      
      {/* --- Background Effects (Ambience) --- */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-600/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 mix-blend-overlay pointer-events-none"></div>

      {/* ---------------- Left Section: Image (New Frame Design) ---------------- */}
      <div className="hidden lg:flex lg:w-1/2 h-full items-center justify-center p-12 relative z-10">
         
         {/* Decorative Grid Behind */}
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

         {/* The Frame Container */}
         <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-full max-w-md h-[80vh] group"
         >
            {/* 1. The Border/Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-b from-orange-500/20 to-purple-500/20 rounded-[32px] blur-sm opacity-50 group-hover:opacity-100 transition duration-700"></div>
            
            {/* 2. Main Image Card */}
            <div className="relative h-full w-full rounded-[30px] overflow-hidden border border-white/10 bg-[#111] shadow-2xl">
                <Image 
                  src="https://www.kmutt.ac.th/wp-content/uploads/2020/09/KMUTT_CI_Semi_Logo-normal-full-1061x1200.png" 
                  alt="KMUTT Atmosphere"
                  fill
                  className="object-cover transition-transform duration-[5s] group-hover:scale-110 opacity-90"
                  priority
                />
                
                {/* Overlay Gradient (เหลือแค่เงาดำจางๆ) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                {/* Floating Badge (Top Left) */}
                <div className="absolute top-6 left-6 flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full shadow-lg">
                    <Sparkles className="w-3 h-3 text-orange-400" />
                    <span className="text-[10px] font-bold tracking-widest text-white uppercase">My Vision</span>
                </div>

                {/* --- ลบส่วน EST. 1960 ออกไปแล้วครับ --- */}
            </div>
         </motion.div>
      </div>

      {/* ---------------- Right Section: Content ---------------- */}
      <div className="w-full lg:w-1/2 h-full flex flex-col justify-center px-6 lg:px-12 xl:px-20 py-4 relative z-10">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col h-full justify-center max-h-[850px]" 
        >
          {/* 1. Header Section */}
          <motion.div variants={itemVariants} className="mb-6 shrink-0">
            <div className="flex items-center gap-3 text-orange-500 font-bold text-[10px] tracking-[0.25em] uppercase mb-3">
              <span className="w-8 h-[1px] bg-orange-500 inline-block"></span>
              Vision & Passion
            </div>
            <h1 className="text-3xl lg:text-5xl font-bold leading-tight text-white mb-2">
              Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">KMUTT?</span>
            </h1>
            <p className="text-stone-400 text-sm font-light max-w-md">
              ทำไมต้องเป็นที่นี่? <span className="text-stone-600 mx-2">|</span> คำตอบจากใจและความตั้งใจจริง
            </p>
          </motion.div>
          
          {/* 2. Reasons Grid */}
          <div className="flex flex-col gap-3 lg:gap-4 mb-6">
            
            <ReasonCard 
              icon={<BookOpen className="w-4 h-4 text-orange-400" />}
              title="Project-based Learning"
              desc="ผมศึกษาโครงสร้างหลักสูตรของที่นี่มาละเอียดครับ ชอบตรงที่ 'วิชาเรียนมันไม่อยู่นิ่ง' ปรับเปลี่ยนตาม Tech Trend ตลอดเวลา ทำให้ผมมั่นใจว่าทุกบรรทัดที่โค้ด ทุกโปรเจกต์ที่ทำ จะเป็นสกิลที่เอาไปใช้งานจริงได้ทันที"
            />

            <ReasonCard 
              icon={<Users className="w-4 h-4 text-orange-400" />}
              title="Developer Community"
              desc="สารภาพตรงๆ ว่า 'ที่นี่คือเป้าหมายแรกและเป้าหมายเดียว' ของผมมาตลอด จุดเปลี่ยนสำคัญคือวัน Open House ผมได้เข้าไป พูดคุยกับรุ่นพี่ เกี่ยวกับสาขา ยิ่งได้ฟังคำตอบและเห็น Passion ของพี่ๆ ตอนอธิบาย มันเหมือนภาพในหัวผมมันชัดขึ้นทันทีว่า 'ต้องเป็นที่นี่แหละ' อนาคตของผม"
            />

            <ReasonCard 
              icon={<Lightbulb className="w-4 h-4 text-orange-400" />}
              title="Innovation & Future (Ant Spirit)"
              desc="ผมชอบ 'ความสู้งาน' ของบางมดครับ ผมรู้กิตติศัพท์ว่า ที่นี่เรียนโหดและเน้นผลงานจริง ซึ่งมัน 'ตรงจริต' ผมมาก ผมไม่ได้มองหาที่เรียนสบายๆ แต่อยากเอาตัวเองมาอยู่ในที่ที่คนเก่งๆ เขาขยันกัน เพื่อให้ผมพัฒนาตัวเองยิ่งขึ้นไปอีก"
            />

          </div>

          {/* 3. Button Section */}
          <motion.div variants={itemVariants} className="shrink-0 pt-2">
            <Link href="/portfolio">
              <button className="group relative inline-flex items-center gap-3 px-8 py-3 bg-white text-black rounded-full font-bold text-xs tracking-widest hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-orange-500/40">
                ดูผลงาน
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </motion.div>

        </motion.div>
      </div>
    </main>
  );
}

// Compact Card Design
function ReasonCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <motion.div 
      variants={itemVariants}
      className="group relative p-4 rounded-xl bg-[#111] border border-white/5 hover:border-orange-500/30 hover:bg-white/[0.02] transition-all duration-300"
    >
      <div className="flex gap-4 items-start">
        {/* Icon Box */}
        <div className="mt-1 w-9 h-9 rounded-lg bg-orange-500/10 flex items-center justify-center shrink-0 border border-orange-500/20 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        
        {/* Content */}
        <div className="flex-1">
          <h3 className="text-sm lg:text-base font-bold text-white mb-1 group-hover:text-orange-400 transition-colors">
            {title}
          </h3>
          <div className="relative">
             {/* Quote icon */}
            <Quote className="absolute -top-1 -left-2 w-3 h-3 text-stone-700 transform -scale-x-100 opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <p className="text-stone-400 text-xs leading-relaxed font-light group-hover:text-stone-300 transition-colors pl-1">
              {desc}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}