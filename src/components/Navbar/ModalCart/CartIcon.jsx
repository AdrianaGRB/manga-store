import React from 'react'
import {BsCart3} from "react-icons/bs"
import { useDispatch, useSelector } from 'react-redux'
import * as cartActions from "../../../redux/cart/cart-actions"

const CartIcon = () => {

  const dispatch = useDispatch()
  const totalCartItems = useSelector(state => state.cart.cartItems).reduce(
    (acc, item) => (acc += item.quantity), 0
  )


  return ( 
    <>
    <BsCart3 onClick={() => dispatch(cartActions.toggleHiddenCart())}/>
    <span> {totalCartItems} </span>
    </>
  )
}

export default CartIcon