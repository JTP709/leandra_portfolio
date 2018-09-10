import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';

class Contact extends Component{
	render(){
		return(
			<Row id="photo_section">

				<Col xs={ 12 }><hr /></Col>

				<Col md={12}>
					<h1>Contact Me</h1>
				</Col>
				
				<Col xs={ 12 }><hr /></Col>

			</Row>
		)
	}
}

export default Contact;