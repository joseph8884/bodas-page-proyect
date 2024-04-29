
const Novia = () => {
    return (
        <div className="grid-layout1">
            <section className="conoce_mas_frontPage1">
                <h3 className="titulo2">TU VESTIDO ES LA EXPRESIÓN DE LA IMAGEN QUE QUIERES PROYECTAR!</h3>
                <h2 className="titulo">TU VESTIDO DE<br/>NOVIA UNA<br/>EXPERIENCIA UNICA</h2>
                <br/>
                <p>El vestido habla de ti, de tu personalidad de tu estilo. Cada detalle, desde la silueta que eligas
                    hasta los adornos, contribuyen a la narrativa visual de este dia tan especial.</p>
                <br/>
                <p>Aqui encontrarás la imagen que quieres recordar y trascenderá en la mente de tus generaciones!</p>
                <br/>
            </section>
            <section className="boton">
                <button className="conoce">CONOCE<br/>MÁS<br/></button>
            </section>
            <section className="imagen1">
                <img className="img1" src={process.env.PUBLIC_URL + '/Assets/Novia/img1.png'} alt=""/>
            </section>
        </div>
    );
};

export default Novia;