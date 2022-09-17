import React from 'react';
import "./Sidebar.css";
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Avatar , IconButton } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SidebarChat from './SidebarChat';


function Sidebar() {
  return (
    <div className='sidebar'>

        <div className="sidebar__header">
          <Avatar src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" />

           <div className="sidebar__headerRight">
            <IconButton>
                <DonutLargeIcon />
            </IconButton>

            <IconButton>
                <ChatIcon />
            </IconButton>

            <IconButton>
                <MoreVertIcon />
            </IconButton>
            </div>
            
        </div>
        <div className="sidebar__search">
           <div className="sidebar__searchContainer">
              <SearchOutlinedIcon />
              <input 
                type="text" 
                placeholder='Search or start new chat' />
           </div>

        </div>

        <div className="sidebar__chat">
          <SidebarChat link="https://images.pexels.com/photos/1964970/pexels-photo-1964970.jpeg" name="Rohan" message="Lets meet tomorrow @ 6pm"/>
          <SidebarChat link="https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" name="Sonny" message="Whats up bro?"/>
          <SidebarChat link="https://images.pexels.com/photos/1136575/pexels-photo-1136575.jpeg?auto=compress&cs=tinysrgb&w=600" name="Yaseen" message="ok... see you"/>
          <SidebarChat link="https://images.pexels.com/photos/3280130/pexels-photo-3280130.jpeg?auto=compress&cs=tinysrgb&w=600" name="Family Group" message="Good Morning" />
          <SidebarChat link="https://images.pexels.com/photos/1205033/pexels-photo-1205033.jpeg?auto=compress&cs=tinysrgb&w=600" name="Danish" message="Good Job keep up the good work"/>
          <SidebarChat link="https://images.pexels.com/photos/1666779/pexels-photo-1666779.jpeg?auto=compress&cs=tinysrgb&w=600" name="Zahar" message="Cool ....."/>
          <SidebarChat link="https://images.pexels.com/photos/716411/pexels-photo-716411.jpeg?auto=compress&cs=tinysrgb&w=600" name="Ayush" message="Done Boss"/>
        </div>
    </div>
  )
}

export default Sidebar