import styles from "./styles.module.scss"
import { FaSun } from "react-icons/fa"
import { FaMoon } from "react-icons/fa"

export const Header = ({ toogleMode, toggleTheme }) => {
  return (
    <header className={styles.container}>
      <nav className={styles.containerNav}>
        <span className={`${styles.navButton} textPb`}>
          <span className={styles.navButtonName}>Sobre Mim</span>
          <img
            className={styles.navButtonIMG}
            src="../../../src/assets/Tinta.png"
            alt="rastro de tinta"
          />
        </span>
        <span className={`${styles.navButton} textPb`}>
          <span className={styles.navButtonName}>Tecnologias</span>
          <img
            className={styles.navButtonIMG}
            src="../../../src/assets/Tinta.png"
            alt="rastro de tinta"
          />
        </span>
        <span className={`${styles.navButton} textPb`}>
          <span className={styles.navButtonName}>Projetos</span>
          <img
            className={styles.navButtonIMG}
            src="../../../src/assets/Tinta.png"
            alt="rastro de tinta"
          />
        </span>
        <span className={`${styles.navButton} textPb`}>
          <span className={styles.navButtonName}>Contatos</span>
          <img
            className={styles.navButtonIMG}
            src="../../../src/assets/Tinta.png"
            alt="rastro de tinta"
          />
        </span>
      </nav>
      <button
        className={`toggleTheme ${styles.toogleButton}`}
        onClick={() => toggleTheme()}
      >
        {toogleMode ? <FaSun size={21} /> : <FaMoon size={21} />}
      </button>
    </header>
  )
}
