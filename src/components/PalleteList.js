import React from 'react'
import MiniPalettte from './MiniPalettte'
import { withStyles } from '@material-ui/styles'
import styles from '../styles/PaletteListStyles'

function PalleteList(props) {
    const {palettes, classes} = props;
    const goToPalette = (id) =>  props.history.push(`/palette/${id}`)

     const renderPalletes = palettes.map(palette =>
            <MiniPalettte
                {...palette}
                goToPalette={() => goToPalette(palette.id)}
                key={palette.id}
            />
        )


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