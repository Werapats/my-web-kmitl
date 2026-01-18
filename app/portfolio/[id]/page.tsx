"use client";
import { useParams } from "next/navigation";
import { projects } from "../../data/projects";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Layers, Trophy, CheckCircle2, User, Check } from "lucide-react";
import { motion } from "framer-motion";

export default function ProjectDetail() {
  const params = useParams();
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    return <div className="flex h-screen items-center justify-center text-stone-500">Project Not Found</div>;
  }

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-stone-50 selection:bg-orange-100 selection:text-orange-900"
    >
      {/* Navbar / Back Button */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <Link href="/portfolio" className="group inline-flex items-center text-stone-500 hover:text-orange-600 transition-colors font-medium">
          <div className="p-2 rounded-full bg-white border border-stone-200 mr-3 group-hover:border-orange-200 shadow-sm">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          </div>
          Back to Portfolio
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-24">
        {/* Layout: Grid 12 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* ---------------- ฝั่งซ้าย: รูปภาพ + หน้าที่ของผม (Sticky) ---------------- */}
          <div className="lg:col-span-5 lg:sticky lg:top-10 space-y-8">
            
            {/* 1. รูปภาพ */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-stone-100"
            >
              <Image 
                src={project.image}
                alt={project.title}
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>

            {/* 2. ส่วนใหม่: หน้าที่รับผิดชอบ (My Role) */}
            {project.myRole && (
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-stone-100"
              >
                <h3 className="flex items-center text-stone-900 font-bold mb-4 text-lg border-b border-stone-100 pb-3">
                  <User className="w-5 h-5 mr-2 text-orange-500" />
                  My Responsibilities
                </h3>
                <ul className="space-y-3">
                  {project.myRole.map((role, index) => (
                    <li key={index} className="flex items-start text-stone-600 text-sm md:text-base font-medium">
                      <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center shrink-0 mr-3 mt-0.5">
                        <Check className="w-3 h-3 text-orange-600" />
                      </div>
                      {role}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

          </div>

          {/* ---------------- ฝั่งขวา: เนื้อหาหลัก (Scrollable) ---------------- */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-7 flex flex-col justify-center pt-2"
          >
            {/* Header Tags */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-4 py-1.5 bg-orange-500 text-white rounded-full text-xs font-bold uppercase tracking-wider shadow-orange-200 shadow-lg">
                {project.category}
              </span>
              <span className="flex items-center px-4 py-1.5 bg-white border border-stone-200 rounded-full text-stone-500 text-xs font-semibold">
                <Calendar className="w-3 h-3 mr-2" /> {project.year}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 mb-8 leading-tight">
              {project.title}
            </h1>

            {/* --- Awards Section --- */}
            {project.awards && project.awards.length > 0 && (
              <div className="mb-8 p-6 bg-gradient-to-br from-orange-50 to-white border border-orange-100 rounded-2xl shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/5 rounded-bl-full -mr-4 -mt-4" />
                <h3 className="flex items-center text-orange-700 font-bold mb-4 relative z-10">
                  <Trophy className="w-5 h-5 mr-2" /> Achievements & Awards
                </h3>
                <ul className="space-y-3 relative z-10">
                  {project.awards.filter(a => a).map((award, index) => (
                    <li key={index} className="flex items-start text-stone-700 text-sm md:text-base font-medium">
                      <CheckCircle2 className="w-5 h-5 mr-3 text-orange-500 shrink-0 mt-0.5" />
                      {award}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Description */}
            <div className="prose prose-stone prose-lg max-w-none text-stone-600 mb-10 leading-relaxed">
              <h3 className="text-xl font-bold text-stone-900 mb-4">Project Detail</h3>
              <p className="whitespace-pre-line">{project.fullDesc}</p>
            </div>

            {/* Tools Grid */}
            <div className="border-t border-stone-200 pt-8">
              <h3 className="flex items-center text-stone-900 font-bold mb-5">
                <Layers className="w-5 h-5 mr-2 text-stone-400" /> 
                Technology Stack
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.tools.map((tool) => (
                  <span key={tool} className="px-5 py-2.5 bg-white border border-stone-200 rounded-xl text-stone-600 text-sm font-medium hover:border-orange-300 hover:text-orange-600 hover:shadow-md transition-all cursor-default">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </motion.main>
  );
}