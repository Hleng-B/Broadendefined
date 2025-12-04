import { useState } from "react";
import SideNav from "./components/SideNav";
import TopNav from "./components/TopNav";
import Footer from "./components/Footer"; // placeholder file we'll add next

// lazy simple page imports for now (we'll create these soon)
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Community from "./pages/Community";
import Contact from "./pages/Contact";

export default function App() {
  const [page, setPage] = useState<
    "home" | "about" | "services" | "portfolio" | "blog" | "community" | "contact"
  >("home");

  return (
    <div className="min-h-screen bg-gradient-to-b from-bdgreen to-bdgreen-light text-white font-rox">
      <TopNav onNav={(p) => setPage(p)} />
      <div className="flex pt-20">
        <SideNav onNav={(p) => setPage(p)} />
        <main className="flex-1 p-6">
          {page === "home" && <Home />}
          {page === "about" && <About />}
          {page === "services" && <Services />}
          {page === "portfolio" && <Portfolio />}
          {page === "blog" && <Blog />}
          {page === "community" && <Community />}
          {page === "contact" && <Contact />}
          <Footer />
        </main>
      </div>
    </div>
  );
}
