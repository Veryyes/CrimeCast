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
				<Modal type={this.state.currModal} enabled={this.state.on}/>
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
	
	//Toggles Modal for Reporting
	handleReport(event){
		this.setState((prevState) =>{
			return {
					currModal: "Report",
					on:true
			}
		});
	}

	//Toggles Modal for Emergency
	handleEmergency(event){
		this.setState((prevState) =>{
			return {
					currModal: "Emergency",
					on:true
			}
		});
	}
}

class ModalBack extends Component{
	render(){
		return(
			<div className="ModalBack">

			</div>
		)
	}
}

//Displays Option Pane to interact with
class Modal extends Component{
 	render(){
		if(this.props.enabled){ 
			if(this.props.type === "Emergency"){
				return(
					<div>
						<ModalBack/>
						<div className = "Modal">
							test2
						</div>
					</div>
				)
			}else if(this.props.type === "Report"){
				return(
					<div>
						<ModalBack/>
						<div className = "Modal">
							test1
						</div>
					</div>
				);
			}
		}
		return(//None
			<div>

			</div>
		);		
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
