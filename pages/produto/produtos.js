import { useEffect, useState } from "react";
import { getProducts } from "../../services/api";
import ProductCard from "../../components/ProductCard";

export default function Produtos() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then(setProducts);
    }, []);

    return (
        <div className="container p-4">
            <h1 className="h2 fw-bold text-center my-4">Produtos</h1>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                {products.map((product) => (
                    <div key={product.objectId} className="col">
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
        </div>
    );
}