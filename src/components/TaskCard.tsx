import styles from './TaskCard.module.css';
import trashIcon from "../assets/trash-icon.svg"

interface TaskCardProps {
    id: number;
    content: string;
    isDone: boolean;
    onDeleteTask: (id: number) => void;
    onChangeStatus: (id: number) => void;
}

export function TaskCard( { id, content, isDone, onDeleteTask, onChangeStatus }:TaskCardProps ) {

    function handleDeleteTask() {
        onDeleteTask(id)
    }

    function handleChangeStatusTask() {
        onChangeStatus(id);
    }

    return (
        <div className={styles.taskCard}>
            <div>
                <label className={styles.container}>
                    <input
                        type="checkbox"
                        name="task"
                        value="is done"
                        checked={isDone}
                        onChange={handleChangeStatusTask}
                    />
                    <span className={styles.checkmark}></span>
                </label>
            <span 
                className=
                    { isDone ? styles.taskDescriptionDone : styles.taskDescription }>
                {content}
            </span>
            </div>
            <a onClick={handleDeleteTask}>
                <img 
                    src={trashIcon}
                    alt="Delete"  
                />
            </a>            
        </div>
    );
}