import { roundUpwardsToHundredths } from "../functions";

export default function calculateGradeNeeded(semAvg, numEffSemExam, desSemAvg) {
  console.log(desSemAvg);
  let percEffSemExam = numEffSemExam / 100;
  let percEffSemAvg = 1 - percEffSemExam;
  let semAvgPnts = semAvg * percEffSemAvg;
  
  let pntsNeeded = desSemAvg - semAvgPnts;
  if (pntsNeeded <= 0) {
    console.log("Avg" + percEffSemAvg);
    console.log("Exam" + percEffSemExam);
    console.log(semAvgPnts);
    console.log(pntsNeeded);
    console.log(pntsNeeded / percEffSemExam);
    return 0;
  } else {
    console.log("Avg" + percEffSemAvg);
    console.log("Exam" + percEffSemExam);
    console.log(semAvgPnts);
    console.log(pntsNeeded);
    console.log(pntsNeeded / percEffSemExam);
    let examGradeNeeded = pntsNeeded / percEffSemExam;
    let roundedGrade = roundUpwardsToHundredths(examGradeNeeded); //makes sure all results are rounded to the nearest hundredth
    return roundedGrade; //Calculates needed grade in order to attain desired grade
  }
}