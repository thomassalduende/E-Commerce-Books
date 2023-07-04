import { createContext, useState } from 'react'

// 1. Crear el contexto
// este es el que tenemos que consumir
export const CountCartContext = createContext()


// 2. Crear el Provider, para proveer el contexto
// este nos provee de acceso al contexto

export function CountCart({ children }) {
  const [count, setCount] = useState(1)

  return (
    <CountCartContext.Provider value={{
     count,
     setCount
    }}
    >
      {children}
    </CountCartContext.Provider>
  )
}
