// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import "./Resume.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

// getGitData();

const Resume = () => {
  useEffect(() => {
    // getImage();
    const letters = "qwertyuiopasdfghjklzxcvbnm";
    let interval = null;

    const h1Element = document.getElementById("cipher");
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
      h1Element.innerText = h1Element.innerText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return h1Element.dataset.value[index];
          }
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= h1Element.dataset.value.length) {
        clearInterval(interval);
      }

      iteration += 1 / 5;
    }, 40);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="resume">
      <Navbar />
        <h1 data-value='Resume' id='cipher'>Resume</h1>
      {/* <div className='h1-div'>
      </div> */}
      
      <div className="resume-div">
        <iframe
          src="assets\KartikButtan_aSDE.pdf"
          height={"100%"}
          allow="autoplay"
        ></iframe>
      </div>
      <Footer />
    </div>
  );
};

export default Resume;
