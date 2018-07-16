import React, { Component } from 'react';
import {
	Col,
	ButtonToolbar,
	Button
} from 'react-bootstrap';
import { connect } from 'react-redux';
import {
	redirectPage
} from '../actions/actionCreators';

class ShowcaseNavButtons extends Component {
	render(){
		const { redirectPage, visibility } = this.props;
		const { blog, photography, portfolio, laboratory } = visibility;
		return(
			<Col xs={ 12 } md={ 5 } className = "blog_header">
			  <ButtonToolbar>
			    <Button
			    	active={ blog }
			    	bsSize = "large"
			    	onClick={ () => { redirectPage("/blog") } }
			    >
			      Blog
			    </Button>
			    <Button
			    	active={ photography }
			    	bsSize = "large"
			    	onClick={ () => { redirectPage("/photography") } }
			    >
			      Photography
			    </Button>
			    <Button
			    	active={ portfolio }
			    	bsSize = "large"
			    	onClick={ () => { redirectPage("/portfolio") } }
			    >
			      Portfolio
			    </Button>
			    <Button
			    	active={ laboratory }
			    	bsSize = "large"
			    	onClick={ () => { redirectPage("/laboratory") } }
			    >
			      Laboratory
			    </Button>
			   </ButtonToolbar>
			</Col>
		)
	}
}

// export default ShowcaseNavButtons;

const mapDispatchToProps = {
	redirectPage
}

const ConnectedShowcaseNavButtons = connect(
  null,
  mapDispatchToProps
)(ShowcaseNavButtons)

export default ConnectedShowcaseNavButtons;