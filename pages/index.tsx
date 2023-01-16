import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import ContactMe from '@/components/ContactMe';

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Kaleb Long</title>
      </Head>
      
      <Header />

      
      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      {/* About Me */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Experience */}
      <section id="experience" className="snap-center">
        <Experience />
      </section>

      {/* Skills */}
      <section id="skills" className="snap-center">
        <Skills />
      </section>

      {/* Projects */}
      <section id="projects" className="snap-center">
        <Projects />
      </section>

      {/* Contact Me */}
      <section id="contact me" className="snap-center">
        <ContactMe />
      </section>
    </div>
  );
};

export default Home;
