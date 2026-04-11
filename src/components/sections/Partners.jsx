function Partners() {
  const partners = [
    { name: "ATU-NET", logo: "/images/Logo-ATU-Net.png" },
    { name: "CITED", logo: "/images/Logo-ATU-Net.png" },
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
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex min-h-[180px] flex-col items-center justify-center rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-20 w-auto object-contain"
              />
              <p className="mt-4 text-lg font-semibold text-slate-700">
                {partner.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Partners;