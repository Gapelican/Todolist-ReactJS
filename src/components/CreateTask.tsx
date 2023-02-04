import { PlusCircle } from "phosphor-react";
import styles from "./CreateTask.module.css";
import { TaskInfo } from "./TaskInfo";
import { Task } from "./Task";
import { ChangeEvent, FormEvent, useState } from "react";

export function CreateTask() {
    const [tasks, setTaks] = useState(["Primeira tarefa", "Segunda tarefa",])
    
    const [newTaskText, setNewTaskText] = useState('')

    function handleCreateNewTask(event: FormEvent) {
        event.preventDefault()
        if (newTaskText.trim() === "") return;
        setTaks([...tasks, newTaskText])
        setNewTaskText('')
    }
    
    function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
        setNewTaskText(event.target.value)
    }

    function deleteTask(deleteToTask: string) {
        const newTasks = tasks.filter(task => {
            return task!== deleteToTask
        })
        
        setTaks(newTasks)
    }


    return (
        <>
            <form onSubmit={handleCreateNewTask} className={styles.createTask}>
                <div>
                    <input value={newTaskText} onChange={handleNewTaskChange} type="text" placeholder="Adicionar uma nova tarefa"/>
                    <button type="submit">
                        Criar
                        <PlusCircle size={20}/>
                    </button>
                </div>
            </form>

            <TaskInfo totalTask={tasks.length}/>

            {tasks.map(task => {
                return <Task key={task} task={task} onDeleteTask={deleteTask}/>
            })}
        </>

    )
}