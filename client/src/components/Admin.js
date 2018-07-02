import React, { Component } from 'react';
import { 
	Grid,
	Col,
	Row,
	FormGroup,
	ControlLabel,
	FormControl,
	HelpBlock
} from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';
import { capitalizeFirstLetter } from '../utils/utils';

class Admin extends Component {
	constructor(){
		super();
		this.state = {
			title: '',
			body: '',
			filters: [],
			thumbnail: ''
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleBodyChange = this.handleBodyChange.bind(this);
		this.handleTitleChange = this.handleTitleChange.bind(this);
		this.handleFilterChange = this.handleFilterChange.bind(this);
		this.handleThumbnailChange = this.handleThumbnailChange.bind(this);
		this.renderFilterOptions = this.renderFilterOptions.bind(this);
	}

	handleSubmit(blog) {
		const { title, thumbnail, filters, body } = this.state;
		const newBlogPost = {
			title,
			date: Date.now(),
			thumbnail,
			filters,
			body
		};
		axios.post('http://localhost:5000/api/blogs', newBlogPost)
	  .then(function (response) {
	    console.log(response);
	  })
	  .catch(function (error) {
	    console.log(error);
	  });
	}

	handleTitleChange(e) {
    if (e === undefined) { return; }
    const title = e.target.value;
    this.setState({ ...this.state, title });
	}

	handleBodyChange(e) {
    if (e === undefined) { return; }
    const body = e.target.value;
    this.setState({ ...this.state, body });
	}

	handleThumbnailChange(e) {
    if (e === undefined) { return; }
    const thumbnail = e.target.value;
    this.setState({ ...this.state, thumbnail });
	}

	handleFilterChange(e) {
    if (e === undefined) { return; }
    const filters = Array.apply(null, {length: e.target.options.length})
    	.map(Number.call, Number)
    	.map(num => {
	    	if (e.target.options[num].selected === true) {
	    		return e.target.options[num].value 
	    	}
	    })
	    .filter(filter => { if (filter) return filter });
    this.setState({ ...this.state, filters });
	}

	renderFilterOptions() {
		const { filters } = this.props;
		if (filters != undefined) {
			return filters.map(filter => {
	      return (
	      	<option 
    				value={ filter }
    			>{ capitalizeFirstLetter(filter) }</option>
	      )
			})
		}
	}

	render() {
		const writtenWords = [
			'Magnum Opus',
			'masterpiece',
			'heart\'s desires',
			'crowing acheivement',
			'shitpost'
		];
		const titleHelpBlockText = [
			'Think of something witty, or else people won\'t read it...no pressure',
			'Oh god, you\'re thinking of using a pun, aren\'t you?',
			'You should\'ve written down that title when you first thought of it...',
			'Just remember: if you don\'t nail this title, nobody will read this...'
		];
		const index = Math.floor(Math.random()*writtenWords.length);
		const indexForTitleHelpBlock = Math.floor(Math.random()*titleHelpBlockText.length);
		const textAreaPlaceholder = `Write your ${writtenWords[index]}`;

		return (
			<Grid>
				<Row>
					<Col md={12}>
						<h1>ADMIN!</h1>
					</Col>
				</Row>
				<Row>
					<Col xs={12} md={2}>
						<h2>TODO: </h2>
						<ul>
							<li>Add</li>
							<li>Update</li>
							<li>Delete</li>
							<li>Filter</li>
						</ul>
					</Col>
					<Col xs={12} md={5}>
						<h2>New Blog Post</h2>
						<form>
					    <FormGroup controlId="formControlsText">
					      <ControlLabel>Title</ControlLabel>
					      <FormControl
					      	type="text"
			            value={this.state.title}
			            placeholder="Enter text"
			            onChange={ this.handleTitleChange }
					      />
					      <HelpBlock>
					      	{ titleHelpBlockText[indexForTitleHelpBlock] }
					      </HelpBlock>
					    </FormGroup>

					    <FormGroup controlId="formControlsText">
					      <ControlLabel>Thumbnail</ControlLabel>
					      <FormControl
					      	type="text"
			            value={this.state.thumbnail}
			            placeholder="Enter thumbnail URL"
			            onChange={ this.handleThumbnailChange }
					      />
					      <HelpBlock>Image resolution: 250x250</HelpBlock>
					    </FormGroup>

							<FormGroup controlId="formControlsSelectMultiple">
					      <ControlLabel>Filters</ControlLabel>
					      <FormControl
						      componentClass="select"
						      multiple
						      onChange={ this.handleFilterChange }
					      >
					      	{ this.renderFilterOptions() }
					      </FormControl>
					      <HelpBlock>Hold Ctrl or Cmd to select multiple filters.</HelpBlock>
					    </FormGroup>

					    <FormGroup controlId="formControlsTextarea">
					      <ControlLabel>Post</ControlLabel>
					      <FormControl
					      	componentClass="textarea"
					      	placeholder={textAreaPlaceholder}
					      	onChange={ this.handleBodyChange } />
					      <HelpBlock>
					      	Use <a href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet">
					      		markdown
					      	</a> to format
				      	</HelpBlock>
					    </FormGroup>

						</form>
						<button onClick={ ()=>{ this.handleSubmit() } }>Submit!</button>
					</Col>
					<Col xs={12} md={5}>
						<h2>Post Preview</h2>
      			<ReactMarkdown source={ this.state.body } />
        	</Col>
				</Row>
			</Grid>
		)
	}
}

export default Admin;
