"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      // 1. ตัด filter: blur ออก (ตัวกินสเปคหลัก)
      // 2. ใช้ y แค่ 10px พอ ให้ขยับนิดเดียวแต่เนียน
      initial={{ opacity: 0, y: 15 }}
      
      animate={{ opacity: 1, y: 0 }}
      
      // 3. ใช้ transition แบบ Spring ที่จูนมาเบาๆ (ไม่ต้องคำนวณ curve ยากๆ)
      // mass: น้อยๆ = น้ำหนักเบา ขยับไว
      // stiffness: ความตึง (ยิ่งเยอะยิ่งดีด)
      // damping: แรงต้าน (เพื่อไม่ให้มันเด้งดึ๋งเกินไป)
      transition={{ 
        type: "spring", 
        mass: 0.5, 
        stiffness: 80, 
        damping: 15 
      }}

      // 4. Force GPU: สั่งให้การ์ดจอเตรียม render ล่วงหน้า
      style={{ willChange: "transform, opacity" }}
      
      className="w-full min-h-screen"
    >
      {children}
    </motion.div>
  );
}