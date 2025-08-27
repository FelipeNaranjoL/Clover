import { Container } from "../shared/Container";
import logo from "../../assets/react.svg";
import { navItems } from "./Navbar";
import { NavItem } from "../shared/Navitems";

export const Footer = () => {
    return (
        // Footer principal con padding superior y borde redondeado
        <footer className="relative pt-28 rounded-t-3xl bg-box-bg">
            <Container className="pb-8">
                <div className="flex flex-col md:flex-row justify-between items-start gap-8">

                    {/* Parte izquierda: logo + enlaces */}
                    <div className="flex flex-col items-center md:items-start gap-4 w-full md:w-1/2">
                        
                        {/* Logo centrado en móviles */}
                        <div className="flex items-center gap-3">
                            <img src={logo} alt="Clover Logo" className="w-7 h-7" />
                            <span className="text-lg font-semibold text-heading-1">Clover</span>
                        </div>

                        {/* Enlaces de navegación */}
                        {/* En móviles se muestran en fila, en desktop en columna */}
                        <ul className="flex flex-row md:flex-col flex-wrap justify-center md:justify-start gap-2 w-full text-heading-1">
                            {navItems.map((item, key) => (
                                <NavItem
                                    key={key}
                                    href={item.href}
                                    text={item.text} />
                            ))}
                        </ul>
                    </div>

                    {/* Parte derecha: Google Maps */}
                    <div className="w-full md:w-1/2 h-64">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.8354355816755!2d-70.61434632521528!3d-33.42753449633741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf653d4712e9%3A0x2a6c29dac56ceed4!2sAv.%20Pedro%20de%20Valdivia%20425%2C%207500912%20Providencia%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses!2scl!4v1756253562026!5m2!1ses!2scl"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </Container>
        </footer>
    );
};
