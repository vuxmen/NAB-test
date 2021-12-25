import {ChangeEvent, FC, HTMLAttributes, Dispatch, SetStateAction, KeyboardEvent} from "react"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'

interface IProps extends HTMLAttributes<HTMLDivElement> {
  searchInputValue: string
  setSearchInputValue: Dispatch<SetStateAction<string>>
  setWoeid: Dispatch<SetStateAction<number>>
  woeid: number
}

const SearchLocation: FC<IProps> = (props) => {
  const {
    searchInputValue,
    setSearchInputValue,
    woeid,
    setWoeid,
  } = props

  const onChangeInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchInputValue(event.target.value)
  }

  const onKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && Number(searchInputValue) !== woeid) {
      setWoeid(Number(searchInputValue))
    }
  }

  return (
    <div style={{position: "relative", marginBottom: "1rem"}}>
      <input 
        id="search-location-input"
        placeholder="Search" 
        value={searchInputValue} 
        onChange={onChangeInputValue}
        onKeyPress={onKeyPress}
        style={{paddingLeft: "3rem"}}
      />
      <FontAwesomeIcon 
        icon={faSearch} 
        style={{position: "absolute", left: "1.5rem", top: "25%", cursor: "pointer"}} 
        />
    </div>
  )
}

export default SearchLocation