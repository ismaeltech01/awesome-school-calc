import React from "react";
import { areAllVarsEmpty } from "./logic";

export default function Results(props) {
  const {semesterAvg, percentEffect, desiredGrade, gradeNeeded} = props;

  if (!areAllVarsEmpty(semesterAvg, percentEffect, desiredGrade, gradeNeeded)) {
    return (
      <p>To get a <strong>{desiredGrade}</strong> final semester average, you will need a score of atleast <strong>{gradeNeeded}</strong> on the semester exam.</p>
    );
  } else if (gradeNeeded === 0) {
    return (
      <p>To get a <strong>{desiredGrade}</strong> final semester average... you don't have to do anything! As long as you don't get a negative average, your good to go!</p>
    );
  } else {
    return (
      <p>Fill out all of the fields above to get a result.</p>
    );
  }
}