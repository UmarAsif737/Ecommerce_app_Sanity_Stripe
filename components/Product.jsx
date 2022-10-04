import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";

const Product = ({ product }) => {
  const { image, price, name, slug } = product;
  return (
    <div>
      <Link href={"/product/${slug.current}"}>
        <div className="product-card">
          <img
            className="product-image"
            src={urlFor(image && image[0])}
            alt="headphone image"
          />
          <p className="product-name">{name}</p>
          <p className="product-price">${price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
