import axios from 'axios'

export default axios.create({
	baseURL: 'https://mains-h5w5.onrender.com/server/api	',
	withCredentials: true,
	
})
