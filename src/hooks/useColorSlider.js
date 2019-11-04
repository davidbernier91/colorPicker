import {useState} from 'react'

export default () => {
    const [colorLevel, setColorLevel] = useState(500)

    const [format, setFormat] = useState("hex")

    const [snackBarOpenStatus, setSnackBarOpenStatus] = useState(false)

    const changeLevel = (level) => setColorLevel(level)

    const changeFormat = (event) => {
        setFormat(event.target.value)
        setSnackBarOpenStatus(true)
        setTimeout(() => {
            setSnackBarOpenStatus(false);
        }, 3000);
    }


    return { colorLevel, setColorLevel, format, setFormat,
            snackBarOpenStatus, setSnackBarOpenStatus,
            changeLevel, changeFormat
        }

}