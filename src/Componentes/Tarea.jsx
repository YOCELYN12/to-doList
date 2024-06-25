import { useState } from "react"
import ListaTareas from "./ListaTareas"
import { Delete, Put } from "../Metodos/fetch"

const Tarea = ({ titulo, checkbox, eliminar,estado }) => {
   
  return (
    <>
      <h3>{titulo}</h3>
      <button onClick={eliminar}> Eliminar</button>
      <input checked={estado} type="checkbox" onChange={checkbox} />
      
    </>

  )
}
export default Tarea