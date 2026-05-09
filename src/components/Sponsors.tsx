export default function Sponsors() {
  return (
    <section id="sponsors" className="py-24 px-5 bg-[#1a3a2a]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="block w-8 h-px bg-[#b8962e]" />
            <span className="text-[#b8962e] text-xs font-semibold tracking-[0.2em] uppercase">
              Partnership
            </span>
            <span className="block w-8 h-px bg-[#b8962e]" />
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            Open to Partnerships
          </h2>
          <p className="text-white/60 max-w-xl mx-auto leading-relaxed">
            Theo is an emerging competitor at the national and international
            junior golf level. He is open to working with golf brands,
            academies, and equipment companies that align with a commitment to
            excellence, development, and the sport.
          </p>
        </div>

        {/* Partnership opportunity cards */}
        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: "🏌️",
              title: "Equipment & Apparel",
              body: "Clubs, balls, apparel, and accessories — aligned with a competitive junior playing at the highest level.",
            },
            {
              icon: "🎓",
              title: "Academy & Coaching",
              body: "Golf academies and coaching programs looking to grow their brand through high-level junior representation.",
            },
            {
              icon: "📸",
              title: "Brand & Media",
              body: "Social media, tournament coverage, and content creation opportunities with an active junior competitor.",
            },
          ].map((c) => (
            <div
              key={c.title}
              className="border border-white/10 rounded-xl p-7 bg-white/5 hover:bg-white/10 transition-colors"
            >
              <span className="text-3xl mb-4 block">{c.icon}</span>
              <h3 className="text-white font-semibold text-lg mb-2">{c.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#contact"
            className="inline-block bg-[#b8962e] hover:bg-[#a0801f] text-white text-sm font-semibold tracking-widest uppercase px-10 py-3 rounded transition-colors"
          >
            Enquire About Partnership
          </a>
        </div>
      </div>
    </section>
  );
}
