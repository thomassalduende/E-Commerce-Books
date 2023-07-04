import { useMutation, useQuery } from '@apollo/client'
import React, { useRef } from 'react'
import { GET_INFORMATION } from '../../hoc/Query/getInformation'
import { useContext } from 'react'
import { userContext } from '../../Context/user'
import './index.css'
import { Modal } from '../../Modal'
import { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai' 
import { UPDATE_PASSWORD } from '../../hoc/Mutation/updatePassword'
import { ToastContainer, toast } from 'react-toastify'



export function Form ({ SetIsOpen, isAuth }) {
  const [updatePassword, { data }] = useMutation(UPDATE_PASSWORD)
  const form = useRef()
  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(form.current)
    const buyer = {
      'password': formData.get('password')
    }
    updatePassword({
      variables: { tokenUser: isAuth, password: buyer.password }
    })
    .then(null)
    .catch(null)
  }
  const handleModal = () => {
    SetIsOpen(prevState => !prevState)
  }

  const handleRefresh = () =>{
    toast.success('Contraseña modificada con éxito')
    setTimeout(() => {
      window.location.reload(true);
    }, 3000);
  }

  return (
    <div className='Information' >
      <ToastContainer />
      {data && data.updateUser && handleRefresh()}
      <button 
        onClick={handleModal}
        style={{marginLeft:'95%' ,background: 'transparent', color: 'white', border: 'none'}}
        >
        <AiOutlineClose size="22px" />
      </button>
      <h5>Cambiar contraseña</h5>
      <div className='Information-form'>
        <form ref={form} onSubmit={handleSubmit}>
          <label>Password </label>
          <input  type="password" name="password" placeholder='Ingrese contraseña'/>
          <button style={{marginLeft: '30%', width: '40%', backgroundColor:'rgb(140, 140, 245)'}} type='submit'>Cambiar</button>
        </form>
      </div>
  </div>
  )
}

export function InfoUser() {
  const { isAuth } = useContext(userContext)
  const { data } = useQuery(GET_INFORMATION, {
    variables: { tokenUser: isAuth }
  })

  const [isOpen, SetIsOpen] = useState(false)

  const handleModal = () => {
    SetIsOpen(prevState => !prevState)

  }
  return (
    <div className='vh'>
      <div className='info-user'>
        <p><span>DNI: </span>{data && data.LoginUser.user.direccion.dni}</p>
        <p><span>Nombre: </span>{data && data.LoginUser.user.nombre}</p>
        <p><span>Direccion: </span>{data && data.LoginUser.user.direccion.direccion}</p>
        <p><span>Ciudad: </span>{data && data.LoginUser.user.direccion.ciudad.nombre}</p>
        <p><span>Provincia: </span>{data && data.LoginUser.user.direccion.ciudad.provincia.nombre}</p>
        <p><span>Codigo postal:</span> {data && data.LoginUser.user.direccion.ciudad.cod_postal}</p>
        <p><span>Telefono: </span>{data && data.LoginUser.user.direccion.telefono}</p>
        <p><span>Info: </span>{data && data.LoginUser.user.direccion.AgregarInfo}</p>
      </div>
    <button className='rec-button' onClick={handleModal}>CAMBIAR CONTRASEÑA</button>

      {isOpen && (
        <Modal>
          <Form SetIsOpen={SetIsOpen} isAuth={isAuth}/>  
        </Modal>
      )}
    </div>


    )}
  

