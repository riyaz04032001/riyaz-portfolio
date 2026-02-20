import Header from "./(site)/components/Header";
import Hero from "./(site)/components/Hero";
import Skills from "./(site)/components/Skills";
import Experience from "./(site)/components/Experience";
import Projects from "./(site)/components/Projects";
import Education from "./(site)/components/Education";
import Contact from "./(site)/components/Contact";
import Logos from "./(site)/components/Logos";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Logos />
        <Experience />
        <Education />
        <Contact />
      </main>
      <footer className="section border-t border-slate-800">
        <div className="container text-slate-400">
          © {new Date().getFullYear()} Riyaz Dudekula — Built with Next.js &
          Tailwind.
        </div>
      </footer>
    </>
  );
}
