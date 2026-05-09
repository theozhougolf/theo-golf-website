import Image from "next/image";

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-l-2 border-[#b8962e] pl-4">
      <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">{label}</p>
      <p className="text-[#1a3a2a] font-semibold text-sm">{value}</p>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Profile Image */}
          <div className="relative h-[520px] rounded-xl overflow-hidden bg-gray-100 shadow-sm">
            <Image
              src="/images/profile-headshot.jpg"
              alt="Theo Zhou profile photo"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>

          {/* Text */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-10 h-px bg-[#b8962e]" />
              <span className="text-[#b8962e] text-xs font-semibold tracking-[0.2em] uppercase">
                About
              </span>
            </div>

            <h2 className="text-4xl font-bold text-[#1a3a2a] leading-tight mb-8">
              Playing the Long Game
            </h2>

            <div className="space-y-5 text-gray-600 leading-relaxed">
              <p>
                Theo Zhou is a Canadian junior golfer based in British Columbia,
                competing across national and international junior golf events.
                His tournament experience includes major junior stages such as
                Junior Worlds, Uswing Mojing Junior World Championships,
                and the FCG Callaway Junior World Championship.
              </p>

              <p>
                With wins on the CJGA Linkster Tour, MJT Mini Tour, and MJT
                Junior Tour, Theo has built a competitive record across multiple
                junior circuits. He has also ranked near the top of the MJT
                National Order of Merit standings.
              </p>

              <p>
                Theo has competed and qualified across{" "}
                <span className="text-[#1a3a2a] font-semibold">
                  Junior Worlds
                </span>
                , adding to a growing resume of national and international
                tournament experience.
              </p>

              <p>
                Focused on long-term development, Theo approaches competition
                with discipline, course management, and a drive to keep improving.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6">
              <Stat label="Home Tour" value="CJGA / MJT" />
              <Stat label="Country" value="Canada 🇨🇦" />
              <Stat label="2026 Event" value="Junior Worlds" />
              <Stat label="Status" value="Active Competitor" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
