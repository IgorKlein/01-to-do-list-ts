import styles from './EmptyScreen.module.css';
import clipboard from "../assets/clipboard.svg";

export function EmptyScreen() {
    return (
        <div className={styles.screen}>
            <img src={clipboard} className={styles.clipboardImg} alt="Imagem de uma lista" />
            <strong>Você não tem tarefas cadastradas.</strong>
            <p>Crie tarefas e organize os itens a fazer.</p>
        </div>
    )
}