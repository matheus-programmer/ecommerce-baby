import { createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
    // Inicializa o carrinho a partir do localStorage se disponível
    const [cart, setCart] = useState([]);
    
    // Carrega o carrinho do localStorage na inicialização
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const savedCart = localStorage.getItem('cart');
            if (savedCart) {
                try {
                    setCart(JSON.parse(savedCart));
                } catch (error) {
                    console.error("Erro ao carregar o carrinho:", error);
                    setCart([]);
                }
            }
        }
    }, []);
    
    // Salva o carrinho no localStorage sempre que for atualizado
    useEffect(() => {
        if (typeof window !== 'undefined' && cart.length > 0) {
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    }, [cart]);

    // Adiciona produto ao carrinho
    function addToCart(product) {
        // Verifica se o produto já está no carrinho
        const existingProductIndex = cart.findIndex(item => item.objectId === product.objectId);
        
        if (existingProductIndex >= 0) {
            // Se já existe, apenas atualiza a quantidade
            const updatedCart = [...cart];
            updatedCart[existingProductIndex] = {
                ...updatedCart[existingProductIndex],
                quantity: (updatedCart[existingProductIndex].quantity || 1) + 1
            };
            setCart(updatedCart);
        } else {
            // Se não existe, adiciona ao carrinho com quantidade 1
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    }

    // Remove produto do carrinho
    function removeFromCart(productId) {
        setCart(cart.filter((item) => item.objectId !== productId));
        // Também remove do localStorage se o carrinho ficar vazio
        if (cart.length <= 1 && typeof window !== 'undefined') {
            localStorage.removeItem('cart');
        }
    }

    // Atualiza a quantidade de um produto
    function updateQuantity(productId, quantity) {
        if (quantity < 1) return;
        
        const updatedCart = cart.map(item => 
            item.objectId === productId 
                ? { ...item, quantity: quantity } 
                : item
        );
        
        setCart(updatedCart);
    }

    // Limpa o carrinho
    function clearCart() {
        setCart([]);
        if (typeof window !== 'undefined') {
            localStorage.removeItem('cart');
        }
    }

    // Calcula o total do carrinho
    function getCartTotal() {
        return cart.reduce((total, item) => {
            return total + (item.price * (item.quantity || 1));
        }, 0);
    }

    // Conta o número de itens no carrinho
    function getCartCount() {
        return cart.reduce((count, item) => count + (item.quantity || 1), 0);
    }

    return (
        <CartContext.Provider 
            value={{ 
                cart, 
                addToCart, 
                removeFromCart, 
                updateQuantity,
                clearCart,
                getCartTotal,
                getCartCount
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}