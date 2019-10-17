import React from 'react'
import {Link} from 'react-router-dom'
export default function PalleteList(props) {

    const renderPalletes = props.palettes.map( palette => (
    <p>
        <Link to={`/palette/${palette.id}`} >{palette.paletteName}</Link>
    </p>    
     )
    )

    return (
        <div>
            <h1>Pallete List</h1>
            {renderPalletes}
        </div>
    )
}
