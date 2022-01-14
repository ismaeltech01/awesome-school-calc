import { roundToHundredths, parseStrToNum } from "../functions";

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

export default function gradesNeeded(weighted, curGPA, classesTaken, desGPA, nextSemClasses) {
  [weighted, curGPA, classesTaken, desGPA, nextSemClasses] = parseStrToNum(weighted, curGPA, classesTaken, desGPA, nextSemClasses);

  console.log(`Classes Taken: ${classesTaken}, Next Sem classes: ${nextSemClasses}`);

  console.log(`Desired GPA: ${desGPA}`);
  console.log(`Current GPA: ${curGPA}`);

  let maxGPA = weighted ? 5 : 4;
  let gpaScale = weighted ? weightedGPAScale : unWeightedGPAScale;
  
  let totalNumClasses = classesTaken + nextSemClasses;
  console.log(`Total Num Classes: ${totalNumClasses}`);

  let desAvgGrade = convertGPAToGrade(desGPA, weighted);
  console.log(`Des Avg grade: ${desAvgGrade}`);

  let avgGrade = convertGPAToGrade(curGPA, weighted);
  console.log(`Avg grade: ${avgGrade}`);

  let gradesNeeded = ((desAvgGrade * totalNumClasses) - (classesTaken * avgGrade)) / nextSemClasses;

  return gradesNeeded;
}

function convertGPAToGrade(gpa, weighted) {
  gpa = roundToHundredths(gpa); //in case the gpa given is not rounded to hundredths
  console.log(`Rounded GPA: ${gpa}`);
  
  if (gpa >= 2.0) {
    if (weighted) {
      let grade = weightedGPAScale.find(obj =>  obj.gpa == gpa).grade;
      
      if (grade === undefined) {
        let floorGPA = Math.floor(gpa);
        let lowestValGradeRange = weightedGPAScale.find(obj =>  obj.gpa == floorGPA).grade;

        grade = lowestValGradeRange + ((gpa - floorGPA) * 10);
      } 
      console.log(`Grade: ${grade}`);
      return grade;
    }
    /*
    if (!weighted) {
      let grade = parseInt(unWeightedGPAScale.find(obj => obj.gpa == gpa).grade.substring(0, 2));0

      if (grade === undefined) {
        let 
      }
      console.log(`Grade: ${grade}`);
    }
    */
  }
  return 0;
}
/*
function convertGradeToGPA(grade, weighted) {
  if (gpa > 2.0) {
    if (weighted) {
      return weightedGPAScale.find(obj => obj.grade.substring).gpa;
    } 
    if (!weighted) {
      return unWeightedGPAScale.find(obj => obj.grade == grade).gpa;
    }
  }
  return 0;
}
*/