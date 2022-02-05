import React, { useState } from "react";
import calculateGradeNeeded from "./logic";
import { Calc, CalcForm, CalcHeader, Results} from "..";

export default class SemesterExam extends React.Component {
  constructor(props) {
    super(props);
    this.state = {semesterAvg: '', percentEffect: '', desiredGrade: '', usrSubmit: false, gradeNeeded: ''};
    this.handleChange = this.handleChange.bind(this);
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
  
  render() {
    let itemData = [
      ["semester-average", "Current Semester Average:", '0', '110', this.state.semesterAvg, '.01'],
      ["percent-effect", "Percentage effect of semester exam on final semester average:", '0', '100', this.state.percentEffect, '.01'],
      ["desired-average", "Desired Final semester average:", '0', '110', this.state.desiredGrade, '.01']
    ];
    let helpData = [
      'Your current semester average before taking into account the semester exam. \n\nExample: Before finals, I have a 75 in Metaphysics.',
      'The effect that the semester exam will have on your final semester grade. \n\nExample: Your class grade at the end of the semester is 85, which will account for 75% of your final semester average. This means that the semester exam will have a 25% effect on your final semester average.',
      'The semester average that you desire to achieve after taking into consideration ALL of your grades. (includes the semester exam and your normal semester grade) \n\n Example: I got a 99% in Curry studies and a 90% on the final exam, which means that I received a total grade of 97.2'
    ];
    return (
      <Calc>
        <CalcHeader txt='Semester Exam' navTo='/'/>
        <CalcForm onsubmit={this.handleSubmit} onchange={this.handleChange} itemData={itemData} helpData={helpData} submitText='Submit'/>
        <Results usrSubmit={this.state.usrSubmit} desiredGrade={this.state.desiredGrade} gradeNeeded={this.state.gradeNeeded}/>
      </Calc>
    );
  }
}