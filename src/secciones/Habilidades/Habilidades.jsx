import ListaHabilidades from '../../common/listaHabilidades.jsx';
import styles from '../Habilidades/habilidadesStyles.module.css';

import Reactjs from '../../assets/react.png';
import HTML from '../../assets/html5.svg';
import CSS from '../../assets/css3.svg';
import Bootstrap from '../../assets/bootstrap-svgrepo-com.svg';
import Tailwind from '../../assets/tailwind-light.svg';
import Javascript from '../../assets/javascript.svg';
import Typescript from '../../assets/typescript.svg';
import Node from '../../assets/node-js.svg';
import Java from '../../assets/Java.png';
import Express from '../../assets/express.svg';
import SQL from '../../assets/sql.svg';
import { useLanguage } from '../../common/lenguajes.jsx';

function Habilidades() {
    const { language } = useLanguage();
    return (
        <section id="habilidades" className={styles.container}>
            <h1 className='sectionTitle'> {language === "en" ? "Skills" : "Habilidades"} </h1>
            <div className={styles.listaHabilidades}>
                <ListaHabilidades src={Reactjs} habilidad="React" alt="Icono de react" />
                <ListaHabilidades src={HTML} habilidad="HTML" alt="Icono de html" />
                <ListaHabilidades src={CSS} habilidad="CSS" alt="Icono de css" />
                <ListaHabilidades src={Bootstrap} habilidad="Bootstrap" alt="Icono de bootstrap" />
                <ListaHabilidades src={Tailwind} habilidad="Tailwind" alt="Icono de tailwind" />
                <ListaHabilidades src={Javascript} habilidad="Javascript" alt="Icono de javascript" />
                <ListaHabilidades src={Typescript} habilidad="Typescript" alt="Icono de typescript" />
                <ListaHabilidades src={Node} habilidad="Node" alt="Icono de node" />
                <ListaHabilidades src={Java} habilidad="Java" alt="Icono de java" />
                <ListaHabilidades src={Express} habilidad="Express" alt="Icono de express" />
                <ListaHabilidades src={SQL} habilidad="SQL" alt="Icono de sql" />
            </div>
        </section>
    )
}
export default Habilidades;