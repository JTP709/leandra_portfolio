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
import { capitalizeFirstLetter } from '../../utils/utils';

class BlogForm extends Component {
	constructor(){
		super();
		this.state = {
			isLoading: false
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleBodyChange = this.handleBodyChange.bind(this);
		this.handleTitleChange = this.handleTitleChange.bind(this);
		this.handleFilterChange = this.handleFilterChange.bind(this);
		this.handleThumbnailChange = this.handleThumbnailChange.bind(this);
		this.renderFilterOptions = this.renderFilterOptions.bind(this);
	}

	handleSubmit(blog) {
		const { title, thumbnail, filters, body } = this.props.blogForm;
		const { updateNotification } = this.props;
		const oldState = { ...this.state };
		if (title === '' || thumbnail === '' || filters === '' || body === '') {
			this.setState({
				oldState,
				isLoading: false
			});
			updateNotification('blog_submission_error');
			return;
		}
		this.setState({
			oldState,
			isLoading: true
		});
		updateNotification('')
		const newBlogPost = {
			title,
			date: Date.now(),
			thumbnail,
			filters,
			body
		};
		axios.post('http://localhost:5000/api/blogs', newBlogPost)
	  .then(response => {
	    if(response.status === 200) {
	    	this.setState({
	    		oldState,
					title: '',
					body: '',
					filters: [],
					thumbnail: '',
	    		isLoading: false
	    	});
	    	updateNotification('blog_submission_successful');
	    }
	  })
	  .catch(error => {
	  	this.setState({
	  		oldState,
	  		isLoading: false
	  	});
	  	updateNotification('blog_submission_fail');
	  });
	}

	handleTitleChange(e) {
    if (e === undefined) { return; }
    const title = e.target.value;
    const { blogForm, updateBlogForm } = this.props;
    updateBlogForm({
    	...blogForm,
    	title
    });
	}

	handleBodyChange(e) {
    if (e === undefined) { return; }
    const body = e.target.value;
    const { blogForm, updateBlogForm } = this.props;
    updateBlogForm({
    	...blogForm,
    	body
    });
	}

	handleThumbnailChange(e) {
    if (e === undefined) { return; }
    const thumbnail = e.target.value;
    const { blogForm, updateBlogForm } = this.props;
    updateBlogForm({
    	...blogForm,
    	thumbnail
    });
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
    const { blogForm, updateBlogForm } = this.props;
    updateBlogForm({
    	...blogForm,
    	filters
    });
	}

	renderFilterOptions() {
		const { filters } = this.props;
		console.log('filters: ', filters);
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
		const { type, blogId, blogForm } = this.props;
		const header = type === "new_blog_form" ? <h2>New Blog Form</h2> : <h2>Update Blog Form</h2>;
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
			<div>
				<Col xs={12} md={5}>
					{ header }
					<form>
				    <FormGroup controlId="formControlsText">
				      <ControlLabel>Title</ControlLabel>
				      <FormControl
				      	type="text"
		            value={blogForm.title}
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
		            value={ blogForm.thumbnail }
		            placeholder="Enter thumbnail URL"
		            onChange={ this.handleThumbnailChange }
				      />
				      <HelpBlock>Image resolution: 250x250</HelpBlock>
				    </FormGroup>

						<FormGroup controlId="formControlsSelectMultiple">
				      <ControlLabel>Filters</ControlLabel>
				      <FormControl
					      componentClass="select"
					      value={ blogForm.filters }
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
				      	value={ blogForm.body }
				      	placeholder={ textAreaPlaceholder }
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
    			<ReactMarkdown source={ blogForm.body } />
      	</Col>
			</div>
		)
	}
}

export default BlogForm;
