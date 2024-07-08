import styles from "./styles.module.scss"

export const Header = () => {
  return (
    <header className={styles.container}>
      <nav className={styles.containerNav}>
        <span className={`${styles.navButton} textP`}>
          <span className={styles.navButtonName}>Sobre Mim</span>
          <img
            className={styles.navButtonIMG}
            src="../../../src/assets/Tinta.png"
            alt="rastro de tinta"
          />
        </span>
        <span className={`${styles.navButton} textP`}>
          <span className={styles.navButtonName}>Tecnologias</span>
          <img
            className={styles.navButtonIMG}
            src="../../../src/assets/Tinta.png"
            alt="rastro de tinta"
          />
        </span>
        <span className={`${styles.navButton} textP`}>
          <span className={styles.navButtonName}>Projetos</span>
          <img
            className={styles.navButtonIMG}
            src="../../../src/assets/Tinta.png"
            alt="rastro de tinta"
          />
        </span>
        <span className={`${styles.navButton} textP`}>
          <span className={styles.navButtonName}>Contatos</span>
          <img
            className={styles.navButtonIMG}
            src="../../../src/assets/Tinta.png"
            alt="rastro de tinta"
          />
        </span>
      </nav>
    </header>
  )
}
