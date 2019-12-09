import React from 'react'
import ColorBox from './ColorBox'
import NavBar from './NavBar'
import useColorSlider from '../hooks/useColorSlider'
import PaletteFooter from './PaletteFooter'
import "../css/palette.css"
import {withStyles} from "@material-ui/styles"
// import classes from '*.module.css'

const styles = {
    palette:{
        height: "100vh",
        display: "flex",
        flexDirection: "column"
    },
    colors:{
        height:"90%"
    },
    // paletteFooter:{
    //     height: "5vh",
    //     backgroundColor: "white",
    //     display: "flex",
    //     justifyContent: "flex-end",
    //     marginRight: "10px",
    //     alignItems: "center",
    //     fontWeight: "bold"
    // },
    // emoji:{
    //     fontSize: "1.5rem",
    //     margin: "0 1rem"
    // }

}

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
        <div className={classes.palette}>
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

export default  withStyles(styles)(Palette)