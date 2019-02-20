import React from 'react';


const WeatherCard = ({day, image, thick, light}) => (
    <div className="weather-details-cont">
        <p className="weather-details-days">{day}</p>
        <img className="weather-details-images" src={image} alt={day}/>
        <div className="weather-details-degrees">
        <span className="thick">{thick}</span>
        <span className="light">{light}</span>
        </div>
    </div> 
)

export default WeatherCard;