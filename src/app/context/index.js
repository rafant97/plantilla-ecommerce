'use client'
import { createContext, useState, useContext, useEffect } from "react";
import Client from 'shopify-buy'

const AppContext = createContext();

const client = Client.buildClient({
    domain: `${process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN}`,
    storefrontAccessToken: `${process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_API}`,
})

export function AppWrapper({ children }) {
    const [product, setProduct] = useState({});
    let [productsState, setProductsState] = useState([]);
    const [checkout, setCheckout] = useState({});
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    useEffect(() => {
        if(localStorage.checkout_id) {
            fetchCheckout(localStorage.checkout_id)
        } else {
            createCheckout()
        }
    }, [])

    // Create an empty checkout
    const createCheckout = async () => {
        const checkout = await client.checkout.create()
        localStorage.getItem('checkout_id', checkout.id)
        setCheckout(checkout)
    };

    // Fetch a checkout
    const fetchCheckout = async (checkoutId) => {
      try {
        const checkout = await client.checkout.fetch(checkoutId);
        setCheckout(checkout);
      } catch (error) {
        console.error('Error fetching checkout:', error);
      }
    };

    // Fetch all products in your shop
    const fetchAllProducts = async () => {
        const productList = await client.product.fetchAll();
        setProductsState(productList);
    }
    

    return (
        <AppContext.Provider 
            value={{
                ...productsState,
                fetchAllProducts,
                productsState,
                
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext() {
    return useContext(AppContext);
}