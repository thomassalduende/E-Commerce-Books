import './index.css'
import { BsFillCartCheckFill } from 'react-icons/bs'

import { useCart } from '../../hooks/useCart'

import { FavButton } from '../FavButton'
import { ComentariosQuery } from '../../container/ComentariosQuery'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { AddComentarios } from '../AddComentarios'
import { StartComponents } from '../StartComponents'
import { useContext } from 'react'
import { CountCartContext } from '../../Context/countCart'
import { userContext } from '../../Context/user'

export function TemplateLibro ({ product }) {
  const { isAuth } = useContext(userContext)
  console.log(isAuth)
  const { cart, addToCart} = useCart()
  const isProductInCart = cart.some(item => item.isbn === product[0].isbn) // si el product esta en cart
  const noAddToCart = () => {
    isProductInCart 
      ? toast.error('El producto ya esta en el carrito')
      : toast.error('Debe registrarse')
  }

  const {setCount} = useContext(CountCartContext)

  const handleNotify = () => {
    toast.success('Se agrego al carrito correctamente')
  }
  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setCount(parseInt(newValue));
  };

  return (
    <>
      <div className='book'>
        <ToastContainer />
        <img src={product[0].url_imagen} alt="" />    
        <div className='book-info'>
          <FavButton isbn={product[0].isbn}/>

          <h3>{product[0].nombre}</h3>
          <StartComponents isbn={product[0].isbn}/>
          <p className='autor'>{product[0].autor[0].nombre}</p>

          {
            product[0].descuento === 0 
              ? <strong >$ {product[0].precio}</strong>
              : <>
                  <p> 
                    <span className='precio-tachado'>$ {product[0].precio}</span> 
                    <br />
                    <span style={{display: 'inline-block', marginLeft:'10px', color: 'red'}}>{product[0].descuento}% OFF</span>
                  </p>
                  <strong className='precio-descuento'>$ {product[0].precio - (product[0].precio * product[0].descuento / 100)}</strong>
                </>
          }

          <hr />
          <strong>Descripción</strong>
          <p className='decripcion'>{product[0].descripcion}</p>
          <p>ISBN: {product[0].isbn}</p>
          <p>Editorial: {product[0].editorial.nombre}</p>
          {
            product[0].genero.length > 0
              ? <p>Categoría: {product[0].genero[0].nombre}</p>
              : <p>Categoría: Sin genero</p>
          }
          <p>Stock diponible: {product[0].stock}</p>

          
          <button 
          className='button'
            onClick={() => {
              isProductInCart || isAuth === null 
                ? noAddToCart()
                :<>
                  {addToCart(product)}
                { handleNotify()}
                </> 
              }}
          >
            Agregar a carrito <BsFillCartCheckFill size='20px'/> 
          </button>

          <input 
            className='input-cantidad' 
            defaultValue="1"
            onChange={handleInputChange} 
            type="number" 
            min='1' 
            max={product[0].stock} 
          />
        </div>

      </div>
      <hr />
      <div className='comentarios'>
        <AddComentarios isbn={product[0].isbn}/>
        <ComentariosQuery  isbn={product[0].isbn}/>
        
      </div>
  </>
  )
}