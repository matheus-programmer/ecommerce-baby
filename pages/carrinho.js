import { useCart } from "../context/CartContext";
import { formatPrice } from "../utils/formatPrice";
import Link from "next/link";
import { useState } from "react";

export default function Carrinho() {
    const { cart, removeFromCart } = useCart();
    const [quantities, setQuantities] = useState({});

    // Inicializa as quantidades se ainda não existirem
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
        // Também remove da quantidade
        const newQuantities = { ...quantities };
        delete newQuantities[id];
        setQuantities(newQuantities);
    };

    if (cart.length === 0) {
        return (
            <div className="container mx-auto p-4 min-h-screen">
                <h1 className="text-2xl font-bold text-center my-6">Seu Carrinho</h1>
                <div className="text-center">
                    <p className="mb-4">Seu carrinho está vazio.</p>
                    <Link href="/produtos">
                        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition">
                            Ver Produtos
                        </button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold text-center my-6">Seu Carrinho</h1>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Produto
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Preço
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Quantidade
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Subtotal
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Ações
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {cart.map((item) => (
                                <tr key={item.objectId}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 h-16 w-16">
                                                <img className="h-16 w-16 object-cover rounded-md" src={item.image} alt={item.name} />
                                            </div>
                                            <div className="ml-4">
                                                <div className="text-sm font-medium text-gray-900">{item.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{formatPrice(item.price)}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <button 
                                                onClick={() => updateQuantity(item.objectId, (quantities[item.objectId] || 1) - 1)}
                                                className="bg-gray-200 px-2 py-1 rounded-l"
                                            >
                                                -
                                            </button>
                                            <input 
                                                type="number" 
                                                min="1"
                                                value={quantities[item.objectId] || 1}
                                                onChange={(e) => updateQuantity(item.objectId, parseInt(e.target.value) || 1)}
                                                className="w-12 text-center border-t border-b"
                                            />
                                            <button 
                                                onClick={() => updateQuantity(item.objectId, (quantities[item.objectId] || 1) + 1)}
                                                className="bg-gray-200 px-2 py-1 rounded-r"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        {formatPrice(item.price * (quantities[item.objectId] || 1))}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <button 
                                            onClick={() => handleRemove(item.objectId)}
                                            className="text-red-600 hover:text-red-800"
                                        >
                                            Remover
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                
                <div className="border-t border-gray-200 px-6 py-4">
                    <div className="flex justify-between items-center">
                        <div className="text-lg font-bold">Total</div>
                        <div className="text-xl font-bold">{formatPrice(calculateTotal())}</div>
                    </div>
                </div>
            </div>
            
            <div className="mt-6 flex justify-between">
                <Link href="/produtos">
                    <button className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition">
                        Continuar Comprando
                    </button>
                </Link>
                <Link href="/checkout">
                    <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition">
                        Finalizar Compra
                    </button>
                </Link>
            </div>
        </div>
    );
}