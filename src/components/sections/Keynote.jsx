function Keynote() {
  const speaker = {
    name: "Prof. Brian Yuliarto",
    title: "Menteri Pendidikan Tinggi, Sains, dan Teknologi Republik Indonesia",
    image: "/images/brian.jpg",
    description:
      "Brawijaya Summit 2026 proudly features a distinguished keynote speaker who represents national leadership in higher education, science, and technology. This keynote session is expected to inspire interdisciplinary collaboration, innovation, and strategic global engagement.",
  };

  return (
    <section
      id="keynote"
      className="bg-gradient-to-r from-[#16205a] via-[#2b2f7a] to-[#5b2c83] px-6 py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-100">
            Keynote Speaker
          </p>
          <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
            Featured Keynote
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-200">
            Meet the featured keynote speaker of Brawijaya Summit 2026.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl border border-white/10 bg-white/10 shadow-xl backdrop-blur-sm">
          <div className="grid items-center md:grid-cols-2">
            {/* Left: Image */}
            <div className="flex h-full items-center justify-center p-6 md:p-8">
              <img
                src={speaker.image}
                alt={speaker.name}
                className="h-auto w-full max-w-md rounded-2xl object-cover shadow-lg"
              />
            </div>

            {/* Right: Content */}
            <div className="p-8 md:p-10">
              <div className="inline-block rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white">
                Keynote Speaker
              </div>

              <h3 className="mt-6 text-3xl font-bold text-white">
                {speaker.name}
              </h3>

              <p className="mt-3 text-lg font-medium leading-7 text-blue-100">
                {speaker.title}
              </p>

              <p className="mt-6 text-base leading-8 text-slate-200">
                {speaker.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Keynote;