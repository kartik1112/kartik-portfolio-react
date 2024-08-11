import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import './Blogs.css'
// import { Link } from 'react-router-dom'
import axios from 'axios'

const Blogs = () => {

  function capitalize(s) {
    return s[0].toUpperCase() + s.slice(1);
  }

  const tempArr = [
    {
      "title": "Let’s “GO” with “WebSocket” : Building a real-time Chat App in GO Lang",
      "html_url": "https://medium.com/@kartik11buttan/lets-go-with-websocket-building-a-real-time-chat-app-in-go-lang-ad0227cb677a"
    },
    {
      "title": "🌐Understanding REST APIs in Go: A Guide with Gin",
      "html_url": "https://medium.com/@kartik11buttan/understanding-rest-apis-in-go-a-guide-with-gin-d6afc4e2a282"
    },
    {
      "title": "Go Routines: “Concurrency” in Go vs “Async/Await” in JavaScript. Are they same?",
      "html_url": "https://medium.com/@kartik11buttan/go-routines-concurrency-in-go-vs-async-await-in-javascript-are-they-same-d9417cee462b"
    },
    {
      "title": "Go Lang for Beginners: My Personal Learning Journey 🌟",
      "html_url": "https://medium.com/@kartik11buttan/go-lang-for-beginners-my-personal-learning-journey-6483e5b463a7"
    },
  ]


  const [imageAddress, setImageAddress] = useState([]);



  const getImage = async () => {
    setImageAddress([])
    const config = {
      method: "get",
      url: `https://api.unsplash.com/search/photos?page=1&query=$blogs&client_id=wQw_CuIPNAiy90LjR04lkIR7VMJE6Mj3nSGYGvlD0wY`,
      headers: {
        accessKey: "wQw_CuIPNAiy90LjR04lkIR7VMJE6Mj3nSGYGvlD0wY"
      }
    }
    axios(config).then((res) => {
      const temp = res.data.results
      // console.log(temp[1], "sd")
      setImageAddress(temp)
      // console.log(imageAddress[1].urls.raw, "sd");

    })
    // console.log(data.data.results[0].urls.raw)
  }

  useEffect(() => {
    // getGitData();
    getImage();
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
    <div className='blogs-container'>
      <Navbar />
      <div className='h1-div'>
        <h1 data-value='Blogs' id='cipher'>Blogs</h1>
      </div>
      {(imageAddress.length != []) ? (<div className='project-container'>
        {
          tempArr.map((item, index) => {
            while (index < 7) {
              let temp = "row";
              let justifyDir = 'start';
              if (index % 2 == 0) {
                temp = "row-reverse";
                justifyDir = 'end';
              }
              return (
                // <GenericTile key={index} url = {item.html_url} imgAddress ={imageAddress[index].urls.regular} title = {item.name} justifyDir={justifyDir} flexDir = {temp}/>
                <a href={item.html_url} style={{ display: 'flex', justifyContent: justifyDir, textDecoration: 'none' }} key={index}>
                  <div className='project-element' style={{ flexDirection: temp }}>
                    {/* {console.log(imageAddress.urls.raw, "oass")} */}
                    <div className='project-img'>
                      <img width='100%' height='100%' style={{ objectFit: 'cover' }} src={imageAddress[index].urls.regular} alt="error" />
                    </div>
                    <div className='tile-details'>
                      <p>
                        {capitalize(item.title)}
                      </p>
                    </div>
                    {/* <img src={imageAddress[index].urls.raw} alt="dfgf" /> */}
                  </div>
                </a>
              )
            }
          })
        }
      </div>) : (<div>Loading..</div>)}
      <Footer />
    </div>
  )
}

export default Blogs
