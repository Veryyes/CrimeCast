import React, { Component } from 'react';

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
				What is your Emergency?
				<div className="Emergency_Choices">
					<label>Police</label>
					<input name="police" type="checkbox" onChange={this.handleChange} checked={this.state.police}/>
					<br/>
					<label>Fire Dept.</label>
					<input name="fire" type="checkbox" onChange={this.handleChange} checked={this.state.fire}/>
					<br/>
					<label>Medical Services</label>
					<input name="med" type="checkbox" onChange={this.handleChange} checked={this.state.med}/>
				</div>

				<button onClick={this.handleClick = this.handleClick.bind(this)}>
					Call for Help
				</button>
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
