import React from "react";

type Props = { onNav: (p: any) => void };

export default function SideNav({ onNav }: Props) {
  return (
    <aside className="w-20 md:w-64 p-4 hidden md:block sticky top-20 h-screen">
      <div className="flex flex-col gap-4 items-start bg-black/0">
        <button onClick={() => onNav("home")} className="w-full text-left hover:text-mustard">Home</button>
        <button onClick={() => onNav("about")} className="w-full text-left hover:text-mustard">About</button>
        <button onClick={() => onNav("services")} className="w-full text-left hover:text-mustard">Services</button>
        <button onClick={() => onNav("portfolio")} className="w-full text-left hover:text-mustard">Portfolio</button>
        <button onClick={() => onNav("blog")} className="w-full text-left hover:text-mustard">Blog</button>
        <button onClick={() => onNav("community")} className="w-full text-left hover:text-mustard">Community</button>
        <button onClick={() => onNav("contact")} className="w-full text-left hover:text-mustard">Contact</button>
      </div>
    </aside>
  );
}
