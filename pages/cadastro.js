import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Cadastro() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");

        // Validações básicas
        if (formData.password !== formData.confirmPassword) {
            setError("As senhas não correspondem");
            return;
        }

        if (formData.password.length < 6) {
            setError("A senha deve ter pelo menos 6 caracteres");
            return;
        }

        // Aqui implementaria a lógica de cadastro com Back4App
        console.log("Cadastro:", formData);
        
        // Simular sucesso e redirecionar
        alert("Cadastro realizado com sucesso!");
        router.push("/login");
    };

    return (
        <div className="container d-flex justify-content-center p-4">
            <div className="w-100" style={{ maxWidth: "400px" }}>
                <h1 className="h4 text-center my-4">Cadastre-se</h1>
                
                {error && (
                    <div className="alert alert-danger" role="alert">
                        {error}
                    </div>
                )}
                
                <form onSubmit={handleSubmit} className="bg-white shadow rounded p-4">
                    <div className="mb-3">
                        <label className="form-label" htmlFor="name">
                            Nome Completo
                        </label>
                        <input
                            className="form-control"
                            id="name"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    
                    <div className="mb-3">
                        <label className="form-label" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="form-control"
                            id="email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    
                    <div className="mb-3">
                        <label className="form-label" htmlFor="password">
                            Senha
                        </label>
                        <input
                            className="form-control"
                            id="password"
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                        <small className="form-text text-muted">Mínimo de 6 caracteres</small>
                    </div>
                    
                    <div className="mb-3">
                        <label className="form-label" htmlFor="confirmPassword">
                            Confirmar Senha
                        </label>
                        <input
                            className="form-control"
                            id="confirmPassword"
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    
                    <div className="d-grid">
                        <button
                            className="btn btn-primary"
                            type="submit"
                        >
                            Cadastrar
                        </button>
                    </div>
                    
                    <div className="text-center mt-3">
                        <p className="small">
                            Já tem uma conta?{" "}
                            <Link href="/login" className="text-primary">
                                Faça login
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}