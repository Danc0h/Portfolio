import { React, useEffect, useState } from "react";
import MyCV from "./MyCV";
import "./herosection.css";
import { AiFillGithub } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";
import { MdMyLocation } from "react-icons/md";
import "../App.css";

function Header() {
  /*const [loopNum, setLoopNum] = useState(0);
  const toRotate = ["Hello there I'm..."];
  const [isDeleting, setIsdeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 5000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsdeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };*/

  return (
    <header>
      <div className='header__container'>
        <div className='header--text'>
          <h5 className='animated-text'>Hello there I'm...</h5>
          <h1 className='name'>KIPKORIR DANCUN</h1>
          <h5 className='me-description'>Full Stack Software Engineer</h5>
          <div className='header__contact'>
            <span className='email-span'>
              <MdEmail className='header__contact__email' />
              <h6>info.dancoda@gmail.com</h6>
            </span>
            <br />
            <span className='phone-span'>
              <AiFillPhone className='header__contact__phone' />{" "}
              <h6>+254 713 774 651</h6>{" "}
            </span>
            <br />
            <span className='location-span'>
              <MdMyLocation className='header__contact__location' />{" "}
              <h6>Nairobi,Kenya</h6>{" "}
            </span>
          </div>
          <div className='header__socials'>
            <a href='https://github.com'>
              <AiFillGithub className='github' />
            </a>
            <a href='https://twitter.com/dan_codev'>
              <AiFillTwitterCircle className='twitter' />
            </a>
            <a href='https://gmail.com'>
              <MdEmail className='email' />
            </a>
            <a href='https://api.whatsapp.com/send?phone=254713774651&text=Hello%20Dancodev&source=&data=#'>
              <RiWhatsappFill className='whatsapp' />
            </a>
          </div>
        </div>
        <img className='img-me' src='images/Avatar.jpeg' />
      </div>
      <div />
    </header>
  );
}

export default Header;
