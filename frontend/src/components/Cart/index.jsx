import { FaTrash } from 'react-icons/fa'
import { BiRightArrowAlt } from 'react-icons/bi'
import { useCart } from '../../hooks/useCart';
import './index.css'
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { POST_CUPON } from '../../hoc/Mutation/postCupon';
import { useContext, useRef, useState } from 'react';
import { userContext } from '../../Context/user';
import { ToastContainer, toast } from 'react-toastify';
import { POST_CART } from '../../hoc/Mutation/postCart';
import { DELETE_CART } from '../../hoc/Mutation/deleteCart';


function CartItem ({product}) {
  const { cart, addToCart, removeFromCart, clearCart} = useCart() 

  const { isAuth } = useContext(userContext)
  const [deleteCart] = useMutation(DELETE_CART)

  //limpio el carrito de la bd
  const handleDeleteCart = async () => {
    try {
      const promises = cart.map(product => (
        deleteCart({
          variables: { isbn: product.isbn, tokenUser: isAuth }
        })
      ));
      await Promise.all(promises);
    } catch (error) {
     console.log('error')
    }
  }

  return (
      <div className='cart-container '>
        <img src={product.url_imagen} alt="" />    
        <div className='cart-info'>
          <h3>{product.nombre}</h3>
          <p className='autor'>{product.autor[0].nombre}</p>
          {
            product.descuento === 0 
            ? <strong className='precio-original-cart'>$ {product.precio}</strong>
              : <>
                  <p> 
                    <span className='precio-tachado'>$ {product.precio}</span> 
                    <br />
                    <span style={{display: 'inline-block', marginLeft:'10px', color: 'red'}}>{product.descuento}% OFF</span>
                  </p>
                  <p className='precio-descuento'>$ {parseFloat(product.precio - (product.precio * product.descuento / 100)).toFixed(2)}</p>
                </>
          }
          <div className='cantidad'>
            <button className='increment' onClick={() =>addToCart(product)}>+</button>
            <p>{product.quantity}</p>
            <button className='decrement' onClick={() => clearCart(product)}>-</button>
            <button className='delate' onClick={() => {removeFromCart(product); handleDeleteCart()}}><FaTrash size='20px'/> </button>
          </div>
          </div>

      </div>
  )
}

export function Cart () {

  //cargo en el cart de la base de datos  
  const [insertCart] = useMutation(POST_CART)
  const { isAuth } = useContext(userContext)
  const form = useRef()
  const [insertCupon, {data}] = useMutation(POST_CUPON)


  const { cart} = useCart()
  //cantidad de libro a comprar
  const hanldeCantidadLibros = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.quantity
    const sum = cart.reduce(reducer,0)
    return sum
  }

  //inserto cupon
  const handleSubmitCupon = (e) => {
    e.preventDefault()
    const formData = new FormData(form.current)
    const buyer = {
      'cupon': formData.get('cupon')   
    }
    
    insertCupon({
      variables:{codigo: buyer.cupon, tokenUser: isAuth}
    })
    .then(erro => toast.success('Cupon exitoso'))
    .catch(error => toast.error('Cupon no existente'))
  }
  
  //total a pagar
  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + (currentValue.precio - (currentValue.precio * currentValue.descuento / 100)) * currentValue.quantity
    const sum = cart.reduce(reducer, 0)
    const total = data && data.agregarCupon.cupon[0].cantidad_descuento !== 0
      ? sum - (sum * data.agregarCupon.cupon[0].cantidad_descuento / 100 )
      : sum
    return total.toFixed(2);
  }
  
  //agrego los libros al cart de la bd
  const handleCart = async () => {
    try {
      const promises = cart.map(product => (
        insertCart({
          variables: { isbn: product.isbn, cantidad: product.quantity, tokenUser: isAuth }
        })
      ));
      await Promise.all(promises);
    } catch (error) {
      null
    }
  }
 

  return (
    <aside className='aside'>

      <ToastContainer /> 
      <ul className='cart-map'>
        {
          cart.map(product => (
            <CartItem key={product.isbn} product={product} />
            ))
        }
      </ul>

        <hr style={{marginTop: '-5px'}} />
        {
          cart.length > 0 
            ? 
              <div className='card-cupon'>
                <h4>Cantidad de libros {hanldeCantidadLibros()}</h4>
                <div className='total'>
                  <h5>Total:</h5> 
                  <h5 style={{fontWeight: 'bold'}}>$ {handleSumTotal()}</h5>
                </div>
                <form ref={form} onSubmit={handleSubmitCupon}>
                  <BiRightArrowAlt className='icons' size='12px' />
                  <input type="text" placeholder='Cupon de descuento' name='cupon' />
                  <button style={{marginLeft: '10px', borderRadius: '5px'}}>Agregar</button>
                </form>
                <Link to='/book/information'><button className='continuar-pedido' onClick={handleCart}>Continuar Pedido</button></Link> 
              </div>
        : <h5 style={{height: '80vh' ,color: 'red', display: 'grid', justifyContent: 'center'}}>No hay libros en tu carrito!</h5>
        }
    </aside>          
  );         
}