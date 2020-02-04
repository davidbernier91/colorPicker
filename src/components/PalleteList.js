import React, {useContext} from 'react'
import {SeedContext} from '../contexts/SeedContext'
import {Link} from 'react-router-dom'
import MiniPalette from './MiniPalette'
import { withStyles } from '@material-ui/styles'
import styles from '../styles/PaletteListStyles'

function PalleteList(props) {
    const {seeds} = useContext(SeedContext);
    const {classes} = props;
    const goToPalette = (id) =>  props.history.push(`/palette/${id}`)


     const renderPalletes = seeds.map(palette =>
            <MiniPalette
                {...palette}
                goToPalette={() => goToPalette(palette.id)}
                key={palette.id}
                id={palette.id}
            />
        )


    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <nav className={classes.nav}>
                    <h1>React Colors</h1>
                    <Link to='/palette/new'>Create Palette</Link>
                </nav>
                <div className={classes.palettes}>{renderPalletes}</div>
            </div>
        </div>
    )
}

export default withStyles(styles)(PalleteList);