import React, { useState } from "react";
import { FormControl, Container } from "react-bootstrap";
const api = {
  key:"59e2c48b26e540e3a6e5860077591254",
  base:"http://api.openweathermap.org/data/2.5/"
}
function App() {

  const [query, setQuery] = useState("")
  const [weather, setWeather] = useState([])

  const type = typeof weather.main
  let today = new Date().toLocaleDateString()

  const handleChange = (e)=>{
    setQuery(e.target.value);
    
  }

  const search = (e)=>{
    if(e.key === "Enter"){
      fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
        .then(res => res.json())
        .then(result =>{
          setWeather(result)
          setQuery("")
        })
          
    }
  }
 
  return (
    <div className="app">
    <Container>
    <FormControl type="serch" className="search-box" value ={query} onChange={handleChange} placeholder="Search..." onKeyDown={search}/>
    </Container>
      {(type !== "undefined") ? (
      <div className="location-info">
        <p>{weather.name + ", " + weather.sys.country}</p>
        <p>{today}</p>
        <p className="celsius">{Math.round(weather.main.temp)}<span>°</span></p>
        <p>{weather.weather[0].main}.</p>
      </div>
      ): ("")}
    
    </div>
  );
}

export default App;
