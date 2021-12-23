import React from "react";

export default function Results(props) {
  const {desiredGrade, gradeNeeded} = props;

  return (
    <p>To get a <strong>{desiredGrade}</strong> final semester average, you will need a score of <strong>{gradeNeeded}</strong> on the semester exam.</p>
  );
}