import React, { useState } from "react";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { DiPhp } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { DiMongodb } from "react-icons/di";
import { DiMysql } from "react-icons/di";
import { DiFirebase } from "react-icons/di";
import { DiPython } from "react-icons/di";
import { DiDjango } from "react-icons/di";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import "./skills.css";

function Skills() {
  const [activeSection, setActiveSection] = useState("section1");
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setActiveSection(sectionId); // Set active section for styling
  };

  return (
    <section className='skills__section'>
      <div>
        <h5>What skills do I have</h5>
        <h2>My skills</h2>
        <div className='skills__technical' id='section1'>
          <div className='skills__tabs'>
            <button
              className={activeSection === "section1" ? "active-button" : ""}
              onClick={() => scrollToSection("section1")}
            >
              Technical Skills
            </button>
            <button
              className={activeSection === "section2" ? "active-button" : ""}
              onClick={() => scrollToSection("section2")}
            >
              Soft & Other Skills
            </button>
          </div>
          <div>
            <h5>Technical Skills</h5>
          </div>
          <div className='skills__content'>
            <div className='skill-container'>
              <article className='skills__details'>
                <SiHtml5 className='ht-icon' />
                <span>
                  <h5>Html 5</h5>
                  <small className='text-light'>Level : Experienced</small>
                </span>
              </article>
            </div>

            <div className='skill-container'>
              <article className='skills__details'>
                <SiCss3 className='cs-icon' />
                <span>
                  <h5>Css 3</h5>
                  <small className='text-light'>Level : Experienced</small>
                </span>
              </article>
            </div>

            <div className='skill-container'>
              <article className='skills__details'>
                <DiPhp className='ph-icon' />
                <span>
                  <h5>Php</h5>
                  <small className='text-light'>Level : Experienced</small>
                </span>
              </article>
            </div>

            <div className='skill-container'>
              <article className='skills__details'>
                <DiMysql className='sq-icon' />
                <span>
                  <h5>MySQL</h5>
                  <small className='text-light'>Level : Experienced</small>
                </span>
              </article>
            </div>

            <div className='skill-container'>
              <article className='skills__details'>
                <FaBootstrap className='bo-icon' />
                <span>
                  <h5>Bootstrap CSS</h5>
                  <small className='text-light'>Level : Experienced</small>
                </span>
              </article>
            </div>

            <div className='skill-container'>
              <article className='skills__details'>
                <SiJavascript className='ja-icon' />
                <span>
                  <h5>JavaScript</h5>
                  <small className='text-light'>Level : Experienced</small>
                </span>
              </article>
            </div>

            <div className='skill-container'>
              <article className='skills__details'>
                <FaNode className='no-icon' />
                <span>
                  <h4>NodeJS</h4>
                  <small className='text-light'>Level : Intermediate</small>
                </span>
              </article>
            </div>

            <div className='skill-container'>
              <article className='skills__details'>
                <FaReact className='re-icon' />
                <span>
                  <h5>React JS</h5>
                  <small className='text-light'>Level : Experienced</small>
                </span>
              </article>
            </div>

            <div className='skill-container'>
              <article className='skills__details'>
                <DiPython className='py-icon' />
                <span>
                  <h5>Python</h5>
                  <small className='text-light'>Level : Intermediate</small>
                </span>
              </article>
            </div>

            <div className='skill-container'>
              <article className='skills__details'>
                <FaReact className='ex-icon' />
                <span>
                  <h5>Express JS</h5>
                  <small className='text-light'>Level : Experienced</small>
                </span>
              </article>
            </div>

            <div className='skill-container'>
              <article className='skills__details'>
                <DiDjango className='dj-icon' />
                <span>
                  <h5>Django</h5>
                  <small className='text-light'>Level : Intermediate</small>
                </span>
              </article>
            </div>

            <div className='skill-container'>
              <article className='skills__details'>
                <DiMongodb className='mo-icon' />
                <span>
                  <h5>Mongo DB</h5>
                  <small className='text-light'>Level : Experienced</small>
                </span>
              </article>
            </div>

            <div className='skill-container'>
              <article className='skills__details'>
                <DiReact className='da-icon' />
                <span>
                  <h5>React Native</h5>
                  <small className='text-light'>Level : Intermediate</small>
                </span>
              </article>
            </div>

            <div className='skill-container'>
              <article className='skills__details'>
                <DiFirebase className='fb-icon' />
                <span className=''>
                  <h5>Firebase</h5>
                  <small className='text-light'>Level : Intermediate</small>
                </span>
              </article>
            </div>
          </div>
          <div>
            <h5 id='section2'> Soft & Other Skills</h5>
          </div>
          <div className='prof__container'>
            <ul>
              <li>
                -Excellent Teamwork,Communication and Collaborative
                programming(git)
              </li>
              <li>
                -Critical thinking,Creativity,Discreet Mathematics and logic
              </li>
              <li>-Data Structures and Algorithms</li>
              <li>
                -Application Programming Interface(API) Paradigms,Implementation
                and Security
              </li>
              <li>-Software Architecture</li>
              <li>-Software Design and Implementaion</li>
              <li>-Software Quality Standards (ISO/IEC 5055)</li>
              <li>-Software Requirements Specifications and Documentation</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
