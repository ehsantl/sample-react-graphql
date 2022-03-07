import React from "react";
import { useParams } from "react-router";
import { useProduct } from "../hooks/useProduct";

export default function Product() {
  const {id} = useParams();
  const { data, loading, error } = useProduct(id);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;
  return <div>{JSON.stringify(data.product, null, 2)}</div>;
}