import styles from './projectsStyles.module.css';
import parisiMotorsLight from '../../assets/parisiMotors.png';
import parisiMotorsDark from '../../assets/parisiMotors_dark2.png';
import teatrosLight from '../../assets/teatros.png';
import teatrosDark from '../../assets/teatros_dark2.png';
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

function Projects() {
  const { language } = useLanguage();
  const {theme, toggleTheme} = useTheme();
  const parisiMotors = theme === 'light' ? parisiMotorsLight : parisiMotorsDark;
  const teatros = theme === 'light' ? teatrosLight : teatrosDark;

  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={parisiMotors}
          link="https://concesionario-front-navy.vercel.app/"
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
          src={teatros}
          link="https://concesionario-front-navy.vercel.app/"
          h3="Teatros App"
          p={language === "en" ? "Theater management App" : "Aplicación de gestión de teatros"}
          skillsClassName={styles.listaHabilidades}
          skills={
            <>
              <ListaHabilidades src={Java} habilidad="Java" alt="Icono de java" />
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