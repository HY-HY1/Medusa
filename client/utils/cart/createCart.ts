import axios from "axios"

export async function createCart() {
    
    try {
        const response = await axios.post(
            'http://localhost:9000/store/carts',
            {}
        )

        if(response.status === 200) {
            console.log('Cart Created', response.data)
        }
        localStorage.setItem('cartID', response.data.cart.id)
    } 
    catch (error) {
        
    }
}