import '../css/styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Header, Footer, InitialQuestion, SemesterExam, TestGrade, GPACalc, GPAWeightedCalc, GPAUnWeightedCalc, GPACustomCalc} from '../components';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <InitialQuestion/>
        <Routes>
          <Route path="/" element={<div></div>}/>
          <Route path="/semester-exam" element={<SemesterExam/>}/>
          <Route path="/test-grade" element={<TestGrade/>}/>
          <Route path="/gpa" element={<GPACalc/>}/>
          <Route path="/gpa/weighted" element={<><GPACalc/><GPAWeightedCalc/></>}/>
          <Route path="/gpa/un-weighted" element={<><GPACalc/><GPAUnWeightedCalc/></>}/>
          <Route path="/gpa/custom" element={<><GPACalc/><GPACustomCalc/></>}/>
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
