import { Team } from "../utils/Team";
import { Container } from "./shared/Container";
import { Paragraph } from "./shared/Paragraph";
import { Title } from "./shared/Title";

export const OurTeam = () => {
    return (
        <Container className="py-2">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                <div className="max-w-2xl mx-auto">
                    <Title>Conoce a nuestro equipo</Title>
                    <Paragraph>En Clover, contamos con un equipo de talento diverso y apasionado por el marketing digital.
                        Nuestra liderazgo estratégico guía cada proyecto hacia el éxito, mientras la creatividad e innovación dan vida a campañas únicas.
                        Expertos en contenido, análisis de datos y comunicación trabajan juntos para transformar ideas en experiencias que conectan y generan resultados.</Paragraph>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 py-12 mx-auto justify-center">
                    {Team.map((teamwork) => (
                        <li key={teamwork.name} className="flex flex-col items-center">
                            {/* <img
                                className="w-56 h-56 rounded-full object-cover object-center"
                                src={teamwork.icon}
                                alt={teamwork.name}
                            /> */}
                            <h3 className="mt-4 text-heading-1 font-semibold leading-7 tracking-tight text-base">
                                {teamwork.name}
                            </h3>
                            <p className="mt-2 leading-6 text-heading-1 ">{teamwork.position}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </Container>
    );
}