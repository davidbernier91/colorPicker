import React from 'react'
import "../css/colorBoxCss.css"


export default function ColorBox(props) {
    const {name, color} = props.color // uses descturing to grab object props from Pallete.js

    return (

        <div style={{background: color}}
             className="ColorBox"
        >
            <div className="copy-container">
                <div className="box-content">
                    <span>
                        {name}
                    </span>
                </div>
                <button className="copy-button">Copy</button>
            </div>
            <span className="see-more">More</span>     
        </div>
    )
}