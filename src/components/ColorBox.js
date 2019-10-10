import React, {useState} from 'react'
import "../css/colorBoxCss.css"
import {CopyToClipboard} from "react-copy-to-clipboard"


export default function ColorBox(props) {
    const [copyStatus, setCopyStatus] = useState(false)
    const {name, color} = props.color // uses descturing to grab object props from Pallete.js


    const handleCopyClick = ()=>{
            // setCopyStatus(!copyStatus);
            // setTimeout(() => {
            //     setCopyStatus(!copyStatus);
            // }, 1500);
            setCopyStatus(true);
            setTimeout(() => {
                setCopyStatus(false);
            }, 1500);
}

    return (
    <CopyToClipboard text={color}>
  
        <div style={{background: color}} className="ColorBox" onClick={handleCopyClick} >
            <div style={{background: color}}  className={`copy-overlay ${copyStatus && "show"}`}/>
            <div className={`copy-msg ${copyStatus && "show"}`}>
                <h1>Copied!</h1>
                <p>{color}</p>
            </div>
            <div className="copy-container">
                <div className="box-content">
                    <span>{name}</span>
                </div>
                <button className="copy-button">Copy</button>
            </div>
            <span className="see-more">More</span>     
        </div>
    </CopyToClipboard>        
    )
}