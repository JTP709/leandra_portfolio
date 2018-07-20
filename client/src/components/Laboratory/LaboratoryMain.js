import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';

class LaboratoryMain extends Component{
	render(){
		return(
			<Row id="lab_section">

				<Col xs={ 12 }><hr /></Col>

				<Col md={12}>
					<h1>Laboratory!</h1>
				</Col>

				<Col xs={ 12 }><hr /></Col>
				
			</Row>
		)
	}
}

export default LaboratoryMain;