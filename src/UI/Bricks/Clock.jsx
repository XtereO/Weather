import React, { useEffect, useState } from "react";

let Clock = (props) => {
    let [second, setSecond] = useState((new Date()).getSeconds())
    let secondHandStyle = {
        transformOrigin: "0% 0%",
        transform: `rotate(${(second / 60) * 360 - 90}deg)`,
        background: "blue",
        height: 5,
        width: 90,
        position:"relative",
        top:85,
        left:98
    }
    let [minute, setMinute] = useState((new Date()).getMinutes())
    let minuteHandStyle = {
        transformOrigin: "0% 0%",
        transform: `rotate(${(minute / 60) * 360 - 90}deg)`,
        background: "gray",
        height: 6,
        width: 70,
        position:"relative",
        top:100,
        left:100
    }
    let [hour, setHour] = useState((new Date()).getHours())
    let hourHandStyle = {
        transformOrigin: "0% 0%",
        transform: `rotate(${(hour / 12) * 360 - 90}deg)`,
        background: "red",
        height: 7,
        width: 60,
        position:"relative",
        top:92,
        left:106
    }
    let SetTime = () => {
        setInterval(() => {
            setSecond((new Date()).getSeconds())
            setMinute((new Date()).getMinutes())
            setHour((new Date().getHours()))
        }, 1000);
    }
    useEffect(() => {
        SetTime()
    }, [])
    return <div style={{position:"relative",height:200,width:200,top:0,left:0 , border:"1px red solid",borderRadius:2000}} className="ml-4">
        <div style={minuteHandStyle}>
        </div>
        <div style={hourHandStyle}>
        </div>
        <div style={secondHandStyle}>
        </div>
    </div>
}
export default Clock