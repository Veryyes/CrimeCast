import React, { Component } from 'react';
import {Button, Input, Row} from 'react-materialize'

class Emergency extends Component{
	constructor(props){
		super(props);
		this.state = {
			police: true,
			fire: false,
			med: false
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	render(){
		return(
			<div className="Emergency">
				<h4> What is your Emergency? </h4>
				<div class="divider"></div>
				<br/>
				<Row className="Emergency_Choices">
					<Input name="police" type="checkbox" label="Police" s={4} onChange={this.handleChange} checked={this.state.police}/>
					<Input name="med" type="checkbox" label="Medical Services" s={4} onChange={this.handleChange} checked={this.state.med}/>
					<Input name="fire" type="checkbox" label="Fire Dept." s={4} onChange={this.handleChange} checked={this.state.fire}/>
				</Row>
				<Button s={6} onClick={this.handleClick = this.handleClick.bind(this)}>
					Call for Help
				</Button>
			</div>
		);
	}

	handleChange(event){
		let target = event.target;
		let value = target.type==='checkbox' ? target.checked :target.value;
		let name = target.name;

		this.setState({
			[name]: value
		});
	}

	handleClick(event){
		console.log(this.state)

	}
}

export default Emergency;
