import React, { useRef, useState } from 'react'
import './Modificar.css'
import { POST_BOOK } from '../hoc/Mutation/PostBook'
import { useMutation, useQuery } from '@apollo/client'
import { GET_CATEGORY } from '../../hoc/Query/getCategorias'

export function Carga(props) {
  const [ dataBook ] = useMutation(POST_BOOK)

  const { data } = useQuery(GET_CATEGORY)

  const form = useRef()

  const [error, setError] = useState()

  //MODAL
  const onCancel = () =>{
    props.setOpenModalAñd(false);
  }  

  
  
  const [selectedOption, setSelectedOption] = useState('')
  const handleChange = (event) => {
    setSelectedOption(event.target.value)
  }

  const hanldeSumbit = (e) => {
    e.preventDefault()
    const formData = new FormData(form.current)
    if (
      formData.get('isbn') !== '' &&
      formData.get('imagen') !== '' &&
      formData.get('name') !== '' &&
      formData.get('precio') !== '' &&
      formData.get('stock') !== '' &&
      formData.get('descripcion') !== '' &&
      formData.get('editorial') !== '' &&
      formData.get('descuento') !== '' &&
      formData.get('autor') !== '' &&
      selectedOption !== ''  && selectedOption !== 'Seleccione categoria' 
    ) {
      const buyer = {
        'isbn': formData.get('isbn'),
        'imagen': formData.get('imagen'),
        'name': formData.get('name'),
        'precio': formData.get('precio'),
        'stock': formData.get('stock'),
        'descripcion': formData.get('descripcion'),
        'editorial': formData.get('editorial'),
        'descuento': formData.get('descuento'),
        'autor': formData.get('autor')
      }
      dataBook({ 
        variables: {isbn: buyer.isbn, imagen: buyer.imagen, nombre: buyer.name, precio: parseFloat(buyer.precio), 
        stock:parseFloat(buyer.stock), descripcion: buyer.descripcion, fechaIngreso: '', editorial: buyer.editorial,
        descuento: parseFloat(buyer.descuento), genero: selectedOption, autor: buyer.autor} 
      })
    .then(window.location.reload(true))
    .catch(null)
    }else {
      setError('Por favor, complete todos los campos.')
    }
  }
  return (
    <div className='Information' >
    <h5>CARGAR PRODUCTOS</h5>
    <div className='Information-form'>
      <form ref={form} onSubmit={hanldeSumbit}>
        <label>Nombre </label>
        <input placeholder='Ingrese nombre' type="text" name="name" />
        <label>Isbn </label>
        <input placeholder='Ingrese ISBN' type="text" name="isbn" />
        <label>Autor </label>
        <input placeholder='Ingrese autor' type="text" name="autor" />
        <label>Stock </label>
        <input placeholder='Ingrese stock' type="number" name="stock" />
        <label>Descripcion</label>
        <textarea placeholder='Ingrese descripcion' type="text" name="descripcion" />
        <label>Genero </label>
        
        <select id="select-options" value={selectedOption} onChange={handleChange}>
        <option value="">Seleccione categoria</option>
        {data && data.getGeneros.genero.map((option, index) => (
          <option key={index} value={option.nombre}>
            {option.nombre}
          </option>
        ))}
      </select>

        <label>Precio </label>
        <input placeholder='Precio' min="0" type="float" name="precio" />
        <label>Descuento </label>
        <input placeholder='Ingrese descuento' min="0" max="100" type="number" name="descuento" />
        <label>Editorial </label>
        <input placeholder='Ingrese editorial' type="text" name="editorial" />
        <label>Imagen</label>
        <input placeholder='Ingrese imagen (https://...)' className='file' type="text" name='imagen' />
        {error && <p style={{display: 'grid', justifyContent:'center', color:'white', fontWeight: 'bold'}}>{error}</p>}
        <button className='button-guardar' type='submite'>Guardar</button>
        <button className='button-cancel' type='button' onClick={onCancel}>Cancelar</button>
      </form>
    </div>

      </div>
  )
}