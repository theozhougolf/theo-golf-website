import Image from "next/image";

const highlights = [
  {
    title: "2026 MJT adidas Golf Series",
    subtitle: "Peewee Boys Champion",
    detail: "University Golf Club · 72, 77, 72 — Total 221",
    image: "/images/scorecard-or-leaderboard.jpg",
  },
  {
    title: "Junior Worlds",
    subtitle: "Junior Worlds Competitor",
    detail: "Experience across major junior world championship events, including Junior Worlds-level competition.",
    image: "/images/worlds-qualification.jpg",
  },
  {
    title: "FCG Callaway Junior World Championship",
    subtitle: "International Tournament Experience",
    detail: "Competed in a major junior world championship environment.",
    image: "/images/fcg-worlds.jpg",
  },
  {
    title: "CJGA / MJT Competition",
    subtitle: "Canadian Junior Golf Resume",
    detail: "Wins and strong results across CJGA Linkster, MJT Mini Tour, and MJT Junior Tour.",
    image: "/images/cjga-mjt-photo.jpg",
  },
];

export default function Highlights() {
  return (
    <section id="highlights" className="py-24 bg-[#0d2018] text-white">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="block w-10 h-px bg-[#b8962e]" />
            <span className="text-[#b8962e] text-xs font-semibold tracking-[0.2em] uppercase">
              Highlights
            </span>
            <span className="block w-10 h-px bg-[#b8962e]" />
          </div>

          <h2 className="text-4xl font-bold mb-4">
            Tournament Highlights
          </h2>

          <p className="text-white/70 max-w-2xl mx-auto">
            A focused summary of key events, results, and competitive experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="bg-white/5 border border-white/10 rounded-xl overflow-hidden"
            >
              <div className="relative h-72 bg-white/10">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>

              <div className="p-6">
                <p className="text-[#b8962e] text-xs font-semibold uppercase tracking-[0.2em] mb-3">
                  {item.subtitle}
                </p>
                <h3 className="text-2xl font-bold mb-3">
                  {item.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
