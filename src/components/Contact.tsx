export default function Contact() {
  return (
    <section id="contact" className="py-24 px-5 bg-white">
      <div className="max-w-2xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="block w-8 h-px bg-[#b8962e]" />
          <span className="text-[#b8962e] text-xs font-semibold tracking-[0.2em] uppercase">
            Contact
          </span>
          <span className="block w-8 h-px bg-[#b8962e]" />
        </div>

        <h2 className="text-4xl font-bold text-[#1a3a2a] mb-4">Get in Touch</h2>
        <p className="text-gray-500 leading-relaxed mb-10">
          For tournament enquiries, partnership opportunities, or media
          requests, please reach out below. All correspondence is managed by
          Theo&apos;s parents.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center mb-12">
          {/* Email */}
          <a
            href="mailto:zhouweiok@gmail.com"
            className="flex items-center gap-3 bg-[#f8f7f4] hover:bg-[#1a3a2a] hover:text-white group rounded-xl px-7 py-5 transition-all duration-200 border border-gray-100"
          >
            <svg
              className="w-5 h-5 text-[#b8962e]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <div className="text-left">
              <p className="text-[10px] uppercase tracking-widest text-gray-400 group-hover:text-white/60 mb-0.5">
                Email (parent-managed)
              </p>
              <p className="text-sm font-semibold text-[#1a3a2a] group-hover:text-white">
                zhouweiok@gmail.com
              </p>
            </div>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#f8f7f4] hover:bg-[#1a3a2a] hover:text-white group rounded-xl px-7 py-5 transition-all duration-200 border border-gray-100"
          >
            <svg
              className="w-5 h-5 text-[#b8962e]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            <div className="text-left">
              <p className="text-[10px] uppercase tracking-widest text-gray-400 group-hover:text-white/60 mb-0.5">
                Instagram
              </p>
              <p className="text-sm font-semibold text-[#1a3a2a] group-hover:text-white">
                @theo_zhou_junior_golfer
              </p>
            </div>
          </a>
        </div>

        <p className="text-xs text-gray-400 max-w-sm mx-auto">
          This website is managed by Theo&apos;s parents. All enquiries are
          reviewed and responded to by a parent or guardian.
        </p>
      </div>
    </section>
  );
}
