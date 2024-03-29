import "./index.css";
import HomePage from "./HomePage";
import PreSea from "./PreSea";
import TrainingPage from "./OnBoardTraining";
import PostSea from "./PostSea";
import TestSeries from "./TestSeries";
import PaymentPage from "./PaymentPage";
import SponAdPage from "./SponsAdPage";
import InstructionsPage from "./InstructionsPage";
import TestPage from "./TestPage";
import ResultPage from "./ResultPage";
import AnswerKeyPage from "./AnswerKeyPage";
import PdfDetails from "./PdfDetails";
import SubPdf from "./SubPdf";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/preseapage" element={<PreSea/>}/>
        <Route path="/trainingpage" element={<TrainingPage/>}/>
        <Route path="/postseapage" element={<PostSea/>}/>
        <Route path="/testseriespage" element={<TestSeries/>}/>
        <Route path="/paymentpage" element={<PaymentPage/>}/>
        <Route path="/sponsadpage" element={<SponAdPage/>}/>
        <Route path="/instructionspage" element={<InstructionsPage/>}/>
        <Route path="/testpage" element={<TestPage/>}/>
        <Route path="/resultpage" element={<ResultPage/>}/>
        <Route path="/answerkeypage" element={<AnswerKeyPage/>}/>
        <Route path="/pdfdetailspage" element={<PdfDetails/>}/>
        <Route path="/subpdfdetailspage" element={<SubPdf/>}/>
      </Routes>
    </>
  );
}

export default App;
