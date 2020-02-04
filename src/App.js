import React from 'react'
import {SeedProvider} from './contexts/SeedContext'
import ApplicationRouter from './components/ApplicationRouter'

export default function App() {

  return (
   <div>
    <SeedProvider>
        <ApplicationRouter/>
    </SeedProvider>
  </div>
)
}
