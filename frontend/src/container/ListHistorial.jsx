import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_HOSTORIAL } from '../hoc/Query/getHistorial'
import { useContext } from 'react'
import { userContext } from '../Context/user'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import '../components/ListOfProducts/index.css'
import { Historial } from '../components/Historial'

export function ListHistorial() {
  const { isAuth } = useContext(userContext)
  const { data, loading } = useQuery(GET_HOSTORIAL, {
    variables: {tokenUser: isAuth}
  })
  return (

    loading 
      ? <AiOutlineLoading3Quarters style={{marginLeft:'50%', marginTop: '30%'}} size='32px'/> 
      : data && data.getBooksComprados.book.length > 0
        ? <section style={{height: '80vh'}} className='container'>    
            {data && data.getBooksComprados.book.map(product => (
              <Historial key={product.isbn} product={product} />
            )) }
          </section>
        : <h5 style={{height: '100vh' ,color: 'red', display: 'grid', justifyContent: 'center', alignItems: 'center', marginTop: '1%' }}>No has comprado libros!</h5>

  )
}
