import { roundToHundredths, parseStrToNum, roundToTenths } from "../functions";

const weightedGPAScale = [
  ['5.0', '100'],
  ['4.9', '99'],
  ['4.8', '98'],
  ['4.7', '97'],
  ['4.6', '96'],
  ['4.5', '95'],
  ['4.4', '94'],
  ['4.3', '93'],
  ['4.2', '92'],
  ['4.1', '91'],
  ['4.0', '90'],
  ['3.9', '89'],
  ['3.8', '88'],
  ['3.7', '87'],
  ['3.6', '86'],
  ['3.5', '85'],
  ['3.4', '84'],
  ['3.3', '83'],
  ['3.2', '82'],
  ['3.1', '81'],
  ['3.0', '80'],
  ['2.9', '79'],
  ['2.8', '78'],
  ['2.7', '77'],
  ['2.6', '76'],
  ['2.5', '75'],
  ['2.4', '74'],
  ['2.3', '73'],
  ['2.2', '72'],
  ['2.1', '71'],
  ['2.0', '70']
];

const unWeightedGPAScale = [
  ['4.0', '100'],
  ['3.9', '97-99'],
  ['3.8', '94.0-96'], 
  ['3.6', '90.0-93'],  
  ['3.4', '87.0-89'],  
  ['3.2', '84.0-86'], 
  ['3.0', '80.0-83'], 
  ['2.8', '77.0-79'], 
  ['2.6', '74.0-76'], 
  ['2.4', '71.0-73'], 
  ['2.2', '70']
];

export default function gradesNeeded(weighted, curGPA, classesTaken, desGPA, nextSemClasses, gpaScale = []) {
  [curGPA, classesTaken, desGPA, nextSemClasses] = parseStrToNum(curGPA, classesTaken, desGPA, nextSemClasses);
  
  let scale;
  if (typeof weighted == 'boolean')
    scale = weighted ? weightedGPAScale : unWeightedGPAScale;
  else 
    scale = gpaScale;

  console.log(scale);

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
  gpa = roundToHundredths(gpa); //in case the gpa given is not rounded to hundredths
  let scaleGPAArr = scale.map(el => parseStrToNum(el[0]));
  let scaleGradeArr = scale.map(el => parseStrToNum(el[1]));
  console.log(`Scale GPA Arr: ${scaleGPAArr} \n Scale Grade Arr: ${scaleGradeArr}`);

  let minScaleGPA = Math.min(...scaleGPAArr);
  let minScaleGrade = Math.min(...scaleGradeArr);
  let maxScaleGPA = Math.max(...scaleGPAArr);
  let maxScaleGrade = Math.max(...scaleGradeArr);
  console.log(`minScaleGPA: ${minScaleGPA} \n minScaleGrade: ${minScaleGrade} \n maxScaleGPA: ${maxScaleGPA} \n maxScaleGrade: ${maxScaleGrade}`);

  let conversionRate = (maxScaleGrade - minScaleGrade) / (maxScaleGPA - minScaleGPA);
  let diff = gpa - minScaleGPA;
  let pntsFromLowestGrade = diff * conversionRate;

  let convertedGrade = pntsFromLowestGrade + minScaleGrade;
  console.log(convertedGrade);
  return convertedGrade

  // ----- Previously planned code -----
  // if (gpa >= 2.0 && scale == 'weighted') {
  //   lowestScaleGPA = 2.0;
  //   difference = gpa - lowestScaleGPA;
  //   pntsFrom70 = difference * (30 / 3);
    
  //   returnVal = pntsFrom70 + 70;
  // } else if (gpa >= 2.2 && scale == 'un-weighted') {
  //   lowestScaleGPA = 2.2;
  //   difference = gpa - lowestScaleGPA;
  //   pntsFrom70 = difference * (30 / 1.8);
    
  //   returnVal = pntsFrom70 + 70;

  // } else if (typeof scale != 'string') {
  //   let gpaArr = scale.map(([gpa, grade]) => gpa);
  //   lowestScaleGPA = Math.min(...gpaArr);
  //   difference = gpa - lowestScaleGPA;
  //   pntsFromLowestGrade = 

  //   for (let index = 0; index < scale.length - 1; index++) {
  //     const el = gpaArr[index];
  //     const nextEl = gpa[index + 1];
  //     if (el.gpa === gpa) {
  //       returnVal = el.grade;
  //       break;
  //     }
  //     if (el.gpa < gpa && nextEl.gpa > gpa) {
  //       minGPA = el.gpa;
  //       maxGPA = nextEl.gpa;
  //       minGrade = el.grade;
  //       maxGrade = nextEl.grade;
  //       let gpaDiff = maxGPA - minGPA;
  //       let gradeDiff = maxGrade - minGrade;
  //       let pntsFromMinGrade = ;
  //       returnVal = pntsFromMinGrade + lowestScaleGPA;
  //       break;
  //     }
  //   }
  // } else {
  //   returnVal = -1;
  // }

  // console.log(`Grade: ${returnVal}`);
  // return returnVal;
}

export function getGPAScale(minGPA, maxGPA, gpaStep) {
  [minGPA, maxGPA, gpaStep] = parseStrToNum(minGPA, maxGPA, gpaStep);
  let scale = [];

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
    i = roundToTenths(i + gpaStep);
    console.log(scale);
  }

  scale.sort((a, b) => b - a);
  console.log(scale);
  return scale;
}