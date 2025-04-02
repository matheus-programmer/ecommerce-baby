export default function Contato() {
    return (
        <div className="container p-4">
            <h1 className="h4 fw-bold text-center my-4">Contato</h1>
            <p className="text-center">Fale conosco pelo WhatsApp:</p>
            <div className="d-flex justify-content-center mt-4">
                <a
                    href="https://wa.me/SEU_NUMERO"
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