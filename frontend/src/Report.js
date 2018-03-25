import React, { Component } from 'react';
import {Button, Row, Col} from 'react-materialize'

class Report extends Component{
	render(){
		return(
			<div className="Report">
				<h4> Report a Crime </h4>
				<div class="divider"></div>
				<br/>
				<Row>
					<Col s={6} className='button'>
						<Button waves="teal">
							Drug/Substance abuse
						</Button>
					</Col>
					<Col s={6} className='button'>
						<Button waves="teal">
							Larceny	
						</Button>
					</Col>
					<Col s={6} className='button'>
						<Button waves="teal">
							Property Damage
						</Button>
					</Col>
					<Col s={6} className='button'>
						<Button waves="teal">
							Buglary
						</Button>
					</Col>
					<Col s={6} className='button'>
						<Button waves="teal">
							Tresspassing
						</Button>
					</Col>
					<Col s={6} className='button'>
						<Button waves="teal">
							Assualt
						</Button>
					</Col>
				</Row>
				<br/>
				<div>
					<Button large>
						Report
					</Button>
				</div>
			</div>
		)
	}
}

export default Report;
