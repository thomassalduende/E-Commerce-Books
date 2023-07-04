import React, { useRef } from 'react'
import './modificar.css'
import { UPDATE_CATEGORY } from '../hoc/Mutation/UpdateCategory'
import { useMutation } from '@apollo/client'
export function ModificarCategory({ setIsOpen, product }) {
  const [ updateCategory ] = useMutation(UPDATE_CATEGORY)
  const form = useRef()

  const onCancel = () =>{
    setIsOpen(false);
  }  

  const hanldeSumbit = (e) => {
    e.preventDefault()
    const formData = new FormData(form.current)
    const buyer = {
      'name': formData.get('name'),
      'imagen': formData.get('imagen'),
    }
    updateCategory({
      variables: {nombreOrig: product.nombre, nombre: buyer.name, email: buyer.email, urlImagen: buyer.imagen}
    })
    .then(window.location.reload(true))
    .catch(null)
    
  }
  return (
    <div className='Information' >
    <h5>Agregar Usuario</h5>
    <div className='Information-form'>
      <form ref={form} onSubmit={hanldeSumbit}>
        <label>Name </label>
        <input defaultValue={product.nombre} type="text" name="name"/>
        <label>Imagen </label>
        <input defaultValue={product.url_imagen} type="text" name="imagen" />
        <button className='button-guardar' type='submit'>Guardar</button>
        <button className='button-cancel' type='button' onClick={onCancel}>Cancelar</button>
      </form>
    </div>
  </div>
  )
}
