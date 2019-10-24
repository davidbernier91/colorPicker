import React,{useState} from 'react'
import ColorBox from './ColorBox'
import NavBar from './NavBar'
import "../css/palette.css"


export default function Pallete(props) {
    const {colors, paletteName, emoji, id} = props.palette
    const [colorLevel, setColorLevel] = useState(500)
    const [format, setFormat] = useState("hex")
    const [snackBarOpenStatus, setSnackBarOpenStatus] = useState(false)

    const colorBoxes = colors[colorLevel].map(color => (
        <ColorBox
            color={color}
            key={color.id}
            paletteID={id}
            moreURL={`/palette/${id}/${color.id}`}
            showLink={true}
         />
        )
    )

    const changeLevel = (level) => setColorLevel(level)

    const changeFormat = (event) => {
        setFormat(event.target.value)
        setSnackBarOpenStatus(true)
        setTimeout(() => {
            setSnackBarOpenStatus(false);
        }, 3000);
    }


    return (
        <div className="Palette">
            <NavBar
                level={colorLevel}
                changeLevel={changeLevel}
                changeFormat={changeFormat}
                format={format}
                snackBarOpenStatus={snackBarOpenStatus}
                setSnackBarOpenStatus={setSnackBarOpenStatus}

            />
            <div className="Palette-colors">{colorBoxes}</div>
            <footer className="Palette-footer">
                {paletteName}
                <span className="emoji">{emoji}</span>
            </footer>
        </div>
    )
}
