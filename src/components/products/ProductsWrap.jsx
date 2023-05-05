import React from 'react'
import { ProductsCardsContainer } from './ProductsStyles'

const ProductsWrap = ({children}) => {
  return (
   <ProductsCardsContainer>
    {children}
   </ProductsCardsContainer>
  )
}

export default ProductsWrap