import "bootstrap/dist/css/bootstrap.min.css"; // Importa o CSS do Bootstrap
import "../styles/globals.css"; // Importa os estilos globais
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CartProvider } from "../context/CartContext";

export default function MyApp({ Component, pageProps }) {
    return (
        <CartProvider>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
        </CartProvider>
    );
}