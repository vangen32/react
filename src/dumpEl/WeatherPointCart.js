import React, { useEffect } from "react";

export function WeatherPointCart(props){
    return(
        <div className="cart">
            <p className="temp">{props.temp}&#176;    
            <span>
                {props.tempdiff}&#176;
            </span>
            </p>
            <p className="location">{props.city}</p>
        </div>
    )
}