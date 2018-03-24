import React, { Component } from 'react';

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

export default Modal;
