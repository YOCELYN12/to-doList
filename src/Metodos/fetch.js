const URL = "http://localhost:3000/api/task/"

//POST
const Post = async(tarea)=>{
    try {
        const respuesta = await fetch(URL, {
            method:"POST",
            headers:
            {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(tarea)
        })
        const data = await respuesta.json()
        console.log (data)
    } catch (error) {
        console.log(error);
    }
}
export {Post}





//DELETE
const Delete = async(id)=>{
    try {
      const eliminaTarea = await fetch(URL+id, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
      })
      const salida = await eliminaTarea.json()

      if(eliminaTarea.OK){
        alert("Se elimino exitosamente")
        await Get ()
      }
      else {
        alert ("Eror")
      }
      console.log(salida);
    } catch (error) {
        console.log("error")
    }
}
export {Delete}





//GET
const Get = async() =>{
    try {
        const peticion = await fetch(URL)
        const datos = await peticion.json()
        return datos
    } catch (error) {
        console.error(error);
    }
}
export {Get}



//PUT
const Put = async(id,estado)=>{
    try {
        
        const nuevoEstado = {
            estado: !estado
        }
        const answer = await fetch (URL+id,{
            method:"PUT",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify(nuevoEstado)
        })
        const data = await answer.json()
        console.log(data);

    } catch (error) {
        console.log(error)
    }
}
export {Put}