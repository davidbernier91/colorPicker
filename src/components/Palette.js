import React from 'react'
import ColorBox from './ColorBox'
import NavBar from './NavBar'
import useColorSlider from '../hooks/useColorSlider'
import PaletteFooter from './PaletteFooter'
import "../css/palette.css"


export default function Pallete(props) {
    const {colors, paletteName, emoji, id} = props.palette
    // Import custom hooks for Slider, reused in singleColorPalette
    const {colorLevel, format, snackBarOpenStatus, setSnackBarOpenStatus,
           changeLevel, changeFormat} = useColorSlider()


    const colorBoxes = colors[colorLevel].map(color => (
        <ColorBox
            color={color}
            background={color[format]}
            key={color.id}
            paletteID={id}
            moreURL={`/palette/${id}/${color.id}`}
            showLink={true}
         />
        )
    )

    return (
        <div className="Palette">
            <NavBar
                level={colorLevel}
                changeLevel={changeLevel}
                changeFormat={changeFormat}
                format={format}
                snackBarOpenStatus={snackBarOpenStatus}
                setSnackBarOpenStatus={setSnackBarOpenStatus}
                showingAllColors


            />
            <div className="Palette-colors">{colorBoxes}</div>
                <PaletteFooter paletteName={paletteName} emoji={emoji}/>
        </div>
    )
}