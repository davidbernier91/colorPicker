import React from 'react'
import {Link} from 'react-router-dom'
import Slider from "rc-slider"

import 'rc-slider/assets/index.css'
import "../css/navBar.css"
import { MenuItem, Select, Snackbar, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

export default function NavBar(props) {
    const {level, changeLevel, format, changeFormat,
           snackBarOpenStatus, setSnackBarOpenStatus} = props

    const closeSnackBar=()=> setSnackBarOpenStatus(false)    


    return (
        <header className="Navbar">
            <div className="logo">
                <Link to="/">reactColorPicker</Link>
            </div>    
                <div className="slider-container">
                    <span>Level: {level}</span>
                    <div className="slider" >
                        <Slider 
                            defaultValue={500}
                            min={100} max={900} 
                            step={100}
                            onAfterChange={changeLevel}
                    />
                </div>
            </div>
            <div className="select-container">
                <Select value={format} onChange={changeFormat}>
                    <MenuItem value='hex'>HEX - #fffff</MenuItem>
                    <MenuItem value='rgb'>RGB - rgb(255, 255, 255)</MenuItem>
                    <MenuItem value='rgb'>RGBA - rgba(255, 255, 255, 1.0)</MenuItem>
                </Select>
            </div>
            <Snackbar 
                anchorOrigin={{vertical: "bottom", horizontal: "left"}}
                open={snackBarOpenStatus}
                autoHideDuration={3000}
                message={<span id="message-id">Format changed to {format}</span>}
                ContentProps={{"aria-describedby": "message-id"}}
                action={[
                        <IconButton color="inherit" key="close">
                            <CloseIcon onClick={closeSnackBar}/>
                        </IconButton>
                        ]}
            />
        </header>
    )
}
