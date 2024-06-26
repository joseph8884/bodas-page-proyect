import Galeria from "./componentes/Galeria/Galeria";
import Formulario from "./componentes/Formulario/Formulario"
import Nav from "./componentes/Nav/Nav";
import Carrusel from "./componentes/frontpage/Carrusel";
import Novia from "./componentes/frontpage/Novia";
import Accesorios from "./componentes/frontpage/Accesorios";
import Vestido from "./componentes/frontpage/Vestido";
import Footer from "./componentes/Footer1/Footer.jsx";


function App() {

  const images = [
    'https://img.freepik.com/foto-gratis/anillos-boda-estan-velo-novia-flores_8353-9817.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/c/c1/Salones_de_Boda.jpg',
    'https://img.freepik.com/foto-gratis/alianzas-boda-manos-novia-novio-hermoso-ramo-novia-hecho-vegetacion-flores-blancas_8353-11212.jpg'
  ];

  return (
    <>
      <Nav />
      <br></br>
        <Carrusel />
        <section id="novia_seccion" className="novia_seccion">
        <Novia />
        </section>
        <section id="accesorios_seccion" className="accesorios_seccion">
        <Accesorios />
        </section>
        <section id="vestidos_seccion" className="vestidos_seccion">
        <Vestido />
        </section>
      <section className="Galeria_fotos_frontPage">
        <Galeria images={images}/>
      </section>
    <section id="formulario_contacto" className="formulario_contacto">
      <Formulario />
    </section>
      <Footer/>
    </>
  );
}

export default App;
