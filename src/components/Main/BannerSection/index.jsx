import styles from "./styles.module.scss"
import { TbDeviceDesktopCode } from "react-icons/tb"

export const BannerSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerBackground}>
        <video
          src="../../../../src/assets/Plexus.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
      <div className={styles.containerBannerInfos}>
        <div className={styles.containerProfile}>
          <img
            className={`${styles.profilePhoto} ${styles.primary}`}
            src="../../../../src/assets/04 Portfolio.png"
            alt="Foto de Igor com cabelo solto em fundo branco"
          />
          <img
            className={`${styles.profilePhoto} ${styles.secondary}`}
            src="../../../../src/assets/09 portfolio.png"
            alt="Foto de Igor com cabelo solto em fundo branco"
          />
          <span
            className={`${styles.profilePhoto} ${styles.background}`}
          ></span>
        </div>
        <div className={styles.containerInfos}>
          <h1 className="textBanner">{"< Igor Araujo />"}</h1>
          <div>
            <h2 className="textH2">
              {`< Desenvolvedor Front-End  `}
              <TbDeviceDesktopCode />
              {`  />`}
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}
