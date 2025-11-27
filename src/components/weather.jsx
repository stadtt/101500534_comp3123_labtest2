import React, { useState, useEffect} from "react";
import weatherAPI from "../api/weatherAPI";

function ViewWeather(){
    const[details, setDetails] = useState(null)
    const getWeatherDetails = async () => {

         try{
            const weatherDetails = await weatherAPI.getWeather()
            setDetails(weatherDetails)
            console.log("Weather Details: ", weatherDetails)

        }catch(error){
            console.error("Failed to fetch weather details: ", error)
        }


    }

    useEffect(()=>{
        getWeatherDetails()
    },[])
    if (!details) {
    return <div>Loading weather...</div>;
  }
    return(
        <div>
            <div>
             <p style={{ textTransform: "capitalize" }}>
                {details.weather[0].description}
            </p>
             </div>  
        
        </div>
    )
}

export default ViewWeather