function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#16205a] bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Left: Logos */}
        <div className="flex items-center gap-2">
          {/* Logo 1 */}
          <div className="flex h-12 w-12 items-center justify-center overflow-hidden">
            <img
              src="/images/tutwuri.jpeg"
              alt="Tut Wuri Handayani"
              className="h-10 w-10 object-contain"
            />
          </div>

          {/* Logo 2 */}
          <div className="flex h-12 w-12 items-center justify-center overflow-hidden">
            <img
              src="/images/Logo_Universitas_Brawijaya.png"
              alt="Kemendiktisaintek"
              className="h-10 w-10 object-contain"
            />
          </div>

          {/* Logo 3: Brawijaya Summit horizontal */}
          <div className="flex h-14 w-[150px] items-center justify-center overflow-hidden md:w-[180px] lg:w-[210px]">
            <img
              src="/images/LOGO-white-bg.png"
              alt="Brawijaya Summit 2026"
              className="max-h-full w-full object-contain"
            />
          </div>

          {/* Logo 4 */}
          <div className="flex h-12 w-12 items-center justify-center overflow-hidden">
            <img
              src="/images/Logo-Tersier-Diktisaintek-Berdampak-1.png"
              alt="Kemendiktisaintek"
              className="h-10 w-10 object-contain"
            />
          </div>
        </div>

        {/* Right: Menu */}
        <nav className="hidden items-center gap-8 md:flex">
          <a href="#about" className="text-sm font-medium text-slate-800 hover:text-[#16205a]">
            About
          </a>
          <a href="#conferences" className="text-sm font-medium text-slate-800 hover:text-[#16205a]">
            Conferences
          </a>
          <a href="#keynote" className="text-sm font-medium text-slate-800 hover:text-[#16205a]">
            Keynote
          </a>
          <a href="#partners" className="text-sm font-medium text-slate-800 hover:text-[#16205a]">
            Partners
          </a>
          {/* <a href="#contact" className="text-sm font-medium text-slate-800 hover:text-[#16205a]">
            Contact
          </a> */}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;