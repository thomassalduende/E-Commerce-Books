import { createContext, useReducer } from 'react'
import { CartReducer, inistialState } from '../reducer/cartReducer'
export const CartContext = createContext()

function useCartReducer () {
  const [state, dispatch] = useReducer(CartReducer, inistialState)

  const addToCart = (product) => dispatch({
    type: 'ADD_TO_CART',
    payload: product
  })

  const removeFromCart = (product) => dispatch({
    type: 'REMOVE_FROM_CART',
    payload: product
  })

  const clearCart = (product) => dispatch({
    type: 'CLEAR_CART',
    payload: product
  })

  return { state, addToCart, removeFromCart, clearCart }
}

export function CartProvider ({ children }) {
  
  const { state, addToCart, removeFromCart, clearCart } = useCartReducer()

  return (
    <CartContext.Provider value={{
      cart: state,
      addToCart,
      removeFromCart,
      clearCart
    }}
    >
      {children}
    </CartContext.Provider>
  )
}