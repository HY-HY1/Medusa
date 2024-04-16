import axios, {AxiosResponse} from "axios";

export async function CreateCheckoutSession() {

    const cartID = localStorage.getItem('cartID')
    if(!cartID) {
        return
    }

    try {
        const response = await axios.post(
            `http://localhost:9000/store/carts/${cartID}/payment-session`,
            { 'provider_id': "stripe"},
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }

        )

        console.log(response)

    } catch (error) {
       
    }
}