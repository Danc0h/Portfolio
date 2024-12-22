import React from "react";
import AIDevIcon from "./AIDevIcon.jsx";
import WebDevIcon from "./WebDevIcon";
import UIDesignIcon from "./UIDesignIcon";
import AppDevIcon from "./AppDevIcon";
import "./services.css";

const Services = () => {
  const servicesData = [
    {
      id: "uiux",
      icon: <UIDesignIcon />,
      title: "UI/UX DESIGN",
      content:
        "I design easy, adaptive, and modern website navigation across devices, ensuring a responsive layout with CSS Flexbox, Bootstrap, or Tailwind. I build dynamic webpages using HTML, CSS, and JavaScript, applying modern styling and color schemes to create visually appealing content that enhances user engagement and retention.",
    },
    {
      id: "webdev",
      icon: <WebDevIcon />,
      title: "WEB DEVELOPMENT",
      content:
        "I build full-stack web applications, ranging from e-commerce to social media platforms. I create responsive, dynamic front-end experiences that enhance user engagement and integrate backends using technologies like XAMPP, Firebase, and MongoDB. I handle hosting, deployment, and database management, and implement seamless payment integration through APIs to enable secure transactions.",
    },
    {
      id: "appdev",
      icon: <AppDevIcon />,
      title: "APP DEVELOPMENT",
      content:
        "I develop cross-platform applications with React Native for both iOS and Android, and build enterprise desktop applications for Mac and Windows. I ensure secure data management with databases like Firebase and MongoDB, and handle app deployment, updates, and database administration.",
    },
    {
      id: "appdev",
      icon: <AIDevIcon />,
      title: "AI DEVELOPMENT",
      content:
        "I design AI-driven solutions tailored to automate and optimize processes, applying machine learning models for predictive insights and decision-making. From data preprocessing to model training and evaluation, I ensure robust and accurate results. My expertise includes deploying AI models in applications using technologies like TensorFlow and Scikit-Learn, as well as integrating APIs for seamless AI-powered features.",
    },
  ];

  return (
    <section className='services-section'>
      <div>
        <h5>What services do I offer</h5>
        <h2>My Services</h2>
        <div className='services__content'>
          {servicesData.map((service) => (
            <article key={service.id} className='service-tab'>
              <div className='services__head'>
                <span className='icon-span'>
                  {service.icon}
                  <h4>{service.title}</h4>
                </span>
              </div>
              <p>{service.content}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
