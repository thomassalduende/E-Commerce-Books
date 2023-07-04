import React from 'react'
import { User } from '../Components/User'
import { useQuery } from '@apollo/client'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { GET_CUPON } from '../hoc/Query/getCupon'
import { Cupon } from '../Components/Cupon'

export  function CuponesPage() {
  const {data, loading} = useQuery(GET_CUPON)
  return (
    loading 
      ? <AiOutlineLoading3Quarters style={{marginLeft:'50%', marginTop: '20%'}} size='32px'/> 
      :  data && <Cupon cupones={data.getCupones.cupon}/>  
  )
}
