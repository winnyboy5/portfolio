'use client';

import ContactPage from './pages/contact';
import HomePage from './pages/home';
import SkillsPage from './pages/skills';
import Navbar from './navbar';
import ExperiencePage from './pages/experience';
import Backgrounds from './components/backgrounds';



export default function Home() {
  return (
    <main className="w-screen">
         <div className="relative h-full">
            <Backgrounds />
        <Navbar />
        <section className="section home-bg" id="home"><HomePage /></section>
        <section className="section" id="skills"><SkillsPage /></section>
        <section className="section" id="experience"><ExperiencePage /></section>
        <section className="section" id="contact"><ContactPage /></section>
        </div>
    </main>
  )
}
