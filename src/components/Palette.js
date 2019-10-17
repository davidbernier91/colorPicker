import React,{useState} from 'react'
import ColorBox from './ColorBox'
import NavBar from './NavBar'
import "../css/palette.css"




export default function Pallete(props) {
    const colors = props.pallete.colors
    const [colorLevel, setColorLevel] = useState(500)
    const [format, setFormat] = useState("hex")
    const [snackBarOpenStatus, setSnackBarOpenStatus] = useState(false)
   
    const colorBoxes = colors[colorLevel].map((color)=>(
        <ColorBox color={color} />
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
        <div className="Pallete">
            <NavBar 
                level={colorLevel} 
                changeLevel={changeLevel}
                changeFormat={changeFormat}
                format={format}
                snackBarOpenStatus={snackBarOpenStatus}
                setSnackBarOpenStatus={setSnackBarOpenStatus}

            />
            <div className="Pallete-colors">{colorBoxes}</div>
        </div>
    )
}
