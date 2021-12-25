import {Dispatch, SetStateAction} from "react"
import {render, screen} from "@testing-library/react"
import {Provider} from "react-redux"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSpinner} from '@fortawesome/free-solid-svg-icons'
import store from "../../../redux/store"
import WeatherForeCast from "../WeatherCard"
import SearchLocation from "./SearchLocation"

interface ISearchTestProps {
  searchInputValue: string
  setSearchInputValue: Dispatch<SetStateAction<string>>
  setWoeid: Dispatch<SetStateAction<number>>
  setIsLoading: Dispatch<SetStateAction<boolean>>
  woeid: number
}

const searchLocationTestProps: ISearchTestProps = {
  searchInputValue: "44418",
  setSearchInputValue: jest.fn(),
  setWoeid: jest.fn(),
  setIsLoading: jest.fn(),
  woeid: 44418
}

describe("SearchLocation", () => {
  it("should match snapshot", () => {
    const view = render(
      <Provider store={store}>
        <WeatherForeCast>
          <SearchLocation {...searchLocationTestProps}/>
        </WeatherForeCast>
      </Provider>
      )
    expect(view).toMatchSnapshot()
  })

  it("has input bar on screen", () => {
    render(
      <SearchLocation {...searchLocationTestProps}>
        <input id="search-location-input" placeholder="Search"/>
        <FontAwesomeIcon icon={faSpinner}/>
      </SearchLocation>
    )

    const element = screen.getByPlaceholderText("Search")
    expect(element).toBeInTheDocument()
  })
})