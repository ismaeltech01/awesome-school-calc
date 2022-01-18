import React from "react";
import { useState } from "react/cjs/react.development";
import gradesNeeded from "./logic";
import Results from "./Results";

export default class GPACustomCalc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {displayGPAScale: false, largestScaleGPA: '', largestScaleGrade: '', lowestScaleGPA: '', lowestScaleGrade: ''};
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

    Object.keys(this.state).forEach((key, index) => {
      let val = this.state[key];
      if (typeof val != 'boolean')
        if (!val || val.length == 0)
          this.setState({displayGPAScale: true});
    });
  }

  handleClick = (e) => {
    alert('Help currently unavailable.');
  }

  handleSubmit = (e) => {
    e.preventDefault();
    
    this.setState({displayGPAScale: true});
  }

  render() {
    return (
      <>
      <div className="calculator-body">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <ul>
          <li>
              <div className="label-and-help-container">
                <label className="txt-field-label" htmlFor="lowest-gpa">Lowest GPA on the scale:</label>
                <button type="button" id="help-button" name="lowest-gpa-hp" onClick={this.handleClick.bind(this)} title="Help">?</button>
              </div>
              <input type="number" id="lowest-gpa" min="2" max="4.0" onChange={this.handleChange.bind(this)} value={this.state.lowestScaleGPA} step="0.01" required></input>
            </li>
            <li>
              <div className="label-and-help-container">
                <label className="txt-field-label" htmlFor="lowest-grade">Lowest Grade on the scale:</label>
                <button type="button" id="help-button" name="lowest-grade-hp" onClick={this.handleClick.bind(this)} title="Help">?</button>
              </div>
              <input type="number" id="lowest-grade" min="0" max="200.0" onChange={this.handleChange.bind(this)} value={this.state.lowestScaleGrade} step="1.0" required></input>
            </li>
            <li>
              <div className="label-and-help-container">
                <label className="txt-field-label" htmlFor="highest-gpa">Highest GPA on the scale:</label>
                <button type="button" id="help-button" name="highest-gpa-hp" onClick={this.handleClick.bind(this)} title="Help">?</button>
              </div>
              <input type="number" id="highest-gpa" min="2" max="4.0" onChange={this.handleChange.bind(this)} value={this.state.largestScaleGPA} step="0.01" required></input>
            </li>
            <li>
              <div className="label-and-help-container">
                <label className="txt-field-label" htmlFor="highest-grade">Highest Grade on the scale:</label>
                <button type="button" id="help-button" name="highest-grade-hp" onClick={this.handleClick.bind(this)} title="Help">?</button>
              </div>
              <input type="number" id="highest-grade" min="0" max="20.0" onChange={this.handleChange.bind(this)} value={this.state.largestScaleGrade} step="1.0" required></input>
            </li>
          </ul>
        </form>
        </div>
        <GPAConversionChart displayGPAScale={this.state.displayGPAScale}/>
      </>
    );
  }
}


class GPAConversionChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {usrCreate: false, gpaScale: {}};
  } 

  handleChange = (e) => {
    if (this.state.usrCreate)
      this.setState({usrCreate: false});
  }

  handleClick = (e) => {
    alert('Help currently unavailable.');
  }

  handleSubmit = (e) => {
    e.preventDefault();
    
    this.setState({usrCreate: true});
  }

  render() {
    if (this.props.displayGPAScale) {
      return (
        <>
        <div className="calculator-body">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <ul>
              <li>
                <div className="label-and-help-container">
                  <label className="txt-field-label" htmlFor="next-semester-classes">Amount of classes you will take next semester:</label>
                  <button type="button" id="help-button" name="next-semester-classes-hp" onClick={this.handleClick.bind(this)} title="Help">?</button>
                </div>
                <input type="number" id="next-semester-classes" min="0" max="20.0" onChange={this.handleChange.bind(this)} value={this.props.largestScaleGrade} step="1.0" required></input>
              </li>
            </ul>
            <button type="submit" id="create-button">Create Calc</button>
          </form>
        </div>
        <CalculatorBody usrCreate={this.props.usrCreate} lowestScaleGPA={this.props.lowestScaleGPA} lowestScaleGrade={this.props.lowestScaleGrade}
        largestScaleGPA={this.props.largestScaleGPA} largestScaleGrade={this.props.largestScaleGrade} gpaScale={this.state.gpaScale}/>
        </>
      );
    }
  }
}


class CalculatorBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {usrSubmit: false, curGPA: '', classesTaken: '', desGPA: '', nextSemClasses: '', gradeNeededEachClass: ''};
  }

  handleChange = (e) => {
    let value = e.target.value;
    let id = e.target.id;

    if (usrSubmit)
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

    alert('Help currently unavailable.');
  }

  handleSubmit = (e) => {
    e.preventDefault();
    
    this.setState({gradeNeededEachClass: gradesNeeded(null, )});
    this.setState({usrSubmit: true});
  }
  render() {
    if (this.props.usrCreate) {
      return (
        <div className="calculator-body">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <ul>
              <li>

              </li>
            </ul>
          </form>
          <Results desiredGPA={this.state.desGPA} gradeNeededEachClass={this.state.gradeNeededEachClass} usrSubmit={this.state.usrSubmit}/>
        </div>
      );
    } else {
      return (<></>);
    }
  }
}