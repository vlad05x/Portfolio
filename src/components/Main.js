import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import "../css/style.scss";
import arrowUp from "../images/Icons/arrowup.svg";
import MyPhoto from "../images/Photo.jpeg";
import { ImageLink, imageData } from "./MediaImageLink";
import Services from "./ServiceData";
import Skills from "./Skills";
import Portfolio from "./Portfolio";

function Main() {
  // Text print animation
  const typedElement = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Frontend Developer"],
      typeSpeed: 80,
      backSpeed: 25,
      startDelay: 1000,
      backDelay: 1000,
      loop: true,
    };

    const typed = new Typed(typedElement.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  function ScrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className="wrapper">
      <main className="main">
        <div className="main__container">
          <button id="butt_scroll" onClick={ScrollTop}>
            <img id="img_arrowup" src={arrowUp} alt="Arrow Up" />
          </button>
          <div className="main__content" id="home1">
            <div className="main__text">
              <h1 className="main_title">
                Hello <br />
                I’m Vlad <br />
                <span id="typed-text" ref={typedElement}></span>
              </h1>
              <p className="main_text">
                I'm a dedicated and enthusiastic Front-end Developer who is on a
                mission to continually grow and excel in the dynamic world of
                web development. I've developed my talents throughout the course
                of my two years of experience, and I'm dedicated to continuing
                to do so. My ultimate objective is to use my knowledge to assist
                people and organizations in finding creative digital solutions
                to a variety of problems.
              </p>
              <a href="https://t.me/vlad05x">
                <p className="main_subtitle">LET’S TALK</p>
              </a>
            </div>
          </div>
          <div className="main__photo">
            <img className="photo" src={MyPhoto} alt="MyPhoto" />
          </div>
        </div>
        <div className="media__container">
          <div className="main_logo">
            {imageData.map((image, index) => (
              <ImageLink
                key={index}
                href={image.href}
                src={image.src}
                alt={image.alt}
              />
            ))}
          </div>
        </div>
        <div className="page__container">
          <div className="main_about">
            <div className="main__photo1">
              <img className="photo photo1" src={MyPhoto} alt="MyPhoto" />
            </div>
            <div className="About_content">
              <h1 className="title" id="about1">
                About Me
              </h1>
              <p className="about_text">
                Hello &#128075;, My name is Vlad, and I am an experienced front-end
                developer with over four years of expertise in web development.
                For me, development is not just a profession but a passion that
                drives me to create innovative solutions in the ever-evolving
                field of web technologies.
                <br />
                <span style={{ backgroundColor: "#55bf30" }}>
                  My mission?
                </span>{" "}
                To deliver high-quality software products while discovering
                effective digital solutions for diverse challenges. I firmly
                believe that every technical problem presents an opportunity for
                creativity and progress.
                <br />
                <span style={{ backgroundColor: "#55bf30" }}>
                  Now let’s talk technology!
                </span>{" "}
                <br />
                💻 My key skills include:
                <ul style={{ margin: "0 0 0 50px" }}>
                  <li>
                    Proficiency in{" "}
                    <strong>React, Redux, JavaScript, and TypeScript</strong>{" "}
                    for developing modern, dynamic user interfaces.
                  </li>
                  <li>
                    Expertise in <strong>HTML5 and CSS3</strong> for crafting
                    responsive, cross-browser layouts using Flexbox and the BEM
                    methodology.
                  </li>
                  <li>
                    Experience in creating{" "}
                    <strong>dynamic and cross-platform designs</strong> that
                    ensure exceptional user experiences on any device.
                  </li>
                  <li>
                    Strong knowledge of <strong>Git</strong> for version control
                    and efficient team collaboration.
                  </li>
                </ul>
                For every project, I strive to merge functionality with visual
                appeal, delivering solutions that not only perform but also
                inspire. Let’s build the future together!
              </p>
            </div>
          </div>

          <Services />
          <Skills />
          <Portfolio />
        </div>
      </main>
    </div>
  );
}

export default Main;
