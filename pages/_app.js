import "bootstrap/dist/css/bootstrap.min.css"; // CSS do Bootstrap
import "../styles/globals.css"; // Seus estilos globais
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CartProvider } from "../context/CartContext";
import { useEffect } from "react";

export default function MyApp({ Component, pageProps }) {
    useEffect(() => {
        // Carrega o JavaScript do Bootstrap apenas no cliente
        if (typeof window !== "undefined") {
            require("bootstrap/dist/js/bootstrap.bundle.min.js");
        }
    }, []);

    return (
        <CartProvider>
            <div className="d-flex flex-column min-vh-100">
                <Navbar />
                <main className="flex-grow-1">
                    <Component {...pageProps} />
                </main>
                <Footer />
            </div>
        </CartProvider>
    );
}