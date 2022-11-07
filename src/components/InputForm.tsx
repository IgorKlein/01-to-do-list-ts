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
        // In TypeScript, we need to use "currentTarget" instead of "target".
        onAddTask(event.currentTarget.content.value)
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
                placeholder="Add a new task"
                value={newTaskContent}
                onChange={handleNewTextContentChange}
                autoComplete="off"
                required
            />
            <button type="submit">
                <p>Create</p>
                <img src={plusIcon}/>
            </button>
        </form>
    )
}