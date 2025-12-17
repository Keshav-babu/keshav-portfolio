// components/header.tsx
export default function Header() {
  return (
    <header className="mx-auto w-full max-w-[768px] fixed top-0 left-0 right-0 z-50 bg-black text-white shadow-md">
      <div className="md:flex items-center justify-between p-2 md:px-6 md:py-4">

        <h1 className="text-xl font-bold">
            DevFolio
          {/* Keshav <span className="text-zinc-400">Mandal</span> */}
        </h1>

        <nav className="flex space-x-6 text-sm">
          <a href="#hero" className="hover:text-zinc-300">Home</a>
          <a href="#projects" className="hover:text-zinc-300">Projects</a>
          <a href="#skills" className="hover:text-zinc-300">Skills</a>
          <a href="#contact" className="hover:text-zinc-300">Contact</a>
        </nav>
      </div>
    </header>
  );
}

