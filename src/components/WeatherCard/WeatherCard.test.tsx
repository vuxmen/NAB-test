import {render} from "@testing-library/react"
import {Provider} from "react-redux"
import store from "../../redux/store"
import WeatherForeCast from "../WeatherCard"
import Row from 'react-bootstrap/Row'

describe("WeatherForeCast", () => {
  it("should match snapshot", () => {
    const view = render(
      <Provider store={store}>
        <WeatherForeCast />
      </Provider>
    )
    expect(view).toMatchSnapshot()
  })

  it("has class col of boostrap on first column", () => {
    const {container} = render(
      <Provider store={store}>
        <WeatherForeCast>
          <Row />
          <Row />  
        </WeatherForeCast>
      </Provider>
    )
    expect(container.firstChild?.firstChild).toHaveClass("col")
  })

  it("has no border style on last column", () => {
    const {container} = render(
      <Provider store={store}>
        <WeatherForeCast>
          <Row />
          <Row />  
        </WeatherForeCast>
      </Provider>
    )
    expect(container.firstChild?.lastChild).toHaveStyle({
      borderRight: "none"
    })
  })
})