import React from "react";
import Cardlayout from "../CardLayout/Cardlayout";
import Users from "./Users";
import './Cards.css'

function Cards(props) {
  return (
    <div >
      <Cardlayout className='card1'>
        <Users 
          usersId={props.users[0].id}
          usersName={props.users[0].username}
          wallpaper={props.users[0].wallpaper}
          userInfo={props.users[0].userInfo}
          profilePic={props.users[0].profilePic}
        />
        <Users
          usersId={props.users[1].id}
          usersName={props.users[1].username}
          wallpaper={props.users[1].wallpaper}
          userInfo={props.users[1].userInfo}
          profilePic={props.users[1].profilePic}
        />
        <Users
          usersId={props.users[2].id}
          usersName={props.users[2].username}
          wallpaper={props.users[2].wallpaper}
          userInfo={props.users[2].userInfo}
          profilePic={props.users[2].profilePic}
        />
      </Cardlayout >
      <Cardlayout className='card2'>
        <Users
          usersId={props.users[3].id}
          usersName={props.users[3].username}
          wallpaper={props.users[3].wallpaper}
          userInfo={props.users[3].userInfo}
          profilePic={props.users[3].profilePic}
        />
        <Users
          usersId={props.users[4].id}
          usersName={props.users[4].username}
          wallpaper={props.users[4].wallpaper}
          userInfo={props.users[4].userInfo}
          profilePic={props.users[4].profilePic}
        />
        <Users
          usersId={props.users[5].id}
          usersName={props.users[5].username}
          wallpaper={props.users[5].wallpaper}
          userInfo={props.users[5].userInfo}
          profilePic={props.users[5].profilePic}
        />
      </Cardlayout>
      <Cardlayout className='card3'>
        <Users
          usersId={props.users[6].id}
          usersName={props.users[6].username}
          wallpaper={props.users[6].wallpaper}
          userInfo={props.users[6].userInfo}
          profilePic={props.users[6].profilePic}
        />
      </Cardlayout> <hr />
    </div>
  );
}

export default Cards;
