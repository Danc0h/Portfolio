import React from 'react'
import '../../App.css'
import HeroSection from '../HeroSection'
import Footer from '../Footer'
import About from './About'
import Skills from './Skills'
import Contact from './Contact'
import Services from './Services'
import Experience from './Experience'
import Pricing from '../../components/Pricing'



export default function Home () {
    return (
        <>
       <HeroSection/>
       <About/>
       <Skills/> 
       <Services/>
       <Experience/>
       <Contact/>
       <Pricing/>
       <Footer/>
        </>
    )
}



