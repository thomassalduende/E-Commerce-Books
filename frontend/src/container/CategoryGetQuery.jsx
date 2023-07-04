import '../components/Category/index.css'
import { useQuery } from "@apollo/client"
import { GET_CATEGORY } from "../hoc/Query/getCategorias"
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Category } from "../components/Category";


export function CategoryGetQuery () {
  const { data, loading } = useQuery(GET_CATEGORY)
  return (
    <section className="section-category">
      {loading
        ? <AiOutlineLoading3Quarters style={{marginLeft:'50%', marginTop: '20%'}} size='32px'/> 
        : data && data.getGeneros.genero.map(product => (
          <Category key={product.nombre} product={product} />
          ))
      }
  </section>
  )
}
