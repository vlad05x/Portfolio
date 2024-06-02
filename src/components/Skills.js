import React from "react";
import htmlIcon from "../images/Icons/html_icon.svg";
import cssIcon from "../images/Icons/css_icon.svg";
import scssIcon from "../images/Icons/Scss_logo.png";
import jsIcon from "../images/Icons/js_icon.svg";
import reactIcon from "../images/Icons/react_logo.svg";
import gitIcon from "../images/Icons/git-svgrepo-com.svg";
import TypeScriptIcon from "../images/Icons/typescript.svg"

const skillsData = [
    {src: htmlIcon, alt: "logo-html"},
    {src: cssIcon, alt: "logo-css"},
    {src: scssIcon, alt: "logo-scss"},
    {src: jsIcon, alt: "logo-js"},
    {src: reactIcon, alt: "logo-react"},
    {src: gitIcon, alt: "logo-git"},
    {src: TypeScriptIcon, alt: "logo-typescript"}
];

function Skills() {
    return (
        <div className="main_logo skills_logo">
            <h1 className="title" id="skills1">Skills</h1>
             <div className="services_icon">
                {skillsData.map((skill, index) => (
                    <img key={index} className="skills_icon" src={skill.src} alt={skill.alt}></img>
                ))}
             </div>
        </div>
    );
}

export default Skills