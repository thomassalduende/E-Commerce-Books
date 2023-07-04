import { useMutation } from '@apollo/client'
import React, { useRef } from 'react'
import { POST_CATEGORY } from '../hoc/Mutation/PostCategory'

export function  AgregarCategory(props) {
  const [ createCategory ] = useMutation(POST_CATEGORY)

  const form = useRef()

  const onCancel = () =>{
    props.setIsOpen(false);
  }  
  const hanldeSumbit = (e) => {
    e.preventDefault()
    const formData = new FormData(form.current)
    const buyer = {
      'name': formData.get('name'),
      'imagen': formData.get('imagen')
    }
    createCategory({
      variables: {nombre: buyer.name, urlImagen: buyer.imagen}
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
            <input type="text" name="name"/>
            <label>Imagen</label>
            <input placeholder='url...' type="text" name="imagen" />
            <button className='button-guardar' type='submit'>Guardar</button>
            <button className='button-cancel' type='button' onClick={onCancel}>Cancelar</button>
          </form>
        </div>
      </div>
  
    
  )
}
