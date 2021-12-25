import {Reducer} from "redux"
import {IWeatherByLocationWithStatus} from "../../interface/api"
import {EWeatherMetaDataActionType} from "../../interface/action"

const initialState: IWeatherByLocationWithStatus = {
  consolidate_weather: [
    {
      air_pressure: 0,
      applicable_date: "",
      created: "",
      humidity: 0,
      id: 0,
      max_temp: 0,
      min_temp: 0,
      predictability: 0,
      the_temp: 0,
      visibility: 0,
      weather_state_abbr: "",
      wearther_state_name: "",
      wind_direction: 0,
      wind_direction_compass: "",
      wind_speed: 0
    }
  ],
  latt_long: "",
  location_type: "",
  parent: {
    latt_long: "",
    location_type: "",
    title: "",
    woeid: 0
  },
  source: [
    {
    crawl_rate: 0,
    slug: "",
    title: "",
    url: ""
    }
  ],
  sunrise: "",
  sun_set: "",
  time: "",
  timezone: "",
  timezone_name: "",
  title: "",
  woeid: 0,
  isLoading: true,
  isError: false
}

const weatherInfoReducer: Reducer<IWeatherByLocationWithStatus> = 
  (state = initialState, action) => {
    switch (action.type) {
      case EWeatherMetaDataActionType.GET_WEATHER_INFO_BY_LOCATION: {
        return {
          ...state,
          consolidate_weather: action.payload.consolidate_weather,
          woeid: action.payload.woeid
        }
      }
      case EWeatherMetaDataActionType.SET_SUCCESS_STATUS: {
        return {
          ...state,
          isLoading: false,
          isError: false
        }
      }
      case EWeatherMetaDataActionType.SET_ONPROGRESS_STATUS: {
        return {
          ...state,
          isLoading: true,
          isError: false
        }
      }
      case EWeatherMetaDataActionType.SET_FAILURE_STATUS: {
        return {
          ...state,
          isLoading: false,
          isError: true
        }
      }
      default: return state
    }
}

export default weatherInfoReducer