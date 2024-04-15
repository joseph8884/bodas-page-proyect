
import img1 from './img/img1.png';
import img2 from './img/img2.png';
import img3 from './img/img3.png';
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
        <p>Carrusel : Jose</p>
      </header>

      <div className="grid-layout1">
          <section className="conoce_mas_frontPage1">
              <h2>TU VESTIDO ES LA EXPRESIÓN DE LA IMAGEN QUE QUIERES PROYECTAR!</h2>
              <h1>TU VESTIDO DE</h1>
              <h1>NOVIA UNA</h1>
              <h1>EXPERIENCIA ÚNICA</h1>
              <br/>
              <p>El vestido habla de ti, de tu personalidad de tu estilo. Cada detalle, desde la silueta que eligas
                  hasta los adornos, contribuyen a la narrativa visual de este dia tan especial.</p>
              <br/>
              <p>Aqui encontrarás la imagen que quieres recordar y trascenderá en la mente de tus generaciones!</p>
              <br/>
              <button>CONOCE<br/>MÁS</button>
          </section>
          <section className="imagen1" >
          <img className="img1" src={img1}/>
          </section>
      </div>

      <div className="grid-layout2">
          <section className="imagen2">
              <img className="img2" src={img2}/>
          </section>
          <section className="conoce_mas_frontPage2">
              <h2>ACCESORIOS</h2>
              <h1>¡ENUCENTRA LA PIEZA PERFECTA QUE ELEVARÁ TU LOOK!</h1>
              <br/>
              <p>Los accesorios expresan tu creatividad y gusto personal; agregan estilo, personalidad y originalidad a tus outfits.</p>
              <br/>
              <button>CONOCE<br/>MÁS</button>
          </section>
      </div>

      <div className="grid-layout3">
        <section className="conoce_mas_frontPage3">
            <h2>DESCUBRE COMO DESTACAR EN TU PROXIMA FIESTA</h2>
            <h1>¡BRILLA CON EL VESTIDO PERFECTO!</h1>
            <br/>
            <p>Descubre una amplia seleccion de vestidos elegantes y sofisticados que te ayudarán a destacar y brillar en tu proxima fiesta.</p>
            <br/>
            <p>Encuentra el vestido perfecto para cada ocasion y haz una entrada inolvidable</p>
            <br/>
            <button>CONOCE<br/>MÁS</button>
        </section>
          <section className="imagen3">
              <img className="img3" src={img3}/>
          </section>
      </div>

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
