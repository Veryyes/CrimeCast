import React, { Component } from 'react';
import {Button, Row, Col} from 'react-materialize'

class Report extends Component{
	constructor(props){
		super(props);
		this.state = {
			Drugs: false,
			Larceny: false,
			Damage: false,
			Buglary: false,	
			Tresspassing: false,
			Assault: false
		}
		this.handleClick = this.handleClick.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.updateMap = this.updateMap.bind(this);
	}

	updateMap(){
		this.props.updateMap();
	}

	render(){
		return(
			<div className="Report">
				<h4> Report a Crime </h4>
				<div class="divider"></div>
				<br/>
				<Row>
					<Col s={6} className='button'>
						<Button waves="teal" name="Drugs" onClick={this.handleClick}>
							Drug/Substance abuse
						</Button>
					</Col>
					<Col s={6} className='button'>
						<Button waves="teal" name="Larceny"onClick={this.handleClick}>
							Larceny	
						</Button>
					</Col>
					<Col s={6} className='button'>
						<Button waves="teal" name="Damage"onClick={this.handleClick}>
							Property Damage
						</Button>
					</Col>
					<Col s={6} className='button'>
						<Button waves="teal" name="Buglary"onClick={this.handleClick}>
							Buglary
						</Button>
					</Col>
					<Col s={6} className='button'>
						<Button waves="teal" name="Tresspassing"onClick={this.handleClick}>
							Tresspassing
						</Button>
					</Col>
					<Col s={6} className='button'>
						<Button waves="teal" name="Assualt"onClick={this.handleClick}>
							Assualt
						</Button>
					</Col>
				</Row>
				<br/>
				<div>
					<Button large onClick={this.handleSubmit}>
						Report
					</Button>
				</div>
			</div>
		)
	}

	handleClick(event){
		this.setState((prevState) => {
			return{
				Drugs: false,
				Larceny: false,
				Damage: false,
				Buglary: false,	
				Tresspassing: false,
				Assault: false
			}
		});
		let name = event.target.name
		this.setState({
			[name]: true
		});
	
	}	

	handleSubmit(event){
		//we have 6 crimes
		for(let property in this.state){
			if(this.state.hasOwnProperty(property)){
				if(this.state[property]){
					let lat = 38.0316816 + (Math.random() > .5 ? Math.random()*.15 : -Math.random()*.15)
					let lng = -78.5135989 +(Math.random() > .5 ? Math.random()*.15 : -Math.random()*.15)
					console.log(lat, lng);
					fetch("http://localhost:8080/report?lat="+lat+"&lng="+lng+"&type="+property, {
						method: "GET",
						headers:{
							Accept: "application/json",
							"Content-Type": "application/json"
						}
					})
					window.location.reload(false);
					this.updateMap();
					//just get the first
					console.log("update");
					break;
				}
			}
		}
		
	}

}

export default Report;
