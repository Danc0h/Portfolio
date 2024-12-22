import React from 'react'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {AiFillMail} from 'react-icons/ai'
import {FaWhatsapp} from 'react-icons/fa'
import {AiFillPhone} from 'react-icons/ai'
import './contact.css'

function Contact() {
  return (
    <section className='contact__section'>
      <div>
        <h5>Let's Talk</h5>
        <h2>Contact Me</h2>
        <div >
        <div className='contact__container'>
        <div className='contact__card'>
          <article className='contact__info'>
           <h5>Email</h5>
          <a  href='https://gmail.com'> <AiFillMail className='email-logo'/> </a>
           <h6>info.dancoda@gmail.com</h6>
          </article>
        </div>

        <div className='contact__card'>
        <article  className='contact__info'>
           <h5>Twitter</h5>
          <a href="https://twitter.com/dan_codev">  <AiFillTwitterCircle className='twitter-logo' /></a>
            <h6>dan_codev</h6>
          </article>
        </div>
        
        <div className='contact__card'>
        <article  className='contact__info'>
            <h5>Phone</h5>
            <AiFillPhone className='phone-logo'/>
            <h6>+254713774651</h6>
          </article>
        </div>
        
        <div className='contact__card'>
        <article  className='contact__info'>
            <h5>Whatsapp</h5>
           <a href="https://api.whatsapp.com/send?phone=254713774651&text=Hello%20Dancodev&source=&data=#"> <FaWhatsapp className='whats-logo' href=''/> </a>
            <h6>Whatsapp</h6>
          </article>
        </div>
        </div>
       </div>
       </div>
    </section>
  )
}

export default Contact
