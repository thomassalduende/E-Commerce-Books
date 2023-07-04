import { createContext, useState } from 'react'

// 1. Crear el contexto
// este es el que tenemos que consumir
export const FilterContext = createContext()


// 2. Crear el Provider, para proveer el contexto
// este nos provee de acceso al contexto

export function FiltersProvider({ children }) {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })

  return (
    <FilterContext.Provider value={{
     filters,
     setFilters
    }}
    >
      {children}
    </FilterContext.Provider>
  )
}
