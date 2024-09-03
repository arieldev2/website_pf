import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function About() {
  return (
    <div class="grid-info">
      <div class="item-info">
        <h1 className="title-about">iOS developer</h1>
        <p className="desc-about">
          Hello, my name is Ariel Ortiz and I'm a dedicated iOS developer with a
          passion for crafting innovative and user-friendly mobile applications.
          With a strong foundation in iOS development, I thrive on transforming
          ideas into robust, feature-rich apps that enhance user experiences
        </p>
      </div>
      <div class="item-info">
        <a href="https://github.com/arieldev2" className="fs-4 p-5">
          <FaGithub size={35} className="p-1" /> GitHub
        </a>
      </div>
      <div class="item-info">
        <a
          href="https://www.linkedin.com/in/ariel-ortiz-b66979186/"
          className="fs-4 p-5"
        >
          <FaLinkedin size={35} className="p-1" /> Linkedin
        </a>
      </div>
    </div>
  );
}

export default About;
