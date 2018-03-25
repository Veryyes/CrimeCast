import React, { Component } from 'react';
import {  withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
//const { MarkerClusterer } = require("react-google-maps/lib/components/addons/MarkerClusterer");
import {MarkerClusterer} from "react-google-maps/lib/components/addons/MarkerClusterer"
import {MarkerWithLabel} from "react-google-maps/lib/components/addons/MarkerWithLabel"
import {Button, Icon, Navbar, NavItem} from 'react-materialize'
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
				<br/>
				<Modal type={this.state.currModal} enabled={this.state.on} handleClose={this.handleClose}/>
				<Button large waves='light' onClick={this.handleReport}>
					Report
				</Button>
				<Button large waves='light' onClick={this.handleEmergency}>
					Emergency
				</Button>
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
			<Navbar brand="Crime Cast" left>
			</Navbar>
		);
	}
}

class Footer extends Component{
	render(){
		return(
			<footer class="page-footer">
				<div class="container">
					<div class="row">
						<h5 class="white-text">Created By</h5>
						<p class="grey-text text-lighten-4">Brandon Wong, Naman Singh, Jason Kang, Yash Jain.</p>
					</div>
				</div>
				<div class="footer-copyright">
					<div class="container">
					© 2018
					</div>
				</div>
			</footer>
		);
	}
}

export default App;
