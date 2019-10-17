import React,{useState} from 'react'
import ColorBox from './ColorBox'
import NavBar from './NavBar'
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
            <NavBar 
                level={colorLevel} 
                changeLevel={changeLevel} 
            />
            <div className="Pallete-colors">{colorBoxes}</div>
        </div>
    )
}
