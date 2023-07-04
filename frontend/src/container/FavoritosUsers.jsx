import '../components/ListOfProducts/index.css'
import React, { useContext } from 'react'
import { userContext } from '../Context/user'
import { useQuery } from '@apollo/client'
import { GET_FAVORITOS_USER } from '../hoc/Query/getFavoritosUser'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { Favorito } from '../components/Favorito'

export function FavoritosUsers() {

  const { isAuth } = useContext(userContext)
  const { data, loading } = useQuery(GET_FAVORITOS_USER, {
    variables: { tokenUser: isAuth }
  })
  return (
    <>
      {
        data &&  data.getFavoritos.favoritos.length > 0
        ? loading
            ? <AiOutlineLoading3Quarters style={{marginLeft:'50%', marginTop: '30%'}} size='32px'/> 
            : < section style={{height: '80vh'}} className='container'>
                {data && data.getFavoritos.favoritos.map(product => (
                  <Favorito key={product.books.isbn} product={product.books} />
                )) }
              </section>  
          : <h5 style={{height: '85vh' ,color: 'red', display: 'grid', justifyContent: 'center', marginTop: '1%', alignItems: 'center' }}>No tienes libro Favoritos!</h5>
      }
    </>
  )
}