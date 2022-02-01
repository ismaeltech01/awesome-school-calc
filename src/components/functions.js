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

export function roundToHundredths(num) {
  return Math.round(num * 100) / 100;
}

export function floorToTenths(num) {
  return Math.floor(num * 10) / 10;
}

export function roundToTenths(num) {
  return Math.round(num * 10) / 10;
}

export function parseStrToNum(...args) {
  return args.map(arg => {
    //if (arg.indexOf('.') !== -1)
     //return parseInt(arg);
    return parseFloat(arg);
  });
}