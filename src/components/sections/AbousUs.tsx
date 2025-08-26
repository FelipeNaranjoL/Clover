import { Container } from "../shared/Container";
import logo from "../../assets/images.jpg";
import { Title } from "../shared/Title";
import { Paragraph } from "../shared/Paragraph";
import { Info } from "../Cards/Info";

export const AbousUs = () => {
    return (
        <section id="about-us">
            <Container className="flex flex-col md:flex-row gap-10 lg:gap-12 items-center">
                <div className="w-full md:w5/12 lg:w-1/2">
                    <div className="w-full h-80 sm:h-96 relative">
                        <img src={logo} alt="Our mission" className="w-full h-full object-cover rounded-3xl shadow-lg relativez-10" />
                    </div>
                </div>
                <div className="w-full md:w-7/12 lg:w-1/2 flex flex-col">
                    <Title>Hola mundo</Title>
                    <Paragraph>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi quos a id consectetur in? Amet recusandae placeat cupiditate delectus numquam!</Paragraph>
                    <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
                        <Info title="Misión" description="Hola mundo">
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
                                                <Info title="Misión" description="Hola mundo">
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