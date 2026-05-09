import Image from "next/image";

const photos = [
  {
    src: "/images/tournament-action.jpg",
    title: "Tournament Action",
    caption: "Competing across junior tournament events.",
  },
  {
    src: "/images/trophy-photo.jpg",
    title: "Champion Result",
    caption: "Building a competitive junior golf resume.",
  },
  {
    src: "/images/putting-green.jpg",
    title: "Course Management",
    caption: "Reading greens, managing pressure, and staying focused.",
  },
  {
    src: "/images/driver-range.jpg",
    title: "Training",
    caption: "Developing ball-striking and consistency through practice.",
  },
  {
    src: "/images/worlds-qualification.jpg",
    title: "World Championship Stage",
    caption: "Experience in international junior golf events.",
  },
  {
    src: "/images/scorecard-or-leaderboard.jpg",
    title: "Result Highlight",
    caption: "2026 MJT adidas Golf Series — Peewee Boys Champion.",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="block w-10 h-px bg-[#b8962e]" />
            <span className="text-[#b8962e] text-xs font-semibold tracking-[0.2em] uppercase">
              Gallery
            </span>
            <span className="block w-10 h-px bg-[#b8962e]" />
          </div>

          <h2 className="text-4xl font-bold text-[#1a3a2a] mb-4">
            On the Course
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            A look at competition, training, and tournament moments from Theo’s junior golf journey.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo) => (
            <div
              key={photo.src}
              className="group bg-gray-50 rounded-xl overflow-hidden shadow-sm border border-gray-100"
            >
              <div className="relative h-80 overflow-hidden bg-gray-100">
                <Image
                  src={photo.src}
                  alt={photo.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-5">
                <h3 className="text-[#1a3a2a] font-bold text-lg mb-2">
                  {photo.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
