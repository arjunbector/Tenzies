import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Game } from './Components/Game/Game'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <div className="main_container">
        <div className="container">
          <div className="heading">
            <h1>
              Tenzies
            </h1>
          </div>
          <div className="description">
            <p>
            Roll until all dice are the same. Click each die to freeze it at its current value between rolls.
            </p>
          </div>
          <div>
            <Game/>
          </div>
          
        </div>
      </div>
    </main>
  )
}

export default App
