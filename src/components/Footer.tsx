export default function Footer() {
  return (
    <footer className="bg-[#0d1f17] py-8 px-5">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-white/30 text-sm font-semibold tracking-wider">
          THEO ZHOU · JUNIOR GOLFER
        </span>
        <span className="text-white/20 text-xs">
          © {new Date().getFullYear()} · All rights reserved
        </span>
      </div>
    </footer>
  );
}
