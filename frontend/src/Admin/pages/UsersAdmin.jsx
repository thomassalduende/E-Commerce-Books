import React from 'react'
import { User } from '../Components/User'
import { useQuery } from '@apollo/client'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { GET_USER_ADMIN } from '../hoc/Query/GetUserAdmin'

export  function UsersAdmin() {
  const {data, loading} = useQuery(GET_USER_ADMIN)
  return (
    loading 
      ? <AiOutlineLoading3Quarters style={{marginLeft:'50%', marginTop: '20%'}} size='32px'/> 
      :  data && <User users={data.getUsersAdmin.users}/>  
  )
}
