import React from 'react'
import {Link} from 'react-router-dom'
import Slider from "rc-slider"
import 'rc-slider/assets/index.css'
import { MenuItem, Select, Snackbar, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import {withStyles} from '@material-ui/styles'
import styles from '../styles/NavBarStyles'

function NavBar(props) {
    const {level, changeLevel, format, changeFormat,
           snackBarOpenStatus, setSnackBarOpenStatus, showingAllColors, classes} = props

    const closeSnackBar=()=> setSnackBarOpenStatus(false)

    return (
        <header className={classes.Navbar}>
            <div className={classes.logo}>
                <Link to="/">reactColorPicker</Link>
            </div>
                { props.showingAllColors && (<div className="slider-container">
                    <span>Level: {level}</span>
                    <div className={classes.slider} >
                        <Slider
                            defaultValue={500}
                            min={100} max={900}
                            step={100}
                            onAfterChange={changeLevel}
                    />
                </div>
            </div>
            )}
            <div className={classes.selectContainer}>
                <Select value={format} onChange={changeFormat}>
                    <MenuItem value='hex'>HEX - #fffff</MenuItem>
                    <MenuItem value='rgb'>RGB - rgb(255, 255, 255)</MenuItem>
                    <MenuItem value='rgba'>RGBA - rgba(255, 255, 255, 1.0)</MenuItem>
                </Select>
            </div>
            <Snackbar
                anchorOrigin={{vertical: "bottom", horizontal: "left"}}
                open={snackBarOpenStatus}
                autoHideDuration={3000}
                message={<span id="message-id">Format changed to {format}</span>}
                ContentProps={{"aria-describedby": "message-id"}}
                action={[
                        <IconButton color="inherit" key="close" onClick={closeSnackBar}>
                            <CloseIcon />
                        </IconButton>
                        ]}
            />
        </header>
    )
}
export default withStyles(styles)(NavBar)