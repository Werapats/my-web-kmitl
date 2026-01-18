"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Home } from "lucide-react";
import { projects } from "../data/projects"; // ดึงข้อมูลจากไฟล์ data

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-stone-50 p-6 md:p-12">
      
      {/* Header ส่วนหัว */}
      <header className="flex justify-between items-center mb-12 max-w-6xl mx-auto">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-stone-900">Selected Works</h1>
          <div className="h-1 w-20 bg-orange-500 mt-2 rounded-full"></div>
        </div>
        <Link href="/" className="p-3 bg-white rounded-full shadow-sm hover:shadow-md transition text-stone-600 hover:text-orange-600">
          <Home className="w-6 h-6" />
        </Link>
      </header>

      {/* Grid ผลงาน: มือถือ 1 ช่อง, ไอแพด 2 ช่อง, คอม 3 ช่อง */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <Link href={`/portfolio/${project.id}`} key={project.id} className="block h-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer h-full flex flex-col border border-stone-100"
            >
              {/* รูปภาพ Cover */}
              <div className="relative h-56 md:h-48 overflow-hidden">
                <Image 
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-orange-600/0 group-hover:bg-orange-600/10 transition-colors duration-300" />
              </div>

              {/* เนื้อหาการ์ด */}
              <div className="p-6 flex flex-col grow">
                <span className="text-xs font-bold text-orange-500 uppercase tracking-wider mb-2">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-stone-800 mb-2 group-hover:text-orange-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-stone-500 text-sm line-clamp-2 mb-4 grow">
                  {project.shortDesc}
                </p>
                
                {/* ปุ่ม Action ด้านล่างการ์ด */}
                <div className="flex items-center text-sm font-medium text-stone-400 group-hover:text-orange-600 transition mt-auto pt-4 border-t border-stone-50">
                  อ่านรายละเอียด <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>

      {/* Footer เล็กๆ */}
      <footer className="text-center mt-20 text-stone-400 text-sm">
        <p>Code by Werapat SA.</p>
      </footer>
    </main>
  );
}