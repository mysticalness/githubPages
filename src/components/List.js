import React from 'react';

import { Link } from "react-router-dom";

function List({ number, name, duration, img, imgLink, type ,dataType}) {
  console.log(type);
  console.log(name);
  console.log(duration);
  console.log(dataType)
  
  return (
    <div className="summaryList">
      <div className="bookName">
        <Link to={type === "technical" ? `/document/pdf/${name}` : `/summary/round/${name}/${dataType}`}>{name}</Link>
      </div>
      <div className="duration-Key">
        <div className="duration">{duration}</div>
        <div className="keyNum">{number}</div>
      </div>
      <div className="bookImage">
        <a href={imgLink} target="_blank">
          <img src={img} alt={name} />
        </a>
      </div>
    </div>
  );
}

export default List;
