import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import ShowcaseNavButtons from '../ShowcaseNavButtons';

class LaboratoryMain extends Component{
	render(){
		return(
			<Row id="work">

				<Col xs={ 12 }><hr /></Col>

				<ShowcaseNavButtons
					visibility={{
						blog: false,
						photography: false,
						portfolio: false,
						laboratory: true
					}}
				/>

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