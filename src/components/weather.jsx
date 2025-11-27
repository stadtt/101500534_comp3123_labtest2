import React, { useState, useEffect} from "react";
import weatherAPI from "../api/weatherAPI";
import 'bootstrap/dist/css/bootstrap.min.css';

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
            setCity("")
        })
        .catch(error =>{
            console.error("there was an error changing city ", error)
        })

    }
 

    useEffect(()=>{
        getWeatherDetails()
    },[])


    if (!details) {
    return <div>Loading weather...</div>;
  }
    const code = details.weather[0].icon;
    const url = `http://openweathermap.org/img/wn/${code}@2x.png`;
    const temp = (details.main.temp  -273.15).toFixed(2)

    return(
        <div className="container mt-4 d-flex gap-4 align-items-start">
           <div> 
            <h1 className="mb-3" >{details.name}</h1>
            
            <div className="mb-2">
            <p className="mb-1"> longitude: {details.coord.lon} </p>
             <p className="mb-1" >latitude: {details.coord.lat} </p>
            </div> 
             <img src={url}   />
            <div className="mb-2" >
                <p className="fw-semibold mb-1">{details.weather[0].main}</p>
            </div>
            <div cclassName="mb-2" >
                <p className="mb-1">Temperature: {temp}</p>
                 <p className="mb-1">Pressure: {details.main.pressure}</p>
                 <p className="mb-1">Humidty: {details.main.humidity}</p>
                 <p className="mb-1" >Wind: {details.main.pressure}</p>
            </div>

            <div className="text-center  card p-3 shadow-sm" >
                <form onSubmit={handleSubmit}>
                <div>
                  <label className="form-label">City: </label>
                  <input className="form-control" type="text" name="city" value= {city} onChange={(e) => setCity(e.target.value)} />
                  
                 </div>     

                <button  className="btn btn-primary" type="submit">Change City</button>    
                </form>
            </div>
        
            </div>
        </div>
    )
}

export default ViewWeather