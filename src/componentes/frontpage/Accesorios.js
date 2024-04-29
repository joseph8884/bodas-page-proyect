
const Accesorios = () => {
    return (
        <div className="grid-layout2">
            <section className="imagen2">
                <img className="img2" src={process.env.PUBLIC_URL + "/Assets/Novia/img2.png"} alt="Imagen 2"/>
            </section>
            <section className="conoce_mas_frontPage2">
                <h3 className="titulo2">ACCESORIOS</h3>
                <h2 className="titulo">¡ENCUENTRA LA PIEZA PERFECTA QUE ELEVARÁ TU LOOK!</h2>
                <br/>
                <p>Los accesorios expresan tu creatividad y gusto personal; agregan estilo, personalidad y originalidad
                    a tus outfits.</p>
                <br/>
            </section>
            <section className="boton">
                <button className="conoce">CONOCE<br/>MÁS</button>
            </section>
        </div>
    );
};

export default Accesorios;