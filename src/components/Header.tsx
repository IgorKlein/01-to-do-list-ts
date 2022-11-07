import styles from './Header.module.css';
import mainLogo from "../assets/main-logo.svg";

export function Header() {
    return (
        <header className={styles.header}>
            <img src={mainLogo} alt="Image Logo"/>
        </header>
    )
}