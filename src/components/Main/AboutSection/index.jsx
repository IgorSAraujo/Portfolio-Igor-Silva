import styles from "./styles.module.scss"
import { BsFillPersonVcardFill } from "react-icons/bs"
import { FaGraduationCap } from "react-icons/fa"
import { MdOutlineWork } from "react-icons/md"
import { ImPacman } from "react-icons/im"

export const AboutSection = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerTitle}>
          <h2 className="textH1">Sobre Mim</h2>
        </div>
        <div className={styles.containerInfos}>
          <div className={styles.infos}>
            <div className={styles.infosTitle}>
              <BsFillPersonVcardFill size={30} />
              <h3 className="textH3">Quem sou?</h3>
            </div>
            <p className="textP">
              Me chamo Igor, Tenho 22 anos, em 2019 fiz intercambio para Nova
              Zelândia onde desenvolvi minhas linguagens e desde 2020 resido em
              Petrolina-PE.
            </p>
          </div>
          <div className={styles.infos}>
            <div className={styles.infosTitle}>
              <FaGraduationCap size={30} />
              <h3 className="textH3">Formação</h3>
            </div>
            <p className="textP">
              Fiz o curso de Licenciatura em fisica o qual comecei em 2019, e em
              2023 comecei o curso de desenvolvedor full stack pela Kenzie
              Academy Brasil.
            </p>
          </div>
          <div className={styles.infos}>
            <div className={styles.infosTitle}>
              <MdOutlineWork size={30} />
              <h3 className="textH3">Carreira</h3>
            </div>
            <p className="textP ">
              Na area da educação eu atuei como Professor Particular de Fisica,
              e de Lingua inglesa. Trabalhei na area de restaurantes atuando
              como Confeiteiro onde tive uma empresa Autônoma e como Parrilleiro
              na area de preparo de carnes. Ja trabalhei com a internet e com
              design de layouts freelancer e agora estou me dedicando ao que
              sempre sonhei trabalhar no ramo da programação.
            </p>
          </div>
          <div className={styles.infos}>
            <div className={styles.infosTitle}>
              <ImPacman size={30} />
              <h3 className="textH3">Habilidades</h3>
            </div>
            <p className="textP ">
              Tenho habilidades excepcionais de trabalho em equipe e liderança
              em situações complicadas, sem problemas para cumprir prazos.
              Aprendo rapidamente e me adapto eficientemente a novas situações.
              Por ter convivência em outro país, sou fluente em inglês, tenho
              espanhol avançado e francês básico.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
