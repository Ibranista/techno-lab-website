export function RocketBackground() {
  // linear-gradient(#172033)_padding-box
  return (
    <main className="relative min-h-screen flex flex-col justify-center bg-slate-900 overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
        {/* Animated Gradient Border */}
        <section className="flex justify-center">
          {/* Card with animated border */}
          <div
            className="w-full max-w-[422px] bg-slate-800 relative group rounded-2xl border border-transparent"
            style={{ "--border-angle": "0deg" } as React.CSSProperties}
          >
            {/* Animated border overlay */}
            <div
              className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-700 opacitygroup-hover:opacity-100 animate-border"
              style={
                {
                  background:
                    "conic-gradient(from var(--border-angle), rgba(102,126,234,0.7) 0deg, rgba(102,126,234,0.7) 90deg, transparent 90deg, transparent 360deg) border-box",
                  zIndex: 1,
                } as React.CSSProperties
              }
            ></div>
            {/* Card content */}
            <div className="px-5 relative z-10">
              <h1 className="text-2xl font-bold text-slate-200 mb-2">hello</h1>
            </div>
          </div>
        </section>
        {/* End: Animated Gradient Border */}
      </div>
    </main>
  );
}
