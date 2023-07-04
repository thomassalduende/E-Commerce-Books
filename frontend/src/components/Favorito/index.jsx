import './index.css'
export function Favorito({ product }) {
  return (
    <div className='card'>
      <a href={`/book/${product.isbn}`}>
        <img src={product.url_imagen} alt="" />
        <div className='card-data'>
          <p className='name'>{product.nombre}</p>
        </div>
      </a>
    </div>
  )
}
