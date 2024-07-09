import { useNavigate } from 'react-router-dom';
import './index.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {  useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { YtSearch } from './search/youtube';
import { YoutubeVideo } from './search/youtubeVideo';

export const ChatHome = () => {

  const [message , setMessage] = useState('')
  const [searchVideos , setSearchVideos] = useState('')
  const [videos , setVideos] = useState<any>([])
  
  const navigate = useNavigate()

  const handleSearch =  (search:string) => {
    setSearchVideos(search)
  }

  const handleSearchFields = async() => {
    const res = await YtSearch.get('/search',{
      params : {
        q : searchVideos
      }
    })
    setVideos(res.data.items)
  }  

  return(
    <div className='chatContainer'>
       <div className='backReturn' onClick={() => navigate('/home/room')}>
          <ArrowBackIcon/>
        </div>
      <div className='chat'>
        <div className='youtubeSearch'>
        <TextField
            variant="outlined"
            placeholder='Search Videos'
            value={searchVideos}
            onChange={(e) => handleSearch(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleSearchFields}>
                    <SearchOutlinedIcon color='info' fontSize='small' />
                  </IconButton>
                </InputAdornment>
              ),
              style: { backgroundColor: 'white', height: "30px"} 
            }}
          />
        </div>
        <div className='OTTplayer'>
          <YoutubeVideo Videos={videos}/>
        </div>
        <div className='chatsearch'>
        <TextField
            variant="outlined"
            placeholder='Type a message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <SendIcon color='info' fontSize='small' />
                  </IconButton>
                </InputAdornment>
              ),
              style: { backgroundColor: 'white' } 
            }}
          />
        </div>
      </div>
    </div>
  )
}
