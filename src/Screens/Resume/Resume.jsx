// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import "./Resume.css";

// getGitData();

const Resume = () => {
  return (
    <div className="resume">
      <h1>Resume</h1>
      <div className="resume-div">
        <iframe
          src="assets\Resume\Kartik_SDE.pdf"
          height={"100%"}
          allow="autoplay"
        ></iframe>
      </div>
    </div>
  );
};

export default Resume;
