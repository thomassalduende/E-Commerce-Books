import React, { useState } from 'react'

export function useModal(initialValue = false) {
  const [open, setOpoen] = useState(initialValue)

  const openModal = () => {
    setOpoen(true)
  }
  const closeModal = () => {
    setOpoen(false)
  }

  return { open, openModal, closeModal}
}
