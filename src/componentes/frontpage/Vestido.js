
const Vestido = () => {
    return (
        <div className="grid-layout3">
            <section className="conoce_mas_frontPage3">
                <h3 className="titulo2">DESCUBRE COMO DESTACAR EN TU PROXIMA FIESTA</h3>
                <h2 className="titulo">¡BRILLA CON EL VESTIDO PERFECTO!</h2>
                <br/>
                <p>Descubre una amplia seleccion de vestidos elegantes y sofisticados que te ayudarán a destacar y
                    brillar en tu proxima fiesta.</p>
                <br/>
                <p>Encuentra el vestido perfecto para cada ocasion y haz una entrada inolvidable</p>
                <br/>
            </section>
            <section className="boton">
                <button className="conoce">CONOCE<br/>MÁS</button>
            </section>
            <section className="imagen3">
                <img className="img3" src={process.env.PUBLIC_URL + "/Assets/Novia/img3.png"} alt=""/>
            </section>
        </div>
    )
};

export default Vestido;