import React from 'react'
import Cardlayout from '../CardLayout/Cardlayout'
import './Users.css'

function Users(props) {
  return (
    <Cardlayout className ='card'>
        <div className='wallpaper'>{props.wallpaper}</div>
        <img className='picture' src={props.profilePic}/>
        <b className='author'>
            <div>{props.usersName}</div>
            <div>{props.usersId}</div>
        </b>
        <p className='userinfo'>{props.userInfo}</p>
        

    </Cardlayout>
  )
}

export default Users