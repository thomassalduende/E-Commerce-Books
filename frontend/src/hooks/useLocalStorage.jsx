import { useContext, useEffect, useState } from "react"
import { userContext } from "../Context/user"

export function useLocalStorage(key, initialValue) {
    const { isAuth } = useContext(userContext)
    const [storedValue, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
        return item !== null ? JSON.parse(item) : initialValue
    } catch (error) {
        return initialValue
    }
  })

  useEffect(() => {
    if (isAuth === null) {
      const newState = false
      setValue(newState)
    } 

  },[isAuth])

  const setLocalStorage = (value) => {
    try{
      window.localStorage.setItem(key, JSON.stringify(value))
      setValue(value)

    } catch (error){
      console.error(error)
    }
  }

  

  return [storedValue, setLocalStorage]

}