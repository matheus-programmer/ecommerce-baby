import { useCart } from "../context/CartContext";
import { formatPrice } from "../utils/formatPrice";
import Link from "next/link";
import { useState } from "react";

export default function Carrinho() {
    const { cart, removeFromCart } = useCart();
    const [quantities, setQuantities] = useState({});

    if (cart.length > 0 && Object.keys(quantities).length === 0) {
        const initialQuantities = {};
        cart.forEach(item => {
            initialQuantities[item.objectId] = 1;
        });
        setQuantities(initialQuantities);
    }

    const updateQuantity = (id, newQuantity) => {
        if (newQuantity < 1) return;
        setQuantities({
            ...quantities,
            [id]: newQuantity
        });
    };

    const calculateTotal = () => {
        return cart.reduce((total, item) => {
            return total + (item.price * (quantities[item.objectId] || 1));
        }, 0);
    };

    const handleRemove = (id) => {
        removeFromCart(id);
        const newQuantities = { ...quantities };
        delete newQuantities[id];
        setQuantities(newQuantities);
    };

    if (cart.length === 0) {
        return (
            <div className="container p-4 min-vh-100 d-flex flex-column align-items-center justify-content-center">
                <h1 className="h4 text-center mb-4">Seu Carrinho</h1>
                <p className="mb-4">Seu carrinho está vazio.</p>
                <Link href="/produto/produtos">
                    <button className="btn btn-primary">
                        Ver Produtos
                    </button>
                </Link>
            </div>
        );
    }

    return (
        <div className="container p-4">
            <h1 className="h4 text-center mb-4">Seu Carrinho</h1>
            
            <div className="bg-white border rounded shadow-sm p-4">
                <div className="table-responsive">
                    <table className="table">
                        <thead className="table-light">
                            <tr>
                                <th scope="col">Produto</th>
                                <th scope="col">Preço</th>
                                <th scope="col">Quantidade</th>
                                <th scope="col">Subtotal</th>
                                <th scope="col">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item) => (
                                <tr key={item.objectId}>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <img className="img-thumbnail me-3" src={item.image} alt={item.name} style={{ width: "64px", height: "64px" }} />
                                            <span>{item.name}</span>
                                        </div>
                                    </td>
                                    <td>{formatPrice(item.price)}</td>
                                    <td>
                                        <div className="input-group">
                                            <button 
                                                onClick={() => updateQuantity(item.objectId, (quantities[item.objectId] || 1) - 1)}
                                                className="btn btn-outline-secondary"
                                            >
                                                -
                                            </button>
                                            <input 
                                                type="number" 
                                                min="1"
                                                value={quantities[item.objectId] || 1}
                                                onChange={(e) => updateQuantity(item.objectId, parseInt(e.target.value) || 1)}
                                                className="form-control text-center"
                                            />
                                            <button 
                                                onClick={() => updateQuantity(item.objectId, (quantities[item.objectId] || 1) + 1)}
                                                className="btn btn-outline-secondary"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </td>
                                    <td>{formatPrice(item.price * (quantities[item.objectId] || 1))}</td>
                                    <td>
                                        <button 
                                            onClick={() => handleRemove(item.objectId)}
                                            className="btn btn-danger btn-sm"
                                        >
                                            Remover
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                
                <div className="border-top p-3">
                    <div className="d-flex justify-content-between">
                        <span className="fw-bold">Total</span>
                        <span className="fw-bold">{formatPrice(calculateTotal())}</span>
                    </div>
                </div>
            </div>
            
            <div className="mt-4 d-flex justify-content-between flex-wrap gap-3">
                <Link href="/produtos">
                    <button className="btn btn-secondary">
                        Continuar Comprando
                    </button>
                </Link>
                <Link href="/checkout">
                    <button className="btn btn-success">
                        Finalizar Compra
                    </button>
                </Link>
            </div>
        </div>
    );
}