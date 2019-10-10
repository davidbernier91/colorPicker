import React from 'react'
import Palette from './components/Palette'
import seedColors from './seeds/seedColors'
import {generatePalette} from "./color helper/colorHelper"

export default function App() {
  return (
    <div>
      <Palette pallete={generatePalette(seedColors[4])}/>
    </div>
  )
}
