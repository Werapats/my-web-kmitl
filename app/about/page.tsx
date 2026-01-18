"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Code2, Cpu, Globe, Database, Terminal, Layout, Github, Facebook, Mail, Sparkles } from "lucide-react";
import TiltedCard from "@/app/TiltedCard"; 

const skills = [
  { name: "Web Dev", icon: <Globe size={20} />, color: "text-blue-400", bg: "bg-blue-500/10" },
  { name: "Frontend", icon: <Layout size={20} />, color: "text-pink-400", bg: "bg-pink-500/10" },
  { name: "Backend", icon: <Database size={20} />, color: "text-emerald-400", bg: "bg-emerald-500/10" },
  { name: "Algorithm", icon: <Terminal size={20} />, color: "text-orange-400", bg: "bg-orange-500/10" },
  { name: "IoT", icon: <Cpu size={20} />, color: "text-purple-400", bg: "bg-purple-500/10" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen w-full bg-[#050505] text-white overflow-hidden relative selection:bg-orange-500/30 selection:text-orange-200 flex items-center justify-center p-6">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-orange-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>

      {/* Grid Layout */}
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        
        {/* --- Left Column: Tilted Card --- */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center lg:justify-start order-1 lg:order-1 pl-0 lg:pl-8"
        >
          {/* Wrapper สำหรับทำ Animation ลอยตัว (Floating) */}
          <motion.div
            animate={{ y: [0, -15, 0] }} 
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="relative"
          >
             {/* Glow Effect */}
             <div className="absolute inset-0 bg-gradient-to-tr from-orange-500 to-purple-600 rounded-[20px] blur-[60px] opacity-30 animate-pulse pointer-events-none"></div>
             
             <TiltedCard
              imageSrc="https://i.ibb.co/pj3mK75q/SUN-6991-1.jpg"
              altText="Weerapat Profile"
              captionText="Werapat"
              containerHeight="450px"
              containerWidth="350px"
              imageHeight="450px"
              imageWidth="350px"
              rotateAmplitude={10}
              scaleOnHover={1.05}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <div className="absolute bottom-6 left-6 p-4 bg-zinc-900/60 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl">
                    <div className="flex items-center gap-2 mb-1">
                      <Sparkles className="w-3 h-3 text-orange-400 fill-orange-400" />
                      <p className="text-orange-400 text-xs font-bold tracking-widest uppercase">KMITL</p>
                    </div>
                </div>
              }
            />
          </motion.div>
        </motion.div>

        {/* --- Right Column: Content --- */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8 text-center lg:text-left order-2 lg:order-2"
        >
          {/* Header */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-white/5 border border-white/10 text-orange-400 text-xs font-bold tracking-widest uppercase">
              About Me
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              วีรภัทร <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">ถนอมศรี</span>
            </h1>
            <p className="text-stone-400 leading-relaxed text-sm lg:text-base">
            <span className="text-white font-medium">ผมตั้งใจศึกษาต่อใน สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง </span> เพราะเชื่อว่าจะช่วยต่อยอดความรู้ และศักยภาพในการเรียน และสร้างสรรค์เทคโนโลยีใหม่ๆ ที่ตอบโจทย์ทั้งความฝันของผมเอง และเป็นประโยชน์ต่อผู้คนกับสังคม เหมือนกับที่เทคโนโลยีได้เป็นส่วนสำคัญในชีวิตของเราทุกวันนี้
            </p>
          </div>

          {/* Skills Grid */}
          <div>
            <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-wider flex items-center justify-center lg:justify-start gap-2">
              <Code2 size={16} className="text-orange-500" /> Core Competencies
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`flex flex-col items-center justify-center gap-2 p-3 rounded-xl border border-white/5 bg-[#111] hover:bg-white/5 transition-colors group cursor-default`}
                >
                  <div className={`p-2 rounded-lg ${skill.bg} ${skill.color} group-hover:scale-110 transition-transform`}>
                    {skill.icon}
                  </div>
                  <span className="text-[10px] text-stone-400 font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* --- FOOTER: Connect & Action Button (Moved Here) --- */}
          <div className="pt-8 border-t border-white/10 flex flex-col xl:flex-row items-center justify-between gap-6">
            
            {/* Socials Section */}
            <div className="flex flex-col items-center lg:items-start gap-3">
               <span className="text-xs text-stone-500 uppercase font-bold tracking-widest">Let's Connect</span>
               <div className="flex items-center gap-4">
                  {/* Github */}
                  <a href="https://github.com/Werapats" target="_blank" className="p-3 rounded-full bg-white/5 hover:bg-[#2dba4e]/20 text-stone-400 hover:text-[#2dba4e] border border-white/5 transition-all hover:scale-110">
                    <Github size={20} />
                  </a>
                  {/* Facebook */}
                  <a href="https://www.facebook.com/profile.php?id=61570937945066" target="_blank" className="p-3 rounded-full bg-white/5 hover:bg-[#1877F2]/20 text-stone-400 hover:text-[#1877F2] border border-white/5 transition-all hover:scale-110">
                    <Facebook size={20} />
                  </a>
                  {/* Mail (แก้ให้เท่ากันแล้วครับ ใช้ p-3 และ size={20}) */}
                  <a 
                    href="mailto:dueiwo67@gmail.com" 
                    className="md:hidden p-3 rounded-full bg-white/5 hover:bg-white/10 text-stone-400 hover:text-[#EA4335] transition-colors"
                  >
                    <Mail size={20} />
                  </a>
                  <a 
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=dueiwo67@gmail.com"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hidden md:block p-3 rounded-full bg-white/5 hover:bg-white/10 text-stone-400 hover:text-[#EA4335] transition-colors"
                  >
                    <Mail size={20} />
                  </a>
               </div>
            </div>

            {/* Next Step Button */}
            <Link href="/why">
                <button className="group relative inline-flex items-center gap-3 px-8 py-3 bg-white text-black rounded-full font-bold text-sm tracking-widest hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-orange-500/25 whitespace-nowrap">
                  ทำไมต้อง KMITL?
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
            </Link>

          </div>

        </motion.div>
      </div>
    </main>
  );
}