import styles from './projectsStyles.module.css';
import Movieflix from '../../assets/MovieFlix (1).png';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import youtube from '../../assets/youtube.svg';
import MobileProjectCard from '../../common/mobileProjectCard.jsx';
import { useLanguage } from '../../common/lenguajes.jsx';
import { useTheme} from '../../common/themeContext.jsx';
import ListaHabilidades from '../../common/listaHabilidades.jsx';
import ReactNative from '../../assets/react-native.svg';
import Tailwind from '../../assets/tailwind-light.svg';
import Appwrite from '../../assets/Appwrite.svg';
import Typescript from '../../assets/typescript.svg';
import Node from '../../assets/node-js.svg';

function MobileProjects() {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const github = theme === 'light' ? githubLight : githubDark;

  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">{language === "en" ? "Mobile projects" : "Proyectos mobile"}</h1>
      <div className={styles.projectsContainer}>
        <MobileProjectCard
          cardClassName={styles.projectCard}
          projectLinkClassName={styles.projectLink}
          socialLinksClassName={styles.socialLinks}
          socialLinkClassName={styles.socialLink}
          src={Movieflix}
          link="https://concesionario-front-navy.vercel.app/"
          repoLink="https://github.com/Ramiroparisi/Movies"
          videoLink="https://www.youtube.com/watch?v=7Yfzs_vEhCU"
          githubIcon={github}
          youtubeIcon={youtube}
          h3="Movieflix"
          p={language === "en" ? "Streaming app for movies" : "Aplicación de streaming de películas"}
          skillsClassName={styles.listaHabilidades}
          skills={
            <>
              <ListaHabilidades src={ReactNative} habilidad="React Native" alt="Icono de react native" />
              <ListaHabilidades src={Tailwind} habilidad="Tailwind" alt="Icono de tailwind" />
              <ListaHabilidades src={Typescript} habilidad="Typescript" alt="Icono de typescript" />
              <ListaHabilidades src={Node} habilidad="Node" alt="Icono de node" />
              <ListaHabilidades src={Appwrite} habilidad="Appwrite" alt="Icono de appwrite" />
            </>
          }
          backText={language === "en"
            ? "Mobile implementation developed with React Native and Expo, offering catalog browsing, interactive lists, and backend cloud support."
            : "Implementación móvil desarrollada con React Native y Expo, que ofrece navegación de películas e integración ágil en la nube."
          }
          backText2={language === "en"
            ? "Here is the youtube link to the project explanation."
            : "Aquí está el enlace de YouTube con la explicación del proyecto."
          }
          videoLink2="https://www.youtube.com/watch?v=7Yfzs_vEhCU"
        />        
      </div>
    </section>
  );
}

export default MobileProjects;