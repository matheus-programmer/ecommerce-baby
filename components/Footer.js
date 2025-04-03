export default function Footer() {
    return (
        <footer className="bg-dark text-white py-3 text-center mt-4">
            <div className="container">
                <p className="mb-0">
                    &copy; {new Date().getFullYear()} E-commerce Baby - Todos os direitos reservados.
                </p>
                <p className="mb-0">
                    Desenvolvido por Maria Ariel e Matheus Medeiros
                </p>
            </div>
        </footer>
    );
}