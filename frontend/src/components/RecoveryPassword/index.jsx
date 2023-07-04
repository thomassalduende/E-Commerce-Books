import { useMutation } from '@apollo/client'
import React, { useRef, useState } from 'react'
import { RECOVERY_PASSWORD } from '../../hoc/Mutation/recoveryPassword'
export function RecoveryPassword() {
  const [recoveryPassword] = useMutation(RECOVERY_PASSWORD)
  const [message, setMessage] = useState('')
  const form = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(form.current)
    const buyer = {
      'email': formData.get('email')
    }
    recoveryPassword({
      variables: { email: buyer.email }
    })
    .then(setMessage('Revise su correo'))
    .catch(null)
  }
  return (
    <div style={{height:'65vh'}} className='Information' >
      <h5>Recuperar Contraseña</h5>
      <div className='Information-form'>
        <form ref={form} onSubmit={handleSubmit}>
          <label>Email </label>
          <input  type="email" name="email" placeholder='Ingrese su email'/>
          <button  style={{marginLeft: '35%', width: '30%', backgroundColor:'rgb(140, 140, 245)'}} type='submit'>Enviar</button>
        </form>
        {message && <h6 style={{display: 'grid', justifyContent: 'center', marginTop: '40px'}}>{message}</h6>}
      </div>
  </div>
  )
}
