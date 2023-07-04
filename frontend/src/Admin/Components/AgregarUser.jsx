import React, { useRef } from 'react'
import './Modificar.css'
import { useMutation } from '@apollo/client'
import { POST_USER_ADMIN } from '../hoc/Mutation/PostUserAdmin'

export function AgregarUser(props) {

  const [ createUserAdmin, {data} ] = useMutation(POST_USER_ADMIN)


  const form = useRef()

  const onCancel = () =>{
    props.setIsOpen(false);
  }  
  const hanldeSumbit = (e) => {
    e.preventDefault()
    const formData = new FormData(form.current)
    const buyer = {
      'name': formData.get('name'),
      'email': formData.get('email'),
      'password': formData.get('password')
    }
    createUserAdmin({
      variables: {nombre: buyer.name, email: buyer.email, password: buyer.password}
    })
    .then(null)
    .catch(null)
    
  }
  return (
      <div className='Information' >
        <h5>Agregar Usuario</h5>
        <div className='Information-form'>
          <form ref={form} onSubmit={hanldeSumbit}>
            <label>Name </label>
            <input type="text" name="name"/>
            <label>Email </label>
            <input type="email" name="email" />
            <label>Password </label>
            <input type="password" name="password" />
            {
              data 
                ? data.UserAdminRegister.message  !== 'ERROR, ESTE CORREO YA ES ADMIN DE BOOKSHOP' 
                  ? window.location.reload(true)
                  : <p>{data.UserAdminRegister.message}</p>
                : null
            }
            <button className='button-guardar' type='submit'>Guardar</button>
            <button className='button-cancel' type='button' onClick={onCancel}>Cancelar</button>
          </form>
        </div>
      </div>
  
    
  )
}
