import Put from "./Put"

const Get =()=> {
    async function traeDatos (){
        const respuestas = await fetch ("http://localhost:3000/api/task")
        let traeDatos = await respuestas.json()

        traeDatos.forEach(variable => {
            
        });
    }

}

export default Get
