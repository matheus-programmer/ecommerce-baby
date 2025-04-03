import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getProducts } from "../../services/api";

export default function Produto() {
    const router = useRouter();
    const { id } = router.query;
    const [product, setProduct] = useState(null);

    useEffect(() => {
        if (id) {
            // Busca os produtos e encontra o produto correspondente ao ID
            getProducts().then((products) => {
                const foundProduct = products.find((item) => item.objectId === id);
                setProduct(foundProduct);
            });
        }
    }, [id]);

    if (!product) {
        return (
            <div className="container p-4 text-center">
                <h1 className="h4">Carregando...</h1>
            </div>
        );
    }

    return (
        <div className="container p-4">
            <h1 className="h2 fw-bold text-center my-4">{product.name}</h1>
            <div className="row">
                <div className="col-md-6 text-center">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="img-fluid rounded"
                        style={{ maxHeight: "400px", objectFit: "cover" }}
                    />
                </div>
                <div className="col-md-6">
                    <h2 className="h4 fw-bold">Descrição</h2>
                    <p>{product.description || "Sem descrição disponível."}</p>
                    <h3 className="h5 fw-bold mt-4">Preço</h3>
                    <p className="text-success h4">R$ {product.price.toFixed(2)}</p>
                    <button className="btn btn-success w-100 mt-3">
                        Adicionar ao Carrinho
                    </button>
                </div>
            </div>
        </div>
    );
}