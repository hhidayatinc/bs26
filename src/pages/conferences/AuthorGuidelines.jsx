import { Link } from "react-router-dom";

function AuthorGuidelines() {
  const sections = [
    {
      title: "Manuscript Submission",
      content: [
        "Authors must submit their manuscripts through the official submission channel designated by the conference committee.",
        "Manuscripts must fall within the conference scope.",
        "Use the provided template.",
        "Written in academic English.",
        "Must be original and unpublished work.",
      ],
    },
    {
      title: "Initial Administrative Screening",
      content: [
        "Similarity Index not exceeding 15%.",
        "English readability at least 70%.",
        "Relevance to conference themes.",
      ],
    },
    {
      title: "Revision Prior to Review",
      content: [
        "Reduce similarity index if necessary.",
        "Improve academic English clarity.",
        "Align with conference themes.",
        "Resubmit within the specified timeline.",
      ],
    },
    {
      title: "Payment & Letter of Acceptance (LoA)",
      content: [
        "Invoice will be issued after administrative approval.",
        "Payment confirmation is required.",
        "LoA is for presentation purposes only, not publication guarantee.",
      ],
    },
    {
      title: "Substantive Academic Review",
      content: [
        "Evaluation based on academic contribution.",
        "Methodological rigor.",
        "Originality.",
        "Relevance to current scholarly discourse.",
        "Publication readiness.",
      ],
    },
    {
      title: "Publication Outlet Mapping",
      content: [
        "International Conference Proceedings.",
        "Scopus-indexed Book Chapters.",
        "Scopus-indexed Journals.",
        "National Accredited Journals (SINTA-indexed).",
      ],
    },
    {
      title: "Advanced Review for Indexed Publications",
      content: [
        "Structural consistency.",
        "Referencing accuracy.",
        "Argument clarity.",
        "Methodological robustness.",
        "Publisher-specific formatting compliance.",
      ],
    },
    {
      title: "Finalization & Publication",
      content: [
        "Formatting adjustment and metadata verification.",
        "Submission to publishers.",
        "Publication timeline depends on publisher.",
      ],
    },
    {
      title: "Important Notes",
      content: [
        "LoA is only for presentation purposes.",
        "Publication depends on quality and review.",
        "Multiple revisions may be required.",
        "Payment required before LoA issuance.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#16205a] via-[#1d2f8a] to-[#6c2d84]">

      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-[#16205a] px-4 py-4 text-white shadow-sm md:px-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between">

          {/* LEFT */}
          <h1 className="text-2xl font-bold md:text-xl">
            ATU-Net INVENT 2026
          </h1>

          {/* RIGHT (grouped) */}
          <div className="flex items-center gap-3">

            <Link
              to="/conference/invent-2026/committee"
              className="rounded-xl border border-white/20 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
            >
              Committee
            </Link>

            <Link
              to="/conference/invent-2026/author-guidelines"
              className="rounded-xl border border-white/20 px-4 py-2 text-sm text-white hover:bg-white/10"
            >
              Author Guidelines
            </Link>

            <a
              href="https://s.ub.ac.id/registrationatunet2026"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-[#ff8a5c] px-4 py-2 text-sm font-semibold text-white"
            >
              Register Here
            </a>

          </div>

        </div>
      </header>
      {/* CONTENT */}
      <div className="px-6 py-16 text-white">
        <div className="mx-auto max-w-7xl">

          {/* TITLE */}
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm uppercase tracking-[0.25em] text-white/70">
              Author Guidelines
            </p>
            <h1 className="mt-4 text-4xl font-bold">
              Submission & Publication Procedure
            </h1>
            <p className="mt-4 text-lg text-white/80">
              All authors are required to follow the procedures from submission
              through final publication processing.
            </p>
          </div>

          {/* SECTIONS */}
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {sections.map((section, index) => (
              <div
                key={index}
                className="rounded-3xl bg-white p-8 text-slate-800 shadow-xl"
              >
                <h3 className="text-xl font-bold text-[#16205a]">
                  {index + 2}. {section.title}
                </h3>

                <ul className="mt-4 space-y-2 text-base leading-7">
                  {section.content.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

export default AuthorGuidelines;