
import axios from 'axios';

export async function HouseButton(id, state) {
    try {
      // 👇️ const data: CreateUserResponse

      const data = await axios.post(
        'https://mains-h5w5.onrender.com/api/house',
        {
          'Id': parseInt( id),
          'State': state ? 1 : 0
   
        },
        {
            headers: { 
                'Content-Type': 'application/x-www-form-urlencoded'
              },
        },
      )
      .then((response) => {
        console.log(JSON.stringify(response.data))})
  
  
      return data;
      
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log('error message: ', error.message);
        // 👇️ error: AxiosError<any, any>
        return error.message;
      } else {
        console.log('unexpected error: ', error);
        return 'An unexpected error occurred';
      }
    }
  }
  




