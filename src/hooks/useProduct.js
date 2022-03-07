import { useQuery, gql } from "@apollo/client";

const GET_PRODUCT = gql`
  query Products($productId: ID!) {
    product(id: $productId) {
      id
      name
      description
      image
      quantity
      price
      onSale
    }
  }
`;
export const useProduct = (productId) => {
  const { error, data, loading } = useQuery(GET_PRODUCT, {
    variables: {
      productId,
    },
  });

  return {
    error,
    data,
    loading,
  };
};
