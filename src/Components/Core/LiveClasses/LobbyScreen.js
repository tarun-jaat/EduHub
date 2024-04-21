import React, { useCallback, useState } from 'react'
import { useSocket } from '../../../Context/SocketProvider';

function LobbyScreen() {
    const [email,setEmail]=useState();
    const [room,setRoom]=useState();

    const socket =useSocket();
    // console.log(socket);
    const handleSubmitForm=useCallback((e)=>{
        e.preventDefault();
        socket.emit('room:join',{email,room});
    },[email,room,socket]);


  return (
    <div>
        <h1>this is lobby</h1>
        <form className='flex flex-col gap-6' onSubmit={handleSubmitForm}>
            <label htmlFor="email" >Email Id</label>
            <input className='border-2 border-richblack-900' type='email' id='email' value={email} onChange={(e)=>setEmail(e.target.value)} /><hr></hr>
            <label htmlFor="room">Room Id</label>
            <input className='border-2 border-richblack-900' type='text' id='room' value={room} onChange={(e)=>setRoom(e.target.value)} /><br></br>
            <button onClick={handleSubmitForm}>Join</button>
        </form>

    </div>
  )
}

export default LobbyScreen