import React, {useState} from 'react'
import { Link} from 'react-router-dom'
import "../css/colorBoxCss.css"
import {CopyToClipboard} from "react-copy-to-clipboard"
import chroma from "chroma-js"
import {withStyles} from "@material-ui/styles"

const styles = {
    colorBox:{
        width: "20%",
        height: props => props.showingFullPalette ? "25%" : "50%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-3.5px",
        "&:hover button": {
            opacity: 1
        }
       },
    copyText:{
        color: props => chroma(props.background).luminance() >= 0.7 ? "black" : "white"
    },
    colorName:{
        color: props => chroma(props.background).luminance() <= 0.08 ? "white" : "black"
    },
    seeMore:{
        color: props => chroma(props.background).luminance() >= 0.7 ? "rgba(0,0,0,0.6)" : "white",
        background: "rgba(255, 255, 255, 0.3)",
        position: "absolute",
        border: "none",
        right: "0px",
        bottom: "0px",
        width: "60px",
        height: "30px",
        textAlign: "center",
        lineHeight: "30px",
        textTransform: "uppercase",
    },
    copyButton:{
        color: props => chroma(props.background).luminance() >= 0.7 ? "rgba(0,0,0,0.6)" : "white",
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
        textTransform: "uppercase",
        border: "none",
        textDecoration: "none",
        opacity: 0
    },
}


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
                <div style={{background: background}}  className={`copy-overlay ${copyStatus && "show"}`}/>
                <div className={`copy-msg ${copyStatus && "show"}`}>
                    <h1>Copied!</h1>
                    <p className={classes.copyText}>{background}</p>
                </div>
                <div className="copy-container">
                    <div className="box-content">
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