import React, { useState, useEffect } from 'react';
import './Sidebar.css';
import { Avatar, IconButton } from '@material-ui/core'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { SearchOutlined } from '@material-ui/icons';
import SidebarChat from './SidebarChat';
import db from './firebase';


function Sidebar() {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        const unsubscribe = db.collection('rooms').onSnapshot((snapshot) =>
            (
                setRooms(snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
                )
            )
        );

        return () => {
            unsubscribe();
        }

    }, []);

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar src="https://avatars3.githubusercontent.com/u/16040759?s=460&u=beffe22e659bff0ddba2c9711576e5a787fb3a9f&v=4" />
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
                    <SearchOutlined />
                    <input placeholder="Search or start new chat" type="text" />
                </div>
            </div>

            <div className="sidebar__chats">
                <SidebarChat addNewChat />
                {rooms.map(room => (
                    <SidebarChat key={room.id} id={room.id}
                        name={room.data.name} />
                ))}
            </div>
        </div>
    )
}

export default Sidebar
