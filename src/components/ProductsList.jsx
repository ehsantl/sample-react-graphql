import React from "react";
import { Link } from "react-router-dom";
import { useProducts } from "../hooks/useProducts";

export default function ProductsList() {
  const {error, loading, data} = useProducts();
  if (loading) return (<div>Loading...</div>)
  if (error) return <div>Error!</div>;
  return (
    <ul className="productList">
      {data.products.map((product, index) => {
        return (
          <li key={index}>
            <Link to={`/${product.id}`}>
              {product.name} (${product.price})
            </Link>
          </li>
        );
      })}
    </ul>
  );
}