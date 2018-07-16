import React, { Component } from 'react';
import { 
	Grid,
	Col,
	Table,
	Form,
	FormGroup,
	FormControl,
	HelpBlock,
	Button
} from 'react-bootstrap';
import { capitalizeFirstLetter } from '../../utils/utils';

class FilterDashboard extends Component {
	constructor(){
		super();
		this.state={
			edit_card: '',
			filter_update: '',
			filter_new: '',
			update_validation: false,
			add_validation: false
		}
		this.addHandler = this.addHandler.bind(this);
		this.updateHandler = this.updateHandler.bind(this);
		this.deleteHandler = this.deleteHandler.bind(this);
	}

	addHandler(){
		const { state } = this;
		const filter = this.state.filter_new;
		this.props.newFilter(filter);
		this.setState({ ...state, filter_new: '' })
	}

	updateHandler(id){
		const { state } = this;
		const filter = this.state.filter_update;
		this.props.updateFilter({ id, filter });
		this.setState({ ...state, filter_update: '' })
	}

	deleteHandler(id){
		this.props.deleteFilter(id);
	}

	render(){
		const { filters } = this.props;
		const { state } = this;
		const { edit_card } = state;
		const validationArray = filters.map(filter => filter.filter.toLowerCase());
		const updateValidation = validationArray.includes(this.state.filter_update.toLowerCase());
		const addValidation = validationArray.includes(this.state.filter_new.toLowerCase());
		const filterRows = filters.map(filter => {
			const filterName = filter.filter
			const filterId = filter._id
			return (
				<tr key={ filterId }>
					<td>
						{ capitalizeFirstLetter(filterName) }
						{ edit_card === filterName ?
							  (<div>
							  	<FormGroup 
							  		bsSize="small" 
							  		validationState={
							  			updateValidation ? 
							  				'error' :
							  				null
							  		}
							  	>
								    <FormControl
								    	type="text"
								    	onChange={ (event)=> { 
								    		const filter_update = event.target.value;
								    		this.setState({ ...state, filter_update }) 
								    	}}
								    	placeholder={ capitalizeFirstLetter(filterName) }
								    />
    								{ 
    									updateValidation ? 
	    									<HelpBlock>That filter already exists!</HelpBlock> : 
	    									null 
    								}
    								<FormControl.Feedback />
								  </FormGroup>
								  <Button 
								  	bsSize="small" 
								  	type="submit"
								  	disabled={ updateValidation }
								  	onClick={ () => { this.updateHandler(filterId) } }
								  >
								  	Edit
								  </Button>
								  <Button
								  	bsSize="small"
								  	onClick={ () => { this.deleteHandler(filterId) } }
								  >
								  	Del
								  </Button>
								 </div>) : null
						}
					</td>
					<td>
						<Button
							bsSize="small"
							onClick={() => { 
								edit_card === filterName ? 
									this.setState({ ...state, edit_card: '' }) :
									this.setState({ ...state, edit_card: filterName })
							}}
						>
							{ edit_card === filterName ? 'Close' : 'Edit' }
						</Button>
					</td>
				</tr>
			)
		})
		const addFilterRow = (
			<tr key="addFilterRow">
				<td>
				  <FormGroup
				  	bsSize="small"
				  	validationState={
			  			addValidation ? 
			  				'error' :
			  				null
			  		}
				  >
				    <FormControl 
				    	type="text"
				    	placeholder="Add Filter"
							onChange={ (event)=> { 
				    		const filter_new = event.target.value;
				    		this.setState({ ...state, filter_new }) 
				    	}}
				    />
						{ 
							addValidation ? 
								<HelpBlock>That filter already exists!</HelpBlock> : 
								null 
						}
    				<FormControl.Feedback />
				  </FormGroup>
				</td>
				<td>
					<Button
						disabled={ addValidation }
						bsSize="small"
						onClick={ this.addHandler }
					>
						Add
					</Button>
				</td>
			</tr>
		)
		const renderFilters = [ ...filterRows, addFilterRow ]
		return (
			<Col xs={12} md={10}>
				<h2>Filter Dashboard</h2>
				<Table striped bordered condensed hover>
				  <tbody>
				  { renderFilters }
				  </tbody>
				</Table>
			</Col>
		)
	}
}

export default FilterDashboard;
