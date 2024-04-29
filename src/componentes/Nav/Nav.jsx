//create nav component
import 'boxicons';
import React from 'react';

const Nav = () => {

    const handleClick = ()=> {
        const element = document.getElementById('formulario_contacto');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <nav>
            
            <div className="navContainer">
                <img className='logo' src={process.env.PUBLIC_URL + '/Assets/Navimages/LOGO.png'} alt='logo' />
                <div className="social_media">
                    <box-icon name='instagram-alt' type='logo'></box-icon>
                    <box-icon name='facebook-circle' type='logo' ></box-icon>
                </div>
                <div className="options">
                    <img className='quienes_somos_nav' src={process.env.PUBLIC_URL + '/Assets/Navimages/1.png'} alt="¿quienes somos?" />
                    <img className='novias_img' src={process.env.PUBLIC_URL + '/Assets/Navimages/2.png'} alt="NOVIAS" />
                    <img className='accesorios_nav' src={process.env.PUBLIC_URL + '/Assets/Navimages/3.png'} alt="ACCESORIOS" />
                    <img className='vestidos' src={process.env.PUBLIC_URL + '/Assets/Navimages/4.png'} alt="VESTIDOS" />
                    <img className='otros_servicios_nav' src={process.env.PUBLIC_URL + '/Assets/Navimages/5.png'} alt="OTROS SERVICIOS" />
                </div>
                <div className="buttonContainer">
                    <button onClick={handleClick}>AGENDA TU CITA</button>
                </div>
            </div>
        </nav>
    );
}
export default Nav;