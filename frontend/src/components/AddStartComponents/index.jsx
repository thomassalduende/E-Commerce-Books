import { useMutation, useQuery } from '@apollo/client';
import React from 'react'
import ReactStars from "react-rating-stars-component";
import { POST_VALORACION } from '../../hoc/Mutation/postValoracion';
import { useState } from 'react';
import { useContext } from 'react';
import { userContext } from '../../Context/user';
import { GET_VALORACION_USER } from '../../hoc/Query/getValoracionUser';
export function AddStartsComponents({ isbn }) {
  const { isAuth } = useContext(userContext)
  const [insertValoracion] = useMutation(POST_VALORACION)
  const { data, loading } = useQuery(GET_VALORACION_USER,{
    skip: !isAuth,
    variables: { isbn: isbn, tokenUser: isAuth }
  })
  const handleChange = (rating) => {
    insertValoracion({
      variables: {tokenUser: isAuth, isbn:isbn, cantEstrellas: rating }
    })
  }
  

  return (
    loading
      ? null
      : <ReactStars
          count={5}
          size={27}
          onChange={handleChange}
          activeColor="#ffd700"
          value={data && data.existValoracion.cantidad_estrellas}
        />
    
  )
}
