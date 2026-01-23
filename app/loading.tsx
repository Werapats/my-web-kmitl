// app/loading.tsx
export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#050505]">
      <div className="relative w-16 h-16">
        {/* วงกลมหมุนๆ สีส้ม */}
        <div className="absolute inset-0 border-4 border-t-orange-500 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
        {/* ข้อความตรงกลาง */}
        <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white tracking-widest animate-pulse">
          LOAD
        </div>
      </div>
    </div>
  );
}