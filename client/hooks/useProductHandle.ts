import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

interface ProductData {
    product: any;
    loading: boolean;
    error: string;
}

export function useProductHandle(): ProductData {
    const [product, setProduct] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');

    const searchParams = useSearchParams();
    const id = searchParams.get('id');

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (id) {
                    const response = await axios.get(`http://localhost:9000/store/products/${id}`);
                    setProduct(response.data.product);
                    setLoading(false);
                }
            } catch (error) {
                console.error(error);
                setError('Error fetching product data.');
                setLoading(false);
            }
        };

        fetchData();

        // Cleanup function if needed
        return () => {
            // cleanup logic here
        };
    }, [id]);

    return { product, loading, error };
}
