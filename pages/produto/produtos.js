import { useEffect, useState } from "react";
import { getProducts } from "../services/api";
import ProductCard from "../components/ProductCard";

export default function Produtos() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then(setProducts);
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold text-center my-6">Produtos</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {products.map((product) => (
                    <ProductCard key={product.objectId} product={product} />
                ))}
            </div>
        </div>
    );
}
