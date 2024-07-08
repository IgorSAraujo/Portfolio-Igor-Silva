import styles from "./styles.module.scss"
import { BannerSection } from "./BannerSection"
import { AboutSection } from "./AboutSection"
import { TechSection } from "./TechSection"
import { ProjectsSection } from "./ProjectsSection"

export const Main = () => {
  return (
    <div>
      <BannerSection />
      <AboutSection />
      <TechSection />
      <ProjectsSection />
    </div>
  )
}
