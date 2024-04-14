import Galeria from "./Galeria";
import Formulario from "./Formulario"

function App() {

  const images = [
    'https://img.freepik.com/foto-gratis/anillos-boda-estan-velo-novia-flores_8353-9817.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/c/c1/Salones_de_Boda.jpg',
    'https://img.freepik.com/foto-gratis/alianzas-boda-manos-novia-novio-hermoso-ramo-novia-hecho-vegetacion-flores-blancas_8353-11212.jpg'
  ];

  return (
    <body>
      <nav>Barra de buscar: va a ser de JOSE</nav>
      <header>
        <h1>Carrusel : Jose</h1>
      </header>
      <section className="conoce_mas_frontPage1">
        <p>Tu vestido de novia una experiencia unica.  ==== Abril</p>
      </section>
      <section className="conoce_mas_frontPage2">
        <p>Encuentra la pieza perfecta que elevara tu look  ==== Abril</p>
      </section>
      <section className="conoce_mas_frontPage3">
        <p>Encuentra la pieza perfecta que elevara tu look  ==== Abril</p>
      </section>
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
