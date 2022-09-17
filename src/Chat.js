import { Avatar, IconButton } from '@mui/material';
import React, { useState } from 'react';
import "./Chat.css";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';
import axios from "./axios";

function Chat({messages}) {

  const [input,setInput] = useState("");

  const sendMessage = async (e)=>{
      e.preventDefault();

         await axios.post("/messages/new",{
         message:input,
         name:"yourname",
         timestamp:"on time",
         received:true
      });

      setInput("");
   }
   
  return (
    <div className='chat'>
     
       <div className="chat__header">
       <Avatar src="https://images.pexels.com/photos/7046168/pexels-photo-7046168.jpeg?auto=compress&cs=tinysrgb&w=600" />
          <div className="chat__headerInfo">
            <h3>Office Group 🚀🚀🚀 </h3>
            <p>Zahar, Rohan, Sonny, You... </p>
          </div>

          <div className="chat__headerRight">
            <IconButton>
               <SearchOutlinedIcon/>
            </IconButton>

            <IconButton>
               <AttachFileIcon/>
            </IconButton>

            <IconButton>
                <MoreVertIcon/>
            </IconButton>
          </div>
       </div>

       <div className="chat__body">
       {messages.map(message => (
           <p 
           className={`chat__message ${message.received && "chat__receiver"}`}>
           <span className='chat__name'>{message.name}</span>
           {message.message}
           
           <span className='chat__timeStamp'>
           {message.timestamp}
           </span>
           </p>
       ))}
       


           {/* <p className='chat__message chat__receiver'>
           <span className='chat__name'>Sunny</span>
           This is a message
           
           <span className='chat__timeStamp'>
            {new Date().toUTCString()}
           </span>
           </p> */}

           
       </div>

       <div className="chat__footer">
       <InsertEmoticonIcon />
            <form>
               <input value={input} onChange={((e) => {setInput(e.target.value)})} placeholder="Type a message" type="text" />
               <button onClick={sendMessage} type="text">
                  Send a message
               </button>
            </form>
          <MicIcon />
       </div>

    </div>
  )
}

export default Chat