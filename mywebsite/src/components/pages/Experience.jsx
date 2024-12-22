import React, { useState } from "react";
import "./experience.css";

function Experience() {
  const [activeTab, setActiveTab] = useState("All");

  const projects = [
    {
      title: "Glamour Merchants",
      category: "Web Development",
      github: "https://github.com",
      link: "https://topstonewriters.com",
      image: "/images/hero.png", // Path to the hero section image
    },
    {
      title: "Gommerce SAAS Solution",
      category: "Web Development",
      github: "https://github.com",
      link: "https://ellegancehub.com",
      image: "/images/gommerce.png", // Path to the hero section image
    },
    {
      title: "X Clone",
      category: "Web Development",
      github: "https://github.com",
      link: "https://ellegancehub.com",
      image: "/images/twitter.png", // Path to the hero section image
    },
    {
      title: "Chat Application",
      category: "Web Development",
      github: "https://github.com",
      link: "https://ellegancehub.com",
      image: "/images/chat.png", // Path to the hero section image
    },
    {
      title: "M-SACCO Mobile banking App",
      category: "Mobile App Development",
      github: "https://github.com",
      link: "https://ellegancehub.com",
      image: "/images/hero.png", // Path to the hero section image
    },
    {
      title: "AI Business Chatbot",
      category: "AI Project",
      github: "https://github.com",
      link: "https://ellegancehub.com",
      image: "/images/chatbot.png", // Path to the hero section image
    },
    {
      title: "Flappy Bird AI player",
      category: "AI Project",
      github: "https://github.com",
      link: "https://ellegancehub.com",
      image: "/images/flappy.png", // Path to the hero section image
    },
    {
      title: "Student Lesson Notes",
      category: "Web Development",
      github: "https://github.com",
      link: "https://ellegancehub.com",
      image: "/images/notes.png", // Path to the hero section image
    },
  ];

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((project) => project.category === activeTab);

  return (
    <section className='experience_section'>
      <div>
        <h5>Experience</h5>
        <h2>My Recent Works</h2>

        <div className='tabs'>
          {[
            "All",
            "Web Development",
            "Mobile App Development",
            "AI Project",
          ].map((tab) => (
            <button
              key={tab}
              className={`tab ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className='portfolio__container'>
          {filteredProjects.map((project) => (
            <article key={project.title} className='portfolio__item'>
              <img
                src={project.image}
                alt={`${project.title} illustration`}
                className='project-image'
              />
              <h3>{project.title}</h3>
              <div className='link_container'>
                <a href={project.github} className='btn'>
                  Github
                </a>
                <a href={project.link} className='btn btn-primary'>
                  Link to website
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
