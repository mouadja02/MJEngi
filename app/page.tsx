'use client'

import Header from '@/components/Header'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Experience from '@/components/sections/Experience'
import Projects from '@/components/sections/Projects'
import Skills from '@/components/sections/Skills'
import Contact from '@/components/sections/Contact'
import Education from '@/components/sections/Education'
import Certifications from '@/components/sections/Certifications'
import Footer from '@/components/Footer'
import FloatingActionButton from '@/components/FloatingActionButton'
import MatrixRain from '@/components/MatrixRain'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      <MatrixRain />
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Education />
      <Contact />
      <Footer />
      <FloatingActionButton />
    </main>
  )
} 