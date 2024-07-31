// import './Lista.css'
import Tarefa from "../tarefas/Tarefa.jsx"

export default function Lista() {
    let tarefas = ["tarefa1", "tarefa2", "tarefa3"]

    return(
        <div className="ListaDeTarefas">
            <h1>Tarefas</h1>
            {
                tarefas.map((tarefa, index) => {
                    return (
                        <Tarefa tarefa={tarefa} key={index} />
                    );
                })
            }
        </div>
    )
}