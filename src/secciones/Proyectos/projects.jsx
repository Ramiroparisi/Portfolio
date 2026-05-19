import styles from './projectsStyles.module.css';
import parisiMotorsDark from '../../assets/parisiMotors_dark2.png';
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
import Docker from '../../assets/docker-icon.svg';

function Projects() {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const github = theme === 'light' ? githubLight : githubDark;

  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">{language === "en" ? "Projects" : "Proyectos"}</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          cardClassName={styles.projectCard}
          projectLinkClassName={styles.projectLink}
          socialLinksClassName={styles.socialLinks}
          socialLinkClassName={styles.socialLink}
          src={parisiMotorsDark}
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
              <ListaHabilidades src={Docker} habilidad="Docker" alt="Icono de docker" />
            </>
          }
        backText={language === "en" 
          ? "A complete platform for buying and selling vehicles, featuring an administrative control panel, filter metrics, and database integration via Docker Compose." 
          : "Una plataforma completa para la compra y venta de vehículos, equipada con un panel de control administrativo, filtros y entornos dockerizados."
        }
        backText2={language === "en"
          ? "Here is the youtube link to the project explanation."
          : "Aquí está el enlace de YouTube con la explicación del proyecto."
        }
        videoLink2="https://www.youtube.com/watch?v=7Yfzs_vEhCU"
        />
        <ProjectCard
          cardClassName={styles.projectCard}
          projectLinkClassName={styles.projectLink}
          socialLinksClassName={styles.socialLinks}
          socialLinkClassName={styles.socialLink}
          src={teatrosDark}
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
          backText={language === "en" 
            ? "A complete platform for buying tickets for all Rosario, Argentina theatres, featuring an administrative control panel, filter metrics, and database integration." 
            : "Una plataforma completa para la compra de tickets para todos los teatros de Rosario, Argentina, equipada con un panel de control administrativo, filtros e integración de base de datos."
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

export default Projects;