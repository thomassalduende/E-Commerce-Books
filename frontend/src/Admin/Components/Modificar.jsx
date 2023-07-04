import React, { useState } from 'react'
import './Modificar.css'
import './index.css'
import { useRef } from 'react'
import { UPDATE_BOOK } from '../hoc/Mutation/UpdateBook'
import { useMutation, useQuery } from '@apollo/client'
import { useNavigate, useParams } from 'react-router-dom'
import { GET_BOOK_ISBN } from '../hoc/Query/getBookIsbn'

export function Modificar(props) {
  const [updateBook ] = useMutation(UPDATE_BOOK)
  const { isbn } = useParams()
  const { data } = useQuery(GET_BOOK_ISBN, {
    variables: { isbn }
  });

  const [error, setError] = useState('')
  const form = useRef()
  const navigate = useNavigate()


  const onCancel = () =>{
    props.setOpenModalMod(false);
    navigate('/')
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
      formData.get('genero') !== '' &&
      formData.get('autor') !== '' 
    ) {
      const buyer = {
        'isbn': formData.get('isbn'),
        'imagen': formData.get('imagen'),
        'name': formData.get('name'),
        'precio': formData.get('precio'),
        'stock': formData.get('stock'),
        'descripcion': formData.get('descripcion'),
        'fechaIngreso': formData.get('fechaIngreso'),
        'editorial': formData.get('editorial'),
        'descuento': formData.get('descuento'),
        'genero': formData.get('genero') ,
        'autor': formData.get('autor')
      }
      updateBook ({ 
        variables: {isbnOrig: isbn, isbn: buyer.isbn, imagen: buyer.imagen, nombre: buyer.name, precio: parseFloat(buyer.precio), 
        stock :parseInt(buyer.stock), descripcion: buyer.descripcion, fechaIngreso: buyer.fechaIngreso, editorial: buyer.editorial,
        descuento: parseFloat(buyer.descuento), genero: buyer.genero, autor: buyer.autor} 
      })
    .then(window.location.reload(true))
    .catch(error => setError(error.message))
    }else {
      setError('Por favor, complete todos los campos.')
    }
  }
  return (
    <div className='Information' >
    <h5>MODIFICAR PRODUCTOS</h5>
    <div className='Information-form'>
      <form ref={form} onSubmit={hanldeSumbit}>
        <label>Nombre </label>
        <input defaultValue={data && data.getBook.book[0].nombre} type="text" name="name"/>
        <label>Isbn </label>
        <input  defaultValue={data && data.getBook.book[0].isbn} type="text" name="isbn" />
        <label>Autor </label>
        <input  defaultValue={data && data.getBook.book[0].autor[0].nombre}  type="text" name="autor" />
        <label>Stock </label>
        <input  defaultValue={data && data.getBook.book[0].stock} type="number" name="stock" min="0"/>
        <label>Descripcion</label>
        <textarea  defaultValue={data && data.getBook.book[0].descripcion} type="text" name="descripcion" />
        <label>Genero </label>
        <input  defaultValue={data && data.getBook.book[0].genero[0] !== undefined && data.getBook.book[0].genero[0].nombre } type="text" name="genero" />
        <label>Precio </label>
        <input  defaultValue={data && data.getBook.book[0].precio} min="0" type="number" name="precio" />
        <label>Descuento </label>
        <input  defaultValue={data && data.getBook.book[0].descuento} min="0" max="100" type="number" name="descuento" />
        <label>Fecha de Ingreso </label>
        <input  defaultValue={data && data.getBook.book[0].fecha_ingreso} type="text" name="fechaIngreso" />
        <label>Editorial </label>
        <input  defaultValue={data && data.getBook.book[0].editorial.nombre} type="text" name="editorial" />
        <label>Imagen</label>
        <input  defaultValue={data && data.getBook.book[0].url_imagen} className='file' type="text" name='imagen' />
        {error && <p style={{display: 'grid', justifyContent:'center', color:'white', fontWeight: 'bold'}}>{error}</p>}
        <button className='button-guardar'>Guardar</button>
        <button className='button-cancel' type='button' onClick={onCancel}>Cancelar</button>
      </form>
    </div>
      </div>
  )
}

