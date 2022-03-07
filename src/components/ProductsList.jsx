import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_CHARACTERS = gql`
  query Products {
    products {
      id
      name
    }
  }
`

export default function ProductsList() {
  const {error, data, loading} = useQuery(GET_CHARACTERS);

  console.log(error, data, loading)
  return (<div></div>)
}