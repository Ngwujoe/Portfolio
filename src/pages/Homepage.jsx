import React from 'react'
import Header from '../components/Header'
import InfoSection from '../components/InfoSection'
import Grid from '../components/Grid'
import SkillsSection from '../components/Skills'
import InfoWithGallery from '../components/InfoWithGallery'
import ContactForm from '../components/contactForm'
import AboutMe from '../components/Aboutme'
import Experience from '../components/Experience'
import Footer from '../components/Footer'

export const Homepage = () => {
  return (
    <>
    <Header />
    <section className='mt-40'>
         <InfoSection />
    </section>
    <section className='text-4xl md:text-6xl font-bold gap-4 mt-10 text-gray-900 text-center'>
        <h1 className="text-blue-600 ">Capabilities</h1>
        <h4 className='text-2xl text-black hover:text-blue-600 hover:underline transition duration-300'>I am proficient in many skills like:</h4>
    </section>
    <section>
        <Grid />
    </section>
    <section>
      <AboutMe />
    </section>
    <section>
      <Experience />
    </section>
    
    <section>
        <SkillsSection />
    </section>
    
    <section>
      <InfoWithGallery />
    </section>
    <section>
      <Footer />
    </section>
    
        


    

    </>
    
    
  )
}

export default Homepage