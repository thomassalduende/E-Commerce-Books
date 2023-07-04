import './index.css'
import { useInputValue } from '../../hooks/useInputValue'
import { REGISTER } from '../../hoc/Mutation/postRegister'

import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { LoginGoogle } from '../UserFormLogin/OauthGoogle';
import { useContext } from 'react';


export function UserFormRegister ({ onSubmit, title }) {


  const name = useInputValue('')
  const email = useInputValue('')
  const password = useInputValue('')
  const [ error, setError ] = useState()
  const [ errorCampos, setErrorCampos ] = useState()

  const [createUser, {data,loading}] = useMutation(REGISTER)
  

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name.value !== '' && email.value !== '' && password.value !== '') {
      createUser({ variables: { nombre: name.value, email: email.value , password: password.value } }) 
      .then(null)
      .catch(err => setError(err.message))
    } else {
      setErrorCampos('Error, no puede haber campos vacios')
    }
  }

  return (
  <form className="form"  onSubmit={handleSubmit} >
    {data && window.sessionStorage.setItem('token', data.registrarse.accessToken)}
    {data && onSubmit()}
    {data &&  (window.location.href = '/') }
    <span className="title">{title}</span>
    <label className="label">Username</label>
    <input type="text" className="input" {...name} disabled={loading}/>
    <label className="label">Email</label>
    <input type="email" className="input" {...email} disabled={loading}/>
    <label className="label">Password</label>
    <input type="password" name="password"  className="input" {...password} disabled={loading}/>
    {error === 'Cannot return null for non-nullable field SendUser.user.' ? <p style={{display: 'grid', justifyContent:'center', color:'red'}}>Error, Usuario ya existente</p> : null}
    {errorCampos && <p style={{display: 'grid', justifyContent:'center', color:'red'}}>{errorCampos}</p> }
    <button style={{marginBottom:'10px'}} type="submit" className="submit" disabled={loading}>{title}</button>
    <LoginGoogle />
    </form>
  )
}