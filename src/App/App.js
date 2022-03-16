import '../css/styles';
import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Header, Footer, InitialQuestion, SemesterExam, TestGrade, GPACalc, GPAWeightedCalc, GPAUnWeightedCalc, GPACustomCalc, Scales, Error404} from '../components';
import { ThemeContext } from '../components/themeContext';
import ConsoleHelper from '../ConsoleHelper';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: localStorage.getItem('theme_key') !== null ? localStorage.getItem("theme_key") : 'light', 
      toggleTheme: this.toggleTheme
    };
  }

  toggleTheme = () => {
    localStorage.setItem('theme_key', this.state.theme === 'light' ? 'dark': 'light');

    this.setState(state => ({
      theme: state.theme === 'light' ? 'dark': 'light'
    }));
    
    ConsoleHelper("Current theme: " + this.state.theme);
  }

  render () {
    return (
      <ThemeContext.Provider value={this.state}>
        <AppContent />
      </ThemeContext.Provider>
    );
  }
}

export default App;

const AppContent = () => {
  const {theme} = useContext(ThemeContext);

  return(
    <div id="App" className={theme}>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<InitialQuestion/>}/>
          <Route path="/scales" element={<Scales/>}/>
          <Route path="/semester-exam" element={<SemesterExam/>}/>
          <Route path="/test-grade" element={<TestGrade/>}/>
          <Route path="/gpa" element={<GPACalc/>}/>
          <Route path="/gpa/weighted" element={<GPAWeightedCalc/>}/>
          <Route path="/gpa/un-weighted" element={<GPAUnWeightedCalc/>}/>
          <Route path="/gpa/custom" element={<GPACustomCalc/>}/>
          <Route path='*' element={<Error404/>}/>
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}