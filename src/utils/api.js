import axios from 'axios'

export const getData = async () => {
  const res = await axios(`http://3.111.128.67/assignment/chat?page=0`)
  return await res.data;  
} 