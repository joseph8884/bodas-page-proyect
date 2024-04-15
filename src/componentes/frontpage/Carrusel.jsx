import React, { useState, useEffect, useRef } from 'react';

// Componente Carrusel
const Carrusel = () => {
    // Estado para mantener el índice del slide activo
    const [active, setActive] = useState(0);
    // Referencias a los elementos del DOM
    const items = useRef(null);
    const dots = useRef(null);

    // Función para avanzar al siguiente slide
    const nextSlide = () => {
        setActive(prevActive => prevActive + 1 < items.current.children.length ? prevActive + 1 : 0);
    };

    // Función para retroceder al slide anterior
    const prevSlide = () => {
        setActive(prevActive => prevActive - 1 >= 0 ? prevActive - 1 : items.current.children.length - 1);
    };

    // Función para seleccionar un slide específico
    const selectSlide = (key) => {
        setActive(key);
    };

    // Efecto para actualizar el slide activo cuando cambia el estado 'active'
    useEffect(() => {
        if (items.current && dots.current) {
            // Ajusta la posición del contenedor de slides
            items.current.style.left = -items.current.children[active].offsetLeft + 'px';
            // Actualiza la clase 'active' de los dots
            Array.from(dots.current.children).forEach((dot, i) => {
                dot.classList[i === active ? 'add' : 'remove']('active');
            });
        }
    }, [active]);
    return (
        <header className="slider" id="inicio">
            {/*<article className="cover">
                <p>"Formamos líderes del mañana, impulsados por la investigación,
                    agentes de cambio, y promotores del progreso y bienestar."</p>
                <p>Egresados IERD La Fuente</p>
                <a href="https://egresadoslafuentetocancipa.wordpress.com/2023/11/26/historia-de-la-institucion-educativa-rural-departamental-la-fuente-tocancipa/"
                    target='blank'><button className="btn">Saber más</button></a>
            </article>*/}
            <div className="list" ref={items}>
                <div className="item">
                    <img src="/Assests/Carrusel/1.png" alt="" />
                </div>
                <div className="item">
                    <img src="/Assests/Carrusel/1.png" alt="" />
                </div>
                <div className="item">
                    <img src="/Assests/Carrusel/1.png" alt="" />
                </div>
                <div className="item">
                    <img src="/Assests/Carrusel/1.png" alt="" />
                </div>
                <div className="item">
                    <img src="/Assests/Carrusel/1.png" alt="" />
                </div>
            </div>
            <div className="buttons">
                {/* Botones para navegar entre los slides */}
                <button id="prev" onClick={prevSlide}>{'<'}</button>
                <button id="next" onClick={nextSlide}>{'>'}</button>
            </div>
            {/* Dots para seleccionar un slide específico */}
            <ul className="dots" ref={dots}>
                {Array(5).fill().map((_, i) => (
                    <li key={i} className={i === active ? 'active' : ''} onClick={() => selectSlide(i)}></li>
                ))}
            </ul>
        </header>
    );
};

export default Carrusel;