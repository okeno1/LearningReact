import "./App.css";
import Accordian from "./components/accordian";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import LoadMoreData from "./components/load-more-data";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";
import QRCodeGenerator from "./components/qr-code-generator";

function App() {
  return (
    <div className="App">
      {/* Acccordian Component*/}
      <Accordian />

      {/*Random color component*/}
      <RandomColor />

      {/*Star Rating Componet*/}
      <StarRating noOfStars={10} />

      {/*Load More Component */}
      <LoadMoreData />

      {/*Tree View Component / Menu UI component / recursive navigation menu */}
      <TreeView menus={menus} />

      {/* QRCode Generator */}
      <QRCodeGenerator />
    </div>
  );
}

export default App;
