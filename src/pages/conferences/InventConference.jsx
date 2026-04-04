import { Link } from "react-router-dom";

const previousEditions = [
  {
    year: "2023",
    label: "ATU-Net INVENT 2023",
    url: "https://partnership.itb.ac.id/international-conference-on-innovation-and-entrepreneurship-in-computing-engineering-and-science-education-2023-atu-net-invent-2023/",
  },
  {
    year: "2024",
    label: "INVENT 2024 Proceedings",
    url: "https://www.atlantis-press.com/proceedings/invent-24/preface",
  },
  {
    year: "2025",
    label: "ATU-Net INVENT 2025",
    url: "https://www.ustp.edu.ph/ustp-hosts-atu-net-invent-2025-empowering-education-for-sustainable-innovation-and-entrepreneurship/",
  },
];

const speakers = [
  {
    role: "Plenary Speaker",
    name: "Prof. Brian Yuliarto",
    title:
      "Minister of Higher Education, Science, and Technology of the Republic of Indonesia",
    image: "/images/brian.jpg",
    tbc: true,
  },
  {
    role: "Keynote Speaker",
    name: "Prof. Ir. Wayan Firdaus Mahmudy, S.Si., M.T., Ph.D",
    title: "Director of AI Center, Universitas Brawijaya, Indonesia",
    image: "/images/wayan.jpeg",
    tbc: false,
  },
  {
    role: "Keynote Speaker",
    name: "Assoc. Prof. Dr. Corrienna Abdul Talib",
    title: "Faculty of Social Sciences and Humanities, Universiti Teknologi Malaysia, Malaysia",
    image: "/images/corriena.jpeg",
    tbc: false,
  },
];

const subThemes = [
  "Computing, Engineering, and Science Education Innovation",
  "Educational Leadership, Language, and Learning Systems",
  "Engineering, Technology, and Applied Sciences for Societal Impact",
  "Entrepreneurship, Innovation Ecosystems, and Future Workforce",
  "Health, Wellbeing, and Social Contexts in Science and Technology Education",
];

const objectives = [
  "Facilitate interdisciplinary academic dialogue across education, language, science and engineering, health, social sciences, humanities, and entrepreneurship.",
  "Promote innovation in education, research, and practice, including leadership, governance, language education, technological advancement, and knowledge-based entrepreneurship.",
  "Enhance research visibility and scholarly output through international presentation and academic exchange.",
  "Strengthen international networking and institutional collaboration among ATU-Net member universities, industry partners, and related stakeholders.",
  "Support capacity building and professional development for academics, early-career researchers, and postgraduate students.",
  "Encourage university–industry–community linkages that contribute to sustainable and inclusive societal progress.",
];

const participants = [
  "Academics and Researchers",
  "Postgraduate Students",
  "Early-Career Researchers and Young Academics",
  "Industry Practitioners and Professionals",
  "Policy Makers, Institutional Leaders, and Administrators",
  "Representatives from ATU-Net Member Institutions and partner organizations",
];

function InventConference() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 bg-[#16205a] px-4 py-4 text-white shadow-sm md:px-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.25em] text-blue-200 md:text-xs">
              Co-Located Conference
            </p>
            <h1 className="text-2xl font-bold md:text-xl">INVENT 2026</h1>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://your-register-link.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-[#ff8a5c] px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Register Here
            </a>

            <Link
              to="/"
              className="rounded-xl border border-white/20 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#16205a] via-[#1d2f8a] to-[#6c2d84] px-4 py-10 text-white md:px-6 md:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-start">
            <p className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs leading-6 md:text-sm">
              27–28 October 2026 · Offline and Online Attendance
            </p>

            <div className="mt-5 inline-flex w-fit max-w-full rounded-[24px] bg-white px-4 py-3 shadow-2xl md:mt-6 md:rounded-[28px] md:px-5 md:py-4">
              <img
                src="/images/INVENT-2026-LOGO.png"
                alt="INVENT 2026"
                className="h-auto w-auto max-h-16 max-w-full object-contain md:max-h-24"
              />
            </div>
          </div>

          <h2 className="mt-6 max-w-6xl text-3xl font-black leading-tight sm:text-4xl md:mt-8 md:text-5xl lg:text-6xl">
            ATU-Net International Conference On Innovation & Entrepreneurship in
            Computing, Engineering, and Science Education 2026
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-orange-200 md:mt-8 md:text-lg">
            INVENT 2026 is an annual international academic forum under the Asia
            Technological University Network (ATU-Net) that fosters scholarly exchange,
            collaboration, and knowledge sharing among academics, researchers,
            professionals, and practitioners across diverse disciplines.
          </p>
        </div>
      </section>

      {/* Previous Editions */}
      <section className="bg-white px-4 py-12 md:px-6 md:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#16205a] md:text-sm">
              Previous Editions
            </p>
            <h3 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              INVENT Conference Track Record
            </h3>
            <p className="mt-4 text-base leading-8 text-slate-600 md:text-lg">
              Explore previous editions of INVENT to highlight its continuity and
              international academic collaboration.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3 md:gap-6">
            {previousEditions.map((item) => (
              <a
                key={item.year}
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="block rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-1 hover:shadow-md md:p-6"
              >
                <div className="inline-block rounded-full bg-[#16205a] px-4 py-2 text-sm font-semibold text-white">
                  {item.year}
                </div>

                <h4 className="mt-5 text-2xl font-bold leading-tight text-slate-900 md:text-xl">
                  {item.label}
                </h4>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  View the official page for the {item.year} edition of INVENT.
                </p>

                <span className="mt-5 inline-block text-sm font-semibold text-[#16205a]">
                  Visit page →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#16205a]">
            About The Conference
          </p>
          <h3 className="mt-4 text-3xl font-bold md:text-4xl">
            Knowledge-Driven Innovation and Human-Centered Approaches
          </h3>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Building upon the successful implementation of the conference in
            previous years, INVENT 2026 broadens its interdisciplinary coverage
            by integrating perspectives from education, language, science and
            engineering, health and wellbeing, social sciences, humanities,
            governance, and entrepreneurship.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-7xl gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <h4 className="text-2xl font-bold text-[#16205a]">Host Institutions</h4>
            <div className="mt-5 space-y-3 text-lg leading-8 text-slate-700">
              <p>
                <span className="font-semibold">Main Host:</span> Universitas
                Brawijaya, Indonesia
              </p>
              <p>
                <span className="font-semibold">Co-Host:</span> Davao del Sur
                State College, The Philippines
              </p>
              <p>
                <span className="font-semibold">Mode:</span> Offline and Online
                Attendance
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <h4 className="text-2xl font-bold text-[#16205a]">Aim of the Programme</h4>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              To provide an international and interdisciplinary platform for
              academics, researchers, professionals, and practitioners to
              exchange knowledge, share best practices, and foster collaboration
              in advancing innovation, education, entrepreneurship, and
              human-centered development.
            </p>
          </div>
        </div>
      </section>

      {/* Speakers */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#16205a]">
              Speakers
            </p>
            <h3 className="mt-4 text-3xl font-bold md:text-4xl">
              Plenary and Keynote Speakers
            </h3>
          </div>

          <div className="mt-12 space-y-6 md:space-y-8">
            {speakers.map((speaker, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm md:rounded-[32px]"
              >
                <div className="grid items-center md:grid-cols-[260px_1fr]">
                  <div className="flex h-full items-center justify-center bg-slate-100 p-5 md:p-6">
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-full max-w-[170px] rounded-2xl object-cover md:max-w-[200px]"
                    />
                  </div>

                  <div className="p-6 md:p-10">
                    <div className="inline-block rounded-full bg-[#16205a] px-4 py-2 text-sm font-semibold text-white">
                      {speaker.role}
                    </div>

                    <div className="mt-5 flex flex-wrap items-center gap-3">
                      <h4 className="text-2xl font-bold leading-tight text-slate-900 md:text-3xl">
                        {speaker.name}
                      </h4>
                      {speaker.tbc && (
                        <span className="rounded-full bg-amber-100 px-3 py-1 text-sm font-semibold text-amber-700">
                          To Be Confirmed
                        </span>
                      )}
                    </div>

                    <p className="mt-3 text-base leading-8 text-slate-600 md:text-lg">
                      {speaker.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Theme and Sub-Themes */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#16205a]">
              Call for Papers
            </p>
            <h3 className="mt-4 text-3xl font-bold md:text-4xl">
              Conference Theme and Sub-Themes
            </h3>
          </div>

          <div className="mt-10 rounded-[32px] bg-white p-8 shadow-sm border border-slate-200">
            <h4 className="text-2xl font-bold text-[#ff8a5c]">Theme</h4>
            <p className="mt-3 text-lg leading-8 text-slate-700">
              Knowledge-Driven Innovation and Human-Centered Approaches for
              Building Resilient and Sustainable Socioeconomic Systems
            </p>

            <h4 className="mt-10 text-2xl font-bold text-[#ff8a5c]">Sub-Themes</h4>
            <ol className="mt-4 list-decimal space-y-3 pl-6 text-lg leading-8 text-slate-700">
              {subThemes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Objectives and Participants */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-[#16205a]">Objectives</h3>
            <ol className="mt-5 list-decimal space-y-3 pl-6 text-lg leading-8 text-slate-700">
              {objectives.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-[#16205a]">Target Participants</h3>
            <ol className="mt-5 list-decimal space-y-3 pl-6 text-lg leading-8 text-slate-700">
              {participants.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Conference Information */}
      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-[#16205a]">Important Dates</h3>
            <div className="mt-5 space-y-3 text-lg leading-8 text-slate-700">
              <p>
                <span className="font-semibold">Call for Papers:</span> 1 April
                2026 – 1 September 2026
              </p>
              <p>
                <span className="font-semibold">Full Paper Submission Deadline:</span>{" "}
                1 September 2026
              </p>
              <p>
                <span className="font-semibold">Notification of Review Results:</span>{" "}
                1 May 2026 – 15 September 2026
              </p>
              <p>
                <span className="font-semibold">Conference Day:</span> 27–28
                October 2026
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-[#16205a]">Conference Details</h3>
            <div className="mt-5 space-y-3 text-lg leading-8 text-slate-700">
              <p>
                <span className="font-semibold">Location:</span> Universitas
                Brawijaya, Malang, Indonesia
              </p>
              <p>
                <span className="font-semibold">Format:</span> Offline and Online Attendance
              </p>
              <p>
                <span className="font-semibold">Conference Date:</span> 27–28
                October 2026
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fee and Publication */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-3xl font-bold text-[#16205a]">Registration Fee</h3>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="bg-slate-100 text-slate-900">
                    <th className="border border-slate-300 px-4 py-3">Membership</th>
                    <th className="border border-slate-300 px-4 py-3">Type of Participant</th>
                    <th className="border border-slate-300 px-4 py-3">Fee (USD)</th>
                  </tr>
                </thead>
                <tbody className="text-slate-700">
                  <tr>
                    <td className="border border-slate-300 px-4 py-3" rowSpan="2">Member</td>
                    <td className="border border-slate-300 px-4 py-3">Presenter</td>
                    <td className="border border-slate-300 px-4 py-3">250</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-3">Non-Presenter</td>
                    <td className="border border-slate-300 px-4 py-3">150</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-3" rowSpan="2">Non-Member</td>
                    <td className="border border-slate-300 px-4 py-3">Presenter</td>
                    <td className="border border-slate-300 px-4 py-3">275</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-3">Non-Presenter</td>
                    <td className="border border-slate-300 px-4 py-3">175</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-3" rowSpan="2">Virtual</td>
                    <td className="border border-slate-300 px-4 py-3">Presenter</td>
                    <td className="border border-slate-300 px-4 py-3">150</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-3">Non-Presenter</td>
                    <td className="border border-slate-300 px-4 py-3">100</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-[32px] bg-gradient-to-br from-[#16205a] to-[#5b2c83] p-8 text-white shadow-lg">
            <h3 className="text-3xl font-bold">Publication Output</h3>
            <p className="mt-5 text-lg leading-8 text-slate-100">
              The conference will produce academic publication outputs in the
              form of a book chapter published by Springer. Accepted and
              presented papers will undergo peer review and be included in one
              of the following options:
            </p>
            <ol className="mt-6 list-decimal space-y-3 pl-6 text-lg leading-8 text-slate-100">
              <li>International conference proceedings (possible inclusion to Scopus-indexing)</li>
              <li>International book chapter (possible inclusion to Scopus-indexing)</li>
              <li>Conference proceedings with e-ISSN</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Poster */}
      <section className="bg-slate-50 px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#16205a] md:text-sm">
              Conference Snapshot
            </p>
            <h3 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              INVENT 2026 Poster
            </h3>
          </div>

          <div className="mt-10 overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm md:rounded-[32px]">
            <img
              src="/images/poster-invent.jpeg"
              alt="INVENT 2026 Poster"
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default InventConference;