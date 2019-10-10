import React from 'react'
import Palette from './components/Palette'
import seedColors from './seeds/seedColors'

export default function App() {
  return (
    <div>
      <Palette {...seedColors[4]}/>
    </div>
  )
}
