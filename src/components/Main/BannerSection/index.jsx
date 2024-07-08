import styles from "./styles.module.scss"

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
            src="../../../../src/assets/04 portfolio.png"
            alt="Foto de Igor em pé na parede"
          />
        </div>
        <div className={styles.containerInfos}></div>
      </div>
    </div>
  )
}
