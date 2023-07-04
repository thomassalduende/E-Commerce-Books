import './index.css'
import { Link } from 'react-router-dom'
export function Product ({ product }) {
  return (
    <div className='cards'>
      <a href={`/book/${product.isbn}`}>
        <img src={product.url_imagen} alt="" />
        <div className='cards-data'>
          <p className='names'>{product.nombre}</p>
          <p className='data-autor'>{product.autor[0].nombre}</p>
          {
            product.descuento === 0 
            ? <strong className='precio-original'>$ {product.precio}</strong>
              : <>
                  <p> 
                    <span className='precio-tachado'>$ {product.precio}</span> 
                    <br />
                    <span style={{display: 'inline-block', marginLeft:'10px', color: 'red'}}>{product.descuento}% OFF</span>
                  </p>
                  <p className='precio-descuento'>$ {parseFloat(product.precio - (product.precio * product.descuento / 100)).toFixed(2)}</p>
                </>
          }
        </div>
      </a>
    </div>
  )
}