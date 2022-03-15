import '../css/styles';
import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Header, Footer, InitialQuestion, SemesterExam, TestGrade, GPACalc, GPAWeightedCalc, GPAUnWeightedCalc, GPACustomCalc, Scales} from '../components';
import { ThemeContext } from '../components/themeContext';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {theme: 'light', toggleTheme: this.toggleTheme};
  }

  toggleTheme = () => {
    this.setState(state => ({
      theme: state.theme === 'light' ? 'dark': 'light'
    }));
    console.log(this.state.theme);
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
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}