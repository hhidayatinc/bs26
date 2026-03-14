function Conferences() {
  const conferences = [
    {
      shortName: "ATU-Net InVENT 2026",
      fullName: "International Conference On Innovation & Entrepreneurship in Computing, Engineering, and Science Education 2026",
      description:
        "Write a short description of the second co-located conference here. Explain its focus, scope, or international relevance.",
      link: "#",
    },
    {
      shortName: "Conference 02",
      fullName: "CITED 2026",
      description:
        "Write a short description of the second co-located conference here. Explain its focus, scope, or international relevance.",
      link: "#",
    },
    {
      shortName: "Conference 03",
      fullName: "International Conference On Innovation & Entrepreneurship in Computing, Engineering, and Science Education 2026",
      description:
        "Write a short description of the second co-located conference here. Explain its focus, scope, or international relevance.",
      link: "#",
    },
    {
      shortName: "Conference 04",
      fullName: "CITED 2026",
      description:
        "Write a short description of the second co-located conference here. Explain its focus, scope, or international relevance.",
      link: "#",
    },
  ];

  return (
    <section id="conferences" className="bg-white px-6 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#16205a]">
            Co-Located Conferences
          </p>
          <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
            Many Conferences, One Summit
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Brawijaya Summit 2026 brings together co-located conferences under
            one umbrella platform to encourage interdisciplinary collaboration and
            global academic exchange.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {conferences.map((conference, index) => (
            <div
              key={index}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="inline-block rounded-full bg-[#16205a] px-4 py-2 text-sm font-semibold text-white">
                {conference.shortName}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                {conference.fullName}
              </h3>

              <p className="mt-4 text-base leading-7 text-slate-600">
                {conference.description}
              </p>

              <a
                href={conference.link}
                className="mt-6 inline-block rounded-xl bg-[#16205a] px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                View Details
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Conferences;