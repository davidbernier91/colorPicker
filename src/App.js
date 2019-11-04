import React from 'react'
import { Route, Switch} from "react-router-dom"
import Palette from './components/Palette'
import seedColors from './seeds/seedColors'
import {generatePalette} from "./color helper/colorHelper"
import PalleteList from './components/PalleteList'
import SingleColorPalette from './components/SingleColorPalette'

export default function App() {

  const findPalette=(id) => {
   const color = seedColors.find( pallete =>  pallete.id === id )
   const palleteID = generatePalette(color)
   return palleteID
  }

  return (
   <>
    <Switch>
      <Route
        exact
        path='/'
        render={ (routeProps) => <PalleteList palettes={seedColors} {...routeProps}/>}
      />
      <Route
        exact
        path='/palette/:id'
        render={ (routeProps) => <Palette palette={findPalette(routeProps.match.params.id)} />}
      />
      <Route
        exact
        path='/palette/:paletteId/:colorId'
        render={ (routeProps) => <SingleColorPalette
                                   colorId={routeProps.match.params.colorId}
                                   palette={findPalette(routeProps.match.params.paletteId)} 
                                  />}
      />
    </Switch>
  </>
)
}
