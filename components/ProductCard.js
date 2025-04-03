import Link from "next/link";

export default function ProductCard({ product }) {
    return (
        <div className="card shadow-sm h-100">
            <img 
                src={product.image} 
                alt={product.name} 
                className="card-img-top" 
                style={{ objectFit: "cover", height: "200px" }} 
            />
            <div className="card-body d-flex flex-column">
                <h2 className="card-title h5">{product.name}</h2>
                <p className="card-text text-muted">R$ {product.price.toFixed(2)}</p>
                <div className="mt-auto d-flex justify-content-between">
                    <Link href={`/produto/${product.objectId}`}>
                        <button className="btn btn-primary">
                            Ver Detalhes
                        </button>
                    </Link>
                    <button className="btn btn-success">
                        Adicionar ao Carrinho
                    </button>
                </div>
            </div>
        </div>
    );
}