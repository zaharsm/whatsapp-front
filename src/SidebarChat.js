
import { Avatar } from '@mui/material';
import React from 'react';
import "./SidebarChat.css";

function SidebarChat(props) {
  return (
    <div className='sidebarChat'>
      <Avatar src={props.link} />
       <div className="sidebarChat__info">
            <h2>{props.name}</h2>
            <p>{props.message}</p>
          </div>
    </div>
  )
}

export default SidebarChat