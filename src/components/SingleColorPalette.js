import React, {useState} from 'react'
import ColorBox from './ColorBox'

export default function SingleColorPalette(props) {
    const {colorId, palette} = props

    const gatherShades = (palette, colorToFilterBy)=>{
            let shades = []
            const allColors =  palette.colors

            for(let key in allColors){
                    shades = shades.concat(
                    allColors[key].filter(color => color.id === colorToFilterBy)
                )
            }
            return shades.slice(1)
        }

    const colorBoxes = gatherShades(palette, colorId).map(color =>(<ColorBox color={color} showLink={false} />))

    return (
        <div className='Palette'>
            <h1>Single Color Palette</h1>
            <div className='Palette-colors'>
                {colorBoxes}
            </div>
        </div>
    )
}
