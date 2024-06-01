import React from "react";
import laptopCode from '../images/Icons/laptop-code.svg';
import shareAlt from '../images/Icons/share-alt.svg';

const servicesData = [
  {
    imgSrc: laptopCode,
    title: "Web Development",
    description: "Development of different sites using HTML5 and CSS3, FLEXBOX and BEM integration for more flexible."
  },
  {
    imgSrc: shareAlt,
    title: "Site setup",
    description: "I will be happy to help you edit the site in any way you like. Starting from changing fonts to editing entire blocks."
  },
  {
    imgSrc: laptopCode,
    title: "Responsive website",
    description: "I will make a fully responsive website especially for you."
  },
];

function Services() {
  return (
    <div className="block_services" id="services1">
      <h1 className="title">Services</h1>
      <div className="cards_services">
        {servicesData.map((service, index) => (
          <div className="card" key={index}>
            <img src={service.imgSrc} alt={service.title} />
            <h2 className="title title_services">{service.title}</h2>
            <p className="text_services">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
