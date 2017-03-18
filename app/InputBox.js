import React, {Component} from 'react';
import InputBox2 from './InputBox2';

export default class InputBox extends Component {
	constructor(props) {
		super(props);
		this.state = {
			a: 0
		};
	}
	componentDidMount() {
		setTimeout(() => {
			this.setState({
				a: 50
			});
		}, 2000);
	}
	myFunc() {
		return this.state.a+this.props.inputName+this.props.inputValue;
	}
	clicked() {
		alert(1);
	}
	render() {
		return (
			<h1 onClick={this.clicked}>
				{
					this.myFunc() > 30 ? 
					(<InputBox2></InputBox2>) : null
				}
			</h1>
		);
	}
}