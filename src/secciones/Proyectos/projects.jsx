import styles from './projectsStyles.module.css';
import parisiMotorsLight from '../../assets/parisiMotors.png';
import parisiMotorsDark from '../../assets/parisiMotors_dark2.png';
import teatrosLight from '../../assets/teatros.png';
import teatrosDark from '../../assets/teatros_dark2.png';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import youtube from '../../assets/youtube.svg';
import ProjectCard from '../../common/projectCard.jsx';
import { useLanguage } from '../../common/lenguajes.jsx';
import { useTheme} from '../../common/themeContext.jsx';
import ListaHabilidades from '../../common/listaHabilidades.jsx';
import Java from '../../assets/Java.png';
import Reactjs from '../../assets/react.png';
import Tailwind from '../../assets/tailwind-light.svg';
import Express from '../../assets/express.svg';
import SQL from '../../assets/sql.svg';
import Typescript from '../../assets/typescript.svg';
import Node from '../../assets/node-js.svg';
import Bootstrap from '../../assets/bootstrap-svgrepo-com.svg';
import HTML from '../../assets/html5.svg';
import CSS from '../../assets/css3.svg';

function Projects() {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const parisiMotors = theme === 'light' ? parisiMotorsLight : parisiMotorsDark;
  const teatros = theme === 'light' ? teatrosLight : teatrosDark;
  const github = theme === 'light' ? githubLight : githubDark;

  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          cardClassName={styles.projectCard}
          projectLinkClassName={styles.projectLink}
          socialLinksClassName={styles.socialLinks}
          socialLinkClassName={styles.socialLink}
          src={parisiMotors}
          link="https://concesionario-front-navy.vercel.app/"
          repoLink="https://github.com/Ramiroparisi/Concesionario-Back"
          videoLink="https://www.youtube.com/watch?v=7Yfzs_vEhCU"
          githubIcon={github}
          youtubeIcon={youtube}
          h3="Parisi Motors"
          p={language === "en" ? "Car dealership App" : "Aplicación de concesionario de autos"}
          skillsClassName={styles.listaHabilidades}
          skills={
            <>
              <ListaHabilidades src={Reactjs} habilidad="React" alt="Icono de react" />
              <ListaHabilidades src={Tailwind} habilidad="Tailwind" alt="Icono de tailwind" />
              <ListaHabilidades src={Typescript} habilidad="Typescript" alt="Icono de typescript" />
              <ListaHabilidades src={Node} habilidad="Node" alt="Icono de node" />
              <ListaHabilidades src={Express} habilidad="Express" alt="Icono de express" />
              <ListaHabilidades src={SQL} habilidad="SQL" alt="Icono de sql" />
            </>
          }
        />
        <ProjectCard
          cardClassName={styles.projectCard}
          projectLinkClassName={styles.projectLink}
          socialLinksClassName={styles.socialLinks}
          socialLinkClassName={styles.socialLink}
          src={teatros}
          link="https://concesionario-front-navy.vercel.app/"
          repoLink="https://github.com/Ramiroparisi/Teatro"
          videoLink="https://www.youtube.com/"
          githubIcon={github}
          youtubeIcon={youtube}
          h3="Teatros App"
          p={language === "en" ? "Theater management App" : "Aplicación de gestión de teatros"}
          skillsClassName={styles.listaHabilidades}
          skills={
            <>
              <ListaHabilidades src={Java} habilidad="Java" alt="Icono de java" />
              <ListaHabilidades src={HTML} habilidad="HTML" alt="Icono de html" />
              <ListaHabilidades src={CSS} habilidad="CSS" alt="Icono de css" />
              <ListaHabilidades src={Bootstrap} habilidad="Bootstrap" alt="Icono de bootstrap" />
              <ListaHabilidades src={SQL} habilidad="SQL" alt="Icono de sql" />
            </>
          }
        />        
      </div>
    </section>
  );
}

export default Projects;