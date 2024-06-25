import { useState } from 'react'
import './App.css'
import { Post } from './Metodos/fetch'

function App() {
  const [tituloTarea,setTituloTarea]=useState("")
  
  const agregarTarea = async(e)=>{
    e.preventDefault()
    let tarea = {
        titulo:tituloTarea
    }
    await Post(tarea)
  }

  return (
    <>
      <h3>Lista Tareas</h3>
      <input type="text" placeholder='ingrese su tarea' onChange={(e) => setTituloTarea(e.target.value)}/>
      <button onClick={agregarTarea}>Agregar</button>
    </>
  )
}

export default App
