import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import "../css/style.css";
import arrowUp from "../images/Icons/arrowup.svg";
import MyPhoto from "../images/Photo.jpeg";

function Main() {
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

  return (
    <main className="main">
      <div className="main__container">
        <button id="butt_scroll">
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
              mission to continually grow and excel in the dynamic world of web
              development. I've developed my talents throughout the course of my
              two years of experience, and I'm dedicated to continuing to do so.
              My ultimate objective is to use my knowledge to assist people and
              organizations in finding creative digital solutions to a variety
              of problems.
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
    </main>
  );
}

export default Main;
