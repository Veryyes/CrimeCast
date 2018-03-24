import React, { Component } from 'react';

class Report extends Component{
	render(){
		return(
			<div className="Report">
				Report a Crime
				<div>
					<button>
					Larceny	
					</button>

					<button>
					Buglary
					</button>

					<button>
					Assualt
					</button>

					<button>
					Tresspassing
					</button>

					<button>
					Drug/Substance abuse
					</button>

					<button>
					Property Damage
					</button>
				</div>
				<div>
					<button>
						Report
					</button>
				</div>
			</div>
		)
	}
}

export default Report;
