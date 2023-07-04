import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_COMENTARIOS } from '../hoc/Query/getComentarios'
import { Comentarios } from '../components/Comentarios'
export  function ComentariosQuery({ isbn }) {
  const { data } = useQuery(GET_COMENTARIOS,{
    variables: { isbn: isbn}
  })
  return (
    data && data.getBook.book[0].opiniones.map((comen, index) => (
      <Comentarios key={index} comentario={comen} isbn={isbn} />
    )) 
  )
}