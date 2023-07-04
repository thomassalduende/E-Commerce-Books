import React,{ useState } from 'react'
import { AiOutlineDelete,AiOutlineUserAdd } from 'react-icons/ai'
import { Modal } from '../../Modal'
import { AgregarUser } from './AgregarUser'
import { useMutation } from '@apollo/client'
import { DELETE_USER_ADMIN } from '../hoc/Mutation/DeleteUserAdmin'



export  function User({ users }) {

  const [ delateUserAdmin ]  = useMutation(DELETE_USER_ADMIN)
  
  const [isopen, setIsOpen] = useState(false)


  const handleDelete = (email) => {
    delateUserAdmin({
      variables: {email: email}
    })
  }
  
  return (
    <>
      <table style={{marginLeft:'25%', width:'50%', textAlign:'center', marginBottom:'100000px'}}>
      <thead>
        <tr>
          <th style={{textAlign:'center'}}>
            <button onClick={() => {setIsOpen(!isopen)}} style={{backgroundColor:'transparent', border:'1px solid'}}>
              <AiOutlineUserAdd size='25px'/>
            </button>
          </th>
          <th  style={{textAlign:'center'}} >Nombre</th>
          <th  style={{textAlign:'center'}}>Email</th>
          <th  style={{textAlign:'center'}}>Admin</th>
        </tr>
      </thead> 
      <tbody>
          {users.map((user, index)=> (
            <tr key={index}>
              <td  style={{textAlign:'center'}}>{index}</td>
              <td  style={{textAlign:'center'}}>{user.nombre}</td>
              <td  style={{textAlign:'center'}}>{user.email}</td>
              <td  style={{textAlign:'center'}}>
                <a href=""><button onClick={() => handleDelete(user.email)} style={{backgroundColor:'transparent', border:'none'}}>
                  <AiOutlineDelete size='25px'/>
                  </button></a>
              </td>

            </tr> 
        // : null
          ))}
      </tbody>
    </table>

    {
      !!isopen && (
        <Modal>
          <AgregarUser setIsOpen={setIsOpen}/>
        </Modal>
      )
    }
  </>
  )

}
