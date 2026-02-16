import Navbar from './components/Navbar'; // Import only once
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      {/* Navbar only here */}
    

      <div className="w-full max-w-7xl px-6 md:px-12">
        <section id="me">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </div>
    </main>
  )
}
