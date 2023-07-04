import React, { useState } from 'react'
import '../../components/Category/index.css'
import { AiOutlineDelete } from 'react-icons/ai' 
import { BsPencil } from 'react-icons/bs'
import { useMutation } from '@apollo/client'
import { Link } from 'react-router-dom'
import { DELETE_CATEGORY } from '../hoc/Mutation/DeleteCategory'
import { Modal } from '../../Modal'
import { ModificarCategory } from './ModificarCategory'
export function Category({ product }) {
  const [isOpen, setIsOpen] = useState(false)

  const [deleteCategory] = useMutation(DELETE_CATEGORY)


  const handleModal = () => {
    setIsOpen(prevState => !prevState)
  }

  const handleDeleteCategory = (nombre) => {
    deleteCategory({
      variables: { nombre: nombre }
    })
    .then(window.location.reload(true))
    .catch(null)
  }

  return (
    <>
      <div className="container">
      <img className='container-imagen' src={product.url_imagen} alt={product.nombre} />
        <h5>{product.nombre}       

        <button className='pencil' onClick={handleModal}> 
          <BsPencil />
        </button>
        <button className='trash' onClick={() => handleDeleteCategory(product.nombre)} >
          <AiOutlineDelete  size="20px"/>
        </button>
        </h5>
      </div>
      {!!isOpen && (
        <Modal>
          <ModificarCategory
            setIsOpen={setIsOpen}
            product={product}
          />
        </Modal>
      )}
    </>
  )
}

