import axios from "axios";
import { createCart } from "./createCart";

interface Props {
    variant_id: string;
}

export async function addToCart(variant_id: string) {
    // const { variant_id } = props;
    console.log(variant_id)

    const cartID = localStorage.getItem('cartID');
    if (!cartID) {
        createCart();
    }

    try {
        const response = await axios.post(
            `http://localhost:9000/store/carts/${cartID}/line-items`,
            {
                quantity: 1,
                variant_id: variant_id
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
        console.log(response)
    } catch (error) {
        // Handle error
    }
}
