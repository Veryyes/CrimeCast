import React, { Component } from 'react';
import Report from './Report.js';
import Emergency from './Emergency.js';

class ModalBack extends Component{
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
							<Emergency/>
						</div>
						</ModalBack>
					</div>
				)
			}else if(this.props.type === "Report"){
				return(
					<div>
						<ModalBack handleClose={this.props.handleClose}>
						<div className = "Modal">
							<Report/>
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

export default Modal;
