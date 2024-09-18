// eslint-disable-next-line no-unused-vars
import React from "react";
import "./styles.css";
import Intro from "../../Components/IntroductionDiv/Intro";
import SkillsSidebar from "../../Components/SkillsSidebar/SkillsSidebar";
import Project from "../Projects/Project";
import Resume from "../Resume/Resume";
import Blogs from "../Blogs/Blogs";
import ReactGA from "react-ga4";




const Home = () => {

  ReactGA.send({
    hitType: "pageview",
    page: "/",
    title: "Home",
  })

  return (
    <div className="home-container">
      <div className="home-content">
        <Intro />
        <SkillsSidebar />
      </div>
      <hr className="horizontal-divider" />
      <div style={{ margin: "-25px" }}></div>
      <Project></Project>
      <div style={{ margin: "30px" }}></div>
      <hr className="horizontal-divider" />
      <div style={{ margin: "-45px" }}></div>
      <Resume></Resume>
      <hr className="horizontal-divider" />
      <div style={{ margin: "-35px" }}></div>
      <Blogs></Blogs>
    </div>
  );
};

export default Home;
