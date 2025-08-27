/**
 * Lista de planes de precios disponibles en la aplicación.
 * 
 * Cada plan contiene:
 * - `title`: Nombre del plan.
 * - `price`: Precio del plan (formato string, por ejemplo "$9.990").
 * - `features`: Lista de características incluidas en el plan.
 * - `bestValue` (opcional): Marca si el plan es destacado como la mejor opción.
 */
export const pricingPlans = [
    {
        title: "Básico",
        price: "$9.990",
        features: [
            "Lorem ipsum dolor sit amet consectetur",
            "adipisicing elit. Harum eos possimus ipsam",
            "animi et nesciunt est enim itaque recusandae deleniti!"
        ],
    },
    {
        title: "Básico",
        price: "$9.990",
        features: [
            "Lorem ipsum dolor sit amet consectetur",
            "adipisicing elit. Harum eos possimus ipsam",
            "animi et nesciunt est enim itaque recusandae deleniti!"
        ],
        bestValue: true,
    },
    {
        title: "Básico",
        price: "$9.990",
        features: [
            "Lorem ipsum dolor sit amet consectetur",
            "adipisicing elit. Harum eos possimus ipsam",
            "animi et nesciunt est enim itaque recusandae deleniti!"
        ],
    },
];
