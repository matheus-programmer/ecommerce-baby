import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary p-3">
            <div className="container-fluid">
                <Link href="/" className="navbar-brand">
                    <h1 className="h4 mb-0">E-commerce Baby</h1>
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="navbar-nav ms-auto gap-3">
                        <Link href="/produtos" className="nav-link text-white">
                            Produtos
                        </Link>
                        <Link href="/carrinho" className="nav-link text-white">
                            Carrinho
                        </Link>
                        <Link href="/contato" className="nav-link text-white">
                            Contato
                        </Link>
                        <Link href="/login" className="nav-link text-white">
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}