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
	
	handleClose(event){
		this.setState((prevState) =>{
			return {
				currModal: "None",
				on:false
			}
		});
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
	constructor(props){
		super(props);
		//this.handleClose = this.handleClose.bind()
	}

	handleClose(event){
		if(event.target.className === "ModalBack"){	//Close it
			this.props.handleClose(event);
		}
	}

	render(){
		return(
			<div className="ModalBack" onClick={this.handleClose = this.handleClose.bind(this)}>
				{this.props.children}
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
						<ModalBack handleClose={this.props.handleClose}>
						<div className = "Modal">
							test2
						</div>
						</ModalBack>
					</div>
				)
			}else if(this.props.type === "Report"){
				return(
					<div>
						<ModalBack handleClose={this.props.handleClose}>
						<div className = "Modal">
							test1
						</div>
						</ModalBack>
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
