import '../css/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Header, Footer, InitialQuestion, SemesterExam, TestGrade} from '../components';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <InitialQuestion/>
        <Routes>
          <Route path="/" element={<h2>Select a calculator type to get started.</h2>}/>
          <Route path="/semester-exam" element={<SemesterExam/>}/>
          <Route path="/test-grade" element={<TestGrade/>}/>
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
