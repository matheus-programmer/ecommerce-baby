export default function Contato() {
    const whatsappNumber = "+5585992795965"; // Número do WhatsApp
    const message = "Olá! Gostaria de saber mais sobre os produtos da loja."; // Mensagem automática

    return (
        <div className="container p-4 min-vh-100 d-flex flex-column justify-content-center align-items-center">
            <h1 className="h4 fw-bold text-center mb-4">Contato</h1>
            <p className="text-center">Fale conosco pelo WhatsApp:</p>
            <div className="d-flex justify-content-center mt-4">
                <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-success px-4 py-2"
                >
                    Fale pelo WhatsApp
                </a>
            </div>
        </div>
    );
}