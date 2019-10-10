import React,{useState} from 'react'
import ColorBox from './ColorBox'

import Slider from "rc-slider"
import 'rc-slider/assets/index.css'
import "../css/palette.css"


export default function Pallete(props) {
    const colors = props.pallete.colors
    const [colorLevel, setColorLevel] = useState(500)

   
    const colorBoxes = colors[colorLevel].map((color)=>(
        <ColorBox color={color} />
        )
    )

    const changeLevel = (level) => ( setColorLevel(level) )
    
    
    return (
        <div className="Pallete">
            <Slider 
                defaultValue={colorLevel}
                min={100} max={900} 
                step={100}
                onAfterChange={changeLevel}
            />
            <div className="Pallete-colors">
                {colorBoxes}
                {console.log(props.pallete)}
            </div>
        </div>
    )
}
