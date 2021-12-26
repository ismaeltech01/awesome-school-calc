//used to check if all of the arguments are 'empty' states
export default function areAllVarsEmpty() {
  for (let index = 0; index < arguments.length; index++) {
    if (arguments[index] === '' || arguments[index] === undefined || arguments[index] === null) {
      return true;
    }
  }

  return false;
}