import React, {useState} from "react";
import CalcForm from "../CalcForm/CalcForm";
import Results from "../TestGrade/Results";
import calculateTestScoreNeeded from "./logic";

export default class TestGrade extends React.Component {
  constructor(props) {
    super(props);
    this.state = {classAvg: '', testWeight: '', desiredClassAvg: '', usrSubmit: false, gradeNeeded: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

    this.setState({gradeNeeded: calculateTestScoreNeeded(this.state.classAvg, this.state.testWeight, this.state.desiredClassAvg)});
    this.setState({usrSubmit: true});
  }

  handleChange = (e) => {
    let value = e.target.value;
    let id = e.target.id;

    if (this.state.usrSubmit)
      this.setState({usrSubmit : false});
    if (id === "current-average")
      this.setState({classAvg : value});
    if (id === "test-weight")
      this.setState({testWeight : value});
    if (id === "desired-average")
      this.setState({desiredClassAvg : value});
  }

  handleClick = (e) => {
    if (e.target.id === 'help-button') {
      if (e.target.name === 'current-average-hp')
        alert('Your current class average before the test is taken. \n\nExample: I had a 95 in Math class the day before the test.');
      if (e.target.name === 'test-weight-hp')
        alert('The overall effect of the test (as a percentage) on your grade. \n\nExample: My next Science test will account for 15% of my final grade for the quarter.');
      if (e.target.name === 'desired-average-hp')
        alert('The class average that you would like to have after the score of the test is accounted for. \n\nExample: I wish I am still passing my Biology class after the test.');
    }
  }
  
  render() {
    let itemData = [
      ["current-average", "Current Class Average:", '0', '110', this.state.classAvg, '.01'],
      ["test-weight", "Overall weight of test on grade:", '0', '100', this.state.testWeight, '.01'],
      ["desired-average", "Desired class average after test:", '0', '110', this.state.desiredClassAvg, '.01']
    ];

    return (
      <div className="calculator-body">
        <CalcForm onsubmit={this.handleSubmit} onclick={this.handleClick} onchange={this.handleChange} itemData={itemData} submitText='Submit'/>
        <Results usrSubmit={this.state.usrSubmit} classAvg={this.state.classAvg} testWeight={this.state.testWeight} desiredClassAvg={this.state.desiredClassAvg} gradeNeeded={this.state.gradeNeeded}/>
      </div>
    );
  }
}