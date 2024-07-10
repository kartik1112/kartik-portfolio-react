import React, { useEffect, useState } from 'react'
import { Octokit } from 'octokit'
import githubToken from '../../../public/secrets'
import Navbar from '../../Components/Navbar/Navbar';
import './Project.css'

const Project = () => {

    useEffect(() => {
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

    const octokit = new Octokit({
        auth: githubToken
    })
    const [tempArr, setTempArr] = useState([]);

    getGitData();
    function getGitData() {
        octokit.request('GET /user/repos', {
            type: 'public'
        }).then(response => {
            const temp = response.data
            setTempArr(temp)
            // console.log(temp, "res");
        })
    }
    // console.log(tempArr);

    return (
        <div>
            <Navbar />
            <div style={{
                marginTop: "100px",
            }}>
                <h1 data-value='Projects' id='cipher'>Projects</h1>
                <div className='project-container'>
                    {/* {console.log(tempArr)} */}
                </div>
                <button onClick={() => {
                    console.log(tempArr);
                }}>ansdn</button>
            </div>
        </div>
    )
}

export default Project
