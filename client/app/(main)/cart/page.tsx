"use client"
import React from 'react'
import { useCart, CartData } from '@/hooks/useCart'

// Define a type for the entire cart object, including its nested properties
interface CartObject {
  items: {
    id: string;
    title: string;
    price: number;
    thumbnail: string
    // Add other properties as needed
  }[];
  // Add other properties of the cart object as needed
}

// Type guard function to check if the object is a CartObject
function isCartObject(obj: any): obj is CartObject {
  return obj && obj.items && Array.isArray(obj.items);
}

const Cart = () => {
  const { cart, loading }: CartData = useCart();


  if (loading) {
    return <div>Loading...</div>;
  }

  if (!cart || !isCartObject(cart)) {
    return <div>No items in cart</div>;
  }

  return (
    <div>
      {cart.items.map((item) => (
        <div key={item.id}>
          <img src={item.thumbnail} className='w-1/4' alt="" />
          <p>{item.title}</p>
          {/* Add other cart item details as needed */}
        </div>
      ))}
    </div>
  )
}

export default Cart
