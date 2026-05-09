const achievements = [
  {
    icon: "🏆",
    title: "CJGA Linkster Tour",
    detail: "Multiple wins on the Canadian Junior Golf Association Linkster Tour",
    tag: "Multi-Win",
  },
  {
    icon: "🥇",
    title: "MJT Mini Tour",
    detail: "Competitive wins on the Maple Leaf Junior Golf Tour Mini Tour circuit",
    tag: "Multi-Win",
  },
  {
    icon: "🏌️",
    title: "MJT Junior Tour",
    detail: "Wins on the full MJT Junior Tour, competing against top Canadian junior golfers",
    tag: "Multi-Win",
  },
  {
    icon: "📊",
    title: "MJT National Order of Merit",
    detail: "Ranked near the top of the MJT National Order of Merit standings — recognizing season-long consistency",
    tag: "Top Ranking",
  },
  {
    icon: "🌍",
    title: "Junior Worlds",
    detail: "Qualified for the 2026 Junior Worlds — one of the most prestigious junior golf events in the world",
    tag: "World Qualifier",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-5 bg-[#f8f7f4]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="block w-8 h-px bg-[#b8962e]" />
            <span className="text-[#b8962e] text-xs font-semibold tracking-[0.2em] uppercase">
              Achievements
            </span>
            <span className="block w-8 h-px bg-[#b8962e]" />
          </div>
          <h2 className="text-4xl font-bold text-[#1a3a2a]">Results That Speak</h2>
          <p className="text-gray-500 mt-3 max-w-md mx-auto">
            A track record built on consistent performance at the national and international level.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((a) => (
            <div
              key={a.title}
              className="bg-white rounded-xl p-7 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl">{a.icon}</span>
                <span className="text-[10px] font-bold tracking-widest uppercase text-[#b8962e] border border-[#b8962e]/30 bg-[#b8962e]/5 px-2 py-1 rounded">
                  {a.tag}
                </span>
              </div>
              <h3 className="text-[#1a3a2a] font-bold text-lg mb-2 leading-snug">{a.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{a.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
