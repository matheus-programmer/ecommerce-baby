import Link from "next/link";

export default function Home() {
    return (
        <div className="container p-4">
            <h1 className="h4 fw-bold text-center my-4">Loja de Bebês</h1>
            <p className="text-center">Bem-vindo à melhor loja para seu bebê! 🌟</p>
            <div className="text-center my-4">
                <img 
                    src="/images/baby-store-banner.jpg" 
                    alt="Loja de Bebês" 
                    className="img-fluid rounded" 
                    style={{ maxWidth: "600px" }}
                />
            </div>
            <div className="d-flex justify-content-center mt-4">
                <Link href="/produtos">
                    <button className="btn btn-primary px-4 py-2">
                        Ver Produtos
                    </button>
                </Link>
            </div>
        </div>
    );
}