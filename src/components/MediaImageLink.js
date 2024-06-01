import React from 'react';
import githubIcon from '../images/Icons/github.svg';
import linkedinIcon from '../images/Icons/LinkedIn_Logo_2013 logo.svg';
import fiverrIcon from '../images/Icons/icons8-fiverr.svg';
import upworkIcon from '../images/Icons/icons8-upwork.svg';

const imageData = [
  {
    href: "https://github.com/vlad05x",
    src: githubIcon,
    alt: "logo-github"
  },
  {
    href: "https://www.linkedin.com/in/vlad-honcharenko-4a003228b/",
    src: linkedinIcon,
    alt: "logo-linkedin"
  },
  {
    href: "https://www.fiverr.com/s/2orXjr",
    src: fiverrIcon,
    alt: "logo-fiverr"
  },
  {
    href: "https://www.upwork.com/freelancers/vladh29",
    src: upworkIcon,
    alt: "logo-upWork"
  },
];

function ImageLink({ href, src, alt }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <img className="logo" src={src} alt={alt} />
    </a>
  );
}

export { ImageLink, imageData };
