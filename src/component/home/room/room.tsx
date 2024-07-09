import { useNavigate } from 'react-router-dom';
import './room.css'
import LogoutIcon from '@mui/icons-material/Logout';
import ChatIcon from '@mui/icons-material/Chat';

const OTTPlatforms = () => {
  const OTT = [
    { id: 1, name: "Spotify", release: "Connect" },
    { id: 2, name: "Youtube", release: "Connect" },
    { id: 3, name: "Netflex", release: "Soon" },
  ];

  return (
    <div className="roomOTT">
      {OTT.map((ott) => (
        <div key={ott.id} className="ottItem">
          <p>{ott.name}</p>
          <button className="roomConnect">{ott.release}</button>
        </div>
      ))}
    </div>
  );
};

export const Room = () => {
  const navigate = useNavigate()

  return(
    <div className="roomchatContainer">
      <div className='innerContainer'>
        <div className='roomInnerContainer'>
          <p>Welcome</p>
        </div>
        <OTTPlatforms/>
        <div className='roomExitbtn'>
          <div className='roomExit' onClick={(e) =>{ 
            e.stopPropagation() 
            navigate('/home')
          }}>
            <LogoutIcon fontSize='small'/>
            <p style={{ fontSize : "14px" , paddingLeft : "4px"}}> Exit Room</p>
          </div>
          <div className='roomChat' onClick={(e) => {
            e.stopPropagation()
            navigate('/chat')
            }}>
            <ChatIcon fontSize='small'/>
            <p style={{ fontSize : "14px" , paddingLeft : "4px"}}> Chat</p>
          </div>
        </div>
      </div>
    </div>
  )
}