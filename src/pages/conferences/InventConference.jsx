import { Link } from "react-router-dom";

function InventConference() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-[#16205a] px-6 py-4 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <h1 className="text-xl font-bold">INVENT 2026</h1>
          <Link
            to="/"
            className="rounded-lg border border-white/20 px-4 py-2 text-sm hover:bg-white/10"
          >
            Back to Home
          </Link>
        </div>
      </header>

      <section className="bg-gradient-to-br from-[#16205a] via-[#1d2f8a] to-[#6c2d84] px-6 py-16 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <div className="mb-6">
                <img
                  src="/images/INVENT-2026-LOGO.png"
                  alt="INVENT 2026"
                  className="max-h-28 w-auto object-contain"
                />
              </div>

              <h2 className="text-4xl font-black leading-tight md:text-5xl">
                CALL FOR PAPER
              </h2>

              <div className="mt-10 space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-orange-300">Theme</h3>
                  <p className="mt-3 text-xl leading-9 text-slate-100">
                    Knowledge-Driven Innovation and Human-Centered Approaches for
                    Building Resilient and Sustainable Socioeconomic Systems
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-orange-300">Sub-Theme</h3>
                  <ol className="mt-3 list-decimal space-y-2 pl-6 text-lg leading-8 text-slate-100">
                    <li>Computing, Engineering, and Science Education Innovation</li>
                    <li>
                      Educational Leadership, Language, Learning Systems, and
                      Humanities
                    </li>
                    <li>
                      Engineering, Technology, and Applied Sciences for Societal
                      Impact
                    </li>
                    <li>
                      Entrepreneurship, Innovation Ecosystems, and Future Workforce
                    </li>
                    <li>
                      Health, Wellbeing, and Social Contexts in Science and
                      Technology Education
                    </li>
                  </ol>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-orange-300">We Are Inviting</h3>
                  <ol className="mt-3 list-decimal space-y-2 pl-6 text-lg leading-8 text-slate-100">
                    <li>Academics and Researchers</li>
                    <li>Postgraduate Students</li>
                    <li>Undergraduate Students</li>
                    <li>Practitioners</li>
                    <li>Policy-maker</li>
                    <li>ATU-Net members and partners</li>
                  </ol>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-orange-300">Important Dates</h3>
                  <div className="mt-3 space-y-2 text-lg leading-8 text-slate-100">
                    <p><span className="font-semibold">Paper Submission:</span> 30 March - 1 July 2026</p>
                    <p><span className="font-semibold">Notification of Review Results:</span> 1 August 2026</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex justify-end">
                <img
                  src="/images/INVENT-2026-LOGO.png"
                  alt="INVENT 2026"
                  className="max-h-32 w-auto rounded-bl-[48px] bg-white p-4"
                />
              </div>

              <div className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-orange-300">Conference Fee</h3>

                <div className="mt-5 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-base">
                    <thead>
                      <tr className="bg-white text-slate-900">
                        <th className="border border-slate-300 px-4 py-3">Membership</th>
                        <th className="border border-slate-300 px-4 py-3">Type of Participant</th>
                        <th className="border border-slate-300 px-4 py-3">Fee (USD)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-white/30 px-4 py-3" rowSpan="2">Member</td>
                        <td className="border border-white/30 px-4 py-3">Presenter</td>
                        <td className="border border-white/30 px-4 py-3">250</td>
                      </tr>
                      <tr>
                        <td className="border border-white/30 px-4 py-3">Non-Presenter</td>
                        <td className="border border-white/30 px-4 py-3">150</td>
                      </tr>
                      <tr>
                        <td className="border border-white/30 px-4 py-3" rowSpan="2">Non-Member</td>
                        <td className="border border-white/30 px-4 py-3">Presenter</td>
                        <td className="border border-white/30 px-4 py-3">275</td>
                      </tr>
                      <tr>
                        <td className="border border-white/30 px-4 py-3">Non-Presenter</td>
                        <td className="border border-white/30 px-4 py-3">175</td>
                      </tr>
                      <tr>
                        <td className="border border-white/30 px-4 py-3" rowSpan="2">Virtual</td>
                        <td className="border border-white/30 px-4 py-3">Presenter</td>
                        <td className="border border-white/30 px-4 py-3">150</td>
                      </tr>
                      <tr>
                        <td className="border border-white/30 px-4 py-3">Non-Presenter</td>
                        <td className="border border-white/30 px-4 py-3">100</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-orange-300">Publication Output</h3>
                <ol className="mt-4 list-decimal space-y-2 pl-6 text-lg leading-8 text-slate-100">
                  <li>International conference proceedings (possible inclusion to Scopus-indexing)</li>
                  <li>International book chapter (possible inclusion to Scopus-indexing)</li>
                  <li>Conference proceedings with e-ISBN</li>
                </ol>
              </div>

              <div className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
                <div className="space-y-4 text-lg text-slate-100">
                  <p>
                    <span className="font-bold text-white">Location:</span> Universitas Brawijaya,
                    Malang, Indonesia (Hybrid)
                  </p>
                  <p>
                    <span className="font-bold text-white">Conference Date:</span> 27 - 28 October 2026
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default InventConference;