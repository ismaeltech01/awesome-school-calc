export default function gradesNeeded(weighted, curGPA, classesTaken, desGPA, nextSemClasses) {
  const weightedGPAScale = [
    {grade: 100, gpa: 5.0},
    {grade: 99, gpa: 4.9},
    {grade: 98, gpa: 4.8},
    {grade: 97, gpa: 4.7},
    {grade: 96, gpa: 4.6},
    {grade: 95, gpa: 4.5},
    {grade: 94, gpa: 4.4},
    {grade: 93, gpa: 4.3},
    {grade: 92, gpa: 4.2},
    {grade: 91, gpa: 4.1},
    {grade: 90, gpa: 4.0},
    {grade: 89, gpa: 3.9},
    {grade: 88, gpa: 3.8},
    {grade: 87, gpa: 3.7},
    {grade: 86, gpa: 3.6},
    {grade: 85, gpa: 3.5},
    {grade: 84, gpa: 3.4},
    {grade: 83, gpa: 3.3},
    {grade: 82, gpa: 3.2},
    {grade: 81, gpa: 3.1},
    {grade: 80, gpa: 3.0},
    {grade: 79, gpa: 2.9},
    {grade: 78, gpa: 2.8},
    {grade: 77, gpa: 2.7},
    {grade: 76, gpa: 2.6},
    {grade: 75, gpa: 2.5},
    {grade: 74, gpa: 2.4},
    {grade: 73, gpa: 2.3},
    {grade: 72, gpa: 2.2},
    {grade: 71, gpa: 2.1},
    {grade: 70, gpa: 2.0}
  ];

  const unWeightedGPAScale = [
    {grade: '97-100', gpa: 4.0}, //make sure to include in between values (such as 3.9)
    {grade: '94-96' , gpa: 3.8}, 
    {grade: '90-93' , gpa: 3.6}, 
    {grade: '87-89' , gpa: 3.4}, 
    {grade: '84-86' , gpa: 3.2}, 
    {grade: '80-83' , gpa: 3.0}, 
    {grade: '77-79' , gpa: 2.8}, 
    {grade: '74-76' , gpa: 2.6}, 
    {grade: '71-73' , gpa: 2.4}, 
    {grade: '70', gpa: 2.2},
    {grade: '0', gpa: 2.0}
  ];

  let maxGPA = weighted ? 5 : 4;
  let gpaScale = weighted ? weightedGPAScale : unWeightedGPAScale;

  let roundedGPA = Math.round(curGPA * 10) / 10;
  console.log(roundedGPA);
  
  let overallGrade = roundedGPA < 2.0 ? 0 : gpaScale.find(obj =>  obj.gpa == roundedGPA).grade;
  let desOverallGrade = desGPA < 2.0 ? 0 : gpaScale.find(obj => obj.gpa == desGPA).grade;
  
  if (!weighted) {
    let adjustOverallGrade = Number(overallGrade.substring(0, 2));
    overallGrade = adjustOverallGrade;
    let adjustDesOverallGrade = Number(desOverallGrade.substring(0, 2));
    desOverallGrade = adjustDesOverallGrade;
  }

  console.log(overallGrade);
  console.log(desOverallGrade);

  let sumOfGrades = overallGrade * classesTaken;  
  let sumOfClasses = classesTaken + nextSemClasses; 

  let gradeNeededEachClass = ((desOverallGrade * sumOfClasses) - sumOfGrades) / nextSemClasses; 
  return gradeNeededEachClass;
}