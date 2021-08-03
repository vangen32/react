import React, {useState, useEffect} from "react";
import axios from "axios";
import {WeatherPointCart} from "../dumpEl/WeatherPointCart"
export function MainContainer(){
    const[weatherDate, setWeatherdata] = useState([]);
    const[interval, setDataUpdateInterval] = useState(2000);
    //const[tempDiff, setDataTempDiff] = useState([]);
    let tempDiff = [];
   
    const getData = async ()=>{
        await axios.get("https://bt-21-playground-vppfc.ondigitalocean.app/forecast")
        .then(function (response) {
            console.log(response.data);
            tempDiff = getTempDiff(response.data);
            setWeatherdata(response.data);
          })
          .catch(function (error) {
            console.log(error);
          })
    }
    useEffect(() => {
        var a = setTimeout(getData,interval);
        return ()=>clearTimeout(a);
    });
    
    const getTempDiff = (newTempDate) =>{
        var aaa = []
        weatherDate.forEach(i=>{
            var newIt = newTempDate.find(x=>x.city==i.city);
            if(newIt){
                var tempD = Math.abs(i.temperature) - Math.abs(newIt.temperature);
                tempD = i.temperature > newIt.temperature ? tempD : tempD*(-1);
            }
        });
        return aaa;
    }

    return(
        <div className="wrapper">
            <div className="data-view">
                {
                    weatherDate.map((i)=>{
                    var diff = tempDiff.find(x=>x.city==i.city);
                    return <WeatherPointCart tempdiff={diff.temp} temp={i.temperature} city={i.city} key={i.id}></WeatherPointCart>
                    })
                }
            </div>
            <div>
                <button onClick={()=>{
                    if(interval>1000)setDataUpdateInterval(interval-1000)
                    }}>-</button>
                
                <span>Interval: {interval}</span>
                
                <button onClick={()=>{
                    setDataUpdateInterval(interval+1000)
                    }}>+</button>
            </div>
        </div>
    )

}

//export default MainContainer