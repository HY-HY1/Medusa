import axios from "axios";

export async function Discount(code:string) {
    try {
        const response = await axios.get(
            `http://localhost:9000/admin/discounts/code/${code}`,
            {
                headers: {
                    'x-medusa-access-token':`pk_01HTAVDYDY5912PHVWC9HSA7WT` // Assuming Bearer token authentication
                    // Add other headers if needed
                }
            }
        );
        // Process response here
        console.log(response.data);
    }
    catch (error) {
        // Handle error here
        console.error("Error fetching discount:", error);
    }
}
