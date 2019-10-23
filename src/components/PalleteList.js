import React from 'react'
import {Link} from 'react-router-dom'
import MiniPalettte from './MiniPalettte'
export default function PalleteList(props) {

    const renderPalletes = props.palettes.map( palette => (
    <MiniPalettte {...palette}/>
     )
    )

    return (
        <div>
            <h1>Pallete List</h1>
            {renderPalletes}
        </div>
    )
}
