import { roundToHundredths, parseStrToNum } from "../functions";

//for reference
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

export default function gradesNeeded(weighted, curGPA, classesTaken, desGPA, nextSemClasses, gpaScale = {}) {
  [curGPA, classesTaken, desGPA, nextSemClasses] = parseStrToNum(curGPA, classesTaken, desGPA, nextSemClasses);
  
  let scale;
  if (typeof weighted == 'boolean')
    scale = weighted ? 'weighted' : 'un-weighted' ;
  else 
    scale = gpaScale;

  console.log(`Classes Taken: ${classesTaken}, Next Sem classes: ${nextSemClasses}`);

  console.log(`Desired GPA: ${desGPA}`);
  console.log(`Current GPA: ${curGPA}`);
  
  let totalNumClasses = classesTaken + nextSemClasses;
  console.log(`Total Num Classes: ${totalNumClasses}`);

  let desAvgGrade = convertGPAToGrade(desGPA, scale);
  console.log(`Des Avg grade: ${desAvgGrade}`);

  let avgGrade = convertGPAToGrade(curGPA, scale);
  console.log(`Avg grade: ${avgGrade}`);

  if (desAvgGrade === -1 || avgGrade === -1)
    return -1;

  let gradesNeeded = ((desAvgGrade * totalNumClasses) - (classesTaken * avgGrade)) / nextSemClasses;

  return roundToHundredths(gradesNeeded);
}

function convertGPAToGrade(gpa, scale) {
  let returnVal;
  gpa = roundToHundredths(gpa); //in case the gpa given is not rounded to hundredths
  let lowestScaleGPA;
  let difference;
  let pntsFrom70;

  if (gpa >= 2.0 && scale == 'weighted') {
    lowestScaleGPA = 2.0;
    difference = gpa - lowestScaleGPA;
    pntsFrom70 = difference * (30 / 3);
    
    returnVal = pntsFrom70 + 70;
  } else if (gpa >= 2.2 && scale == 'un-weighted') {
    lowestScaleGPA = 2.2;
    difference = gpa - lowestScaleGPA;
    pntsFrom70 = difference * (30 / 1.8);
    
    returnVal = pntsFrom70 + 70;

  } else if (typeof scale != 'string') {
    for (let prop in scale)
      console.log(prop);
    returnVal = 0;
  } else {
    returnVal = -1;
  }

  console.log(`Grade: ${returnVal}`);
  return returnVal;
}

export function getGPAScale(minGPA, maxGPA, gpaStep) {
  [minGPA, maxGPA, gpaStep] = parseStrToNum(minGPA, maxGPA, gpaStep);
  let scale = [];

  // for (let i = minGPA; i <= maxGPA; i = i + gpaStep) {
  //   scale[i] = '';
  //   console.log(scale);
  // };
  let i = minGPA;
  let index = 0;
  let stopLoop = false;

  while (!stopLoop) {
    if (i >= maxGPA) {
      scale.push([maxGPA, '']);
      stopLoop = true;
    } else
      scale.push([i, '']);
    index++;
    i = i + gpaStep;
    console.log(scale);
  }

  scale.sort((a, b) => b - a);
  console.log(scale);
  return scale;
}