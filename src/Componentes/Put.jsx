
const Put =(upCheckList)=> {
    async function upCheckList(id){
        try {
            let task = {
                estado: true
            }
            const answer = await fetch (`http://localhost:3000/api/task/${id}`,{
                method: "PUT",
                headers: {
                "Content-type": "application/json"
                },
            body: JSON.stringify(task)
            })
            let data = await answer.json()
        } catch (error) {
            console.log(error)
        }
    }
    traeDatos()
}

export default Put