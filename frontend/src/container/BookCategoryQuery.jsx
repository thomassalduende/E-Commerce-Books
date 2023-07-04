import { useQuery } from "@apollo/client";
import { GET_BOOK_CATEGORY } from "../hoc/Query/getBookCategory";
import { Product } from "../components/Product";
import '../components/ListOfProducts/index.css'
import { useParams } from "react-router-dom";
export function BookCategoryQuery() {
  const { genero } = useParams()
  const { data, loading } = useQuery(GET_BOOK_CATEGORY, {
    variables: { genero }
  }
  )

  return (
    <div className="vh">
      {
        loading
        ? null
        : <section className="container">

       { data && data.getBook.book.map(product => (
          <Product key={product.isbn} product={product} />

        )) }
        </section>
      }
    </div>
  )
}
