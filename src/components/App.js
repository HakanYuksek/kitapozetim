import { Container } from "reactstrap";
import NavigationBar from "./menu/NavigationBar";
import SummaryPage from "./main/SummaryPage";
import { Route, Routes } from "react-router-dom";
import FairyTaleBooks from "./main/FairyTaleBooks";
import ClassicBooks from "./main/ClassicBooks";
import PersonalBooks from "./main/PersonalBooks";
import NovelBooks from "./main/NovelBooks";
import HistoryBooks from "./main/HistoryBooks";


function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>

      <Container className="mt-4">

        <Routes>
          <Route exact path="/" element={<SummaryPage />}></Route>
          <Route exact path ="child" element={<FairyTaleBooks></FairyTaleBooks>}></Route>
          <Route exact path ="classic" element={<ClassicBooks></ClassicBooks>}></Route>
          <Route exact path ="personal" element={<PersonalBooks></PersonalBooks>}></Route>
          <Route exact path="novel" element = {<NovelBooks></NovelBooks>}></Route>
          <Route exact path="history" element = {<HistoryBooks></HistoryBooks>}></Route>
        </Routes>


      </Container>

    </div>
  );
}

export default App;
