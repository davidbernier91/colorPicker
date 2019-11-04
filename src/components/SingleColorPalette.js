import React from 'react'
import useColorSlider from '../hooks/useColorSlider'
import ColorBox from './ColorBox'
import NavBar from './NavBar'
import PaletteFooter from './PaletteFooter'


export default function SingleColorPalette(props) {
    const {colorId, palette} = props

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
            showLink={false}
            background={color[format]}
            key={color.name}
        />
    ))

    return (
        <div className='Palette'>
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
            <div className='Palette-colors'>{colorBoxes}</div>
                <PaletteFooter paletteName={palette.paletteName} emoji={palette.emoji}/>
        </div>
    )
}
