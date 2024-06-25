import Tarea from "./Tarea"
im
const ListaTareas = ({tareasAPI})=>{
    return(
        <>
            {tareasAPI.map((tareaAc,index)=>(
                
               <Tarea
                    key={index}
                    titulo={tareaAc.titulo}
               />
            ))}
        </>
    )
}
export default ListaTareas