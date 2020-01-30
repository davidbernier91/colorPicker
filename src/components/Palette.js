import React from 'react'
import ColorBox from './ColorBox'
import NavBar from './NavBar'
import useColorSlider from '../hooks/useColorSlider'
import PaletteFooter from './PaletteFooter'
import {withStyles} from "@material-ui/styles"
import styles from '../styles/PaletteStyles'

function Palette(props) {
    const {colors, paletteName, emoji, id} = props.palette
    const {classes} = props
    
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
            showingFullPalette
         />
        )
    )

    return (
        <div className={classes.Palette}>
            <NavBar
                level={colorLevel}
                changeLevel={changeLevel}
                changeFormat={changeFormat}
                format={format}
                snackBarOpenStatus={snackBarOpenStatus}
                setSnackBarOpenStatus={setSnackBarOpenStatus}
                showingAllColors
            />
            <div className={classes.colors}>{colorBoxes}</div>
                <PaletteFooter paletteName={paletteName} emoji={emoji}/>
        </div>
    )
}

export default withStyles(styles)(Palette)