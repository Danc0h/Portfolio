import React from 'react'
import {FaCalendar} from 'react-icons/fa'
import {FaHourglass} from 'react-icons/fa'
import {VscFolderActive} from 'react-icons/vsc'
import './pricing.css'

function Pricing() {
  return (
    <section className='pricing__section'>
       <div>
         <h5>Pricing table</h5>
         <h2>pricing</h2>
         <div className='pricing__container'>
           <div className='pricing__item'>
             <FaCalendar className='pricing__logo'/>
             <article className='pricing__tags'>
               <h3>Full-time Work</h3>
               <h4>I am available for full-time projects</h4>
               <h3 className='price'>$600</h3>
             </article>
             <span className='pricing__services'>
            <h5>-Web development</h5>
            <h5>-Android and iOS development</h5>
            <h5>-Desktop apps development</h5>
             </span>
           </div>

           <div className='pricing__item'>
             <VscFolderActive className='pricing__logo'/>
             <article className='pricing__tags'>
               <h3>Fixed Price Projects</h3>
               <h4>I am available for fixed roles</h4>
               <h3 className='price'>500$</h3>
             </article>
             <span className='pricing__services'>
            <h5>-Web development</h5>
            <h5>-Android and iOS development</h5>
            <h5>-Desktop apps development</h5>
             </span>
           </div>

           <div className='pricing__item'>
             <FaHourglass className='pricing__logo'/>
             <article className='pricing__tags'>
               <h3>Hourly work</h3>
               <h4>I am available for hourly projects</h4>
               <h3 className='price'>$50</h3>
             </article>
             <span className='pricing__services'>
            <h5>-Web development</h5>
            <h5>-Android and iOS development</h5>
            <h5>-Web design templates</h5>
             </span>
           </div>

          
         </div>
       </div>
    </section>
  )
}

export default Pricing
