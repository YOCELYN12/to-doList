const Tarea = ({titulo,checkbox,eliminar})=>{
    return(
        <>
        <h3>{titulo}</h3>
        <input type="checkbox"/>
        <button onClick={eliminar}>Eliminar</button>
        </>
    )
}
export default Tarea