import ConsoleHelper from "../../ConsoleHelper";
import { roundToHundredths, parseStrToNum, roundToTenths } from "../functions";
import { weightedGPAScale, unWeightedGPAScale } from "./Scales";

export default function gradesNeeded(weighted, curGPA, classesTaken, desGPA, nextSemClasses, gpaScale = []) {
  [curGPA, classesTaken, desGPA, nextSemClasses] = parseStrToNum(curGPA, classesTaken, desGPA, nextSemClasses);
  
  let scale;
  if (typeof weighted == 'boolean')
    scale = weighted ? weightedGPAScale : unWeightedGPAScale;
  else 
    scale = gpaScale;

  ConsoleHelper('GPA Scale: ' + scale);

  ConsoleHelper(`Classes Taken: ${classesTaken}, Next Sem classes: ${nextSemClasses}`);

  ConsoleHelper(`Desired GPA: ${desGPA}`);
  ConsoleHelper(`Current GPA: ${curGPA}`);
  
  let totalNumClasses = classesTaken + nextSemClasses;
  ConsoleHelper(`Total Num Classes: ${totalNumClasses}`);

  let desAvgGrade = convertGPAToGrade(desGPA, scale);
  ConsoleHelper(`Des Avg grade: ${desAvgGrade}`);

  let avgGrade = convertGPAToGrade(curGPA, scale);
  ConsoleHelper(`Avg grade: ${avgGrade}`);

  if (desAvgGrade === -1 || avgGrade === -1)
    return -1;

  let gradesNeeded = ((desAvgGrade * totalNumClasses) - (classesTaken * avgGrade)) / nextSemClasses;

  return roundToHundredths(gradesNeeded);
}

function convertGPAToGrade(gpa, scale) {
  gpa = roundToHundredths(gpa); //in case the gpa given is not rounded to hundredths
  let scaleGPAArr = scale.map(el => parseStrToNum(el[0]));
  let scaleGradeArr = scale.map(el => parseStrToNum(el[1]));
  ConsoleHelper(`Scale GPA Arr: ${scaleGPAArr} \n Scale Grade Arr: ${scaleGradeArr}`);

  let minScaleGPA = Math.min(...scaleGPAArr);
  let minScaleGrade = Math.min(...scaleGradeArr);
  let maxScaleGPA = Math.max(...scaleGPAArr);
  let maxScaleGrade = Math.max(...scaleGradeArr);
  ConsoleHelper(`minScaleGPA: ${minScaleGPA} \n minScaleGrade: ${minScaleGrade} \n maxScaleGPA: ${maxScaleGPA} \n maxScaleGrade: ${maxScaleGrade}`);

  let conversionRate = (maxScaleGrade - minScaleGrade) / (maxScaleGPA - minScaleGPA);
  let diff = gpa - minScaleGPA;
  let pntsFromLowestGrade = diff * conversionRate;

  let convertedGrade = pntsFromLowestGrade + minScaleGrade;
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
  }

  scale.sort((a, b) => b - a);
  return scale;
}