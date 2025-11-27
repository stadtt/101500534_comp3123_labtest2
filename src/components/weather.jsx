import React, { useState, useEffect} from "react";
import weatherAPI from "../api/weatherAPI";

function ViewWeather(){
    const[details, setDetails] = useState(null)
    const [city,setCity] = useState("")
    const getWeatherDetails = async () => {

         try{
            const weatherDetails = await weatherAPI.getWeather()
            setDetails(weatherDetails)
            console.log("Weather Details: ", weatherDetails)

        }catch(error){
            console.error("Failed to fetch weather details: ", error)
        }


    }
      const getWeatherByCity = async (weather) => {

         try{
            const weatherDetails = await weatherAPI.getCity(weather)
            setDetails(weatherDetails)
            console.log("Weather Details: ", weatherDetails)

        }catch(error){
            console.error("Failed to fetch weather details: ", error)
        }


    }
     const handleSubmit = (e) => {
        e.preventDefault()
        weatherAPI.getCity(city)
        .then(response => {
            setDetails(response)
        })
        .catch(error =>{
            console.error("there was an error changing city ", error)
        })

    }
 

    useEffect(()=>{
        getWeatherDetails()
    },[city])
    if (!details) {
    return <div>Loading weather...</div>;
  }
    return(
        <div>
            <h1>{details.name}</h1>
            <div>
            <p > longitude: {details.coord.lon} </p>
             <p >latitude: {details.coord.lat} </p>
            </div> 
            <div>
                 <p >{details.weather[0].description}</p>
                <p >{details.weather[0].main}</p>
            </div>
            <div>
                 <p >Pressure: {details.main.pressure}</p>
                 <p >Humidty: {details.main.humidity}</p>
                 <p >Wind: {details.main.pressure}</p>
            </div>

            <div>
                <form onSubmit={handleSubmit}>
                <div>
                  <label>city: </label>
                  <input type="text" name="city" value= {city} onChange={(e) => setCity(e.target.value)} />
                  
                 </div>     

                <button type="submit">Change City</button>    
                </form>
            </div>
        
        </div>
    )
}

export default ViewWeather