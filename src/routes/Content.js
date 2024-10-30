import React from 'react';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./common.css";
import "./Content.css"
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';


function Content() {

    const { name, number } = useParams();
    const [text, setText] = useState(``)

    useEffect(() => {
        fetch(`/text/${name}/${number}.txt`)
            .then(response => response.text())
            .then((data) => {
                setText(data)
            });
    }, [])

    console.log(text)

    return (
        <div className='textContent'>
            <h1 className='titleName'>{name}</h1>
            <div className="textArea">
                <div className="number">{number}.</div>
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{text}</ReactMarkdown>
            </div>
        </div>
    )
}


export default Content;