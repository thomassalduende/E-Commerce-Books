import { useContext } from "react"
import { FilterContext } from "../Context/filters"
export function useFilter () {

  const { filters, setFilters } = useContext(FilterContext)

  const filterProducts = (products) => {
    let filteredProducts = products.filter(product => {
      return (
        (filters.minPrice === 0 || product.precio <= filters.minPrice) && // si es 0 filtro todo y sino comparo
        (filters.category === 'all' || product.nombre <= filters.category)
      );
    })

    // Ordenar los productos por nombre según filters.category
    if (filters.category === 'asc') {
      filteredProducts.sort((a, b) => a.nombre.localeCompare(b.nombre))
    } else if (filters.category === 'desc') {
      filteredProducts.sort((a, b) => b.nombre.localeCompare(a.nombre))
    }

    return filteredProducts
  }

  return { filterProducts, filters, setFilters }
}