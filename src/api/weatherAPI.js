import axiosInstance from "./AxiosInstance";    


const weatherAPI = {

    getWeather : async  () =>  {
        try{
            const response = await axiosInstance.get('/weather', {
             params: {
            q: 'Toronto',
            appid: process.env.api_key 
        }
    })

        console.log(response.data);
        return response.data

        }catch(error){
           throw new Error("Error fetching : " + error.message)
        }



    }
   
}

export default weatherAPI