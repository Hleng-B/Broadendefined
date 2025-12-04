import React from "react";

type Props = { onNav: (p: any) => void };

export default function TopNav({ onNav }: Props) {
  return (
    <header className="w-full fixed top-0 left-0 z-20">
      <div className="backdrop-blur-sm bg-black/10">
        <div className="container flex items-center justify-between py-4 px-6">
          <nav className="flex gap-6 items-center uppercase tracking-widest text-sm">
            <button onClick={() => onNav("home")} className="hover:text-mustard">Home</button>
            <button onClick={() => onNav("about")} className="hover:text-mustard">About</button>
            <button onClick={() => onNav("services")} className="hover:text-mustard">Services</button>
            <button onClick={() => onNav("portfolio")} className="hover:text-mustard">Portfolio</button>
            <button onClick={() => onNav("blog")} className="hover:text-mustard">Blog</button>
          </nav>

          <div className="flex items-center gap-4">
            <div className="text-2xl font-bold tracking-widest">BROADEN DEFINED</div>
            <img src="/src/assets/bd logo.jpg" alt="BD Logo" className="h-10 object-contain" />
          </div>
        </div>
      </div>
    </header>
  );
}
