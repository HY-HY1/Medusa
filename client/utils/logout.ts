import axios from "axios";

export async function Logout() {
    const token = localStorage.getItem('token')
    // if(!token) {
    //     return
    // }
    try {
        const response = await axios.delete(
            'http://localhost:9000/store/auth',
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                  }
            }
        )

        if( response.status === 200) {
            localStorage.removeItem('token')
            window.location.href = '/'
        }
    }
    catch (error) {

    }
}