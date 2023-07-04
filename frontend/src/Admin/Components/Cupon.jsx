import React,{ useState } from 'react'
import { AiOutlineDelete,AiOutlineUserAdd } from 'react-icons/ai'
import { Modal } from '../../Modal'
import { useMutation } from '@apollo/client'
import { DELETE_CUPON } from '../hoc/Mutation/DeleteCupon'
import { Agregarcupon } from './AgregarCupon'



export  function Cupon({ cupones }) {

  const [ deleteCupon ]  = useMutation(DELETE_CUPON)
  
  const [isopen, setIsOpen] = useState(false)


  const handleDelete = (codigo) => {
    deleteCupon({
      variables: {codigo: codigo}
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
          <th  style={{textAlign:'center'}} >Codigo</th>
          <th  style={{textAlign:'center'}}>Descuento</th>
          <th  style={{textAlign:'center'}}>Options</th>
        </tr>
      </thead> 
      <tbody>
          {cupones.map((cupon, index)=> (
            <tr key={index}>
              <td  style={{textAlign:'center'}}>{index}</td>
              <td  style={{textAlign:'center'}}>{cupon.codigo}</td>
              <td  style={{textAlign:'center'}}>{cupon.cantidad_descuento}</td>
              <td  style={{textAlign:'center'}}>
                <a href=""><button onClick={() => handleDelete(cupon.codigo)} style={{backgroundColor:'transparent', border:'none'}}>
                  <AiOutlineDelete size='25px'/>
                  </button>
                </a>
              </td>

            </tr> 
          ))}
      </tbody>
    </table>

    {
      !!isopen && (
        <Modal>
          <Agregarcupon setIsOpen={setIsOpen}/>
        </Modal>
      )
    }
  </>
  )

}
