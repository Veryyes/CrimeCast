import React, { Component } from 'react';
import './App.css';
import Modal from './Modal.js';
import Map from './Map.js';

/*
var mysql = require('mysql');
console.log(mysql);
var con = mysql.createConnection({
	host: "35.231.114.23",
	user: "crimecast",
	password: "badboi",
	database: "crime"
});
*/

/*var unirest = require('unirest');
var spotcrime = require('spotcrime');*/

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			//Current Type of modal
			currModal: "None", //Report || Emergency
			//Display or not?
			on: false
		}
		this.handleReport = this.handleReport.bind(this);
		this.handleEmergency = this.handleEmergency.bind(this);
		this.handleClose = this.handleClose.bind(this);
	}

	render() {
		return (
			<div className="App">
				<Header/>
				<Map/>		
				<Modal type={this.state.currModal} enabled={this.state.on} handleClose={this.handleClose}/>
				<button onClick={this.handleReport}>
					Report
				</button>
				<button onClick={this.handleEmergency}>
					Emergency
				</button>

				<Footer/>
      		</div>
  		);
  	}
	
	//Closes Modal
	handleClose(event){
		this.setState((prevState) =>{
			return {
				currModal: "None",
				on:false
			}
		});
	}

	//Display Modal for Reporting
	handleReport(event){
		this.setState((prevState) =>{
			return {
				currModal: "Report",
				on:true
			}
		});
	}

	//Display Modal for Emergency
	handleEmergency(event){
		this.setState((prevState) =>{
			return {
				currModal: "Emergency",
				on:true
			}
		});
	}
}



class Header extends Component{
	render(){
		return(
			<div className="Header">
				<h1>Crime Cast</h1>
			
			</div>
		);
	}
}

class Footer extends Component{
	render(){
		return(
			<div className="Footer">
				Brandon Wong, Naman Singh, Jason Kang, Yash Jain © 2018
			</div>
		);
	}
}

export default App;
