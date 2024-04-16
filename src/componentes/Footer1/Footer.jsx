import React from "react";
const Footer = () => {
    return (
        <div className="footer">
            <div className="box">
                <h1
                    style={{
                        color: "#787878",
                        textAlign: "left",
                        marginTop: "10px",
                        backgroundColor: "#EAD9C9",
                    }}
                >
                    OUR WEDDING PLANNERS WILL <br />LEAVE YOU BREATHLESS ON <br />YOUR SPECIAL DAY.
                </h1>
                <div className="footerContainer">
                    <div className="row">
                        <div className="column">
                            <a className="footerLink" href="#">
                                Página realizada por Webelopers
                            </a>
                        </div>
                        <div className="column">
                            <a className="footerLink" href="#">
                                Politicas de privacidad
                            </a>
                        </div>
                        <div className="column">
                            <div className="heading">
                                RUT BODAS Y FIESTAS
                            </div>
                            <div className="horizontal">
                                <a className="footerLink" href="#">
                                    Home
                                </a>
                                <a className="footerLink" href="#">
                                    Vestidos
                                </a>
                                <a className="footerLink" href="#">
                                    Accesorios
                                </a>
                                <a className="footerLink" href="#">
                                    Novias
                                </a>
                                <a className="footerLink" href="#">
                                    Otros Servicios
                                </a>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Footer;