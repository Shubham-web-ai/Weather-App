import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import "./Search.css";
import { useState } from 'react';

export default function searchbox({updateInfo}){
    let [city,setCity]=useState("");
    let [error,setError]=useState(false);
    
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="1d1aceb9d92233a270608eb07d49aeb8";

    let getWeatherInfo = async () => {
        try{
                    let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            
                    let jsonresponse = await response.json();

                    let result = {
                        city:city,
                        temp: jsonresponse.main.temp,
                        tempMin: jsonresponse.main.temp_min,
                        tempMax: jsonresponse.main.temp_max,
                        humidity: jsonresponse.main.humidity,
                        feelsLike: jsonresponse.main.feels_like, 
                        weather: jsonresponse.weather[0].description,
                    };
                console.log(result);
                return result;

            } catch(err){
                throw err;
            }
    
    };
   
    let handleChange=(evt)=>{
        setCity(evt.target.value);
    }

   let handleSubmit = async (evt) => {
    try{
        evt.preventDefault();
        console.log(city);
        setCity("");
        let newInfo=await getWeatherInfo();
        updateInfo(newInfo);

    } catch(err){
        setError(true);
    }
    
   };

    return (
        
        <div className="SearchBox">
            <form onSubmit={handleSubmit}>
                <TextField id="City Name" label="City Name" variant="outlined" size='small' required value={city} onChange={handleChange}/>
                <br></br> <br></br>
                <Button variant="contained" type="Submit">
                    Search
                </Button>
            {error && <p style={{color:"red"}}>No such place exits!</p>}
            </form>
        </div>
    )
};
