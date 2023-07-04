import { useContext } from "react"
import { CountCartContext } from "../Context/countCart"

export const inistialState = JSON.parse(window.localStorage.getItem('cart')) || []

export const CART_ACTION_TYPES = {
  'ADD_TO_CART': 'ADD_TO_CART',
  'REMOVE_FROM_CART': 'REMOVE_FROM_CART',
  'CLEAR_CART': 'CLEAR_CART',
}

export const updateLocalStorage = state => {
  window.localStorage.setItem('cart', JSON.stringify(state))
}

export const CartReducer = (state, action) => {
const { count } = useContext(CountCartContext)
  const { type: actionType, payload: actionPayload  } = action 
  switch (actionType) {
    case CART_ACTION_TYPES.ADD_TO_CART: {
      const { isbn, stock } = actionPayload
      const productInCartIndex = state.findIndex(item => item.isbn === isbn)
      //producto esta en el carrito
      if (productInCartIndex >= 0){
        const newState = structuredClone(state)
        if (newState[productInCartIndex].quantity < stock){
          newState[productInCartIndex].quantity = parseInt(newState[productInCartIndex].quantity) + 1;
        }
        updateLocalStorage(newState)
        return newState
      }

      const newState = [
        ...state,
        {
          ...actionPayload[0], // product
          quantity: count
        }
      ]
      updateLocalStorage(newState)
      return newState
    }

    case CART_ACTION_TYPES.REMOVE_FROM_CART:{
      const { isbn } = actionPayload
      const newState = state.filter(item => item.isbn !== isbn)
      updateLocalStorage(newState)
      return newState
    }

    case CART_ACTION_TYPES.CLEAR_CART:{
      const { isbn } = actionPayload
      const productInCartIndex = state.findIndex(item => item.isbn === isbn)
      //producto esta en el carrito
      if (productInCartIndex >= 0){
        const newState = structuredClone(state)
        if (newState[productInCartIndex].quantity  > 1){
        newState[productInCartIndex].quantity -= 1
        }
        if (newState[productInCartIndex].quantity === 0){
          CART_ACTION_TYPES.REMOVE_FROM_CART 
            const { isbn } = actionPayload
            const newState = state.filter(item => item.isbn !== isbn)
            updateLocalStorage(newState)
            return newState
          
        }
        updateLocalStorage(newState)
        return newState
      }
    }
  }

  return state
}