import "./index.css";
import InstructionsPage from "./InstructionsPage";
import TestPage from "./TestPage";
import ResultPage from "./ResultPage";
import AnswerKeyPage from "./AnswerKey";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<InstructionsPage/>}/>
        <Route path="/testpage" element={<TestPage/>}/>
        <Route path="/resultpage" element={<ResultPage/>}/>
        <Route path="/answerkeypage" element={<AnswerKeyPage/>}/>
      </Routes>
    </>
  );
}

export default App;
