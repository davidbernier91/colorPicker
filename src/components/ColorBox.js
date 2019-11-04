import React, {useState} from 'react'
import { Link} from 'react-router-dom'
import "../css/colorBoxCss.css"
import {CopyToClipboard} from "react-copy-to-clipboard"
import chroma from "chroma-js"

export default function ColorBox(props) {
    const [copyStatus, setCopyStatus] = useState(false)
    const {color, moreURL, showLink, background} = props // uses descturing to grab object props from Pallete.js
    const isDarkColor = chroma(background).luminance() <= 0.08;
    const isLightColor = chroma(background).luminance() >= 0.7;
 

    const handleCopyClick = ()=>{
            setCopyStatus(true);
            setTimeout(() => {
                setCopyStatus(false);
            }, 1500);
        }

    return (
        <CopyToClipboard text={background}>
            <div style={ {background: background}} className="ColorBox" onClick={handleCopyClick} >
                <div style={{background: background}}  className={`copy-overlay ${copyStatus && "show"}`}/>
                <div className={`copy-msg ${copyStatus && "show"}`}>
                    <h1>Copied!</h1>
                    <p className={isLightColor && "dark-text"}>{background}</p>
                </div>
                <div className="copy-container">
                    <div className="box-content">
                        <span className={isDarkColor && "light-text"}>
                        {color.name}
                        </span>
                    </div>
                    <button className={`copy-button ${isLightColor && "dark-text"}`}>Copy</button>
                </div>
                { showLink && (
                <Link to={moreURL} onClick={(event)=> event.stopPropagation()} >
                    <span className={`see-more ${isLightColor && "dark-text"}`}>More</span>
                </Link>
                )}
            </div>
        </CopyToClipboard>
    )
}