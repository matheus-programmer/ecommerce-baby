import Link from "next/link";

export default function ProductCard({ product }) {
    return (
        <div className="border rounded-lg p-4 shadow-lg">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md" />
            <h2 className="text-lg font-bold mt-2">{product.name}</h2>
            <p className="text-gray-600">R$ {product.price.toFixed(2)}</p>
            <div className="mt-4 flex justify-between">
                <Link href={`/produto/${product.objectId}`}>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                        Ver Detalhes
                    </button>
                </Link>
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">
                    Adicionar ao Carrinho
                </button>
            </div>
        </div>
    );
}
