import { roundToHundredths, parseStrToNum, roundToTenths } from "../functions";
import { weightedGPAScale, unWeightedGPAScale } from "./Scales";

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