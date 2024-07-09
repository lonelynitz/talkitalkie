import axios from "axios";

const key = 'AIzaSyAXEbkXTWXlK_hR39KULNq-frMoH6uAs6o'

export const YtSearch = 
  axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3/',
    params : {
      part : 'snippet',
      maxResults : 1,
      key : key
    }
  })
