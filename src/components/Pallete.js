import React from 'react'
import ColorBox from './ColorBox'
import "../css/pallete.css"

export default function Pallete(props) {
    const colorBoxes = props.colors.map( (color) =>(
        <ColorBox color={color} />
    )
)
    return (
        <div className="Pallete">
            <div className="Pallete-colors">
                {colorBoxes}
            </div>
        </div>
    )
}
