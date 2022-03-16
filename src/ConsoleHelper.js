//From https://stackoverflow.com/questions/56276325/how-can-remove-console-log-in-the-production-build-of-a-react-application-create

const ConsoleHelper = (data) => {
  if (process.env.NODE_ENV === 'production') return;
  console.log(data);
}

export default ConsoleHelper;