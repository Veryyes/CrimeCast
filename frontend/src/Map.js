import React, { Component } from 'react';
import {  withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import {MarkerWithLabel} from "react-google-maps/lib/components/addons/MarkerWithLabel"

class Map extends Component{
	constructor(props){
		super(props);
	
		this.state = {
			gps: { //UVA
				lat: 38.0316816,
				lng: -78.5135989
			},
			markers: []
		}
		this.success = this.success.bind(this);
		this.repoll = this.repoll.bind(this);
		this.repoll();
	}


	repoll(){
fetch("http://localhost:8080/all",{
			method: "GET",
			headers: {
				Accept:"application/json",
				"Content-Type": "application/json"
			}
		}).then((response)=>{
			return response.json()
		}).then((response)=>{
			let newMarkers = []
			for(let i =0; i < response.length; i++){
				let mark={
					lat: response[i].lat,
					lng: response[i].lng,
					descript: response[i].type
				}
			
				newMarkers.push(mark);
			}
			this.setState((prevState)=>{
				return{
					markers: newMarkers
				}
			});
			console.log(this.state.markers);
		})

	}

	success(pos){
 	 let crd = pos.coords;
	 this.setState((prevState) =>{
		return{
			gps:{
				lat: crd.latitude,
				lng: crd.longitude
			}
		}
	});
	console.log(crd);	
	}
	error(err) {
	  console.warn(`ERROR(${err.code}): ${err.message}`);
	}

	render(){
		let options = {
 			enableHighAccuracy: true,
 			timeout: 5000,
 			maximumAge: 0
		};
		//navigator.geolocation.getCurrentPosition(this.success,this.error, options);
		let MyMapComponent = withScriptjs(withGoogleMap((props) =>
			 <GoogleMap
   				 defaultZoom={14}
   				 defaultCenter={{ lat: this.state.gps.lat, lng: this.state.gps.lng }}>
				{props.isMarkerShown && <Marker position={{ lat: this.state.gps.lat, lng: this.state.gps.lng  }} />}
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

export default Map;
