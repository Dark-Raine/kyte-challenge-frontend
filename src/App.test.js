import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// it('produces a valid date', () => {
//   const date = "2019-04-08"
//   const time = "15:15"
//   const dateTime = new Date(date +"T"+ time + "Z")
//   expect(convertToDateTime(date, time)).toBe(dateTime)
// });