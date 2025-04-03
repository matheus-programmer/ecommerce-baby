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
        alert("Pedido realizado com sucesso!");
        router.push("/");
    };

    if (cart.length === 0) {
        return (
            <div className="container p-4 text-center min-vh-100 d-flex flex-column justify-content-center align-items-center">
                <h1 className="h4 mb-4">Checkout</h1>
                <p>Seu carrinho está vazio.</p>
                <button 
                    onClick={() => router.push("/produtos")}
                    className="btn btn-primary mt-3"
                >
                    Ver Produtos
                </button>
            </div>
        );
    }

    return (
        <div className="container p-4">
            <h1 className="h4 text-center mb-4">Finalizar Compra</h1>
            
            <div className="row g-4">
                {/* Formulário de Checkout */}
                <div className="col-lg-6">
                    <div className="bg-white p-4 rounded shadow-sm">
                        <h2 className="h5 mb-3">Informações de Entrega</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Nome Completo</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="form-control"
                                    required
                                />
                            </div>
                            
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="form-control"
                                    required
                                />
                            </div>
                            
                            <div className="mb-3">
                                <label className="form-label">Endereço</label>
                                <input
                                    type="text"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    className="form-control"
                                    required
                                />
                            </div>
                            
                            <div className="row g-3 mb-3">
                                <div className="col">
                                    <label className="form-label">Cidade</label>
                                    <input
                                        type="text"
                                        name="city"
                                        value={formData.city}
                                        onChange={handleChange}
                                        className="form-control"
                                        required
                                    />
                                </div>
                                <div className="col">
                                    <label className="form-label">Estado</label>
                                    <input
                                        type="text"
                                        name="state"
                                        value={formData.state}
                                        onChange={handleChange}
                                        className="form-control"
                                        required
                                    />
                                </div>
                            </div>
                            
                            <div className="mb-3">
                                <label className="form-label">CEP</label>
                                <input
                                    type="text"
                                    name="zipCode"
                                    value={formData.zipCode}
                                    onChange={handleChange}
                                    className="form-control"
                                    required
                                />
                            </div>
                            
                            <div className="mb-4">
                                <h3 className="h6 mb-2">Método de Pagamento</h3>
                                <div className="form-check">
                                    <input
                                        type="radio"
                                        name="paymentMethod"
                                        value="pix"
                                        checked={formData.paymentMethod === "pix"}
                                        onChange={handleChange}
                                        className="form-check-input"
                                    />
                                    <label className="form-check-label">PIX</label>
                                </div>
                                <div className="form-check">
                                    <input
                                        type="radio"
                                        name="paymentMethod"
                                        value="creditCard"
                                        checked={formData.paymentMethod === "creditCard"}
                                        onChange={handleChange}
                                        className="form-check-input"
                                    />
                                    <label className="form-check-label">Cartão de Crédito</label>
                                </div>
                                <div className="form-check">
                                    <input
                                        type="radio"
                                        name="paymentMethod"
                                        value="bankTransfer"
                                        checked={formData.paymentMethod === "bankTransfer"}
                                        onChange={handleChange}
                                        className="form-check-input"
                                    />
                                    <label className="form-check-label">Transferência Bancária</label>
                                </div>
                            </div>
                            
                            <button
                                type="submit"
                                className="btn btn-success w-100"
                            >
                                Finalizar Pedido
                            </button>
                        </form>
                    </div>
                </div>
                
                {/* Resumo do Pedido */}
                <div className="col-lg-6">
                    <div className="bg-white p-4 rounded shadow-sm">
                        <h2 className="h5 mb-3">Resumo do Pedido</h2>
                        <ul className="list-group mb-3">
                            {cart.map((item) => (
                                <li key={item.objectId} className="list-group-item d-flex justify-content-between">
                                    <div>
                                        <p className="mb-0">{item.name}</p>
                                        <small className="text-muted">Qtd: 1</small>
                                    </div>
                                    <span>R$ {item.price.toFixed(2)}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="border-top pt-3">
                            <div className="d-flex justify-content-between">
                                <span className="fw-bold">Total:</span>
                                <span className="fw-bold">R$ {total.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}