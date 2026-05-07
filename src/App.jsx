import '../src/App.css';
import Perfil from './secciones/Perfil/profile.jsx';
import Proyectos from './secciones/Proyectos/projects.jsx';
import Habilidades from './secciones/Habilidades/Habilidades.jsx';
import Contacto from './secciones/Contacto/contacto.jsx';
import Footer from './secciones/Footer/footer.jsx';
import { LanguageProvider } from './common/lenguajes.jsx';
import LanguageToggleButton from './common/botonLenguaje.jsx';

function App() {
    return (
            <LanguageProvider>
                <>
                    <LanguageToggleButton />
                    <Perfil />
                    <Proyectos />
                    <Habilidades />
                    <Contacto />
                    <Footer />
                </>
            </LanguageProvider>
    );
}

export default App;
