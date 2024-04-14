"use client"
import { useProducts } from "@/hooks/useProduct";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Products = () => {
  const products = useProducts();

  return (
    <div>
      {products ? (
        <>
          <div className="w-[90vw] m-auto py-4">
            <div className="grid grid-cols-4 gap-10">
              {products.map((product) => (
                <Link key={product.id} href={`/products/${product.handle}?id=${product.id}`}>
                    <div>
                      <img src={product.thumbnail} alt={product.title} className="w-full" />
                    </div>
                    <div>
                      <p>{product.title}</p>
                    </div>
                </Link>
              ))}
            </div>
          </div>
        </>
      ) : (
        <></> // You might want to show a loading spinner or some other indicator here
      )}
    </div>
  );
};

export default Products;
