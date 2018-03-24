import React, { Component } from 'react';
import {  withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import './App.css';
import Modal from './Modal.js';

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



class Map extends Component{
	render(){
	const MyMapComponent = withScriptjs(withGoogleMap((props) =>
		  <GoogleMap
   			 defaultZoom={8}
   			 defaultCenter={{ lat: -34.397, lng: 150.644 }}
  			>
    		{props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
  			</GoogleMap>
		))
		return(
			<div className="Map">  
    			<MyMapComponent isMarkerShown   googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
  loadingElement={<div style={{ height: `100%` }} />}
  containerElement={<div style={{ height: `400px` }} />}
  mapElement={<div style={{ height: `100%` }} />}/>	
			</div>
		);
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
