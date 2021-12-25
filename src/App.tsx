import WeatherForeCast from "./components/WeatherCard"

function App() {
  return (
    <div 
      className="App"
      style={{
        maxWidth: "50rem",
        margin: "auto",
        marginTop: "35vh", 
        border: "0.1rem solid grey",
        padding: "2rem"
      }}>
      <WeatherForeCast />
    </div>
  );
}

export default App;
