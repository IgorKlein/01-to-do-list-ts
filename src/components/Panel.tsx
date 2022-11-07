import styles from './Panel.module.css';
import { TaskCard } from './TaskCard';

interface Task {
  id: number;
  content: string;
  isDone: boolean;
}

interface PanelProps {
  tasks: Task[];
  onDeleteTask: (id: number) => void;
  onChangeStatus: (id: number) => void;
}

export function Panel(
  {
    tasks,
    onDeleteTask,
    onChangeStatus
  }: PanelProps
){
    const tasksCounter = tasks.length
    const tasksDoneCounter = tasks.filter(task => task.isDone === true).length

    function onDeleteTaskProps(id: number) {
      onDeleteTask(id)
    }

    function onChangeStatusProps(id: number) {
      onChangeStatus(id)
    }

    return (
        <main>
          <div className={styles.container}>
            <div className={styles.summary}>
              <h2 className={styles.created}>Tarefas criadas</h2>
              <div className={styles.counter}>
                <p>{tasksCounter}</p>
              </div>
            </div>
            <div className={styles.summary}>
              <h2 className={styles.done}>Concluídas</h2>
              <div className={styles.counter}>
                <p>{tasksDoneCounter}</p>
              </div>
            </div>
          </div>

          <div className={styles.panel}>
            { tasks.map(task => {
            return (
              <TaskCard
                key={task.id}
                id={task.id}
                content={task.content}
                isDone={task.isDone}
                onDeleteTask={onDeleteTaskProps}
                onChangeStatus={onChangeStatusProps}
              />
            )
            })}
          </div>
        </main>
    )
}