import React from 'react'
import { Ventas } from '../Components/Ventas'
import { useQuery } from '@apollo/client'
import { GET_VENTAS } from '../hoc/Query/getVentas'

export  function PageVentas() {
  const { data, loading } = useQuery(GET_VENTAS)
  return (
   
    data && <Ventas products={data.getFactura.factura} loading={loading}/>  
    
  )
  }
