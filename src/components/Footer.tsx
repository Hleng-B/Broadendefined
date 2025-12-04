export default function Footer() {
  return (
    <footer className="mt-20 py-10 text-center border-t border-white/10 text-white/80">
      <div className="container">
        <p className="text-sm tracking-wide">
          © {new Date().getFullYear()} Broaden Defined. All rights reserved.
        </p>
        <p className="text-xs mt-2">Crafted with care by NobzTech.</p>
      </div>
    </footer>
  );
}

