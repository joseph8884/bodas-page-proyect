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
    <body>
      <Nav />
        <Carrusel />
          <Novia />
          <Accesorios />
          <Vestido />
      <section className="Galeria_fotos_frontPage">
        <Galeria images={images}/>
      </section>
      <section className="formulario_contacto">
        <Formulario />
      </section>
      <Footer/>
    </body>
  );
}

export default App;
