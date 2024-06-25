import { useEffect, useState } from 'react'
import './App.css'
import { Get, Post } from './Metodos/fetch'
import ListaTareas from './Componentes/ListaTareas'
import Tarea from './Componentes/Tarea'

function App() {

  const [tituloTarea, setTituloTarea] = useState("")
  const [lista, setLista] = useState([])
  const [contador,setContador] = useState(0)

  //Boton para agregar la tarea
  const agregarTarea = async (e) => {
    e.preventDefault()
    let tarea = {
      titulo: tituloTarea,
      estado:false
    }
    await Post(tarea)
  }
  //Funcion para mostrar las tares ingresadas
  useEffect(() => {
    const mostraTareas = async () => {
      const data = await Get()
      const tareasHechas = data.filter(tarea=>tarea.estado===true).length
      setContador(tareasHechas)
      setLista(data)
    }
    mostraTareas()

  }, [lista])

  return (
    <div className='divPadre'>

      <h3>Lista Tareas</h3>
      <input type="text" placeholder='ingrese su tarea' onChange={(e) => setTituloTarea(e.target.value)} />
      <button className='prueba' onClick={agregarTarea}>Agregar</button>
      <ListaTareas tareasAPI={lista} />
      <input  className='contador'  type="number" value={contador}/>
      
    </div>
  )
}

export default App
