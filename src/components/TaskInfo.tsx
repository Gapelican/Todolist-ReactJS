import styles from './TaskInfo.module.css'

interface TaskProps {
    totalTask: number;
    totalTasksComplete: number;
}

export function TaskInfo({ totalTask, totalTasksComplete } : TaskProps) {

    const taskDone = totalTasksComplete

    return (
        <div className={styles.content}>
            <div className={styles.contentInfo}>
                <strong>Tarefas criadas</strong>
                <span>{totalTask}</span>
            </div>
            <div className={styles.contentInfo}>
                <strong>Concluídas</strong>
                
                {totalTask == 0 ? 
                    <span>{totalTask}</span> : 
                    <span>{taskDone} de {totalTask}</span>
                }
            </div>
        </div>
    )
}