
import React, { useContext } from 'react'
import '../components/UserFormRegister/index.css'
import {userContext} from '../Context/user'
import { UserFormRegister } from '../components/UserFormRegister'
import { UserFormLogin } from '../components/UserFormLogin/index'
import { useNavigate } from 'react-router-dom'

export function NotRegisterUser() {
  const { activateAuth } = useContext(userContext)
  const navigate = useNavigate()

  const handle = () => {
    activateAuth()
    navigate('/')
  }
  return (
    <div className='div-container'>
      <h4 className='titulo-bienvenido'>Bienvenidos a Books Shop</h4>
      <div className='div'>
        <UserFormLogin title='Login' onSubmit={activateAuth}/>

        <UserFormRegister title='Register' onSubmit={handle}/>

      </div>
    </div>
  )

}
