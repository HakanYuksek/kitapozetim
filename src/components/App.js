import { Container } from "reactstrap";
import NavigationBar from "./NavigationBar";
import SummaryPage from "./main/SummaryPage";
import { Route, Routes, useNavigate } from "react-router-dom";
import FairyTaleBooks from "./main/FairyTaleBooks";
import ClassicBooks from "./main/ClassicBooks";
import PersonalBooks from "./main/PersonalBooks";
import NovelBooks from "./main/NovelBooks";
import HistoryBooks from "./main/HistoryBooks";
import Search from "./main/Search";
import BookDetails from "./main/BookDetails";


function App() {

  var navigate = useNavigate();

  return (
    <div className="App">
      <NavigationBar navigate = {navigate}></NavigationBar>

      <Container className="mt-4">

        <Routes>
          <Route exact path="/" element={<SummaryPage />}></Route>
          <Route exact path="kitapozetim" element={<SummaryPage />}></Route>
          <Route exact path ="child" element={<FairyTaleBooks></FairyTaleBooks>}></Route>
          <Route exact path ="classic" element={<ClassicBooks></ClassicBooks>}></Route>
          <Route exact path ="personal" element={<PersonalBooks></PersonalBooks>}></Route>
          <Route exact path="novel" element = {<NovelBooks></NovelBooks>}></Route>
          <Route exact path="history" element = {<HistoryBooks></HistoryBooks>}></Route>
          <Route exact path="search" element = {<Search></Search>}></Route>
          <Route exact path="book-details" element = {<BookDetails></BookDetails>}></Route>

        </Routes>
      </Container>
    </div>
  );
}

export default App;
