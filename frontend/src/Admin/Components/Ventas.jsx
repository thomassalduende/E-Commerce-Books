import React, { useState ,useMemo } from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
export function Ventas({ products, loading }) {
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState(false)

  const handleSort = () => {
    setSort(!sort)
  }
  
  const hanldeChange = (e) => {
    const newSearch = e.target.value 
    setSearch(newSearch)
  }

  const results = search 
  ? products.filter((product) => product.fecha.includes(search))
  : products;

  const sortedProducts = useMemo(() => {
    return sort 
      ? [...results].sort((a, b) => a.fecha.localeCompare(b.fecha))
      : results
  }, [sort, results])

  return (
    <>
      {
        loading 
        ? <AiOutlineLoading3Quarters style={{marginLeft:'50%', marginTop: '30%', marginBottom: '100%'}} size='32px'/> 
          : 
          <>
          <input style={{marginLeft: '40%', marginTop:'5%', width: '20%', textAlign:'center', height: '40px', borderRadius:'5px'}} value={search} onChange={hanldeChange} type="text"  placeholder='INGRESE FECHA (dd/mm/aa)' />
           <table style={{marginLeft:'25%', width:'50%', textAlign:'start', marginTop: '30px'}}>
              <thead>
                <tr>
                  <th>
                    <input style={{marginRight:'5px', cursor:'pointer'}} type="checkbox" onChange={handleSort} checked={sort}/>
                    Fecha
                    </th>
                  <th>Nombre</th>
                  <th>Cantidad</th>
                  <th>Monto</th>
                </tr>
              </thead> 
              <tbody>
                {sortedProducts.map((product, index) => (
                    
                  <tr key={index}>
                        <td >{product.fecha}</td>
                        <td >{product.factura_detalle[0].book.nombre}</td>
                        <td >{product.factura_detalle[0].cantidad }</td>
                        <td >{product.monto}</td>
                    </tr>
                    
                    )) 
                    
                  }
              </tbody>
          </table>
        </>
     } 
    </>
  )
}
