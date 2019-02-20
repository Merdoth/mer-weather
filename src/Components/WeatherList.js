import React, { Fragment } from 'react';
import WeatherCard from './weatherCard';

const data = [
    { 
      id: 1,
      day: 'Wed', 
      image: '/assests/Sunny-icon.png', 
      thick: '76˚', 
      light: '65˚' 
    },
    { 
        id: 2,
        day: 'Thu', 
        image: '/assests/rainy.png', 
        thick: '26˚', 
        light: '55˚' 
    },
    { 
        id: 3,
        day: 'Fri', 
        image: '/assests/sunny-cloudy.png', 
        thick: '12˚', 
        light: '40˚' 
      },
      { 
        id: 4,
        day: 'Sat', 
        image: '/assests/sunny-cloudy.png', 
        thick: '76˚', 
        light: '65˚' 
      },
      { 
        id: 5,
        day: 'Sun', 
        image: '/assests/Sunny-icon.png', 
        thick: '80˚', 
        light: '45˚' 
      },
      { 
        id: 6,
        day: 'Mon', 
        image: '/assests/rainy.png', 
        thick: '67˚', 
        light: '35˚' 
      },
      { 
        id: 7,
        day: 'Tue', 
        image: '/assests/rainy.png', 
        thick: '99˚', 
        light: '75˚' 
      },
      { 
        id: 8,
        day: 'Wed', 
        image: '/assests/sunny-cloudy.png', 
        thick: '16˚', 
        light: '85˚' 
      },
]

const WeatherList = ({header}) => (
    <Fragment>
         <h2 className="header">{header}</h2> 
         <div className="weather-content">
        {data && data.map(obj=> (
            <WeatherCard
                key={obj.id} 
                day={obj.day}
                image={obj.image}
                thick={obj.thick}
                light={obj.light}
            />)
        )}
         </div> 
    </Fragment>
)

export default WeatherList;