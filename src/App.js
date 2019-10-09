import React from 'react'
import Pallete from './components/Pallete'
import seedColors from './seeds/seedColors'

export default function App() {
  return (
    <div>
      <Pallete {...seedColors[4]}/>
    </div>
  )
}
