import axios from "axios";
export async function RemoveFromCart(lineID:string) {

    const cartID = localStorage.getItem('cartID')
    if(!cartID){
        return
    }

    try {
        const response = await axios.delete(
            `http://locahost:9000/store/carts/${cartID}/line-items/${lineID}`
        )

    
    } catch (error) {
        console.log(error)
    }
    
}