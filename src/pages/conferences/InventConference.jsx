import { Link } from "react-router-dom";
import Committee from "./Committee";

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
  // {
  //   role: "Plenary Speaker",
  //   name: "Prof. Brian Yuliarto",
  //   title:
  //     "Minister of Higher Education, Science, and Technology of the Republic of Indonesia",
  //   image: "/images/brian.jpg",
  //   tbc: true,
  // },
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
  {
    role: "Keynote Speaker",
    name: "Dr. Cherry Ann P. Roxas",
    title: "Davao del Sur State College, the Philippines",
    image: "/images/Cherry.jpeg",
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

const rundownDays = [
  {
    day: "Day 0",
    subtitle: "Arrival",
    items: [
      {
        time: "-",
        title: "Airport Transfer",
        note: "Arrival support for participants.",
      },
    ],
  },
  {
    day: "Day 1",
    subtitle: "Opening Ceremony and Conference Sessions",
    items: [
      {
        time: "08.00 – 08.30",
        title: "Registration",
        note: "Venue: Samantha Krida Hall",
      },
      {
        time: "08.30 – 08.35",
        title: "Opening Traditional Dance & Video",
      },
      {
        time: "08.35 – 08.40",
        title: "Opening by Master of Ceremony",
      },
      {
        time: "08.40 – 08.45",
        title: "Invocation",
      },
      {
        time: "08.45 – 08.50",
        title: "Singing Indonesian National Anthem “Indonesia Raya”",
      },
      {
        time: "08.50 – 08.55",
        title: "Brief Report by Chair of the Local Committee",
      },
      {
        time: "08.55 – 09.00",
        title: "Welcoming Remark by Vice Rector of Academic Affairs, Universitas Brawijaya",
        note: "Prof. Dr. Ir. Imam Santoso, M.P.",
      },
      {
        time: "09.00 – 09.05",
        title: "Welcoming Remark by President of Davao del Sur State College",
        note: "Dr. Augie E. Fuentes",
      },
      {
        time: "09.05 – 09.15",
        title: "Welcoming Remark by Executive Director of ATU-Net",
        note: "Assoc. Prof. Dr. Mohd. Ariffin bin Abu Hassan",
      },
      {
        time: "09.15 – 09.25",
        title: "Welcoming Remark by Steering Group Lead of CITED",
        note: "Prof. Umesh Sharma",
      },
      {
        time: "09.25 – 09.35",
        title: "Welcoming Remark & Official Opening by Rector of Universitas Brawijaya",
        note: "Prof. Widodo, S.Si., M.Si., Ph.D.Med.Sc",
      },
      {
        time: "09.35 – 09.45",
        title: "Group Photo",
      },
      {
        time: "09.45 – 10.00",
        title: "Coffee Break",
      },
      {
        time: "10.00 – 10.30",
        title: "Plenary Speech",
        note: "Minister of Higher Education, Research and Technology, Indonesia, Prof. Brian Yuliarto, Ph.D (TBC)",
      },
      {
        time: "10.30 – 10.35",
        title: "Token of Appreciation to the Plenary Speaker",
      },
      {
        time: "10.35 – 11.00",
        title: "Mobility to the InVENT Conference Designated Venue",
        note: "Venue: TBD",
      },
      {
        time: "11.00 – 12.15",
        title: "Keynote Speeches",
        note: "Includes keynote session and Q&A after all speakers.",
      },
      {
        time: "12.15 – 13.15",
        title: "Lunch Break",
      },
      {
        time: "13.15 – 17.30",
        title: "Parallel Presentation",
      },
      {
        time: "17.30 – 18.00",
        title: "Transition to Welcoming Dinner",
      },
      {
        time: "18.00 – 19.00",
        title: "Dinner (Buffet)",
        note: "Band",
      },
      {
        time: "19.00 – 19.15",
        title: "Welcome Address",
      },
      {
        time: "19.15 – 19.45",
        title: "Cultural Performance",
        note: "Traditional dance, international student performance, band and flashmob",
      },
      {
        time: "19.45 – 20.00",
        title: "Networking, End of Welcoming Dinner",
      },
    ],
  },
  {
    day: "Day 2",
    subtitle: "Parallel Sessions and Closing",
    items: [
      {
        time: "08.00 – 08.30",
        title: "Registration",
      },
      {
        time: "08.30 – 12.00",
        title: "Parallel Presentation",
      },
      {
        time: "12.00 – 13.00",
        title: "Lunch Break",
      },
      {
        time: "13.00 – 15.00",
        title: "Synthesis of the Conference",
        note: "Includes announcement of ATU-Net InvENT 2027 host institution, best presenters, and closing remarks.",
      },
      {
        time: "15.00 – 18.00",
        title: "Souvenir Shopping at Batu City",
      },
    ],
  },
  {
    day: "Day 3",
    subtitle: "Optional Programme / Departure",
    items: [
      {
        time: "00.00 – 10.00",
        title: "Bromo Sunrise Tour (Optional) / Departure Day",
        note: "Tour Leader",
      },
    ],
  },
];
const sdgLogos = [
  {
    name: "SDG 3",
    image: "/images/sdg3.png",
  },
  {
    name: "SDG 4",
    image: "/images/sdg4.png",
  },
  {
    name: "SDG 8",
    image: "/images/sdg8.png",
  },
  {
    name: "SDG 17",
    image: "/images/sdg17.png",
  },
];
const journalList = [
  "Frontiers in Human Dynamics (Q1)",
  "Discover Sustainability (Q1)",
  "Humanities and Social Sciences Communications (Q1)",
  "Quality and Quantity (Q1)",
  "Future Business Journal (WoS indexed)",
  "Human Behavior and Emerging Technologies (Q1)",
  "MSW Management (Q4)",
];

function InventConference() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 bg-[#16205a] px-4 py-4 text-white shadow-sm md:px-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between">

          {/* LEFT */}
          <h1 className="text-2xl font-bold md:text-xl">
            ATU-Net INVENT 2026
          </h1>

          {/* RIGHT (grouped) */}
          <div className="flex items-center gap-3">

            <a
              href="#committee"
              className="rounded-xl border border-white/20 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
            >
              Committee
            </a>

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

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#16205a] via-[#1d2f8a] to-[#6c2d84] px-4 py-8 text-white md:px-6 md:py-12 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-start">
            {/* Partner logos */}
            <div className="inline-flex max-w-full flex-wrap items-center gap-2 rounded-[20px] bg-white px-3 py-2 shadow-sm md:gap-3 md:rounded-[24px] md:px-4 md:py-3">
              <img
                src="/images/Logo-ATU-Net.png"
                alt="ATU-Net"
                className="h-7 w-auto object-contain md:h-10"
              />
              <img
                src="/images/Logo_Universitas_Brawijaya.png"
                alt="Universitas Brawijaya"
                className="h-7 w-auto object-contain md:h-10"
              />
              <img
                src="/images/DSU.jpeg"
                alt="Davao del Sur State College"
                className="h-7 w-auto object-contain md:h-10"
              />
              {/* <img
                src="/images/tutwuri.jpeg"
                alt="Tut Wuri Handayani"
                className="h-7 w-auto object-contain md:h-10"
              /> */}
              {/* <img
                src="/images/Logo-Tersier-Diktisaintek-Berdampak-1.png"
                alt="Diktisaintek Berdampak"
                className="h-6 w-auto object-contain md:h-9"
              /> */}
            </div>

            {/* Date badge */}
            <p className="mt-4 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs leading-6 md:mt-5 md:text-sm">
              27–28 October 2026 · Offline and Online Attendance
            </p>

            {/* INVENT logo */}
            <div className="mt-4 inline-flex w-fit max-w-full rounded-[24px] bg-white px-4 py-3 shadow-2xl md:mt-5 md:rounded-[28px] md:px-5 md:py-4">
              <img
                src="/images/INVENT-2026-LOGO.png"
                alt="INVENT 2026"
                className="h-auto w-auto max-h-16 max-w-full object-contain md:max-h-24"
              />
            </div>
          </div>

          {/* Title */}
          <h2 className="mt-6 max-w-6xl text-3xl font-black leading-tight sm:text-4xl md:mt-8 md:text-5xl lg:text-6xl">
            ATU-Net International Conference On Innovation & Entrepreneurship in
            Computing, Engineering, and Science Education 2026
          </h2>

          {/* Description */}
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

      <section className="bg-slate-50 px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#16205a] md:text-sm">
              Programme Rundown
            </p>
            <h3 className="mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
              Conference Schedule
            </h3>
            <p className="mt-4 text-base leading-8 text-slate-600 md:text-lg">
              Overview of the main conference flow for INVENT 2026.
            </p>
          </div>

          <div className="mt-10 space-y-8">
            {rundownDays.map((dayBlock) => (
              <div
                key={dayBlock.day}
                className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm md:rounded-[32px]"
              >
                <div className="border-b border-slate-200 bg-gradient-to-r from-[#16205a] to-[#4f2f86] px-6 py-5 text-white">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-100">
                    {dayBlock.day}
                  </p>
                  <h4 className="mt-2 text-2xl font-bold">{dayBlock.subtitle}</h4>
                </div>

                <div className="divide-y divide-slate-200">
                  {dayBlock.items.map((item, index) => (
                    <div
                      key={`${dayBlock.day}-${index}`}
                      className="grid gap-3 px-6 py-5 md:grid-cols-[180px_1fr]"
                    >
                      <div className="text-sm font-semibold text-[#16205a] md:text-base">
                        {item.time}
                      </div>

                      <div>
                        <h5 className="text-lg font-bold text-slate-900">
                          {item.title}
                        </h5>
                        {item.note && (
                          <p className="mt-2 text-sm leading-7 text-slate-600 md:text-base">
                            {item.note}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
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
      <section className="px-6 py-16 bg-gradient-to-br from-[#16205a] to-[#5b2c83]">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-3xl font-semibold uppercase tracking-[0.25em] text-white">
              Call for Papers
            </p>
            <h3 className="mt-4 text-xl font-bold md:text-4xl text-white">
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
      <section className="bg-gradient-to-br from-[#f57c00] via-[#ff9800] to-[#ffb74d] px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-[#16205a]">Important Dates</h3>
            <div className="mt-5 space-y-3 text-lg leading-8 text-slate-700">
              <p>
                <span className="font-semibold">Call for Papers:</span> 10 April
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
                <span className="font-semibold">Location:</span> Universitas Brawijaya, Malang, Indonesia
              </p>
              <p>
                <span className="font-semibold">Format:</span> Offline and Online Attendance
              </p>
              <p>
                <span className="font-semibold">Conference Date:</span> 27–28 October 2026
              </p>
              <p>
                <span className="font-semibold">Correspondence Email:</span>{" "}
                <a
                  href="mailto:invent@ub.ac.id"
                  className="text-[#16205a] underline underline-offset-4"
                >
                  invent@ub.ac.id
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SDGs
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#16205a]">
              SDGs
            </p>
            <h3 className="mt-4 text-3xl font-bold md:text-4xl text-slate-900">
              Sustainable Development Goals
            </h3>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              This conference highlights and addresses the following Sustainable
              Development Goals (SDGs)
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
            {sdgLogos.map((sdg) => (
              <div
                key={sdg.name}
                className="flex min-h-[180px] items-center justify-center rounded-[24px] border border-slate-200 bg-slate-50 p-6 shadow-sm"
              >
                <img
                  src={sdg.image}
                  alt={sdg.name}
                  className="max-h-28 w-auto object-contain md:max-h-32"
                />
              </div>
            ))}
          </div>
        </div>
      </section> */}
      {/* SDGs */}
      {/* SDGs */}
      <section className="bg-white px-6 py-12">
        <div className="mx-auto max-w-7xl text-center">

          {/* TEXT */}
          <h3 className="text-2xl font-bold text-[#16205a]">
            This Conference Highlights and Addresses the Following Sustainable Development Goals (SDGs)
          </h3>

          {/* LOGO */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-8 md:gap-12">

            <img
              src="/images/sdg3.png"
              alt="SDG 3"
              className="h-28 md:h-32 lg:h-36 object-contain"
            />

            <img
              src="/images/sdg4.png"
              alt="SDG 4"
              className="h-28 md:h-32 lg:h-36 object-contain"
            />

            <img
              src="/images/sdg8.png"
              alt="SDG 8"
              className="h-28 md:h-32 lg:h-36 object-contain"
            />

            <img
              src="/images/sdg17.png"
              alt="SDG 17"
              className="h-28 md:h-32 lg:h-36 object-contain"
            />

          </div>

        </div>
      </section>
      {/* SDGs */}
      {/* <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-lg leading-8 text-slate-700">
              This conference highlights and addresses the following Sustainable Development Goals (SDGs)
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
            <div className="flex min-h-[180px] items-center justify-center rounded-[24px] border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <img
                src="/images/sdg3.png"
                alt="SDG 3"
                className="max-h-28 w-auto object-contain md:max-h-32"
              />
            </div>

            <div className="flex min-h-[180px] items-center justify-center rounded-[24px] border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <img
                src="/images/sdg4.png"
                alt="SDG 4"
                className="max-h-28 w-auto object-contain md:max-h-32"
              />
            </div>

            <div className="flex min-h-[180px] items-center justify-center rounded-[24px] border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <img
                src="/images/sdg8.png"
                alt="SDG 8"
                className="max-h-28 w-auto object-contain md:max-h-32"
              />
            </div>

            <div className="flex min-h-[180px] items-center justify-center rounded-[24px] border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <img
                src="/images/sdg17.png"
                alt="SDG 17"
                className="max-h-28 w-auto object-contain md:max-h-32"
              />
            </div>
          </div>
        </div>
      </section> */}
      {/* Registration Fee */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#16205a]">
              Registration
            </p>
            <h3 className="mt-4 text-3xl font-bold md:text-4xl">
              Registration Fee
            </h3>
          </div>

          <div className="mt-10 rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
            <div className="overflow-x-auto">
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
                  <tr>
                    <td className="border border-slate-300 px-4 py-3" colSpan="2">
                      Bromo Sunrise Trip (optional)
                    </td>
                    <td className="border border-slate-300 px-4 py-3">60 per pax</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Publication Output */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#16205a]">
              Publication
            </p>
            <h3 className="mt-4 text-3xl font-bold md:text-4xl">
              Publication Output
            </h3>
          </div>

          <div className="mt-10 rounded-[32px] bg-gradient-to-br from-[#16205a] to-[#5b2c83] p-8 text-white shadow-lg md:p-10">
            <p className="text-lg leading-8 text-slate-100">
              The conference will produce academic publication outputs in the form
              of a book chapter published by Springer. Accepted and presented
              papers will undergo peer review and be included in one of the
              following options:
            </p>

            <ol className="mt-8 list-decimal space-y-4 pl-6 text-lg leading-8 text-slate-100">
              <li>
                International Conference Proceedings (possible inclusion to
                Scopus-indexing)
              </li>
              <li>
                International Book Chapter (possible inclusion to
                Scopus-indexing)
              </li>
              <li>Conference Proceedings with e-ISSN</li>
              <li>
                Scopus Indexed Journals:
                <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-7 text-slate-100 md:text-lg">
                  <li>Frontiers in Human Dynamics (Q1)</li>
                  <li>Discover Sustainability (Q1)</li>
                  <li>Humanities and Social Sciences Communications (Q1)</li>
                  <li>Quality and Quantity (Q1)</li>
                  <li>Future Business Journal (WoS indexed)</li>
                  <li>Human Behavior and Emerging Technologies (Q1)</li>
                  <li>MSW Management (Q4)</li>
                </ul>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* Poster
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
      </section> */}
      <section id="committee">
        <Committee />
      </section>
      {/* Atu NEt members */}
      <section className="bg-slate-50 px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-6xl">


          <div className="mt-10 overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm md:rounded-[32px]">
            <img
              src="/images/atunetmembers.jpeg"
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