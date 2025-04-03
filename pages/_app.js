import "bootstrap/dist/css/bootstrap.min.css"; // Importa o CSS do Bootstrap
import "../styles/globals.css"; // Importa os estilos globais
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CartProvider } from "../context/CartContext";

export default function MyApp({ Component, pageProps }) {
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