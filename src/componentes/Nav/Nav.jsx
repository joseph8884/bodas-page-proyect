//create nav component
import "boxicons";
import React from "react";

const Nav = () => {
  const handleClick = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <nav>
      <div className="navContainer"></div>
      <div className="navContainer">
        <img
          className="logo"
          src={process.env.PUBLIC_URL + "/Assets/Navimages/LOGO.png"}
          alt="logo"
        />
        <div className="social_media">
          <a href="https://www.instagram.com/rutbodasyfiestas?igsh=dThlcmtkajByaTU4">
            <box-icon name="instagram-alt" type="logo"></box-icon>
          </a>
          <a href="https://www.facebook.com">
            <box-icon name="facebook-circle" type="logo"></box-icon>
          </a>
        </div>
        <div className="options">
          <img
            className="quienes_somos_nav"
            src={process.env.PUBLIC_URL + "/Assets/Navimages/1.png"}
            alt="¿quienes somos?"
            onClick={() => handleClick('quienes_somos_seccion')}
          />
          <img
            className="novias_img"
            src={process.env.PUBLIC_URL + "/Assets/Navimages/2.png"}
            alt="NOVIAS"
            onClick={() => handleClick('novia_seccion')}
          />
          <img
            className="accesorios_nav"
            src={process.env.PUBLIC_URL + "/Assets/Navimages/3.png"}
            alt="ACCESORIOS"
            onClick={() => handleClick('accesorios_seccion')}
          />
          <img
            className="vestidos"
            src={process.env.PUBLIC_URL + "/Assets/Navimages/4.png"}
            alt="VESTIDOS"
            onClick={() => handleClick('vestidos_seccion')}
          />
          <img
            className="otros_servicios_nav"
            src={process.env.PUBLIC_URL + "/Assets/Navimages/5.png"}
            alt="OTROS SERVICIOS"
            onClick={() => handleClick('otros_servicios_seccion')}
          />
        </div>
        <div className="buttonContainer">
          <button onClick={() => handleClick('formulario_contacto')}>AGENDA TU CITA</button>
        </div>
      </div>
    </nav>
  );
};
export default Nav;