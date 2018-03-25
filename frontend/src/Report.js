import React, { Component } from 'react';
import {Button, Row, Col} from 'react-materialize'

class Report extends Component{
	render(){
		return(
			<div className="Report">
				Report a Crime
				<Row>
					<Col s={6} className='button'>
						<Button large>
							Larceny	
						</Button>
					</Col>
					<Col s={6} className='button'>
						<Button large>
							Buglary
						</Button>
					</Col>
					<Col s={6} className='button'>
						<Button large>
							Assualt
						</Button>
					</Col>
					<Col s={6} className='button'>
						<Button large>
							Tresspassing
						</Button>
					</Col>
					<Col s={6} className='button'>
						<Button large>
							Drug/Substance abuse
						</Button>
					</Col>
					<Col s={6} className='button'>
						<Button large>
							Property Damage
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
