import React from 'react'
import Slider from "rc-slider"
import 'rc-slider/assets/index.css'
import "../css/navBar.css"
import { MenuItem, Select } from '@material-ui/core';

export default function NavBar(props) {
    

    const {level, changeLevel, format, changeFormat} = props
    return (
        <header className="Navbar">
            <div className="logo">
                <a href="#">reactColorPicker</a>
            </div>    
                <div className="slider-container">
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
            <div className="select-container">
                <Select value={format} onChange={changeFormat}>
                    <MenuItem value='hex'>HEX - #fffff</MenuItem>
                    <MenuItem value='rgb'>RGB - rgb(255, 255, 255)</MenuItem>
                    <MenuItem value='rgb'>RGBA - rgba(255, 255, 255, 1.0)</MenuItem>
                </Select>
                </div>
        </header>
    )
}
