//create nav component

import React from 'react';

const Nav = () => {

    const handleClick = ()=> {
        const element = document.getElementById('formulario_contacto');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <nav>
            <div className="navContainer">
                <img className='logo' src='/Assests/Navimages/LOGO.png' alt='logo' />
                <div className="social_media">
                    <p>botones de redes sociales</p>
                </div>
                <div className="options">
                    <img className='quienes_somos_nav' src="/Assests/Navimages/1.png" alt="¿quienes somos?" />
                    <img className='novias_img' src="/Assests/Navimages/2.png" alt="NOVIAS" />
                    <img className='accesorios_nav' src="/Assests/Navimages/3.png" alt="ACCESORIOS" />
                    <img className='vestidos' src="/Assests/Navimages/4.png" alt="VESTIDOS" />
                    <img className='otros_servicios_nav' src="/Assests/Navimages/5.png" alt="OTROS SERVICIOS" />
                </div>
                <div className="buttonContainer">
                    <button onClick={handleClick}>AGENDA TU CITA</button>
                </div>
            </div>
        </nav>
    );
}
export default Nav;