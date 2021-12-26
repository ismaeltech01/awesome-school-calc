export default function calculateTestScoreNeeded(classAvg, testWeight, desiredAvg) {
  let classAvgWeight = (100 - testWeight) / 100;
  let classAvgPnts = classAvg * classAvgWeight;

  let pntsNeeded = desiredAvg - classAvgPnts;

  if (pntsNeeded <= 0) {
    return 0;
  } else {
    let testWeightDecimal = testWeight / 100;
    let testGradeNeeded = pntsNeeded / testWeightDecimal;
    return testGradeNeeded;
  }
}