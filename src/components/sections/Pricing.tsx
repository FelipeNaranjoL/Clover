import { pricingPlans } from "../../utils/Pricing-plan";
import { Button } from "../elements/Button";
import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { Title } from "../shared/Title";

// ============================================================
// Componente Pricing (Sección de precios)
// ============================================================

export const Pricing = () => {
    return (
        // Sección de planes de precios
        <section id="pricing" className="py-5">
            {/* Encabezado de la sección */}
            <Container className="text-center">
                <Title>Precios </Title>
                <Paragraph className="mt-4">
                    Escoge el mejor plan para tus intereses.
                </Paragraph>
            </Container>

            {/* Lista de planes */}
            <Container className="mt-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pricingPlans.map((plan, key) => (
                        <div key={key} className="relative group h-full">
                            {/* Contenedor con borde degradado */}
                            <div className="bg-gradient-to-r from-blue-600 to-violet-600 p-1 rounded-3xl h-full">
                                <div
                                    className="bg-box-bg border border-box-border rounded-3xl shadow-lg shadow-box-shadow
                                p-8 flex flex-col h-full relative"
                                >
                                    {/* Badge de mejor oferta */}
                                    {plan.bestValue && (
                                        <div
                                            className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary
                                                    text-white text-xs font-bold uppercase tracking-wider
                                                    px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-violet-600"
                                        >
                                            Oferta
                                        </div>
                                    )}

                                    {/* Título del plan */}
                                    <h3 className="text-2xl font-semibold text-heading-1">
                                        {plan.title}
                                    </h3>

                                    {/* Precio del plan */}
                                    <p className="mt-4 text-4xl font-bold text-heading-1">
                                        {plan.price}
                                    </p>

                                    {/* Lista de características */}
                                    <ul className="mt-6 flex-1 space-y-3 text-left text-heading-3">
                                        {plan.features.map((feature, keyFeatures) => (
                                            <li key={keyFeatures} className="flex items-center gap-2">
                                                <span className="text-primary">✅ </span>
                                                <span>{feature} </span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Botón de acción */}
                                    <div className="mt-8">
                                        <Button className="w-full transform transition-transform duration-300 hover:scale-105 text-white">
                                            Solicitar
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};
