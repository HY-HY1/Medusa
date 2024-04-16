"use client";
import React from "react";
import { useCart, CartData } from "@/hooks/useCart";
import { CartData as CartDataType, CartItem } from "@/types/Cart";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Trash } from "lucide-react";
import { Discount } from "@/utils/cart/discount";
import { useState } from "react";
import { RemoveFromCart } from "@/utils/cart/removeFromCart";

// Define a type guard function to check if the object is a CartData
function isCartData(obj: any): obj is CartDataType {

  return obj && obj.items && Array.isArray(obj.items);
}

const Cart = () => {
  const { cart, loading }: CartData = useCart();
  const [code, setCode] = useState('')

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!cart || !isCartData(cart)) {
    return <div>No items in cart</div>;
  }

  return (
    <div className="w-[90vw] m-auto h-[80vh] py-4 overflow-hidden">
      {cart.items.map((item: CartItem) => (
        <div key={item.id} className="grid grid-cols-10">
          <div
            className="col-span-7 w-full max-h-[80vh] overflow-y-scroll overflow-x-hidden"
            style={{
              scrollbarWidth: "thin", // Width of the scrollbar
              scrollbarColor: "#fff #fff", // Color of the scrollbar handle and track
            }}
          >
            {" "}
            {/* 70% width */}
            <div className="w-[60vw] h-[50vh] m-auto">
              <div className="grid grid-cols-5 gap-4 text-xs sm:text-sm md:text-[14] lg:text-[15px] xl:text-[16px] py-4 border-b">
                <div>
                  <Link
                    href={`/products/${item.variant.product.handle}?id=${item.variant.product_id}`}
                  >
                    <img
                      src={item.thumbnail}
                      className="rounded-sm w-2/3"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="m-auto">
                  <p>{item.title}</p>
                </div>
                <div className="m-auto">{item.quantity}</div>
                <div className="m-auto">
                  {cart.region.currency_code.toUpperCase()}{" "}
                  {(item.subtotal / 100).toFixed(2)}
                </div>
                <div className="m-auto">
                  <Trash
                   size={20}
                   />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 shadow-sm rounded-md h-full ml-auto">
            {" "}
            {/* 30% width */}
            <div>
              <h1 className="text-lg">Cart</h1>
              <div className="py-2">
                <Label>Discount</Label>
                <div className="flex flex-row">
                  <Input onChange={(e) => setCode(e.target.value) } type="text" placeholder="Enter Code" />
                  <Button onClick={() => Discount(code)} className="ml-2" variant={"outline"}>
                    Apply
                  </Button>
                </div>
              </div>
              <div className="py-2">
                <p>
                  {cart.region.currency_code.toUpperCase()}{" "}
                  {(item.subtotal / 100).toFixed(2)}
                </p>
              </div>
              <div className="py-4">
                <Button variant={"default"}>Checkout</Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
