import React from 'react'
// import {Link} from 'react-router-dom'
import MiniPalettte from './MiniPalettte'
import { withStyles } from '@material-ui/styles'

const styles = {
    root:{
        backgroundColor: "blue",
        height: "100%",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
    },
    container: {
        width: "50%",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        flexWrap: "wrap",
    },
    nav: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        color: "white"
    },
    palettes: {
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3, 30%)",
        gridGap: "5%)",
    }
}


function PalleteList(props) {
    const {palettes, classes} = props;
    const renderPalletes = palettes.map(palette =>  <MiniPalettte {...palette}/>)

    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <nav className={classes.nav}>
                    <h1>React Colors</h1>
                </nav>
                <div className={classes.palettes}>{renderPalletes}</div>
            </div>
        </div>
    )
}

export default withStyles(styles)(PalleteList);