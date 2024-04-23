import { Container } from "reactstrap";
import NavigationBar from "./menu/NavigationBar";
import SummaryPage from "./main/SummaryPage";
import { Route, Routes } from "react-router-dom";
import FairyTaleBooks from "./main/FairyTaleBooks";


function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>

      <Container className="mt-4">

        <Routes>
          <Route exact path="/" element={<SummaryPage />}></Route>
          <Route exact path ="child" element={<FairyTaleBooks></FairyTaleBooks>}></Route>
        </Routes>


      </Container>

    </div>
  );
}

export default App;
