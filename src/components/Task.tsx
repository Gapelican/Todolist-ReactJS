import { Trash } from "phosphor-react";
import styles from "./Task.module.css";
import { useState } from "react";

interface TaskProps {
    id: string;
    title: string;
    isComplete: boolean
    onDeleteTask: (deleteTotask: string) => void;
    onCompleteTask: (check: string) => void;
}

//text-decoration: line-through;

export function Task({ id, title, isComplete, onDeleteTask, onCompleteTask } : TaskProps) {


    function handleChange() {
        onCompleteTask(id)
    }

    function handleTask() {
        onDeleteTask(id);
    }

    return (
        <div className={styles.task}>
            <div className={styles.contentCheckBox}>
                <input checked={isComplete} onChange={handleChange} type="checkbox" />
            </div>
            <p className={isComplete ? styles.textDecoration : ""}>{title}</p>
            <div onClick={handleTask} className={styles.clearTask}>
                <Trash size={20}/>
            </div>
        </div>
    )
}