// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import './intro.css'
import { Link } from 'react-router-dom';

const Intro = () => {
  // const [text, setText] = useState('')
  // const cipherText = () => {

  // }

  const hackerTextEffect = (label) => {
    const letters = "qwertyuiopasdfghjklzxcvbnm";
    let interval = null;

    const h1Element = document.getElementById(label);
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

      iteration += 1 / 3;
    }, 40);

    return () => clearInterval(interval);
  }


  useEffect(() => {
    hackerTextEffect("cipher")
    // Cleanup on unmount
  }, []);



  return (
    <div className='intro-content'>
      <h5 >Hola, I'm</h5>
      <h1 data-value='Kartik Buttan' id='cipher'>Kartik Buttan</h1>

      <h5 >Yo! What I'm upto? To land in a spot where my work rocks the world of product design and development, reaching heaps of users 🚀. I'm all about diving deep into complex problems and coming out victorious. 🧠 Plus, I'm fond of solving puzzles – bring 'em on! I'm all about that tech life, but when I'm not coding, you can catch me making waves in the pool 🏊‍♂️ or crushing it in the gaming world 🎮. Let's level up and make some magic happen!</h5>
      {/* <div className='h1-div'>
      </div> */}
      <Link to="https://wa.me/+918285380492" className='whatsapp-redirect'>Get in Touch →</Link>
    </div>
    // <div className='intro-div'>
    // </div>
  )
}

export default Intro
