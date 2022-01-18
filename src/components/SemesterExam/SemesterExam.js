import React, { useState } from "react";
import Results from "./Results";
import calculateGradeNeeded from "./logic";

export default class SemesterExam extends React.Component {
  constructor(props) {
    super(props);
    this.state = {semesterAvg: '', percentEffect: '', desiredGrade: '', usrSubmit: false, gradeNeeded: ''};
  }

  componentDidMount() {
    window.addEventListener('beforeunload', this.beforeunload.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.beforeunload.bind(this));
  }

  beforeunload(e) {
    let displayPrompt = false;

    Object.keys(this.state).forEach((key, index) => {
      let val = this.state[key];
      console.log(val);
      if (val != true && val != false) {
        console.log(key);
        if (val || val.length != 0)
          displayPrompt = true;
      }
    });

    if (displayPrompt) {
      e.preventDefault();
      e.returnValue = '';
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({gradeNeeded: calculateGradeNeeded(this.state.semesterAvg, this.state.percentEffect, this.state.desiredGrade)});
    this.setState({usrSubmit: true});
  }

  handleChange = (e) => {
    let value = e.target.value;
    let id = e.target.id;

    if (this.state.usrSubmit)
      this.setState({usrSubmit : false});
    if (id === "semester-average")
      this.setState({semesterAvg : value});
    if (id === "percent-effect")
      this.setState({percentEffect : value});
    if (id === "desired-average")
      this.setState({desiredGrade : value});
  }

  handleClick = (e) => {
    if (e.target.id === 'help-button') {
      if (e.target.name === "semester-average-hp")
        alert('Your current semester average before taking into account the semester exam. \n\nExample: Before finals, I have a 75 in Metaphysics.');
      if (e.target.name === "percent-effect-hp")
        alert('The effect that the semester exam will have on your final semester grade. \n\nExample: Your class grade at the end of the semester is 85, which will account for 75% of your final semester average. This means that the semester exam will have a 25% effect on your final semester average.');
      if (e.target.name === "desired-average-hp")
        alert('The semester average that you desire to achieve after taking into consideration ALL of your grades. (includes the semester exam and your normal semester grade) \n\n Example: I got a 99% in Curry studies and a 90% on the final exam, which means that I received a total grade of 97.2');
    }
  }
  
  render() {
    return (
      <div className="calculator-body">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <ul>
            <li>
              <div className="label-and-help-container">
                <label className="txt-field-label" htmlFor="semester-average">Current Semester Average:</label> 
                <button type="button" id="help-button" name="semester-average-hp" onClick={this.handleClick.bind(this)} title="Help">?</button>
              </div>
              <input type="number" id="semester-average" min="0" max="110" onChange={this.handleChange.bind(this)} value={this.state.semesterAvg} required></input>
            </li>
            <li>
              <div className="label-and-help-container">
                <label className="txt-field-label" htmlFor="percent-effect">Percentage effect of semester exam on final semester average:</label> 
                <button type="button" id="help-button" name="percent-effect-hp" onClick={this.handleClick.bind(this)} title="Help">?</button>
              </div>
              <input type="number" id="percent-effect" min="0" max="100" onChange={this.handleChange.bind(this)} value={this.state.percentEffect} required></input>
            </li>
            <li>
              <div className="label-and-help-container">
                <label className="txt-field-label" htmlFor="desired-average">Desired Final semester average:</label> 
                <button type="button" id="help-button" name="desired-average-hp" onClick={this.handleClick.bind(this)} title="Help">?</button>
              </div>
              <input type="number" id="desired-average" min="0" max="110" onChange={this.handleChange.bind(this)} value={this.state.desiredGrade} required></input>
            </li>
          </ul>
          <button type="submit" id="submit-button">Submit</button>
        </form>
        <Results usrSubmit={this.state.usrSubmit} semesterAvg={this.state.semesterAvg} percentEffect={this.state.percentEffect} desiredGrade={this.state.desiredGrade} gradeNeeded={this.state.gradeNeeded}/>
      </div>
    );
  }
}