import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-blue-500 p-4 text-white flex justify-between">
            <Link href="/">
                <h1 className="text-xl font-bold">E-commerce Baby</h1>
            </Link>
            <div className="space-x-4">
                <Link href="/produtos">Produtos</Link>
                <Link href="/carrinho">Carrinho</Link>
                <Link href="/contato">Contato</Link>
            </div>
        </nav>
    );
}
