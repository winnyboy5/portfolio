import About from "@/components/About";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="flex w-screen flex-col items-center justify-between overflow-auto relative bg-black-100 dark:bg-dot-white/[0.3] bg-dot-white/[0.2]">
        <div className="container">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Footer />
        </div>
    </main>
  );
}
