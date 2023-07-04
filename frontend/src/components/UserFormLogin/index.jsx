import '../UserFormRegister/index.css'
import { useInputValue } from '../../hooks/useInputValue'
import { useQuery } from '@apollo/client'
import { LOGIN } from '../../hoc/Query/getUser'
import { useState } from 'react'
import { LoginGoogle } from './OauthGoogle'


export function UserFormLogin ({ onSubmit, title }) {
  const email = useInputValue('')
  const password = useInputValue('')
  const [ error, setError ] = useState()

  const { data } = useQuery(LOGIN, {
    variables: { email: email.value, password: password.value }
  });
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if (data.LoginUser.accessToken === ''){
      setError('Error, Usuario no existente / no registrado')
    } else {
      window.sessionStorage.setItem('token', data.LoginUser.accessToken)
      onSubmit()
      window.location.href = '/'
    }
  }
 
  
  return (
  <form className="form-login" onSubmit={handleSubmit}>
    <span className="title">{title}</span>
    <label  className="label">Email</label>
    <input type="email" id="email" name="email" required="" className="input" {...email}/>
    <label  className="label">Password</label>
    <input type="password" name="password"  className="input" {...password}/>
    {error && <p style={{display: 'grid', justifyContent:'center', color:'red', fontSize: '0.9em'}}>{error}</p>}
    <button type="submit" className="submit">{title}</button>
    <a className='olvide-password' href="/recoveryPassword">Olvidé mi contraseña</a>
    <LoginGoogle />
  </form>
  )
}