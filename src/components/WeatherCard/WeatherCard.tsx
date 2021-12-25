import {FC, HTMLAttributes, useEffect, useState} from "react"
import {useSelector, useDispatch} from "react-redux"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import {RootState} from "../../redux/reducer/rootReducer"
import {getDayNameByDate} from "../../utils"
import SearchLocation from "./Search"
import Spinner from "react-bootstrap/Spinner"
import {EWeatherSagaWatcherType} from "../../interface/action/type"

interface IProps extends HTMLAttributes<HTMLDivElement> {}

enum WoeidCity {
  london = 44418,
  sanfrancisco = 2487956
}

const WeatherForeCast: FC<IProps> = () => {
  const [woeid, setWoeid] = useState<number>(WoeidCity.london)

  const [searchInputValue, setSearchInputValue] = useState<string>("")

  const isLoading = useSelector((state: RootState) => state.weather.isLoading)

  const dispatch = useDispatch()
  
  const consolidate_weather = useSelector((state: RootState) => state.weather.consolidate_weather)

  useEffect(() => {
    dispatch({
      type: EWeatherSagaWatcherType.GET_WEATHER_INFO_BY_LOCATION_WATCHER,
      payload: {
        woeid
      }
    })
  }, [woeid, dispatch])
  
  return (
    <>
      <Row>
        <Col>
          <SearchLocation 
            searchInputValue={searchInputValue}
            setSearchInputValue={setSearchInputValue}
            setWoeid={setWoeid}
            woeid={woeid}
          />
        </Col>
        <Col style={{display: "flex", justifyContent: "flex-end"}}>
          {isLoading && (
            <Spinner variant="secondary" animation="border" role="status"></Spinner>
          )}
        </Col>
      </Row>
      <Row>
        {consolidate_weather.map((cw, idx) => (
          <Col key={`idx-${idx}`} style={{borderRight: idx < consolidate_weather.length - 1 ? "0.1rem solid #e0ebeb": ""}}>
            <div style={{color: "grey", fontWeight: "bold"}}>{getDayNameByDate(cw.applicable_date)}</div>
            <br />
            <div>{`Min: ${cw.max_temp.toFixed(2)}`}</div>
            <div>{`Max: ${cw.min_temp.toFixed(2)}`}</div>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default WeatherForeCast