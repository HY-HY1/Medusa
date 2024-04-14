import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { ProductResponse } from '@/types/ProductResponse';
export function useProducts() {
    const [products, setProducts] = useState<any[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response: AxiosResponse<any> = await axios.get('http://localhost:9000/store/products');
                if (response.status === 200) {
                    console.log("Products", response.data);
                    setProducts(response.data.products); // Accessing the 'products' property of the first element in the array
                }
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, []);

    return products;
}
