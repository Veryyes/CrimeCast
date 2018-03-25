import React, { Component } from 'react';
import {Button} from 'react-materialize'

class Report extends Component{
	render(){
		return(
			<div className="Report">
				Report a Crime
				<div>
					<Button>
					Larceny	
					</Button>

					<Button>
					Buglary
					</Button>

					<Button>
					Assualt
					</Button>

					<Button>
					Tresspassing
					</Button>

					<Button>
					Drug/Substance abuse
					</Button>

					<Button>
					Property Damage
					</Button>
				</div>
				<br/>
				<div>
					<Button>
						Report
					</Button>
				</div>
			</div>
		)
	}
}

export default Report;
