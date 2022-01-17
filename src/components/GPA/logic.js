import { roundToHundredths, floorToTenths, parseStrToNum } from "../functions";

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
  {grade: '97.0-100', gpa: 4.0}, //make sure to include in between values (such as 3.9)
  {grade: '97.0' , gpa: 3.9}, 
  {grade: '94.0-96' , gpa: 3.8}, 
  {grade: '93.0' , gpa: 3.7}, 
  {grade: '90.0-93' , gpa: 3.6}, 
  {grade: '90.0' , gpa: 3.5}, 
  {grade: '87.0-89' , gpa: 3.4}, 
  {grade: '86.5' , gpa: 3.3}, 
  {grade: '84.0-86' , gpa: 3.2}, 
  {grade: '83.0' , gpa: 3.1}, 
  {grade: '80.0-83' , gpa: 3.0}, 
  {grade: '80.0' , gpa: 2.9}, 
  {grade: '77.0-79' , gpa: 2.8}, 
  {grade: '76.5' , gpa: 2.7}, 
  {grade: '74.0-76' , gpa: 2.6}, 
  {grade: '73.5' , gpa: 2.5}, 
  {grade: '71.0-73' , gpa: 2.4}, 
  {grade: '71.5', gpa: 2.3},
  {grade: '70.0', gpa: 2.2},
  {grade: '0', gpa: 2.1},
  {grade: '0', gpa: 2.0}
];

export default function gradesNeeded(weighted, curGPA, classesTaken, desGPA, nextSemClasses) {
  [curGPA, classesTaken, desGPA, nextSemClasses] = parseStrToNum(curGPA, classesTaken, desGPA, nextSemClasses);

  console.log(`Classes Taken: ${classesTaken}, Next Sem classes: ${nextSemClasses}`);

  console.log(`Desired GPA: ${desGPA}`);
  console.log(`Current GPA: ${curGPA}`);

  let maxGPA = weighted ? 5 : 4;
  let gpaScale = weighted ? weightedGPAScale : unWeightedGPAScale;
  
  let totalNumClasses = classesTaken + nextSemClasses;
  console.log(`Total Num Classes: ${totalNumClasses}`);

  let desAvgGrade = convertGPAToGrade(desGPA, weighted, 'des');
  console.log(`Des Avg grade: ${desAvgGrade}`);

  let avgGrade = convertGPAToGrade(curGPA, weighted, 'avg');
  console.log(`Avg grade: ${avgGrade}`);

  let gradesNeeded = ((desAvgGrade * totalNumClasses) - (classesTaken * avgGrade)) / nextSemClasses;

  return gradesNeeded;
}

function convertGPAToGrade(gpa, weighted, desOrAvgGPA) {
  let returnVal;
  gpa = roundToHundredths(gpa); //in case the gpa given is not rounded to hundredths
  let floorGPA = floorToTenths(gpa);
  console.log(`Rounded GPA: ${gpa}`);
  console.log(`Floor GPA: ${floorGPA}`);
  
  if (gpa >= 2.0) {

    if (gpa == floorGPA) {

      if (weighted) {
        returnVal = weightedGPAScale.find(obj =>  obj.gpa == gpa).grade;

      }

      if (!weighted) {
        if (desOrAvgGPA == 'des') {
          returnVal = parseFloat(unWeightedGPAScale.find(obj => obj.gpa == gpa).grade.substring(0, 4));
        } 

        if (desOrAvgGPA == 'avg') {
          let gradeObj = unWeightedGPAScale.find(obj => obj.gpa == gpa);
          let strLength = gradeObj.grade.length;
          let grade1 = parseFloat(gradeObj.grade.substring(0, 4));
          let grade2 = parseFloat(gradeObj.grade.substring(strLength - 4, strLength));

          if (grade1 == grade2) {
            returnVal = grade1;
          } else {
            returnVal = (grade1 + grade2) / 2;
          }
        }

      }
      
    } else {

      if (weighted) {
        let lowestValGradeRange = weightedGPAScale.find(obj =>  obj.gpa == floorGPA).grade;
        
        returnVal = lowestValGradeRange + ((gpa - floorGPA) * 10);
      }
      
      if (!weighted) {

      }

    }
  } else { 
   returnVal = 0;
  }

  console.log(`Grade: ${returnVal}`);
  return returnVal;
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