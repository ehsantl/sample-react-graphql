import { useQuery, gql } from "@apollo/client";

const GET_PRODUCTS = gql`
  query Products {
    products {
      id
      name
      price
    }
  }
`
export const useProducts = () => {
  const { error, data, loading } = useQuery(GET_PRODUCTS);

  return {
    error,
    data,
    loading
  }
}