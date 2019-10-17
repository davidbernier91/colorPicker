import React, {useState} from 'react'
import "../css/colorBoxCss.css"
import {CopyToClipboard} from "react-copy-to-clipboard"


export default function ColorBox(props) {
    const [copyStatus, setCopyStatus] = useState(false)
    const {name, hex} = props.color // uses descturing to grab object props from Pallete.js


    const handleCopyClick = ()=>{
            setCopyStatus(true);
            setTimeout(() => {
                setCopyStatus(false);
            }, 1500);
}

    return (
    <CopyToClipboard text={hex}>
       
        <div style={{background: hex}} className="ColorBox" onClick={handleCopyClick} >
            <div style={{background: hex}}  className={`copy-overlay ${copyStatus && "show"}`}/>
            <div className={`copy-msg ${copyStatus && "show"}`}>
                <h1>Copied!</h1>
                <p>{hex}</p>
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