import axios from "axios"
import {EWeatherMetaAPIEndPoint, EWeatherMetaDataStartPoint} from "../interface/config"

// For Redux Saga
export const weatherInfoByLocationAPI = (woeid: string) => {
  return axios.request({
    method: "get",
    url: `${EWeatherMetaDataStartPoint.api}${EWeatherMetaAPIEndPoint.location}/${woeid}`
  })
}

// For Redux Thunk
export const getWeatherInformationByLocation = async (woeid: number) => {
  return await axios.get(`${EWeatherMetaDataStartPoint.api}${EWeatherMetaAPIEndPoint.location}/${woeid.toString()}/`)
}
