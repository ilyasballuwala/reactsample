// import Point from './Point.js';
/*var body = document.querySelector('body');
body.textContent = 'Good point: ' + new Point(1, 23).toString1();*/

import React from 'react';
import ReactDOM from 'react-dom';

import InputBox from './InputBox';

const inputValue = 11;
const inputName = 10;
const obj = {
	inputName,
	inputValue
};

ReactDOM.render(
  <InputBox {...obj} ></InputBox>,
  document.getElementById('root')
);