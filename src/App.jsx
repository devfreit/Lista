import { useState } from 'react'
import './App.css'
import Lista from './componentes/lista de tarefa/Lista.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Lista/>
  )
}

export default App
