import axiosInstance from "./AxiosInstance";    


const weatherAPI = {

    getWeather : async  () =>  {
        try{
            const response = await axiosInstance.get('/weather', {
             params: {
            q: 'Toronto',
            appid: "ad1ef316b4506bcd3e033d407b9d004e"
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