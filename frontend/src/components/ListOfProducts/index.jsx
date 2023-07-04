import './index.css'
import { Product } from '../Product'
import { useQuery } from '@apollo/client'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { useParams } from 'react-router-dom'
import { withProductSearch } from '../../hoc/Query/withProductSearch'
import { useFilter } from '../../hooks/useFilter'

export function ListOfProducts () {
  const { search} = useParams()
  const { data, loading } = useQuery(withProductSearch , {
    variables: {nombre: search, isbn: search, genero: search, autor: search}
  })

  const { filterProducts } = useFilter()
  const filtrado = loading 
    ? null
    : data && filterProducts(data && data.busquedaLibros.book)
  
  return (
      loading      //si loading es false, evaluo si dataFilter es undefaind, si lo es no esta el libro, y si no lo es mapeo los libros buscado
        ? <AiOutlineLoading3Quarters style={{marginLeft:'50%', marginTop: '30%'}} size='32px'/> 
        : data === undefined || filtrado.length === 0
          ? <h5 style={{height:'70vh' ,color: 'red', display: 'grid', justifyContent: 'center', marginTop: '10%' }}>Libro no encontrado!</h5>
          :  
          <section className='container'>
            {filtrado.map(product => (
              <Product key={product.isbn} product={product} />
            )) }
          </section>

      
  )
}

