import React, { Component } from 'react';
import './App.css';

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
	}

	render() {
		return (
			<div className="App">
				<Header/>
				<Map/>
				<ModalBack>
					<Modal type={this.state.currModal} enabled={this.state.on}/>
				</ModalBack>
				<Footer/>
      		</div>
  		);
  	}
	
	//Toggles Modal for Reporting
	handleReport(event){

	}

	//Toggles Modal for Emergency
	handleEmergency(event){

	}
}

class ModalBack extends Component{
	render(){	
		return(
			<div>

			</div>
		);
	}
}

//Displays Option Pane to interact with
class Modal extends Component{
 	render(){
		if(this.props.type === "Emergency"){
			return(
				<div className = "Modal">
					
				</div>
			)
		}else if(this.props.type === "Report"){
			return(
				<div className = "Modal">

				</div>
			);
		}else{ //None
			return(
				<div className = "Modal">

				</div>
			);
		}
	}
}

class Map extends Component{
	render(){
		return(
			<div className="Map">
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
