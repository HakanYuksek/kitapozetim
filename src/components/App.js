import { Container } from "reactstrap";
import NavigationBar from "./menu/NavigationBar";
import SummaryPage from "./main/SummaryPage";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>

      <Container className="mt-4">

        <Routes>
          <Route exact path="/" element={<SummaryPage/>}></Route>
        </Routes>


      </Container>

    </div>
  );
}

export default App;
