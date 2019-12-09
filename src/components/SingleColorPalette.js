import React from 'react'
import useColorSlider from '../hooks/useColorSlider'
import ColorBox from './ColorBox'
import NavBar from './NavBar'
import PaletteFooter from './PaletteFooter'
import { Link } from 'react-router-dom'
import {withStyles} from "@material-ui/styles"

const styles = {
    palette:{
        height: "100vh",
        display: "flex",
        flexDirection: "column"
    },
    colors:{
        height:"90%"
    },
    goBack:{
        width: "20%",
        height: "50%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-3.5px",
        opacity: "1",
        backgroundColor: 'black',
        "& a": {
            color: "white",
            width: "100px",
            height: "30px",
            position: "absolute",
            display: "inline-block",
            top: "50%",
            left: "50%",
            marginLeft: "-50px",
            marginTop: "-15px",
            textAlign: "center",
            outline: "none",
            background: "rgba(255, 255, 255, 0.3)",
            fontSize: "1rem",
            lineHeight: "30px",
            textTransform: "uppercase"
        }
    }
}


 function SingleColorPalette(props) {
    const {colorId, palette, classes} = props
    const {colorLevel, format, snackBarOpenStatus, setSnackBarOpenStatus,
        changeLevel, changeFormat} = useColorSlider()


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

    const colorBoxes = gatherShades(palette, colorId).map(color =>(
        <ColorBox
            color={color}
            showingFullPalette={false}
            background={color[format]}
            key={color.name}
        />
    ))

    return (
        <div className={classes.palette}>
            <NavBar
                level={colorLevel}
                changeLevel={changeLevel}
                changeFormat={changeFormat}
                format={format}
                snackBarOpenStatus={snackBarOpenStatus}
                setSnackBarOpenStatus={setSnackBarOpenStatus}
                onAfterChange={changeLevel}
                showingAllColors={false}
            />
            <div className={classes.colors}>
                {colorBoxes}
                <div className={classes.goBack}>
                    <Link to={`/palette/${palette.id}`} >Go Back</Link>
                </div>
            </div>
        <PaletteFooter paletteName={palette.paletteName} emoji={palette.emoji} />
      </div>
    )
}
export default withStyles(styles)(SingleColorPalette)