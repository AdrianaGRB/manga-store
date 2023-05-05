import React from 'react'
import * as userActions from "../../../redux/user/user-actions"
import {AiOutlineUser} from "react-icons/ai"
import { useDispatch } from 'react-redux'

const UserIcon = () => {
    const dispatch = useDispatch()


  return (
    <AiOutlineUser onClick={() => dispatch(userActions.toggleMenuUser())}/>
  )
}

export default UserIcon