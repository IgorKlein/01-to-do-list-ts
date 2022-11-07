import styles from './EmptyScreen.module.css';
import clipboard from "../assets/clipboard.svg";

export function EmptyScreen() {
    return (
        <div className={styles.screen}>
            <img src={clipboard} className={styles.clipboardImg} alt="Imagem de uma lista" />
            <strong>You don't have any tasks registered.</strong>
            <p>Create tasks and organize your to-do items.</p>
        </div>
    )
}