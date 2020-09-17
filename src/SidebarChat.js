import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './SidebarChat.css';
import db from './firebase';


function SidebarChat({ id, name, addNewChat }) {
    const [seed, setSeed] = useState('');

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 3790));
    }, []);

    const createChat = () => {
        const roomName = prompt("Please enter the name for chat");

        if (roomName) {
            // do some database stuffs..
            db.collection('rooms').add({
                name: roomName,
            });
        }
    };

    return !addNewChat ? (
        <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg `} />
            <div className="sidebarChat__info">
                <h4>{name}</h4>
                <p>Last Message</p>
            </div>
        </div >
    ) : (
            <div onClick={createChat} className="sidebarChat">
                <h3>Add New Chat</h3>
            </div>
        );
}

export default SidebarChat