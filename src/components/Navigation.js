import React from 'react';
import "./Navigation.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

function Navigation() {
  return (
    <div className="navigation">
      <ul>
        <li>
          <Link to="/summary">Book Summary</Link>
        </li>
        <li>
          <Link to="/document">Technical Document</Link>
        </li>
        <li>About me</li>
        <li className="goToHome">
          <Link to="/">
            <FontAwesomeIcon icon={faHouse} />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
