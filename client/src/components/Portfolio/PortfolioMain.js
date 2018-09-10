import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Row, Image } from 'react-bootstrap';
import { getPortfolios, getScrollToRef } from 'site-redux';
import PortfolioModal from './PortfolioModal';
import '../../styles/portfolio/PortfolioMain.css';

class PortfolioMain extends Component{
	constructor(){
		super();
		this.state = {
			showModal: false,
			portfolioId: null
		}
		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.ref = React.createRef();
	};

	componentDidMount(){
		this.props.scrollToRef === 'PORTFOLIO' && window.scrollTo(0, this.ref);
	}

	openModal(id){
		this.setState({
			showModal: true,
			portfolioId: id
		});
	};

	closeModal(){
		this.setState({
			showModal: false,
			portfolioId: null
		});
	};

	render(){
		const { portfolios } = this.props;
		return(
			<Row className='Portfolio' id='portfolio' ref={ this.ref } >
				<Col xs={12} className='Portfolio--header'>
					<h1>Portfolio</h1>
					<hr />
				</Col>
				<Col xs={12}>
					{ 
						portfolios.map(portfolio => (
							<div className='PortfolioMain--thumbnail'>
								<Image 
									data-testid="portfolio-main-image"
									className="portfolio_thumbnail"
									alt="thumnail"
									src={ portfolio.thumbnail }
									responsive
									onClick={ ()=>{ this.openModal(portfolio._id) } }
								/>
							</div>
						))
					}
				</Col>
				<Col xs={ 12 }><hr /></Col>
				<PortfolioModal
					portfolio={ portfolios.filter(portfolio => portfolio._id === this.state.portfolioId)[0] }
					closeModal={ this.closeModal }
					showModal={ this.state.showModal }
				/>
			</Row>
		)
	}
}

const mapStateToProps = state => ({
	portfolios: getPortfolios(state),
	scrollToRef: getScrollToRef(state)
})

export { PortfolioMain };
export default connect(mapStateToProps)(PortfolioMain);
