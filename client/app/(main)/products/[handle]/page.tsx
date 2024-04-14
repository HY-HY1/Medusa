"use client";
import React, { useState } from "react";
import { useProductHandle } from "@/hooks/useProductHandle";
import { ProductBreadCrumb } from "@/app/(main)/_components/ProductBreadcrumb";
import { useParams } from "next/navigation";
import { Image } from "@/types/ProductResponse";
import { Images } from "lucide-react";
import { Button } from "@/components/ui/button";
import { addToCart } from "@/utils/cart/addToCart";

const ProductPage = () => {
  const { product, loading, error } = useProductHandle();
  const [primary, setPrimary] = useState(product.thumbnail);
  const handle = useParams();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div className="m-auto w-[80vw]">
        <div className="grid grid-cols-2 gap-20 pt-4">
          <div className="">
            <img
              className="rounded-md"
              src={primary || product.thumbnail}
              alt=""
            />
            <div>
              <div className="grid grid-cols-4 gap-2 py-2">
                {product.images.map((image: Image) => (
                  // console.log(image.url)
                  <div onClick={() => setPrimary(image.url)}>
                    <img key={image.id} src={image.url} alt="" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <ProductBreadCrumb />
            <h1>{product.title}</h1>
            <div className="py-2">
              <Button onClick={() => addToCart(product.variants[0].id)} variant={'default'}>Buy Now</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
