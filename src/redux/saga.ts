import * as Effects from "redux-saga/effects"
import {AxiosResponse} from "axios"
import {EWeatherMetaDataActionType, EWeatherSagaWatcherType} from "../interface/action"
import {getWeatherInformationByLocation} from "../api/weatherMetaData"

const call: any = Effects.call

function* getWeatherInfoByLocation(action: any) {
  try {
    yield Effects.put({
      type: EWeatherMetaDataActionType.SET_ONPROGRESS_STATUS
    })

    const response: AxiosResponse = yield call(
      getWeatherInformationByLocation, action.payload.woeid
    )
    const {data} = response
    
    yield Effects.put({
      type: EWeatherMetaDataActionType.GET_WEATHER_INFO_BY_LOCATION,
      payload: {
        consolidate_weather: data.consolidated_weather,
        woeid: action.payload.woeid
      }
    })

    yield Effects.put({
      type: EWeatherMetaDataActionType.SET_SUCCESS_STATUS
    })
  } catch(err) {
    yield Effects.put({
      type: EWeatherMetaDataActionType.SET_FAILURE_STATUS
    })
    throw err
  }
}

function* sagaWatcher(): Generator<Effects.StrictEffect> {
  yield Effects.takeEvery(EWeatherSagaWatcherType.GET_WEATHER_INFO_BY_LOCATION_WATCHER, getWeatherInfoByLocation)
}

export default sagaWatcher
export {getWeatherInfoByLocation}