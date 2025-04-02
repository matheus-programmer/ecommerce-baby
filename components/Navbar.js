import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary p-3">
            <div className="container-fluid">
                <Link href="/" className="navbar-brand">
                    <h1 className="h4 mb-0">E-commerce Baby</h1>
                </Link>
                <div className="d-flex">
                    <Link href="/produtos" className="nav-link text-white">
                        Produtos
                    </Link>
                    <Link href="/carrinho" className="nav-link text-white">
                        Carrinho
                    </Link>
                    <Link href="/contato" className="nav-link text-white">
                        Contato
                    </Link>
                </div>
            </div>
        </nav>
    );
}