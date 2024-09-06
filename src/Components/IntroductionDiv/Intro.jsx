/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import "./intro.css";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <div className="intro-content">
      <h5>Hola, I'm</h5>
      <h1>Kartik Buttan</h1>

      <h5>
        Yo! What I'm upto? To land in a spot where my work rocks the world of
        product design and development, reaching heaps of users 🚀. I'm all
        about diving deep into complex problems and coming out victorious. 🧠
        Plus, I'm fond of solving puzzles – bring 'em on! I'm all about that
        tech life, but when I'm not coding, you can catch me making waves in the
        pool 🏊‍♂️ or crushing it in the gaming world 🎮. Let's level up and make
        some magic happen!
      </h5>
      <Link to="https://wa.me/+918285380492" className="whatsapp-redirect">
        Get in Touch →
      </Link>
    </div>
  );
};

export default Intro;
