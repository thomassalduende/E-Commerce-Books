import { createContext, useState } from 'react'

export const userContext = createContext();

const Provider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => {
    return window.sessionStorage.getItem('token')
  })

  const value = {
    isAuth,
    activateAuth: () => {
      setIsAuth(true)
    },
    removeAuth: () => {
      setIsAuth(false)
      window.sessionStorage.removeItem('token')
    }
  }

  return (
    <userContext.Provider value={value}>
      {children}
    </userContext.Provider>
    )
}

export default {
  Provider,
  Consumer: userContext.Consumer,
}