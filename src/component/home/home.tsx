import { useState } from 'react';
import './home.css'
import { useNavigate } from 'react-router-dom';
import { getTimeOfDay } from '../common/time';


export const HomePage = () => {
  const nevigate = useNavigate();

  const [roomCode , setRoomCode ] = useState('')

  const handleRoom = () => {
    nevigate('room')
  }

  const greeting = getTimeOfDay()

  const handleGenerateCode = () => {
    const code = Math.floor(100000 + Math.random() * 900000);
    setRoomCode(`#${code}`)
  }

  return(
    <div className="homepage">
      <div className='homecontainer' style={{ fontSize : "14px"}}>
        <p style={{ textAlign : "left" , paddingLeft : "10px" , fontSize : "20px" , fontWeight : "bold"}}>
          {`Good ${greeting}`}</p>
        <p style={{ textAlign : "left" , paddingLeft : "10px" , fontSize : "16px" , fontWeight : "bold"}}>
          Generate a sharing code to start a room</p>
      </div>
      <div className='room'>
        <button className='generateCodebtn' onClick={handleGenerateCode}>Generate Code</button>
        <button className='roombtn' onClick={handleRoom}>Join Room</button>
         <div className='roomFields'>
          <input type='text' placeholder="Enter Room Code" value={roomCode} /> 
         </div>
      </div>
      <div className='bottomNavBar'>
        <p>Home</p>
        <p>Setting</p>
      </div> 
     
    </div>
  )
}