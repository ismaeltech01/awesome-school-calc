//used to check if all of the arguments are 'empty' states
export function areAllVarsEmpty() {
  let empty = arguments.array.forEach(element => {
    if (element === '' || element === null || element === undefined)
      return true;
  });
  console.log(empty);

  if (!empty)
    return false;
  return empty;
}

export function roundUpwardsToHundredths(num) {
  let roundedNum = Math.ceil(num * 100) / 100;
  return roundedNum;
}