import React from 'react';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Markdown from 'marked-react';
import "./common.css";
import "./Content.css"

function Content() {

    const { name, number, dataType } = useParams();
    const [text, setText] = useState(``)

    useEffect(() => {
        fetch(`/text/${name}/${number}.txt`)
            .then(response => response.text())
            .then((data) => {
                setText(data);
            });
    }, [])

    return (
        <div className='textContent'>
            <Link to={`/summary/round/${name}/${dataType}`}>
                <h1 className='titleName'>{name}</h1>
            </Link>
            <div className="textArea">
                <div className="number">{number}.</div>
                <Markdown>{text}</Markdown>
            </div>
        </div>
    )
}


export default Content;