import React from "react";
import CalcForm from "../CalcForm/CalcForm";
import HelpButton from "../CalcForm/HelpButton";
import gradesNeeded, { getGPAScale } from "./logic";
import Results from "./Results";

export default class GPACustomCalc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {displayInitialForm: true, displayGPAScale: false, displayCalcBody: false, largestScaleGPA: '', lowestScaleGPA: '', gpaScaleStep: '', gpaScale: [[]]};
    this.handleChange = this.handleChange.bind(this);
    this.handleScaleChange = this.handleScaleChange.bind(this);
    this.handleNextSubmit = this.handleNextSubmit.bind(this);
    this.handleCreateSubmit = this.handleCreateSubmit.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
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
    let formId = e.target.form.id;
    console.log('Form ID:' + formId);
    
    if (this.state.displayInitialForm && this.state.gpaScale !== [[]])
      this.setState({gpaScale: [[]]});
    if (this.state.displayCalcBody && formId === 'gpa-scale-form')
      this.setState({displayCalcBody: false});
    if (this.state.displayGPAScale && formId === 'initial-vals-form')
      this.setState({displayGPAScale: false});
    if (id === 'lowest-gpa')
      this.setState({lowestScaleGPA: value});
    if (id === 'highest-gpa')
      this.setState({largestScaleGPA: value});
    if (id === 'gpa-scale-step')
      this.setState({gpaScaleStep: value});
    
    console.log(this.state.gpaScale);
  }

  handleScaleChange = (e) => {
    let id = e.target.id;
    let value = e.target.value;

    this.setState({gpaScale : this.state.gpaScale.map((item) => {
      console.log(item);
      return item[0] == id ? [item[0], value] : item;
    })});
  }

  handleCreateSubmit = (e) => {
    e.preventDefault();
    
    this.setState({displayGPAScale: false});
    this.setState({displayCalcBody: true});
    console.log('gpa-scale-form');
  }

  handleNextSubmit = (e) => {
    e.preventDefault();

    this.setState({gpaScale: getGPAScale(this.state.lowestScaleGPA, this.state.largestScaleGPA, this.state.gpaScaleStep)});
    this.setState({displayInitialForm: false});
    this.setState({displayGPAScale: true});
    console.log('initial-vals-form');
  }

  handleBackClick = (e) => {
    let displayInitialForm = this.state.displayInitialForm;
    let displayGPAScale = this.state.displayGPAScale;
    let displayCalcBody = this.state.displayCalcBody;

    if (displayGPAScale) {
      this.setState({displayInitialForm: true});
      this.setState({displayGPAScale: false});
    } else if (displayCalcBody) {
      this.setState({displayGPAScale: true});
      this.setState({displayCalcBody: false});
    }
  }

  render() {
    let itemData = [
      ["lowest-gpa", 'Lowest GPA on the scale:', '0', '10', this.state.lowestScaleGPA, '.01'],
      ["highest-gpa", 'Highest GPA on the scale:', '0', '10', this.state.largestScaleGPA, '.01'],
      ["gpa-scale-step", 'GPA Scale Step:', '0', '1', this.state.gpaScaleStep, '.1'],
    ];
    let helpData = [
      'Help currently unavailable.',
      'Help currently unavailable.',
      'Help currently unavailable.',
      'Help currently unavailable.'
    ];
    return (
      <div className="calculator-body">
        <p className="warning-notice"><em>Warning: This calc is a work in progress. Unexpected Errors may occur.</em></p>
        <InitialForm display={this.state.displayInitialForm} onsubmit={this.handleNextSubmit} onchange={this.handleChange} itemData={itemData} helpData={helpData}/>
        <GPAScale display={this.state.displayGPAScale} onchange={this.handleScaleChange} gpaScale={this.state.gpaScale} handleCreateSubmit={this.handleCreateSubmit} onBackClick={this.handleBackClick}/>
        <CalculatorBody display={this.state.displayCalcBody} gpaScale={this.state.gpaScale} onBackClick={this.handleBackClick}/>
      </div>
        );
    }
}

const InitialForm = (props) => {
  const {display, onsubmit, onchange, itemData, helpData, onBackClick} = props;

  if (display)
    return (
    <CalcForm onsubmit={onsubmit} onchange={onchange} itemData={itemData} helpData={helpData} submitText='Next'/>
    );
  return null; 
}

    
const GPAScale = (props) => {
  const {display, onchange, onBackClick, gpaScale, handleCreateSubmit} = props;

  let helpMsg = '';

  if (display)
    return (
      <div className="calculator-body">
        <form id='gpa-scale-form' onSubmit={handleCreateSubmit}>
            <ul>
              <li>
                <div className="label-and-help-container">
                  <label className="txt-field-label" htmlFor="current-gpa">Complete the following GPA scale to create the calculator:</label>
                  <HelpButton itemName='current-gpa' msg={helpMsg}/>
                </div>
              </li>
              {gpaScale.map(([gpa, grade]) => {
                console.log(gpa);
                return (<ScaleListItem key={gpa} gpa={gpa} onchange={onchange} value={grade}/>);
              })}
            </ul>
            <button type="button" id="back-btn" onClick={onBackClick}>Back</button>
            <button type="submit" name="create-btn" id="submit-button">Create Calc</button>
          </form>
        </div>
    );
  else
    return(null);
}

const ScaleListItem = (props) => {
  const {gpa, onchange, value} = props;

  return (
    <li>
      <div className="label-and-help-container">
        <label className="scale-li-lbl" htmlFor={gpa}>{gpa}</label>
        <input type="number" name="gpa-scale-input" id={gpa} min="0" max="150" onChange={onchange} value={value} step="0.01" required></input>
      </div>
    </li>
  );
}

class CalculatorBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {usrSubmit: false, curGPA: '', classesTaken: '', desGPA: '', nextSemClasses: '', gradeNeededEachClass: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleSubmit = (e) => {
    e.preventDefault();
    
    this.setState({gradeNeededEachClass: gradesNeeded(null, this.state.curGPA, this.state.classesTaken, this.state.desGPA, this.state.nextSemClasses, this.props.gpaScale)});
    this.setState({usrSubmit: true});
  }

  render() {
    let itemData = [
      ["current-gpa", 'Current GPA:', this.props.lowestScaleGPA, this.props.largestScaleGPA, this.state.curGPA, '.01'],
      ["classes-taken", 'Current amount of classes taken so far:', '0', '200', this.state.classesTaken, '1'],
      ["desired-gpa", 'Desired GPA:', this.props.lowestScaleGPA, this.props.largestScaleGPA, this.state.desiredGPA, '.1'],
      ["next-semester-classes", 'Amount of classes you will take next semester:', '0', '20', this.state.nextSemClasses, '1'],
    ];
    let helpData = [
      'Help currently unavailable.',
      'Help currently unavailable.',
      'Help currently unavailable.',
      'Help currently unavailable.'
    ];
    if (this.props.display) {
      return (
        <div className="calculator-body">
          <CalcForm onsubmit={this.handleSubmit} onchange={this.handleChange} itemData={itemData} helpData={helpData} submitText='Submit' 
          extraSubmitBtn={true} extraBtn={true} extraBtnText='Back' onBackClick={this.props.onBackClick}/>
          <Results desiredGPA={this.state.desGPA} gradeNeededEachClass={this.state.gradeNeededEachClass} usrSubmit={this.state.usrSubmit}/>
        </div>
      );
    } else {
      console.log('null return calculator body');
      return (null);
    }
  }
}