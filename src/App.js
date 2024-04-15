import Nav from "./componentes/Nav/Nav";
import Carrusel from "./componentes/frontpage/Carrusel";

function App() {
  return (
    <body>
      <Nav />
      <Carrusel />
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
        <p>Gaeleria de fotos: Mateo</p>
      </section>
      <section className="formulario_contacto">
        <p>Contactanos : Mateo</p>
      </section>
      <footer>
        <p>Foooter: Parte de santafe</p>
      </footer>
    </body>
  );
}

export default App;
