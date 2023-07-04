import { useQuery } from '@apollo/client';
import React from 'react'
import ReactStars from "react-rating-stars-component";
import { GET_VALORACION } from '../../hoc/Query/getValoracion';
export function StartComponents({ isbn }) {
  const { data } = useQuery(GET_VALORACION, {
    variables: {isbn: isbn}
  })
  const handleStart = () => {
    const total = data.getBook.book[0].valoracion.reduce((acc, curr) => acc + curr.cantidad_estrellas, 0);
    return total / data.getBook.book[0].valoracion.length
   }
  return (
    data &&
    <ReactStars
      count={5}
      value={handleStart()}
      size={27}
      activeColor="#ffd700"
      edit={false}
    />
  )
}
