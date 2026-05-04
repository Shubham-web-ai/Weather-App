import { useState } from "react";
import InfoBox from "./InfoBox.jsx";
import Search from "./Search.jsx";


export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
        city:"Wonderland",
        feelsLike:24.84,
        temp:25.05,
        tempMin:25.05,
        tempMax:25.05,
        humidity:47,
        weather:"haze",
    })

    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }
        
    return (
        <div>
            <h2 style={{textAlign:"center"}}>Weather App by Shubham</h2>
            <Search updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}