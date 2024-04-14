import axios from "axios";
import { useEffect, useState } from "react";

interface Customer {
  id: string;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  email: string;
  first_name: string;
  last_name: string | null;
  billing_address_id: string | null;
  phone: string | null;
  has_account: boolean;
  metadata: any; // You might want to define a type for metadata if its structure is known
  orders: any[]; // You might want to define a type for orders if its structure is known
  shipping_addresses: any[]; // You might want to define a type for shipping addresses if their structure is known
}



interface UserState {
  customer: Customer | null;
  loading: boolean;
  error: string;
}

export function useUser(): UserState {
  const [userState, setUserState] = useState<UserState>({
    customer: null,
    loading: true,
    error: ""
  });

  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchData = async () => {
      if (!token) {
        setUserState({ customer: null, loading: false, error: 'Token not found' });
        return;
      }
      try {
        const userID = localStorage.getItem("userID");
        // if (!userID) {
        //   throw new Error("User ID not found in local storage");
        // }

        const response = await axios.get<Customer>(
          `http://localhost:9000/store/auth`,
          {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          }
        );
        setUserState({ customer: response.data, loading: false, error: "" });
      } catch (error: any) {
        console.error(error);
        setUserState({ customer: null, loading: false, error: error.message });
      }
    };

    fetchData();

  }, []);

  return userState;
}
