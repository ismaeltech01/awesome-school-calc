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
    return pntsNeeded / percEffSemExam; //Calculates needed grade in order to attain desired grade
  }
}

//used to check if all of the arguments are 'empty' states
export function areAllVarsEmpty() {
  for (let index = 0; index < arguments.length; index++) {
    if (arguments[index] === '' || arguments[index] === undefined || arguments[index] === null) {
      return true;
    }
  }

  return false;
}