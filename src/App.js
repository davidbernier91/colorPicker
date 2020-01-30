import React, {useState} from 'react'
import { Route, Switch} from "react-router-dom"
import Palette from './components/Palette'
import seedColors from './seeds/seedColors'
import {generatePalette} from "./color helper/colorHelper"
import PalleteList from './components/PalleteList'
import SingleColorPalette from './components/SingleColorPalette'
import NewPaletteForm from './components/NewPaletteForm'

export default function App() {

  const [allPalettes, setAllPalettes] = useState(seedColors)

  const findPalette=(id) => {
   const color = allPalettes.find( pallete =>  pallete.id === id )
   const palleteID = generatePalette(color)
   return palleteID
  }

  const savePalette=(newPalette)=>{
    setAllPalettes([...allPalettes, {...newPalette}])
  }

  return (
   <>
    <Switch>
      <Route
        exact path='/palette/new'
        render={ (routeProps)=> <NewPaletteForm savePalette={savePalette} palettes={allPalettes} {...routeProps}/>}
      />
      <Route
        exact path='/palette/:paletteId/:colorId'
        render={ (routeProps) => <SingleColorPalette
                                   colorId={routeProps.match.params.colorId}
                                   palette={findPalette(routeProps.match.params.paletteId)} 
                                  />}
      />
      <Route
        exact
        path='/palette/:id'
        render={ (routeProps) => <Palette palette={findPalette(routeProps.match.params.id)} />}
      />
      <Route
        exact path='/'
        render={ (routeProps) => <PalleteList allPalettes={allPalettes} {...routeProps}/>}
      />
    </Switch>
  </>
)
}
