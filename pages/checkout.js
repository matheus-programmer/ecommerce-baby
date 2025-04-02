import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useRouter } from "next/router";

export default function Checkout() {
    const { cart } = useCart();
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        address: "",
        city: "",
        state: "",
        zipCode: "",
        paymentMethod: "pix"
    });

    const total = cart.reduce((sum, item) => sum + item.price, 0);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui implementaria a lógica de processamento do pedido
        alert("Pedido realizado com sucesso!");
        router.push("/");
    };

    if (cart.length === 0) {
        return (
            <div className="container mx-auto p-4 text-center">
                <h1 className="text-2xl font-bold my-6">Checkout</h1>
                <p>Seu carrinho está vazio.</p>
                <button 
                    onClick={() => router.push("/produtos")}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-600 transition"
                >
                    Ver Produtos
                </button>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold text-center my-6">Finalizar Compra</h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Formulário de Checkout */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4">Informações de Entrega</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Nome Completo</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-md"
                                required
                            />
                        </div>
                        
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-md"
                                required
                            />
                        </div>
                        
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Endereço</label>
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-md"
                                required
                            />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                                <label className="block text-gray-700 mb-2">Cidade</label>
                                <input
                                    type="text"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded-md"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-2">Estado</label>
                                <input
                                    type="text"
                                    name="state"
                                    value={formData.state}
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded-md"
                                    required
                                />
                            </div>
                        </div>
                        
                        <div className="mb-6">
                            <label className="block text-gray-700 mb-2">CEP</label>
                            <input
                                type="text"
                                name="zipCode"
                                value={formData.zipCode}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-md"
                                required
                            />
                        </div>
                        
                        <div className="mb-6">
                            <h3 className="text-lg font-medium mb-3">Método de Pagamento</h3>
                            <div className="flex flex-col gap-2">
                                <label className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        name="paymentMethod"
                                        value="pix"
                                        checked={formData.paymentMethod === "pix"}
                                        onChange={handleChange}
                                    />
                                    <span>PIX</span>
                                </label>
                                <label className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        name="paymentMethod"
                                        value="creditCard"
                                        checked={formData.paymentMethod === "creditCard"}
                                        onChange={handleChange}
                                    />
                                    <span>Cartão de Crédito</span>
                                </label>
                                <label className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        name="paymentMethod"
                                        value="bankTransfer"
                                        checked={formData.paymentMethod === "bankTransfer"}
                                        onChange={handleChange}
                                    />
                                    <span>Transferência Bancária</span>
                                </label>
                            </div>
                        </div>
                        
                        <button
                            type="submit"
                            className="w-full bg-green-500 text-white py-3 rounded-lg font-medium hover:bg-green-600 transition"
                        >
                            Finalizar Pedido
                        </button>
                    </form>
                </div>
                
                {/* Resumo do Pedido */}
                <div className="bg-white p-6 rounded-lg shadow-md h-fit">
                    <h2 className="text-xl font-semibold mb-4">Resumo do Pedido</h2>
                    <div className="divide-y">
                        {cart.map((item) => (
                            <div key={item.objectId} className="flex justify-between py-3">
                                <div>
                                    <p className="font-medium">{item.name}</p>
                                    <p className="text-sm text-gray-600">Qtd: 1</p>
                                </div>
                                <p className="font-medium">R$ {item.price.toFixed(2)}</p>
                            </div>
                        ))}
                    </div>
                    <div className="border-t pt-4 mt-4">
                        <div className="flex justify-between font-medium">
                            <p>Total:</p>
                            <p className="text-lg">R$ {total.toFixed(2)}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}