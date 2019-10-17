import React,{useState} from 'react'
import Slider from "rc-slider"
import 'rc-slider/assets/index.css'
import "../css/navBar.css"

export default function NavBar(props) {
    const {level, changeLevel} = props
    return (
        <header className="Navbar">
            <div className="logo">
                <a href="#">reactColorPicker</a>
            </div>    
                <div classNAme="slider-container">
                    <span>Level: {level}</span>
                    <div className="slider" >
                        <Slider 
                            defaultValue={500}
                            min={100} max={900} 
                            step={100}
                            onAfterChange={changeLevel}
                    />
                </div>
            </div>
        </header>
    )
}
