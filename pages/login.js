import { useState } from "react";
import { useRouter } from "next/router";

export default function Login() {
    const router = useRouter();
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");

        // Validação simples
        if (!formData.email || !formData.password) {
            setError("Por favor, preencha todos os campos.");
            return;
        }

        // Simular login bem-sucedido
        alert("Login realizado com sucesso!");
        router.push("/");
    };

    return (
        <div className="container d-flex justify-content-center align-items-center p-4" style={{ minHeight: "100vh" }}>
            <div className="w-100" style={{ maxWidth: "400px" }}>
                <h1 className="h4 text-center my-4">Login</h1>
                
                {error && (
                    <div className="alert alert-danger" role="alert">
                        {error}
                    </div>
                )}
                
                <form onSubmit={handleSubmit} className="bg-white shadow rounded p-4">
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
                    </div>
                    
                    <div className="d-grid">
                        <button className="btn btn-primary" type="submit">
                            Entrar
                        </button>
                    </div>
                    
                    <div className="text-center mt-3">
                        <p className="small">
                            Não tem uma conta?{" "}
                            <a href="/cadastro" className="text-primary">
                                Cadastre-se
                            </a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}