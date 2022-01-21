import React from "react";
import gradesNeeded, { getGPAScale } from "./logic";
import Results from "./Results";

export default class GPACustomCalc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {displayGPAScale: false, largestScaleGPA: '', lowestScaleGPA: '', gpaScaleStep: '', gpaScale: {}};
  }

  componentDidMount() {
    window.addEventListener('beforeunload', this.beforeunload.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.beforeunload.bind(this));
  }

  beforeunload(e) {
    let displayPrompt = false;

    Object.keys(this.state).forEach((key) => {
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
    
    if (this.state.displayGPAScale)
      this.setState({displayGPAScale: false});
    if (id === 'lowest-gpa')
      this.setState({lowestScaleGPA: value});
    if (id === 'highest-gpa')
      this.setState({largestScaleGPA: value});
    if (id === 'gpa-scale-step')
      this.setState({gpaScaleStep: value});
  }

  handleClick = (e) => {
    alert('Help currently unavailable.');
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({gpaScale: getGPAScale(this.state.lowestScaleGPA, this.state.largestScaleGPA, this.state.gpaScaleStep)});
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
              <input type="number" id="lowest-gpa" min="0" max="10.0" onChange={this.handleChange.bind(this)} value={this.state.lowestScaleGPA} step="0.01" required></input>
            </li>
            <li>
              <div className="label-and-help-container">
                <label className="txt-field-label" htmlFor="highest-gpa">Highest GPA on the scale:</label>
                <button type="button" id="help-button" name="highest-gpa-hp" onClick={this.handleClick.bind(this)} title="Help">?</button>
              </div>
              <input type="number" id="highest-gpa" min="0" max="10.0" onChange={this.handleChange.bind(this)} value={this.state.largestScaleGPA} step="0.01" required></input>
            </li>
            <li>
              <div className="label-and-help-container">
                <label className="txt-field-label" htmlFor="gpa-scale-step">GPA Scale Step:</label>
                <button type="button" id="help-button" name="gpa-scale-step-hp" onClick={this.handleClick.bind(this)} title="Help">?</button>
              </div>
              <input type="number" id="gpa-scale-step" min="0" max="1.0" onChange={this.handleChange.bind(this)} value={this.state.gpaScaleStep} step=".1" required></input>
            </li>
          </ul>
          <button type="submit" id="next-button">Next</button>
        </form>
        </div>
        <GPAConversionChart displayGPAScale={this.state.displayGPAScale} gpaScale={this.state.gpaScale} lowestScaleGPA={this.state.lowestScaleGPA}
        largestScaleGPA={this.state.largestScaleGPA} gpaScaleStep={this.state.gpaScaleStep}/>
      </>
    );
  }
}


class GPAConversionChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {usrCreate: false, gpaScale: this.props.gpaScale};
  } 

  handleChange = (e) => {
    let id = e.target.id;
    let value = e.target.value;

    if (this.state.usrCreate)
      this.setState({usrCreate: false});
    
    let keys = Object.keys(this.state.gpaScale);
    keys.forEach((key, index) => {
      if (key == id)
        this.setState((prevState) => ({
          gpaScale : {
            ...prevState[key],
            [key]: [value]
          }
        }));
    });
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
                  <label className="txt-field-label" htmlFor="current-gpa">Complete the following GPA scale to create the calculator:</label>
                  <button type="button" id="help-button" name="current-gpa-hp" onClick={this.handleClick.bind(this)} title="Help">?</button>
                </div>
              </li>
              {Object.keys(this.state.gpaScale).map((key, index) => {
                return (
                  <li>
                    <div className="label-and-help-container">
                      <label className="txt-field-label" htmlFor={key}>{key}</label>
                      <input type="number" id={key} min="0" max="150" onChange={this.handleChange.bind(this)} value={this.state[key]} step="0.01" required></input>
                    </div>
                  </li>
                );
              })}
            </ul>
            <button type="submit" id="create-button">Create Calc</button>
          </form>
        </div>
        <CalculatorBody usrCreate={this.state.usrCreate} gpaScale={this.state.gpaScale}/>
        </>
      );
    } else {
      return (null);
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

    if (this.state.usrSubmit)
      this.setState({usrSubmit: false});
    if (id === 'current-gpa')
      this.setState({curGPA: value});
    if (id === 'classes-taken')
      this.setState({classesTaken: value});
    if (id === 'desired-gpa')
      this.setState({desGPA: value});
    if (id === 'next-semester-classes')
      this.setState({nextSemClasses: value});
  }

  handleClick = (e) => {
    let name = e.target.name;

    alert('Help currently unavailable.');
  }

  handleSubmit = (e) => {
    e.preventDefault();
    
    this.setState({gradeNeededEachClass: gradesNeeded(null, this.state.curGPA, this.state.classesTaken, this.state.desGPA, this.state.nextSemClasses, this.props.gpaScale)});
    this.setState({usrSubmit: true});
  }

  render() {
    if (this.props.usrCreate) {
      return (
        <div className="calculator-body">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <ul>
              <li>
                <div className="label-and-help-container">
                  <label className="txt-field-label" htmlFor="current-gpa">Current GPA:</label>
                  <button type="button" id="help-button" name="current-gpa-hp" onClick={this.handleClick.bind(this)} title="Help">?</button>
                </div>
                <input type="number" id="current-gpa" min={this.props.lowestScaleGPA} max={this.props.largestScaleGPA} onChange={this.handleChange.bind(this)} value={this.state.currentGPA} step="0.01" required></input>
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
                <input type="number" id="desired-gpa" min={this.props.lowestScaleGPA} max={this.props.largestScaleGPA} onChange={this.handleChange.bind(this)} value={this.state.desiredGPA} step="0.01" required></input>
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
          <Results desiredGPA={this.state.desGPA} gradeNeededEachClass={this.state.gradeNeededEachClass} usrSubmit={this.state.usrSubmit}/>
        </div>
      );
    } else {
      return (null);
    }
  }
}