import React from 'react'
import { Nav } from './components/Atoms'
import Hero from './components/Hero'
import LogosMarquee from './components/LogosMarquee'
import Manifesto from './components/Manifesto'
import ServicesGrid from './components/ServicesGrid'
import ProcessSection from './components/ProcessSection'
import BigTicker from './components/BigTicker'
import DarkSection from './components/DarkSection'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <LogosMarquee />
      <Manifesto />
      <ServicesGrid />
      <ProcessSection />
      <BigTicker />
      <DarkSection />
      <FinalCTA />
      <Footer />
    </>
  )
}
