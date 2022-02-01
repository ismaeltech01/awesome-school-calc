import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import reportWebVitals from './reportWebVitals';

try {
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

} catch (err) {
  console.log(err);

  const style = {
    'padding': '2em',
    'display': 'flex',
    'align-items': 'center',
    'justify-content': 'center'
  };

  ReactDOM.render(
    <div className='error-pg' style={style}>
      <h1>404 Error</h1>
      <h2>An Unknown error occurred</h2>
      <h3>If you would like to help the project, 
        copy the following error message and
        open an issue at <a href='https://github.com/ismaeltovar/awesome-school-calc/issues'>https://github.com/ismaeltovar/awesome-school-calc/issues</a></h3>
      <h4>Error Message: </h4>
      <h5>{err}</h5>
    </div>, 
    document.getElementById('root')
  );
}