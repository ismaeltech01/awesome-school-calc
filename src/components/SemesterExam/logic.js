import { roundUpwardsToHundredths } from "../functions";

export default function calculateGradeNeeded(semAvg, numEffSemExam, desSemAvg) {
  let percEffSemExam = numEffSemExam / 100;
  let percEffSemAvg = 1 - percEffSemExam;
  let semAvgPnts = semAvg * percEffSemAvg;
  
  let pntsNeeded = desSemAvg - semAvgPnts;
  if (pntsNeeded <= 0) {
    return 0;
  } else {
    let examGradeNeeded = pntsNeeded / percEffSemExam;
    let roundedGrade = roundUpwardsToHundredths(examGradeNeeded); //makes sure all results are rounded to the nearest hundredth
    return roundedGrade; //Calculates needed grade in order to attain desired grade
  }
}