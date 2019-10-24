import React, {useState} from 'react'
import { Link} from 'react-router-dom'
import "../css/colorBoxCss.css"
import {CopyToClipboard} from "react-copy-to-clipboard"


export default function ColorBox(props) {
    const [copyStatus, setCopyStatus] = useState(false)
    const {color, moreURL, showLink} = props // uses descturing to grab object props from Pallete.js

    const handleCopyClick = ()=>{
            setCopyStatus(true);
            setTimeout(() => {
                setCopyStatus(false);
            }, 1500);
}

    return (
        <CopyToClipboard text={color.hex}>
            <div style={{background: color.hex}} className="ColorBox" onClick={handleCopyClick} >
                <div style={{background: color.hex}}  className={`copy-overlay ${copyStatus && "show"}`}/>
                <div className={`copy-msg ${copyStatus && "show"}`}>
                    <h1>Copied!</h1>
                    <p>{color.hex}</p>
                </div>
                <div className="copy-container">
                    <div className="box-content">
                        <span>{color.name}</span>
                    </div>
                    <button className="copy-button">Copy</button>
                </div>
                { showLink && (
                <Link to={moreURL} onClick={(event)=> event.stopPropagation()} >
                    <span className="see-more">More</span>
                </Link>
                )}
            </div>
        </CopyToClipboard>
    )
}