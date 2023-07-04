import '../../components/Category/index.css'
import { useQuery } from "@apollo/client"
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Category } from '../Components/Category';
import { GET_CATEGORY } from '../../hoc/Query/getCategorias';
import { useState } from 'react';
import { Modal } from '../../Modal';
import { AgregarCategory } from '../Components/AgregarCategory';


export function CategoryPage () {
  const { data, loading } = useQuery(GET_CATEGORY)
  const [isopen, setIsOpen] = useState(false)

  return (
    <>
      <button className='button-agregar' onClick={() => setIsOpen(!isopen)}>Agregar categoría</button>
      <section className="section-category">
        {loading
          ? <AiOutlineLoading3Quarters style={{marginLeft:'50%', marginTop: '20%'}} size='32px'/> 
          : data && data.getGeneros.genero.map(product => (
            < Category key={product.nombre} product={product} />
            ))
          }
      </section>

      {
      !!isopen && (
        <Modal>
          <AgregarCategory setIsOpen={setIsOpen}/>
        </Modal>
      )
    }
    </>
  )
}