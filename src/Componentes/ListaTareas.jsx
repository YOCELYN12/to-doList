import { useEffect, useState } from "react"
import { Delete, Put } from "../Metodos/fetch"
import Tarea from "./Tarea"

const ListaTareas = ({tareasAPI})=>{

    const deleteT = async(id)=>{
        await Delete(id)
    }

    const check = async(id,estado)=>{
        await Put(id,estado)
         
    }


    return(
        <>
            {tareasAPI.map((tareaAc,index)=>(
               <Tarea
                    key={index}
                    titulo={tareaAc.titulo}
                    eliminar={()=>{
                        deleteT(tareaAc.id)
                    }}
                    estado={tareaAc.estado}

                    checkbox={()=>{
                        check(tareaAc.id,tareaAc.estado)
                    }}        
               />
            ))}
        </>
    )
}
export default ListaTareas