import React, { useState } from "react";
import "../css/style.scss";
import portfolioBeautyLogo from "../images/../images/portfolio-beauty-logo.png"
import trellotionImg from "../images/Trellotion-photo.png";
import foodDXImg from "../images/FoodDX.png";
import diGiImg from "../images/Di-Gi_img.png";
import rgymImg from "../images/RGym.png";
import BasketballMania from "../images/BasketballMania.png";
import LanguageLearning from "../images/LanguageLearning.png";
import lymaImg from "../images/Site_lyma.png";
import calculatorImg from "../images/icon_calculator.png";
import MovieAppLogo from "../images/movie-appLogo.png";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";


const portfolioData = [
  {
    imgSrc: portfolioBeautyLogo,
    title: "Portfolio-beauty",
    description:
      "Here you will find works that reflect a unique approach and style.",
    link: "https://vlad05x.github.io/portfolio-beauty/",
  },
  {
    imgSrc: trellotionImg,
    title: "Trellotion",
    description:
      "An application that will help you with saving tasks you need to do.",
    link: "https://vlad05x.github.io/Trellotion/",
  },
  {
    imgSrc: foodDXImg,
    title: "FoodDX",
    description:
      "Discover a unique combination of excellent cuisine and attentive service. Come and enjoy a unique gastronomic experience with us.",
    link: "https://vlad05x.github.io/FoodDX/",
  },
  {
    imgSrc: BasketballMania,
    title: "BasketballMania",
    description:
      "An online store entirely dedicated to basketball, where you'll find everything you need from professional gear to accessories for the game. ",
    link: "https://vlad05x.github.io/basketball-shop/",
  },
  {
    imgSrc: LanguageLearning,
    title: "Language-learning",
    description:
      "An app for learning new words that turns the memorization process into a fun and effective activity.",
    link: "https://vlad05x.github.io/Language-learning/",
  },
    {
    imgSrc: MovieAppLogo,
    title: "Movie-app",
    description:
      "An app that helps you find movies",
    link: "https://movie-app-chi-swart.vercel.app/",
  },
  {
    imgSrc: diGiImg,
    title: "Di-Gi",
    description:
      "A full-cycle digital agency focused on the best results for our clients in marketing, sales and management.",
    link: "https://vlad05x.github.io/Frontend-course/Di-Gi/",
  },
  {
    imgSrc: rgymImg,
    title: "RGym",
    description:
      "Do you want to train? Join our community and start your journey to health and great shape today!",
    link: "https://vlad05x.github.io/RGym/",
  },
  {
    imgSrc: lymaImg,
    title: "Lyma",
    description:
      "We offer everything you need to create a unique look and care for your skin. Trust us and enjoy confidence and beauty every day!",
    link: "https://vlad05x.github.io/Lymo/",
  },
  {
    imgSrc: calculatorImg,
    title: "Calculator",
    description: "This is my first application written in JavaScript.",
    link: "https://vlad05x.github.io/Calculator/",
  },
];

const ITEMS_PER_PAGE = 6;

function Portfolio() {
  const [currentPage, setCurrentPage] = useState(0);

  const startIndex = currentPage * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const currentProjects = portfolioData.slice(startIndex, endIndex);

  const handleNextPage = () => {
    if (endIndex < portfolioData.length) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (startIndex > 0) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className="block_portfolio" id="portfolio1">
      <h1 className="title">Portfolio</h1>
      <p className="text_services text_portfolio">
        Welcome to the world of my creativity! My portfolio represents a variety
        of projects that I have designed and implemented. Here you will find
        inspiring websites that reflect my passion for web development and
        design.
      </p>
      <div className="cards_portfolio">
        {currentProjects.map((project, index) => (
          <div className="card_portfolio" key={index}>
            <img
              src={project.imgSrc}
              alt={project.title}
              style={project.title === "Calculator" ? { width: "200px" } : null}
            />
            <h2 className="title_services">{project.title}</h2>
            <p className="text_services text_portfolio">
              {project.description}
            </p>
            <a
              className="show_link"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Check web
            </a>
          </div>
        ))}
      </div>
      <div className="pagination-buttons">
        <button
          className="pagination_btn"
          onClick={handlePrevPage}
          disabled={startIndex === 0}
        >
          <GrFormPrevious />
        </button>
        <button
          className="pagination_btn"
          onClick={handleNextPage}
          disabled={endIndex >= portfolioData.length}
        >
          <MdOutlineNavigateNext />
        </button>
      </div>
    </div>
  );
}

export default Portfolio;
