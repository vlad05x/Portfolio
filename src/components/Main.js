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

    // Очищаем анимацию при размонтировании компонента
    return () => {
      typed.destroy();
    };
  }, []);

  // Scroll-Up animation
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
            <img className="photo" src={MyPhoto} alt="Photo" />
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
              <img className="photo photo1" src={MyPhoto} alt="Photo" />
            </div>
            <div className="About_content">
              <h1 className="title" id="about1">
                About me
              </h1>
              <p className="about_text">
                Hello everyone &#128515; I'm not your average front-end
                developer; I'm a tech aficionado on a relentless journey to
                conquer the ever-evolving realm of web development. In the
                exhilarating world of bits and pixels, I thrive, always striving
                to ascend new summits of expertise. 🚀 Two years into this
                electrifying journey, my skills have metamorphosed into
                something formidable, and I'm just getting started. My
                insatiable appetite for growth fuels my dedication to staying
                ahead in the dynamic landscape of web development.
                <br />
                <span style={{ backgroundColor: "#55bf30" }}>
                  My mission?
                </span>{" "}
                It's simple, but important: use your programming prowess as a
                force for good. I aspire to be a software engineer who rushes in
                to save people and organizations from technical dilemmas. I
                believe that every problem has a creative digital solution
                waiting to be discovered.
                <br />
                <span style={{ backgroundColor: "#55bf30" }}>
                  Now let's talk technology!
                </span>
                💻 Proficient in HTML5, CSS3, and advanced in React and Git. I
                effortlessly wield Flexbox, follow the BEM methodology, and
                craft responsive layouts. With expertise in React, I build
                dynamic interfaces, while Git ensures smooth version control. My
                coding combines functionality with visual appeal, pushing the
                boundaries of technology. Let's create seamlessly together!
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
