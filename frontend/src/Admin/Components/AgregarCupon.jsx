import React, { useRef } from 'react'
import './Modificar.css'
import { useMutation } from '@apollo/client'
import { POST_CUPON } from '../hoc/Mutation/PostCupon'

export function Agregarcupon(props) {

  const [ createCupon, {data} ] = useMutation(POST_CUPON)


  const form = useRef()

  const onCancel = () =>{
    props.setIsOpen(false);
  }  
  const hanldeSumbit = (e) => {
    e.preventDefault()
    const formData = new FormData(form.current)
    const buyer = {
      'codigo': formData.get('codigo'),
      'descuento': formData.get('descuento'),
    }
    createCupon({
      variables: {codigo: buyer.codigo, descuento: parseFloat(buyer.descuento)}
    })
    .then(window.location.reload(true))
    .catch(null)
    
  }
  return (
      <div className='Information' >
        <h5>Agregar Cupon</h5>
        <div className='Information-form'>
          <form ref={form} onSubmit={hanldeSumbit}>
            <label>Codigo </label>
            <input type="text" name="codigo"/>
            <label>Descuento </label>
            <input type="text" name="descuento" />
            {
              data 
                ? data.InsertCupon.message  !== 'ERROR, YA EXISTE EL CUPON' 
                  ? window.location.reload(true)
                  : <p>{data.InsertCupon.message}</p>
                : null
            } 
            <button className='button-guardar' type='submit'>Guardar</button>
            <button className='button-cancel' type='button' onClick={onCancel}>Cancelar</button>
          </form>
        </div>
      </div>
  
    
  )
}
