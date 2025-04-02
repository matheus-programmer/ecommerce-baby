export default function Contato() {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold text-center my-6">Contato</h1>
            <p className="text-center">Fale conosco pelo WhatsApp:</p>
            <div className="flex justify-center mt-4">
                <a
                    href="https://wa.me/SEU_NUMERO"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition"
                >
                    Fale pelo WhatsApp
                </a>
            </div>
        </div>
    );
}
