import './index.css'

export function Category ({ product }) {
  
  return (
    <a href={`/category/${product.nombre}`}>
      <div className="container">
      <img className='container-imagen' src={product.url_imagen} alt="" />
        <h5>{product.nombre}</h5>
      </div>
    </a>
  )
}