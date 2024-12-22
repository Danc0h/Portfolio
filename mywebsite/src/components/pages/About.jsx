import React from "react";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa";
import "./about.css";
import "../../App.css";

export default function About() {
  return (
    <section className='about__container'>
      <div>
        <h5>Get to know</h5>
        <h2>About me</h2>
        <div className='about__me'>
          <img src='images/Avatar7.png' />
          <p>
            Hello,My name is Dancun Kipkorir,a Software Engineer based in
            Kenya.I am a creative,hardworking and competent person when it comes
            to providing solutions for developing robust,secure and scalable
            software.With speciality in full stack web development,iOS and
            android development,I have expertise in building modern, dynamic and
            responsive web and mobile apps,search engine optimization,utilizing
            modern front-end and back-end frameworks,server-side
            functionality,managed hosting and deployment,database
            administration,application scaling and cloud deployment
          </p>
        </div>

        <div className='about__cards'>
          <div className='desc-span'>
            <FaGraduationCap className='about__icon' />
            <h4>Education</h4>
            <small>
              Degree,
              <br />
              BSci Software Engineering
            </small>
          </div>

          <div className='desc-span'>
            <FaAward className='about__icon' />
            <h4>Experience</h4>
            <small>2+ years working</small>
          </div>

          <div className='desc-span'>
            <FiUsers className='about__icon' />
            <h4>Clients</h4>
            <small>10+ Clients Worldwide</small>
          </div>
        </div>
      </div>
    </section>
  );
}
