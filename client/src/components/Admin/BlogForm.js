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
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleBodyChange = this.handleBodyChange.bind(this);
		this.handleTitleChange = this.handleTitleChange.bind(this);
		this.handleFilterChange = this.handleFilterChange.bind(this);
		this.handleThumbnailChange = this.handleThumbnailChange.bind(this);
		this.renderFilterOptions = this.renderFilterOptions.bind(this);
	}

	handleSubmit() {
		const { blogForm, type, updateNotification, newBlog, updateBlog } = this.props;
		const { title, thumbnail, filters, body, blogId, _id, author_date } = blogForm;
		if (title === '' || thumbnail === '' || filters === '' || body === '') {
			//TODO : LOADING false
			updateNotification('blog_submission_error');
			return;
		}
		const newBlogObj = {
				title,
				author_date,
				thumbnail,
				filters,
				body
			};
		const newBlogPost = type === 'new_blog_form' ? 
			{ ...newBlogObj, author_date: Date.now() } :
			{ ...newBlogObj, blogId, _id}
		updateNotification('')
		if (type === 'new_blog_form') newBlog(newBlogPost);
		if (type === 'update_blog_form') updateBlog(newBlogPost);
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
    const filters = Object.keys(e.target.options)
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
		if (filters != undefined) {
			return filters.map(filter => {
	      return (<option value={ filter }>
	      	{ capitalizeFirstLetter(filter) }
	      </option>)
			})
		}
	}

	render() {
		const { type, blogId, blogForm } = this.props;
		const header = type === "new_blog_form" ? <h2>New Blog Form</h2> : <h2>Update Blog Form</h2>;
		// const loading = this.state.isLoading ? <h1>LOADING</h1> : null;
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
		            value={ blogForm ? blogForm.title : '' }
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
		            value={ blogForm ? blogForm.thumbnail : '' }
		            placeholder="Enter thumbnail URL"
		            onChange={ this.handleThumbnailChange }
				      />
				      <HelpBlock>Image resolution: 250x250</HelpBlock>
				    </FormGroup>

						<FormGroup controlId="formControlsSelectMultiple">
				      <ControlLabel>Filters</ControlLabel>
				      <FormControl
					      componentClass="select"
					      value={ blogForm ? blogForm.filters : '' }
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
				      	value={ blogForm ? blogForm.body : '' }
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
    			<ReactMarkdown source={ blogForm ? blogForm.body : '' } />
      	</Col>
			</div>
		)
	}
}

export default BlogForm;
