import axios from "axios";
import { useState, useEffect } from "react";

export interface CartData {
  cart: any[] | undefined; // Adjust the type according to your cart item structure
  loading: boolean;
}

export function useCart(): CartData {
  const [cart, setCart] = useState<any[] | undefined>(undefined); // Adjust the type according to your cart item structure
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCart = async () => {
      const cartId = localStorage.getItem("cartID");
      if (!cartId) {
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(
          `http://localhost:9000/store/carts/${cartId}`
        );
        if (response.status !== 200) {
          throw new Error("Failed to fetch cart data");
        }
        setCart(response.data.cart);
      } catch (error) {
        console.error("Error fetching cart data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, []);

  return { cart, loading };
}
