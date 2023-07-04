import { useId } from 'react'
import { useFilter } from '../../hooks/useFilter'
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'
import './index.css'
export function Filters() {
  const { filters, setFilters } = useFilter()

  const minPriceFilterId = useId()


  const handleChangeMinPrice = (e) => {
    setFilters(prevState => ({
      ...prevState,
      minPrice: e.target.value
    }))
  }

  const handleChangeCategory = (e) => {
    setFilters(prevState => ({
      ...prevState,
      category: e.target.value
    }))
  }

  return (
    <section className='filters'>
        <label htmlFor={minPriceFilterId}>Pricio máximo </label>
        <input 
          type="range" 
          id={minPriceFilterId}
          min="0" 
          max="20000" 
          onChange={handleChangeMinPrice} 
          value={filters.minPrice}
        />
        <span>${filters.minPrice}</span>
        <button onClick={() => handleChangeCategory({target: {value: 'asc'}})} >A <AiOutlineArrowDown /> Z</button>
        <button onClick={() => handleChangeCategory({target: {value: 'desc'}})} >Z <AiOutlineArrowUp /> A</button>
    </section>
  )
}
