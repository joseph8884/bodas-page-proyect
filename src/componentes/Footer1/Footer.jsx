import React from "react";
const Footer = () => {
    return (
        <footer>
            <div className="footer_container">
                <div className="message_footer">
                    <h3>OUR WEDDING PLANNERS WILL
                        <br />LEAVE YOU BREATHLESS ON <br />YOUR SPECIAL DAY.</h3>
                </div>
                <div className="madeitbywho">
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet"></link>
                    <a className="footerLink" href="#">
                        Página realizada por Webelopers
                    </a>
                </div>
                <div className="politicasprivacidad">
                    <a className="footerLink" href="#">
                        Politicas de privacidad
                    </a>
                </div>
                <div className="links">
                    <h1>RUT BODAS Y FIESTAS</h1>
                    <div className="horizontal">
                        <a className="footerLink" href="https://www.google.com">
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

        </footer>
    );
}
export default Footer;