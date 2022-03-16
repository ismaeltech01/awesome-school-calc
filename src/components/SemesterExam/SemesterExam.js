import React from "react";
import calculateGradeNeeded from "./logic";
import { Calc, CalcForm, CalcHeader, Results, SemResultTxt} from "..";

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
      if (val != true && val != false) {
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
      'Your current semester average before taking into account the semester exam.',
      'The effect that the semester exam will have on your final semester grade, as a percentage (without the % sign).',
      'The semester average that you desire to achieve after taking into consideration ALL of your grades. (includes the semester exam and your normal semester grade)'
    ];
    return (
      <Calc>
        <CalcHeader txt='Semester Exam' navTo='/'/>
        <CalcForm onsubmit={this.handleSubmit} onchange={this.handleChange} itemData={itemData} helpData={helpData} submitText='Submit'/>
        <Results>
          <SemResultTxt usrSubmit={this.state.usrSubmit} desiredClassAvg={this.state.desiredClassAvg} gradeNeeded={this.state.gradeNeeded}/>
        </Results>
      </Calc>
    );
  }
}