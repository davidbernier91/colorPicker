import React, {createContext, useState} from 'react'
import seedColors from '../seeds/seedColors'
import {generatePalette} from "../color helper/colorHelper"

export const SeedContext = createContext()

export const SeedProvider=(props)=>{
    const [seeds, setSeeds] = useState(seedColors)

    const addPalette=(newPalette)=>{
        setSeeds([...seeds, newPalette])
    }

    const deletePalette=(id)=> {
        setSeeds([...seeds.filter(palette => palette.id !== id )])
      }

    const findPalette=(id) => {
        const color = seeds.find( pallete =>  pallete.id === id )
        const palleteID = generatePalette(color)
        return palleteID
    }

    return (
        <SeedContext.Provider value={{seeds, addPalette, findPalette, deletePalette}}>
            {props.children}
        </SeedContext.Provider>
    )

}