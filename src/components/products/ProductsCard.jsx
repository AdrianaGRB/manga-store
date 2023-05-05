import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CardGenres, CardImage, CardText, CardTitle, ProductCardContainer } from './ProductsStyles'
import * as cartActions from "../../redux/cart/cart-actions"
import * as popUpActions from "../../redux/productPopup/popup-action"
import Popup from '../Popup/Popup'



const ProductsCard = ({id, name, autor, img, genre, subgenre, description, price} ) => {
  /* Controladores del popUp*/
const dispatch = useDispatch()
  
  return ( <>
       <ProductCardContainer onClick={() => dispatch(popUpActions.toggleHiddenPopup({img, name, id, genre, description}))} >
        <CardImage src={img} alt={name} />
        <CardTitle> {name} </CardTitle>
        <CardGenres> {genre} {subgenre} </CardGenres>    
        <CardText> Autor: {autor} </CardText>
        <CardText> {price} </CardText>

    </ProductCardContainer>
    </>
  )
}

export default ProductsCard