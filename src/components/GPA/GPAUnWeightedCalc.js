import React, { useEffect, useState } from "react";
import gradesNeeded from "./logic";
import Results from "./Results";

export default class GPAWeightedCalc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentGPA: '', classesTaken: '', desiredGPA: '', nextSemClasses: '', usrSubmit: false, gradeNeededEachClass: ''};
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

  handleChange = (e) => {
    let value = e.target.value;
    let id = e.target.id;

    if (this.state.usrSubmit)
      this.setState({usrSubmit: false});
    if (id === 'current-gpa')
      this.setState({currentGPA: value});
    if (id === 'classes-taken')
      this.setState({classesTaken: value});
    if (id === 'desired-gpa')
      this.setState({desiredGPA: value});
    if (id === 'next-semester-classes')
      this.setState({nextSemClasses: value});
  }
  
  handleClick = (e) => {
    let name = e.target.name;

    if (e.target.id === 'help-button') {
      if (name === "current-gpa-hp") {
        let msg = `Help currently unavailable.`;
        alert(msg);
      }
      if (name === "current-credits-hp") {
        let msg = `Help currently unavailable.`;
        alert(msg);
      }
      if (name === "desired-gpa-hp") {
        let msg = `Help currently unavailable.`;
        alert(msg);
      }
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    
    this.setState({gradeNeededEachClass: gradesNeeded(false, this.state.currentGPA, this.state.classesTaken, this.state.desiredGPA, this.state.nextSemClasses)});
    this.setState({usrSubmit: true});
  }

  render() {
    return (
      <div className="calculator-body">
        <p className="under-dev-notice"><em>Warning: This calc will give an estimate that may be off by A LOT of points. Please use the Custom GPA calc if you want an exact calculation.</em></p>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <ul>
            <li>
              <div className="label-and-help-container">
                <label className="txt-field-label" htmlFor="current-gpa">Current GPA:</label>
                <button type="button" id="help-button" name="current-gpa-hp" onClick={this.handleClick.bind(this)} title="Help">?</button>
              </div>
              <input type="number" id="current-gpa" min="2" max="4.0" onChange={this.handleChange.bind(this)} value={this.state.currentGPA} step="0.01" required></input>
            </li>
            <li>
              <div className="label-and-help-container">
                <label className="txt-field-label" htmlFor="classes-taken">Current amount of classes taken so far:</label>
                <button type="button" id="help-button" name="classes-taken-hp" onClick={this.handleClick.bind(this)} title="Help">?</button>
              </div>
              <input type="number" id="classes-taken" min="0" max="200.0" onChange={this.handleChange.bind(this)} value={this.state.classesTaken} step="1.0" required></input>
            </li>
            <li>
              <div className="label-and-help-container">
                <label className="txt-field-label" htmlFor="desired-gpa">Desired GPA:</label>
                <button type="button" id="help-button" name="desired-gpa-hp" onClick={this.handleClick.bind(this)} title="Help">?</button>
              </div>
              <input type="number" id="desired-gpa" min="2" max="4.0" onChange={this.handleChange.bind(this)} value={this.state.desiredGPA} step="0.01" required></input>
            </li>
            <li>
              <div className="label-and-help-container">
                <label className="txt-field-label" htmlFor="next-semester-classes">Amount of classes you will take next semester:</label>
                <button type="button" id="help-button" name="next-semester-classes-hp" onClick={this.handleClick.bind(this)} title="Help">?</button>
              </div>
              <input type="number" id="next-semester-classes" min="0" max="20.0" onChange={this.handleChange.bind(this)} value={this.state.nextSemClasses} step="1.0" required></input>
            </li>
          </ul>
          <button type="submit" id="submit-button">Submit</button>
        </form>
        <Results desiredGPA={this.state.desiredGPA} gradeNeededEachClass={this.state.gradeNeededEachClass} usrSubmit={this.state.usrSubmit} weighted={false}/>
      </div>
    );
  }
}