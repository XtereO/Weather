import { number } from "prop-types"

export type NewItem = {
    description: string
    img: string
}
export type weatherType = {
    coord: {
        lon: number,
        lat: number
    },
    weather: [
        {
            id: number,
            main: string,
            description: string,
            icon: any
        }
    ],
    base: string,
    main: {
        temp: number,
        feels_like: number,
        temp_min: number,
        temp_max: number,
        pressure: number,
        humidity: number
    },
    visibility: number,
    wind: {
        speed: number,
        deg: number
    },
    clouds: {
        all: number
    },
    dt: number,
    sys: {
        type: number,
        id: number,
        message: string,
        country: string,
        sunrise: number,
        sunset: number
    },
    timezone: number,
    id: number,
    name: string,
    cod: number
}
export type forecastWeekType = {
    "cod":string,
    "message":number,
    "cnt":number, //Count Days
    "list":Array<DayItem>
}
export type DayItem={
    "dt":number,
    "main":{
       "temp":number,
       "temp_min":number,
       "temp_max":number,
       "pressure":number,
       "sea_level":number,
       "grnd_level":number,
       "humidity":number,
       "temp_kf":number
    },
    "weather":[
       {
          "id":number,
          "main":string,
          "description":string,
          "icon":string
       }
    ],
    "clouds":{
       "all":number
    },
    "wind":{
       "speed":number,
       "deg":number
    },
    "sys":{
       "pod":string
    },
    "dt_txt":string
}
export type PollutionType={
    "coord":{
        "lon":number,
        "lat":number
        },
    "list":[
        {"main":{"aqi":number},//Where 1=Good,2=Fair,3=Moderate,4=Poor,5=VeryPoor
        "components":{
        "co":number,
        "no":number,
        "no2":number,
        "o3":number,
        "so2":number,
        "pm2_5":number,
        "pm10":number,
        "nh3":number
        },
        "dt":number}
    ]
}

