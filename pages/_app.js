import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CartProvider } from "../context/CartContext";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
    return (
        <CartProvider>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
        </CartProvider>
    );
}
