import React, { useContext, useState } from 'react'
import './index.css'
import { userContext } from '../../Context/user'
import { useMutation, useQuery } from '@apollo/client'
import { POST_COMENTARIOS } from '../../hoc/Mutation/postComentarios'
import { useRef } from 'react'
import { toast } from 'react-toastify'
import { GET_COMENTARIOS_USER } from '../../hoc/Query/GetComentariosUser'

export function AddComentarios({ isbn }) {
  const { isAuth } = useContext(userContext)
  const [ createComentario ] = useMutation(POST_COMENTARIOS)

  const { data } = useQuery(GET_COMENTARIOS_USER, {
    skip: !isAuth,
    variables: { isbn, tokenUser: isAuth }
  });
  
  const form = useRef()
  const [error, setError] = useState('')

  const handleRefresh = () =>{
    setTimeout(() => {
      window.location.reload(true);
    }, 2500);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(form.current)
    const buyer = {
      'comentario': formData.get('comentario')   
    }
    if (buyer.comentario !== '') {
      createComentario({
        variables: {coment: buyer.comentario, isbn: isbn, tokenUser: isAuth}
      })
      toast.success('Comentario añadido con éxito')
      handleRefresh()
    } else {
      setError('Error, campo vacio')
    }
  }
  
  return (
    // si compro el libro, evalua si ya comento o no, si ya comento muestra el parrafo, sino deja comentar
    data && data.ExistComentario.comprado && (
      data && data.ExistComentario.comentario 
        ? <p> Solo se permite un comentario, si desea modifique su comentario!</p>
        : <form ref={form} onSubmit={handleSubmit}> 
            <textarea className='add-comentarios' name='comentario'></textarea>
            {error && <p style={{display: 'grid', justifyContent:'center', color:'red'}}>{error}</p>}
            <button className='button-enviar'>Enviar</button>
          </form>
    )
  )
}
