import "./App.css";
import Accordian from "./components/accordian";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";



function App() {
  return (
    <div className="App">
      {/* Acccordian Component*/}
      <Accordian />

      {/*Random color component*/}
      <RandomColor />

      {/*Star Rating Componet*/}
      <StarRating noOfStars={10}/>

    </div>
  );
}

export default App;
