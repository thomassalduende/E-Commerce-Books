import { useContext } from "react";
import { CartContext } from "../Context/cart";

export function useCart () {
  const contexto = useContext(CartContext)

  if (contexto === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }

  return contexto
}