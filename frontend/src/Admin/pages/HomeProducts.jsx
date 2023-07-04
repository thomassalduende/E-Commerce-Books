import React from 'react'
import { gql, useQuery } from '@apollo/client'
import { GET_PRODUCTS_ALL } from '../hoc/Query/getBook'
import { Products } from '../Components/Products'

export function HomeProducts() {
  const { data, loading } = useQuery(GET_PRODUCTS_ALL)
  return (
    data && <Products products={data.getBook.book} loading={loading}/>
    )
}
