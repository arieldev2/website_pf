import React from "react";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import AppOne from "./appOne/AppOne";
import AppTwo from "./appTwo/AppTwo";
import AppThree from "./appThree/AppThree";
import AppFour from "./appFour/AppFour";
import AppFive from "./appFive/AppFive";
import AppSix from "./appSix/AppSix";

export default function Home() {
  return (
    <div className="mar-b">
      <div className="container mt-5 ">
        <div className="row">
          <div className="col-md ">
            <h1 className="mb-3 display-3">iOS developer</h1>
            <p className="text-about">
              Hello, my name is Ariel Ortiz and I'm a dedicated iOS developer
              with a passion for crafting innovative and user-friendly mobile
              applications. With a strong foundation in iOS development, I
              thrive on transforming ideas into robust, feature-rich apps that
              enhance user experiences.
            </p>
          </div>

          <div className="col-md text-center mt-4">
            <a href="https://github.com/arieldev2" className="align fs-4">
              <FaGithub size={35} className="p-1" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ariel-ortiz-b66979186/"
              className="align fs-4"
            >
              <FaLinkedin size={35} className="p-1" /> Linkedin
            </a>
          </div>
        </div>
      </div>

      <div className="container mt-top">
        <h1 className="text-white sub sub-s">iOS Projects</h1>
        <div className="margin-bottom-projects">
          <AppOne />
        </div>
        <div className="margin-bottom-projects">
          <AppTwo />
        </div>
        <div className="margin-bottom-projects">
          <AppThree />
        </div>
        <div className="margin-bottom-projects">
          <AppFour />
        </div>
        <div className="margin-bottom-projects">
          <AppFive />
        </div>
        <div className="margin-bottom-projects">
          <AppSix />
        </div>
      </div>
    </div>
  );
}
