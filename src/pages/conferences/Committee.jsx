
function Committee() {
  const advisoryBoard = [
    "Prof. Mohammed Olayiwola Mubashiru, Ph.D., Lagos State University, Nigeria",
    "Dr. Didik Hartono, S.S., M.Pd, Universitas Brawijaya, Indonesia",
    "Shazwin Mat Taib, Ph.D., Universiti Teknologi Malaysia, Malaysia",
    "Dr. Miray Dogan, Çanakkale Onsekiz Mart University, Turkey",
    "Jeanette G. Bayona, Ph.D., Iloilo State University of Fisheries Science and Technology, the Philippines",
    "Dr. Yhing Sawheny, Siam University, Thailand",
    "Dr. Rohit Bansal, Rockford College, Australia",
    "Dr. Jain Yassin, University Teknologi MARA, Malaysia",
    "Dr. Sainee Tamphu, Yala Rajabhat University, Thailand",
    "Ts. Jacqueline Joseph, Universiti Teknologi MARA, Malaysia",
  ];

  const steeringCommittee = [
    "Assoc. Prof. Dr. Mohd Ariffin bin Abu Hassan, Universiti Teknologi Malaysia, Malaysia",
    "Prof. Dr. Ir. Imam Santoso, M.P., Universitas Brawijaya, Indonesia",
    "Ir. Achmad Wicaksono, M.Eng., Ph.D. IPU, Universitas Brawijaya, Indonesia",
    "Dr. Cherry Ann P. Roxas, Davao del Sur State College, the Philippines",
  ];

  const organizingCommittee = [
    "Chair: Hendrix Yulis Setyawan, S.TP., M.Si., Ph.D, Universitas Brawijaya, Indonesia",
    "Deputy Chair I: Henny Rosalinda, S.IP., M.A., Ph.D, Universitas Brawijaya, Indonesia",
    "Deputy Chair II: Dr. Ana Marie J. Matalines, Davao del Sur State College, the Philippines",
    "General Secretary: Aulia Luqman Aziz, S.S., S.Pd., M.Pd, Universitas Brawijaya, Indonesia",
    "Secretary I: Lavrita Hita Pertiwi, S.AB., Universitas Brawijaya, Indonesia",
    "Secretary II: Cydeah Aldic Conchas, Davao del Sur State College, the Philippines",
    "Secretary III: Ain Ajeerah Binti Ramli, Universiti Teknologi Malaysia, Malaysia",
    "General Treasurer: Erma Lia Susita, M.AB, Universitas Brawijaya, Indonesia",
    "Treasurer I: Kryzelou Aguelo Ataneso, Davao del Sur State College, the Philippines",
  ];

  const Section = ({ title, data }) => (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <h3 className="text-2xl font-bold text-[#16205a]">{title}</h3>
      <ul className="mt-5 space-y-3 text-lg leading-8 text-slate-700">
        {data.map((item, index) => (
          <li key={index}>• {item}</li>
        ))}
      </ul>
    </div>
  );

  return (
    
   <div className="min-h-screen bg-gradient-to-br from-[#16205a] via-[#1d2f8a] to-[#6c2d84]">

  
  {/* CONTENT */}
  <div className="px-6 py-16 text-white">
    <div className="mx-auto max-w-7xl">

      {/* TITLE */}
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-white/70">
          Committee
        </p>
        <h1 className="mt-4 text-4xl font-bold">
          INVENT 2026 Committee
        </h1>
        <p className="mt-4 text-lg text-white/80">
          Meet the distinguished committees behind the organization of the conference.
        </p>
      </div>

      {/* GRID */}
      <div className="mt-12 grid gap-8 lg:grid-cols-2">

        {/* Advisory */}
        <div className="rounded-3xl bg-white p-8 text-slate-800 shadow-xl">
          <h3 className="text-2xl font-bold text-[#16205a]">
            International Advisory Board
          </h3>
          <ul className="mt-5 space-y-3 text-lg leading-8">
            {advisoryBoard.map((item, i) => (
              <li key={i}>• {item}</li>
            ))}
          </ul>
        </div>

        {/* Steering */}
        <div className="rounded-3xl bg-white p-8 text-slate-800 shadow-xl">
          <h3 className="text-2xl font-bold text-[#16205a]">
            Steering Committee
          </h3>
          <ul className="mt-5 space-y-3 text-lg leading-8">
            {steeringCommittee.map((item, i) => (
              <li key={i}>• {item}</li>
            ))}
          </ul>
        </div>

      </div>

      {/* Organizing */}
      <div className="mt-8 rounded-3xl bg-white p-8 text-slate-800 shadow-xl">
        <h3 className="text-2xl font-bold text-[#16205a]">
          Organizing Committee
        </h3>
        <ul className="mt-5 space-y-3 text-lg leading-8">
          {organizingCommittee.map((item, i) => (
            <li key={i}>• {item}</li>
          ))}
        </ul>
      </div>

    </div>
  </div>
</div>
  );
}

export default Committee;