// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Octokit } from "octokit";
// import githubToken from '../../../public/secrets'
import "./Project.css";
import axios from "axios";
import { Link } from "react-router-dom";
const Project = () => {
  // console.log(import.meta.env);
  const octokit = new Octokit({
    auth: import.meta.env.VITE_GITHUB_TOKEN,
  });
  const [tempArr, setTempArr] = useState([]);
  const [imageAddress, setImageAddress] = useState([]);
  const [avatarUrl, setAvatarUrl] = useState("");
  const [username, setUserName] = useState("");
  const [githubProfileLink, setGithubProfileLink] = useState("");

  const getImage = async () => {
    const config = {
      method: "get",
      url: `https://api.unsplash.com/search/photos?page=1&query=random+tech+abstract&client_id=wQw_CuIPNAiy90LjR04lkIR7VMJE6Mj3nSGYGvlD0wY`,
      headers: {
        accessKey: "wQw_CuIPNAiy90LjR04lkIR7VMJE6Mj3nSGYGvlD0wY",
      },
    };
    axios(config).then((res) => {
      const temp = res.data.results;
      setImageAddress(temp);
    });
  };

  useEffect(() => {
    getGitData();
    getImage();
  }, []);

  function getGitData() {
    octokit
      .request("GET /user/repos/", {
        type: "public",
      })
      .then((response) => {
        const temp = response.data;
        // console.log(temp);

        setAvatarUrl(temp[0].owner.avatar_url);
        setUserName(temp[0].owner.login);
        setGithubProfileLink(temp[0].owner.html_url);
        setTempArr(temp);
        // console.log(temp, "res");
      });
  }
  // console.log(tempArr);

  function capitalize(s) {
    return s[0].toUpperCase() + s.slice(1);
  }

  return (
    <div>
      <div>
        <div className="project-header">
          <div className="h1-div">
            <h1 data-value="Projects" id="cipher">
              Projects
            </h1>
          </div>
          {githubProfileLink != "" ? (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                height: "50px",
              }}
            >
              <Link to={githubProfileLink}>
                <p>{"/" + username}</p>
              </Link>
              <img
                height={50}
                style={{ borderRadius: "50vh", marginLeft: "10px" }}
                src={avatarUrl}
                alt="loading"
              />
            </div>
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </div>
      {githubProfileLink != "" && imageAddress != [] ? (
        <div className="project-container">
          {tempArr.map((item, index) => {
            while (index < 7) {
              let temp = "row";
              let justifyDir = "start";
              if (index % 2 == 0) {
                temp = "row-reverse";
                justifyDir = "end";
              }
              return (
                <a
                  href={item.html_url}
                  style={{
                    display: "flex",
                    justifyContent: justifyDir,
                    textDecoration: "none",
                  }}
                  key={index}
                >
                  <div
                    className="project-element"
                    style={{ flexDirection: temp }}
                  >
                    <div className="project-img">
                      <img
                        width="100%"
                        height="100%"
                        style={{ objectFit: "cover" }}
                        src={imageAddress[index].urls.regular}
                        alt="error"
                      />
                    </div>
                    <div className="tile-details">
                      <p>
                        {capitalize(
                          item.name.toString().replaceAll("-", " ").slice(0, 30)
                        )}
                      </p>
                      <Link to={item.html_url}>
                        <img
                          style={{}}
                          width="45px"
                          src="assets/git-logo.svg"
                          alt=""
                        />
                      </Link>
                    </div>
                  </div>
                </a>
              );
            }
          })}
        </div>
      ) : (
        <div>Loading..</div>
      )}
    </div>
  );
};

export default Project;
