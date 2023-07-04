import React, { useContext, useState, useRef } from 'react'
import './index.css'
import { useMutation, useQuery } from '@apollo/client'
import { GET_COMENTARIOS_USER } from '../../hoc/Query/GetComentariosUser'
import { userContext } from '../../Context/user'
import { POST_COMENTARIOS } from '../../hoc/Mutation/postComentarios'
import { toast } from 'react-toastify'
import { RxCross2 } from 'react-icons/rx'
import { DELETE_COMENTARIOS } from '../../hoc/Mutation/deleteComentario'

export function Comentarios({ comentario, isbn }) {
  const { isAuth } = useContext(userContext)
  const { data } = useQuery(GET_COMENTARIOS_USER, {
    skip: !isAuth,
    variables: {isbn: isbn, tokenUser: isAuth}
  })

  const [ createComentario ] = useMutation(POST_COMENTARIOS)
  const [ deleteComentario ] = useMutation(DELETE_COMENTARIOS)

  const form = useRef()
  const [error, setError] = useState('')

  const handleRefresh = () =>{
    setTimeout(() => {
      window.location.reload(true);
    }, 2500);
  }

  //create comentario
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
      toast.success('Comentario modificado con éxito')
      handleRefresh()
    } else {
      setError('Error, campo vacio')
    }
  }

  // delete comentario 
  const handleDelete = () => {
    deleteComentario({
      variables: { isbn: isbn, tokenUser: isAuth }
    })
    .then(toast.success('Comentario eliminado con éxito'))
    .catch(null)
  }
      
  const [edit, setEdit] = useState(true)
  const handleEdit = () => {
    setEdit(false)
  }


  return (
    <div className='cont-comentarios'> 
      <h5>{comentario.nombre_user}</h5>
      {
        data && data.ExistComentario.id_user == comentario.users.id
        ? <>
            <button onClick={handleDelete}  className='button-cancelar'><RxCross2 /></button>
            <button className='button-editar' onClick={handleEdit}>Editar</button>
          </>
        : null
        } 

      {
        edit
        ? <p>{comentario.opinion}</p>
        : <>
          <form ref={form} onSubmit={handleSubmit}>
            <textarea className='add-comentarios' defaultValue={comentario.opinion} name='comentario'></textarea>
            {error && <p style={{display: 'grid', justifyContent:'center', color:'red', marginTop: '10px'}}>{error}</p>}
            <button id='button-enviar'>Enviar</button>
          </form>
        </> 
       }
    </div> 
  )
}

