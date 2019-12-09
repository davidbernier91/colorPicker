import React, {useState} from 'react'
import { Link} from 'react-router-dom'
import {CopyToClipboard} from "react-copy-to-clipboard"
import {withStyles} from "@material-ui/styles"
import styles from '../styles/ColorBoxStyles'
function ColorBox(props) {

    const [copyStatus, setCopyStatus] = useState(false)
    const {color, moreURL, showingFullPalette, background, classes} = props // uses descturing to grab object props from Pallete.js

    const handleCopyClick = ()=>{
            setCopyStatus(true);
            setTimeout(() => {
                setCopyStatus(false);
            }, 1500);
        }

    return (
        <CopyToClipboard text={background}>
            <div style={ {background: background}} className={classes.colorBox} onClick={handleCopyClick} >
                <div style={{background: background}}  className={`${classes.copyOverlay} ${copyStatus && classes.showOverlay}`}/>
                <div className={`${classes.copyMessage} ${copyStatus && classes.showMessage}`}>
                    <h1>Copied!</h1>
                    <p className={classes.copyText}>{background}</p>
                </div>
                <div>
                    <div className={classes.boxContent}>
                        <span className={classes.colorName}>{color.name}</span>
                    </div>
                    <button className={classes.copyButton}>Copy</button>
                </div>
                { showingFullPalette && (
                <Link to={moreURL} onClick={(event)=> event.stopPropagation()} >
                    <span className={classes.seeMore}>More</span>
                </Link>
                )}
            </div>
        </CopyToClipboard>
    )
}
export default withStyles(styles)(ColorBox);