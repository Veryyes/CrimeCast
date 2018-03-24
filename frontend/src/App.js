import React, { Component } from 'react';
import {  withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
//const { MarkerClusterer } = require("react-google-maps/lib/components/addons/MarkerClusterer");
import {MarkerClusterer} from "react-google-maps/lib/components/addons/MarkerClusterer"
import {MarkerWithLabel} from "react-google-maps/lib/components/addons/MarkerWithLabel"
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
	constructor(props){
		super(props);
		this.state = {
			markers: [
				{lat:38,lng:-78, descript:"Property Damage"},
				{lat:37,lng:-77, descript:"Robbery"},
			]
		}
		this.handleMarkerClick = this.handleMarkerClick.bind(this);
	}
//	{props.isMarkerShown && <Marker position={{ lat: 38.0316816, lng: -78.5135989 }} />}

	handleMarkerClick(marker){
		
	}

	render(){
		let MyMapComponent = withScriptjs(withGoogleMap((props) =>
			 <GoogleMap
   				 defaultZoom={8}
   				 defaultCenter={{ lat: 38.0316816, lng: -78.5135989 }}>
				{props.markers.map(marker=>(
					<MarkerWithLabel
						position={{lat: marker.lat, lng: marker.lng}}
						labelAnchor={(0,0)}
						labelStyle={{backgroundColor: "#000000", color:"#ffffff",fontSize: "12px", padding:"2px"}}
					>
						<div>
							{marker.descript}
						</div>
					</MarkerWithLabel>
				))}
  			</GoogleMap>
		));
		return(
			<div className="Map">  
    		<MyMapComponent 
				isMarkerShown 
				googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCQAsVsOK3RIivTBZpb0JpED65vUUZIAzo&v=3.exp&libraries=geometry,drawing,places"
 				loadingElement={<div style={{ height: `100%` }} />}
  				containerElement={<div style={{ height: `400px` }} />}
  				mapElement={<div style={{ height: `100%` }} />}
				markers={this.state.markers}
			/>	
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
