import { useState, FormEvent, ChangeEvent, InvalidEvent } from 'react';
import styles from './InputForm.module.css'
import plusIcon from "../assets/plus-icon.svg"

interface InputFormProps {
    onAddTask: (task: string) => void;
}

export function InputForm( {onAddTask}: InputFormProps ) {

    const [newTaskContent, setNewTaskContent] = useState('')

    function handleAddNewTask(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const content: string = event.target.content.value
        console.log(content)
        onAddTask(content)
        setNewTaskContent("")
    }

    function handleNewTextContentChange(event: ChangeEvent<HTMLInputElement>) {
        // checkInvalidInput(event)
        const input = event.target
        if (input.value === "") {
            input.setCustomValidity('Esse campo é obrigatório.')
        } else {
            input.setCustomValidity('')
        }
        const newTextContent = event.target.value
        setNewTaskContent(newTextContent)
    }

    return (
        <form onSubmit={handleAddNewTask} className={styles.inputForm}>
            <input
                type="text"
                name="content" 
                placeholder="Adicione uma nova tarefa"
                value={newTaskContent}
                onChange={handleNewTextContentChange}
                autoComplete="off"
                required
            />
            <button type="submit">
                <p>Criar</p>
                <img src={plusIcon}/>
            </button>
        </form>
    )
}