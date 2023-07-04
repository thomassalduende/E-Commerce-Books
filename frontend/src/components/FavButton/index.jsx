import React, { useContext, useState } from 'react'
import '../TemplateLibro/index.css'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import {  POST_FAVORITOS } from '../../hoc/Mutation/postFavoritos'
import { useMutation, useQuery } from '@apollo/client'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { userContext } from '../../Context/user'
import { DELETE_FAVORITOS } from '../../hoc/Mutation/deleteFavoritos'
import { GET_EXIST_FAVORITO } from '../../hoc/Query/getExistFavoritos'
import { ToastContainer, toast } from 'react-toastify'

export function FavButton({ isbn  }) {
  const { isAuth } = useContext(userContext)

  const  [agregarFavoritos]  = useMutation(POST_FAVORITOS)
  const [deleteFavoritos] = useMutation(DELETE_FAVORITOS)
  const { data } = useQuery(GET_EXIST_FAVORITO, {
    skip: !isAuth,
    variables: { tokenUser: isAuth, isbn: isbn}
  }) 

  
  const Icons = data && data.ExistFavorito.success ? AiFillHeart : AiOutlineHeart

  const handleRefresh = () =>{
    setTimeout(() => {
      window.location.reload(true);
    }, 3000);
  }

  const handleFavoritos = () => {
    if (isAuth !== null) {
      if (data && data.ExistFavorito.success === false) {
        agregarFavoritos({ variables: { tokenUser: isAuth, isbn: isbn} })
        .then(handleRefresh())
        .catch(null)
        
        toast.success('Libro agregado a favoritos')
      } if (data && data.ExistFavorito.success === true){
        deleteFavoritos({ variables: { tokenUser: isAuth, isbn: isbn} })
        .then(handleRefresh())
        .catch(null)
        toast.success('Libro eliminado de favoritos')
      }
    } else {
      toast.error('No se encuentra registrado')
    }
    
  }
  
  return (
    <>
      <ToastContainer />
      <button className='favoritos-button' onClick={handleFavoritos}>
        <Icons size='32px'/>
      </button>
    </>
  )
}
