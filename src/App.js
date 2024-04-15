import Galeria from "./Galeria";
import Formulario from "./Formulario"
import Nav from "./componentes/Nav/Nav";
import Carrusel from "./componentes/frontpage/Carrusel";
import Novia from "./componentes/frontpage/Novia";
import Accesorios from "./componentes/frontpage/Accesorios";
import Vestido from "./componentes/frontpage/Vestido";


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
      <footer>
        <p>Foooter: Parte de santafe</p>
      </footer>
    </body>
  );
}

export default App;
