import { PlusCircle } from "phosphor-react";
import styles from "./CreateTask.module.css";
import { TaskInfo } from "./TaskInfo";
import { Task } from "./Task";
import { ChangeEvent, FormEvent, useState } from "react";
import Clipboard from '../assets/Clipboard.svg'
import { v4 as uuidv4 } from 'uuid';

const tasksArray = [
    {
        id: uuidv4(),
        title: "Primeira tarefa",
        isComplete: false
    },
    {
        id: uuidv4(),
        title: "Segunda tarefa",
        isComplete: false
    },
    {
        id: uuidv4(),
        title: "terceira tarefa",
        isComplete: true
    }
]

export function CreateTask() {
    const [tasks, setTaks] = useState(tasksArray)
    const [newTaskText, setNewTaskText] = useState('')

    function handleCreateNewTask(event: FormEvent) {
        event.preventDefault()

        if (newTaskText.trim() === "") return;

        const newTask = {
            id: uuidv4(),
            title: newTaskText,
            isComplete: false
        }

        setTaks([...tasks, newTask])
        setNewTaskText('')
    }

    function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
        setNewTaskText(event.target.value)
    }

    function deleteTask(deleteToTask: string) {
        const newTasks = tasks.filter(task => {
            return task.id !== deleteToTask
        })
        setTaks(newTasks)
    }

    function completeTask(check: string) {
        const newTasks = tasks.map(task => {
            if (task.id === check) {
                return {
                    ...task,
                    isComplete: !task.isComplete
                }
            }
            return task
        })
        setTaks(newTasks)
    }

    const totalTasksComplete = tasks.filter(task => task.isComplete).length

    return (
        <>
            <form onSubmit={handleCreateNewTask} className={styles.createTask}>
                <div>
                    <input value={newTaskText} onChange={handleNewTaskChange} type="text" placeholder="Adicionar uma nova tarefa" />
                    <button type="submit">
                        Criar
                        <PlusCircle size={20} />
                    </button>
                </div>
            </form>

            <div className={styles.contentMain}>
                <TaskInfo totalTask={tasks.length} totalTasksComplete={totalTasksComplete} />
                
                {   
                tasks.length !== 0 ?
                    tasks.map(task => {
                        return <Task
                            key={task.id}
                            id={task.id}
                            title={task.title}
                            isComplete={task.isComplete}
                            onDeleteTask={deleteTask}
                            onCompleteTask={completeTask}

                        />
                    })
                    :
                    <div className={styles.noTasks}>
                        <img src={Clipboard} alt="Não tem tarefas cadastradas" />
                        <strong>Você ainda não possui tarefas cadastradas</strong>
                        <p>Crie tarefas e organize seus itens a fazer</p>
                    </div>
                    
                }
            </div>
        </>

    )
}