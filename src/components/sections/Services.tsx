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
                    <Title>Lorem ipsum dolor sit amet.</Title>
                    <Paragraph>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Asperiores vitae dolore autem libero perspiciatis fugiat aperiam 
                        delectus fugit quam quia?
                    </Paragraph>
                </div>

                {/* Grid de servicios */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 ls:gap-8">
                    {services.map((service, key) => (
                        <Service
                            key={key}
                            title={service.title} 
                            description={service.description} 
                            icon={service.icon}
                        />
                    ))}
                </div>

            </Container>
        </section>
    );
};
