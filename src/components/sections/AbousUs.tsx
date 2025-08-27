import { Container } from "../shared/Container";
import agencia from "../../assets/agencia.jpg";
import { Title } from "../shared/Title";
import { Paragraph } from "../shared/Paragraph";
import { Info } from "../Cards/Info";

// Sección "About Us"
export const AbousUs = () => {
    return (
        <section id="about-us">
            <Container className="flex flex-col md:flex-row gap-10 lg:gap-12 items-center">

                {/* Imagen ilustrativa */}
                <div className="w-full md:w5/12 lg:w-1/2">
                    <div className="w-full h-80 sm:h-96 relative">
                        <img
                            src={agencia}
                            alt="Our mission"
                            className="w-full h-full object-cover rounded-3xl shadow-lg relativez-10"
                        />
                    </div>
                </div>

                {/* Contenido de texto */}
                <div className="w-full md:w-7/12 lg:w-1/2 flex flex-col">
                    <Title>Que es Clover</Title>
                    <Paragraph className="py-5">
                        En Clover, somos más que una agencia de publicidad digital: conectamos marcas con sus audiencias de manera auténtica y estratégica. Creamos contenido y campañas que no solo llaman la atención, sino que inspiran, generan conversación y construyen comunidades leales.

                        Nuestra filosofía es clara: “Con nosotros, no pierdes”. Cada reto se transforma en una oportunidad para que tu marca brille en el mundo digital. Buscamos ser el socio creativo y estratégico que potencia tu presencia online con experiencias memorables, convirtiendo seguidores en fans comprometidos.
                    </Paragraph>

                    {/* Tarjetas de información */}
                    <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
                        <Info title="Misión"
                        description="Conectamos marcas con sus audiencias digitales, creando contenido y campañas que inspiran y convierten seguidores en fans de marca.">
                            {/* Icono */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-4 h-4 sm:w-5 sm:h-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                                />
                            </svg>
                        </Info>

                        <Info title="Visión"
                        description='"Con nosotros, no pierdes." Transformamos cada reto en oportunidades digitales y buscamos ser el socio creativo que hace brillar tu marca.'>
                            {/* Icono */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-4 h-4 sm:w-5 sm:h-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                                />
                            </svg>
                        </Info>
                    </div>
                </div>
            </Container>
        </section>
    );
}
