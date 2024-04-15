import img2 from "../../img_novia/img2.png";


const Accesorios = () => {
    return (
        <div className="grid-layout2">
            <section className="imagen2">
                <img className="img2" src={img2}/>
            </section>
            <section className="conoce_mas_frontPage2">
                <h2>ACCESORIOS</h2>
                <h1>¡ENUCENTRA LA PIEZA PERFECTA QUE ELEVARÁ TU LOOK!</h1>
                <br/>
                <p>Los accesorios expresan tu creatividad y gusto personal; agregan estilo, personalidad y originalidad
                    a tus outfits.</p>
                <br/>
                <button className="conoce">CONOCE<br/>MÁS</button>
            </section>
        </div>
    );
};

export default Accesorios;