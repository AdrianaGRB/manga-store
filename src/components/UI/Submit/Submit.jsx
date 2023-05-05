import React from 'react'
import { DarkButton } from '../StyledButtons'

const Submit = ({ children, onClick, disabled = false }) => {
  return (
    <DarkButton
    onClick={onClick}
    disabled={disabled}
    type='submit'
    >
        {children}
    </DarkButton>
  )
}

export default Submit