import React, {useMemo, useState} from 'react'
import { AiOutlineLoading3Quarters,AiOutlineDelete } from 'react-icons/ai'
import './index.css'
import { BsPencil } from 'react-icons/bs'
import { Modal } from '../../Modal'
import { Carga } from './Carga'
import { Link } from 'react-router-dom'
import { useMutation } from '@apollo/client'
import { DELETE_BOOK } from '../hoc/Mutation/DeleteBook'
import { Modificar } from './modificar'

export function Products({ products, loading }) {
  const [deleteBook] = useMutation(DELETE_BOOK)
  const [openModalMod, setOpenModalMod] = useState(false)
  const [openModalAñd, setOpenModalAñd] = useState(false)
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState(false)


  const handleDeleteBook = (isbn) => {
    deleteBook({
      variables: { isbn: isbn }
    })
    .then(location.reload(true))
    .catch(null)
  }

  const handleModalMod = () => {
    setOpenModalMod(prevState => !prevState)
  }

  const handleModalAñd = () => {
    setOpenModalAñd(prevState => !prevState)

  }

  const hanldeChange = (e) => {
    setSearch(e.target.value)
  }

  const handleSort = () => {
    setSort(!sort)
  }
  
  const results = search 
  ? products.filter((product) => product.isbn.includes(search))
  : products;
  
  const sortedProducts = useMemo(() => {
    return sort 
      ? [...results].sort((a, b) => a.nombre.localeCompare(b.nombre))
      : results
  }, [sort, results])

  return (
      <section className='section-table'>
  
  
        {
          loading 
          ? <AiOutlineLoading3Quarters style={{marginLeft:'50%', marginTop: '30%'}} size='32px'/> 
            : 
            <>
            <div className='div-buscador'>
              <button className='agregarButton' onClick={handleModalAñd}>
                Agregar Nuevo
              </button>
              <input value={search} onChange={hanldeChange} type="text"  placeholder='INGRESE ISBN ...' />
            </div>
  
          <table>
                <thead>
                  <tr>
                    <th>imagen</th>
                    <th>
                      <input style={{marginRight:'5px', cursor:'pointer'}} type="checkbox" onChange={handleSort} checked={sort}/>
                      Nombre
                      </th>
                    <th>Isbn</th>
                    <th>Autor</th>
                    <th>Stock</th>
                    <th>Descripcion</th>
                    <th>Genero</th>
                    <th>Precio</th>
                    <th>Descuento</th>
                    <th>Editorial</th>
                    <th>Option</th>
                  </tr>
                </thead> 
              <tbody>
                {sortedProducts.map((product) => (
                  <tr key={product.isbn}>
                        <td><img className='imagen' src={product.url_imagen} alt="" /></td>
                        <td >{product.nombre}</td>
                          <td >{product.isbn}</td>
                          <td >{product.autor[0].nombre}</td>
                          <td >{product.stock}</td>
                          <td >{product.descripcion.slice(0, 150)}</td>
                          {
                            product.genero.length > 0
                            ? <td >{product.genero[0].nombre}</td>
                            : <td>Sin genero</td>
                          }
                          <td >{product.precio}</td>
                          <td >{product.descuento}</td>
                          <td >{product.editorial.nombre}</td>
                          <td className='td-option'>
                            <div className="option">
                              <button><Link  to={`/${product.isbn}`}  onClick={handleModalMod}>
                                <BsPencil />
                              </Link></button>
                              <button className='trash'  onClick={() => handleDeleteBook(product.isbn)}>
                                <AiOutlineDelete  size="20px"/>
                              </button>
                            </div>
                          </td>
                    </tr>
                   
                    )) 
                    
                  }
                </tbody>
          </table>
        
            </>
            }
          {!!openModalAñd && (
            <Modal>
              <Carga
                setOpenModalAñd={setOpenModalAñd}
              />
            </Modal>
          )}
        {!!openModalMod && (
          <Modal>
             <Modificar setOpenModalMod={setOpenModalMod}/>  
          </Modal>
        )}
  
      </section>
    )    
  }