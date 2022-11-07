import './global.css';
import styles from './App.module.css';

import { Header } from './components/Header';
import { InputForm } from './components/InputForm';
import { Panel } from './components/Panel';
import { useState } from 'react';
import { EmptyScreen } from './components/EmptyScreen';

const Tasks = [
  {
    id: 1666689290093,
    content: 'Tarefa de número 01.',
    isDone: false,
  },
  {
    id: 1666689314752,
    content: 'Tarefa de número 02.',
    isDone: false
  },
  {
    id: 1666689314753,
    content: 'Tarefa de número 03.',
    isDone: true
  },
  {
    id: 1666689314754,
    content: 'Tarefa de número 04.',
    isDone: true
  },
]

export default function App() {

  var [taskList, setTaskList] = useState(Tasks);

  function deleteTask(id: number) {
    const tasksWithoutDeletedOne = taskList.filter(task => {
      return task.id !== id
    })
    setTaskList(tasksWithoutDeletedOne)
  }

  function changeStatusTask(taskId: number) {
    const refreshedTaskList = taskList.map(task => {
      if (task.id === taskId) {
        task.isDone = !task.isDone
      }
      return task
    })
    setTaskList(refreshedTaskList)
  }

  function addTask(newTaskContent: string) {
    const newTaskId = new Date().valueOf();
    const newTask = {
      id: newTaskId,
      content: newTaskContent,
      isDone: false,
    }
    setTaskList([...taskList, newTask])
  }

  return (
    <header className={styles.wrapper}>
      <Header />
      <main className={styles.mainContent}>
        <InputForm 
          onAddTask={addTask}/>
        <Panel 
          tasks={taskList}
          onDeleteTask={deleteTask}
          onChangeStatus={changeStatusTask}/>
        {taskList.length > 0 ? null : <EmptyScreen/>}
      </main>
    </header>
  )
}
