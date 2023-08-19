import React from "react";

function AboutMe() {
  return (
    <div className="about-me">
      <img className="aboutme-photo" src="/aboutme-photo.jpg" alt="A photo of the developer"/>
      <span className="about-text">
        <p className="about-header">About Me</p>
        Welcome! My name is Ivy. I’m a Full-Stack Developer,
        Illustrator/Designer, and Cat Parent. I always strive to familiarize
        myself with the latest technology to keep me up to date in the field and
        keep an open mind to new endeavors. I have experience in programs such
        as Adobe Photoshop, Maya, and After Effects as well as coding languages
        like React, Javascript, and MySQL.
        <span>
          When I’m not coding, you can usually find me drawing or playing Sims
          in my free time.💖
        </span>
      </span>
    </div>
  );
}

export default AboutMe;
