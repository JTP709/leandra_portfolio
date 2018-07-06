import React from 'react';

const Notification = ({ notification }) => {
	if(notification === 'blog_submission_successful'){
		return <h3>Blog Summitted!</h3>
	} else if(notification === 'blog_submission_fail'){
		return <h3>Blog Sumission Failed</h3>
	} else if (notification === 'blog_submission_error') {
		return <h3>You forgot one of the fields</h3>
	} else {
		return null;
	}
}

export default Notification;
