import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import ShowcaseNav from '../ShowcaseNav';

class PhotographyMain extends Component{
	render(){
		return(
			<Row id="photo_section">

				<Col xs={ 12 }><hr /></Col>

				<Col md={12}>
					<h1>Photos!</h1>
				</Col>
				
				<Col xs={ 12 }><hr /></Col>

			</Row>
		)
	}
}

export default PhotographyMain;