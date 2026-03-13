function Partners() {
  const partners = [
    {
      name: "ATU-NET",
      logo: "/images/Logo-ATU-Net.png",
    },
    {
      name: "CITED",
      logo: "/images/Logo-ATU-Net.png",
    },
    {
      name: "Partner 3",
      logo: "/images/Logo-ATU-Net.png",
    },
    {
      name: "Partner 4",
      logo: "/images/Logo-ATU-Net.png",
    },
  ];

  return (
    <section id="partners" className="bg-white px-6 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#16205a]">
            Key Partners
          </p>
          <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
            In Collaboration With
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Brawijaya Summit 2026 is supported through collaboration with
            institutional and international partners who contribute to the
            success of this global academic platform.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex min-h-[180px] items-center justify-center rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-20 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Partners;