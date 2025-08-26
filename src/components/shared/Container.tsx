interface ContainerProps {
    children: React.ReactNode;  // Lo que se renderizará dentro del contenedor (texto, JSX, otros componentes).
    className?: string;         // Prop opcional para añadir clases extra de Tailwind o CSS.
}


export const Container = ({ children, className = "" }: ContainerProps) => {
    return (
        // Renderiza un <div> que actúa como contenedor centralizado.
        // ${className} → permite añadir clases extras desde fuera del componente.
        <div className={`mx-auto max-w-7xl w-full px-5 sm:px-8 md:px-14 lg:px-5 ${className} `}>{children}</div>
    );
};
