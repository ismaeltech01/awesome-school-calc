import '../css/styles';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Header, Footer, InitialQuestion, SemesterExam, TestGrade, GPACalc, GPAWeightedCalc, GPAUnWeightedCalc, GPACustomCalc} from '../components';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <div className="App">
        <Router>
          <Header onclick={this.handleHeaderClick}/>
          <Routes>
            <Route path="/" element={<InitialQuestion/>}/>
            <Route path="/semester-exam" element={<SemesterExam/>}/>
            <Route path="/test-grade" element={<TestGrade/>}/>
            <Route path="/gpa" element={<GPACalc/>}/>
            <Route path="/gpa/weighted" element={<GPAWeightedCalc/>}/>
            <Route path="/gpa/un-weighted" element={<GPAUnWeightedCalc/>}/>
            <Route path="/gpa/custom" element={<GPACustomCalc/>}/>
          </Routes>
        </Router>
        <Footer/>
      </div>
    );
  }
}

export default App;
