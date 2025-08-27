import { services } from "../../utils/Services-data";
import { Service } from "../Cards/Service";
import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { Title } from "../shared/Title";

// Componente que renderiza la sección de servicios
export const Services = () => {
    return (
        <section id="services">
            <Container className="space-y-10 md:space-y-12">

                {/* Título y descripción de la sección */}
                <div className="text-center max-w-3xl mx-auto space-y-4">
                    <Title>Nuestros servicios.</Title>
                    <Paragraph>
                        En Clover, nuestros servicios son el eje de nuestra agencia y la clave para impulsar marcas con impacto.
                        Combinamos creatividad, estrategia y análisis de datos para generar resultados reales.
                        Cada servicio está diseñado para conectar con tu audiencia y potenciar tu presencia en el mercado.
                    </Paragraph>
                </div>

                {/* Lista de servicios con flexbox */}
                <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
                    {services.map((service, key) => (
                        <div key={key} className="w-full sm:w-[45%] lg:w-[30%]">
                            <Service
                                title={service.title}
                                description={service.description}
                                icon={service.icon}
                            />
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};
