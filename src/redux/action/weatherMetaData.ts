import {Dispatch, SetStateAction} from "react"
import {getWeatherInformationByLocation} from "../../api/weatherMetaData"
import {EWeatherMetaDataActionType} from "../../interface/action"
import {IWeatherInfo} from "../../interface/api/weather"
import {useDispatch} from "react-redux"

interface IUseWeather {
  _getWeatherInformation: (woeid: number) => void
}

// For Redux Thunk
export const useWeatherMetaData: (
  setIsLoading: Dispatch<SetStateAction<boolean>>
) => IUseWeather = (setIsLoading) => {
  const dispatch = useDispatch()
  const _getWeatherInformation  = (woeid: number) => {
    setIsLoading(true)
    getWeatherInformationByLocation(woeid)
    .then(response => {
      const weatherInformation = response.data.consolidated_weather
      dispatch({
        type: EWeatherMetaDataActionType.GET_WEATHER_INFO_BY_LOCATION,
        payload: weatherInformation
      })
    })
    .catch(err => { throw err })
    .finally(() => setIsLoading(false))
  }

  return {
    _getWeatherInformation
  }
}

// For Redux Saga
export const setWeatherInfo = (woeid: string) => {
  return {
    type: EWeatherMetaDataActionType.GET_WEATHER_INFO_BY_LOCATION,
    woeid
  }
}

export const requestWeatherInfoSuccess = (weatherInfo: IWeatherInfo[]) => {
  return { 
    type: EWeatherMetaDataActionType.GET_WEATHER_INFO_BY_LOCATION,
    payload: weatherInfo
  }
}
