import img1 from "../../img_novia/img1.png";


const Novia = () => {
    return (
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
                <button className="conoce">CONOCE<br/>MÁS</button>
            </section>
            <section className="imagen1">
                <img className="img1" src={img1}/>
            </section>
        </div>
    );
};

export default Novia;