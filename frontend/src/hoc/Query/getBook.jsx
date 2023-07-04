import { gql } from "@apollo/client";

//TRAIGO LIBROS POR ISBN, LO USO PARA EL TEMPLATE
export const GET_PRODUCTS = gql`
query GetBook($isbn: String!) {
  getBook(isbn: $isbn) {
    book {
      nombre
      isbn
      url_imagen 
      precio
      stock
      descuento
      descripcion
      editorial {
        nombre
      }
      genero {
        nombre
      }
      autor {
        nombre
      }
            
    }
  }
}
`