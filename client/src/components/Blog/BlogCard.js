import React from 'react';
import { Image, Row, Col } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import { formatDate } from '../../utils/utils';
import '../../styles/Work.css';

const BlogCard =({ 
	blogCardContentClass,
	blogCardClass,
	position,
	openModal,
	blog
}) =>{

	const { title, author_date, thumbnail, body } = blog;
	const dateObject = new Date(author_date);
	const blurb = `${body.slice(0,450)}...`;
	const imageElement = (
		<Col xs={12} md={3} key={ 1 }>
			<Image src={ thumbnail } alt="Blog Picture" responsive circle />
		</Col>
	)
	const contentElement = (
		<Col xs={12} md={9} className={ blogCardContentClass } key = { 2 }>
			<h2>{ title }</h2>
			<h4>{ formatDate(dateObject) }</h4>
			<ReactMarkdown source={ blurb } />
		</Col>
	)
	return (
		<Row onClick={ ()=>{ openModal(blog) } } className={ blogCardClass }>
			{
				position === "left" ? 
					[imageElement, contentElement] : 
					[contentElement, imageElement]
			}
		</Row>
	)
};


export default BlogCard;
