import { Trash } from "phosphor-react";
import styles from "./Task.module.css";
import { useState } from "react";

interface TaskProps {
    task: string;
    onDeleteTask: (deleteTotask: string) => void;
}

//text-decoration: line-through;

export function Task({ task, onDeleteTask } : TaskProps) {
    const [checked, setChecked] = useState(false)

    const [countCheck, setCountCheck] = useState(0)

    

    function handleChange() {
        setChecked(!checked);

        if (checked) {
            setCountCheck(countCheck+1)
        }
    }

    function handleTask() {
        onDeleteTask(task);
        
    }

    
    
    console.log(countCheck);
    

    return (
        <div className={styles.task}>
            <div className={styles.contentCheckBox}>
                <input checked={checked} onChange={handleChange} type="checkbox" />
            </div>
            <p className={checked ? styles.textDecoration : ""}>{task}</p>
            <div onClick={handleTask} className={styles.clearTask}>
                <Trash size={20}/>
            </div>
        </div>
    )
}