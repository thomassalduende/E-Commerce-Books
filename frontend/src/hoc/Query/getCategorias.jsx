import { gql } from "@apollo/client";


export const GET_CATEGORY = gql`
query GetGeneros {
  getGeneros {
    genero {
      nombre
      url_imagen
    }
  }
}
`