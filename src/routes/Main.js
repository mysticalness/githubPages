import React from 'react';
import "./common.css";
import "./Main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faT } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Main() {
  return (
    <div className="mainContent">
      <div>
        <div className="profileDiv">
          <img src="/assets/profile.jpg" alt="profile" />
        </div>
        <h1 className="welcome">Welcome!</h1>
        <div className="othersites">
          <div className="linkIcons" id="tistory" title="Tistory">
            <a href="https://asterisk-w.tistory.com" target="_blank">
              <FontAwesomeIcon icon={faT} />
            </a>
          </div>
          <div className="linkIcons" id="github" title="Github">
            <a href="https://github.com/mysticalness" target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
          <div className="linkIcons" id="insta" title="Instagram">
            <a href="https://www.instagram.com/__abrasax__" target="_blank">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
