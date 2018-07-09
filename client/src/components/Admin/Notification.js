import React from 'react';

const Notification = ({ notification }) => {
	switch(notification) {
		case 'blog_submission_successful':
			return <h3>Blog Summitted!</h3>
		case 'blog_submission_fail':
			return <h3>Blog Sumission Failed</h3>
		case 'blog_submission_error':
			return <h3>You forgot one of the fields</h3>
		case 'blog_update_successful':
			return <h3>Blog Updated!</h3>
		case 'blog_update_fail':
			return <h3>Blog Update Failed</h3>
		case 'blog_deletion_successful':
			return <h3>Blog Deleted</h3>
		case 'blog_deletion_fail':
			return <h3>Blog Deletion Failed</h3>
		default:
			return null
	}
}

export default Notification;
