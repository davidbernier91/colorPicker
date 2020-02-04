import React, {useContext} from 'react'
import {SeedContext} from '../contexts/SeedContext'
import {NewPaletteProvider} from '../contexts/NewPaletteContext'
import { Route, Switch} from "react-router-dom"
import Palette from './Palette'
import PalleteList from './PalleteList'
import SingleColorPalette from './SingleColorPalette'
import NewPaletteForm from './NewPaletteForm'


export default function Tester() {

    const { findPalette } = useContext(SeedContext);

    return (
        <div>
            <Switch>
            <Route
                exact path='/palette/new'
                render={(routeProps)=> <NewPaletteProvider>
                                            <NewPaletteForm  {...routeProps}/>
                                        </NewPaletteProvider>
                        }
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
                render={ (routeProps) => <Palette
                                            palette={findPalette(routeProps.match.params.id)}
                                        />}
            />
            <Route
                exact path='/'
                render={ (routeProps) => <PalleteList  {...routeProps}/>}
            />
            </Switch>
        </div>
    )
}
