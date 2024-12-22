import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <section className='footer_section'>
    <div className='footer-container'>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <h3>All rights reserved</h3>
          </div>
          <small class='website-rights'>dancodev © 2023</small>
          <div class='social-icons'>
      
            <Link
              class='social-icon-link twitter'
              to='https://twiter.com/dan_codev'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fa fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='https://github.com'
              target='_blank'
              aria-label='Github'
            >
              <i class='fa fa-github' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to="https://api.whatsapp.com/send?phone=254713774651&text=Hello%20Dan_coda&source=&data=#"
              target='_blank'
              aria-label='Whatsapp'
            >
              <i class='fa fa-whatsapp' />
            </Link>
          </div>
        </div>
      </section>
    </div>
    </section>
  );
}

export default Footer;

