export interface IWeatherInfo {
  air_pressure: number
  applicable_date: string
  created: string
  humidity: number
  id: number
  max_temp: number
  min_temp: number
  predictability: number
  the_temp: number
  visibility: number
  weather_state_abbr: string
  wearther_state_name: string
  wind_direction: number
  wind_direction_compass: string
  wind_speed: number
}

interface IParent {
  latt_long: string
  location_type: string
  title: string
  woeid: number
}

interface ISource {
  crawl_rate: number
  slug: string
  title: string
  url: string
}

interface IWeatherByLocation {
  consolidate_weather: IWeatherInfo[]
  latt_long: string
  location_type: string
  parent: IParent
  source: ISource[]
  sunrise: string
  sun_set: string
  time: string
  timezone: string
  timezone_name: string
  title: string
  woeid: number
}

interface IWeatherStatus {
  isLoading: boolean
  isError: boolean
}

export interface IWeatherByLocationWithStatus extends IWeatherByLocation, IWeatherStatus {}