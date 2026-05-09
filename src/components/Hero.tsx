import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#0d2018] text-white overflow-hidden">
      {/* Hero Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-swing.jpg"
          alt="Theo Zhou golf swing"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d2018]/75 via-[#0d2018]/55 to-[#0d2018]/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-5 text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="block w-10 h-px bg-[#b8962e]" />
          <span className="text-[#b8962e] text-xs font-semibold tracking-[0.25em] uppercase">
            Junior Golfer · Canada
          </span>
          <span className="block w-10 h-px bg-[#b8962e]" />
        </div>

        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight leading-none mb-6">
          Theo Zhou
        </h1>

        <p className="text-lg sm:text-xl text-white/85 font-light leading-relaxed max-w-xl mx-auto mb-10">
          Competing across national and international junior golf events.
          Building a game that speaks for itself.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md">
          <a
            href="#achievements"
            className="inline-block bg-[#b8962e] hover:bg-[#a0801f] text-white text-sm font-semibold tracking-widest uppercase px-8 py-4 rounded transition-colors duration-200"
          >
            View Achievements
          </a>

          <a
            href="#contact"
            className="inline-block border border-white/40 hover:border-[#b8962e] text-white text-sm font-semibold tracking-widest uppercase px-8 py-4 rounded transition-colors duration-200"
          >
            Get in Touch
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-white/40 text-xs tracking-widest uppercase">
            Scroll
          </span>
          <svg
            className="w-4 h-4 text-white/40 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
