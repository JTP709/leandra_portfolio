import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Row, Image } from 'react-bootstrap';
import { getPortfolios } from 'site-redux';
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
	};

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
			<Row id="portfolio_section">
					{ 
						portfolios.map(portfolio => (
							<Col md={4}>
								<Image 
									data-testid="portfolio-main-image"
									className="portfolio_thumbnail"
									alt="thumnail"
									src={ portfolio.thumbnail }
									responsive
									onClick={ ()=>{ this.openModal(portfolio._id) } }
								/>
							</Col>
						))
					}
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

const mapStateToProps = state => {
	const portfolios = getPortfolios(state);
	return {
		portfolios
	}
}

export { PortfolioMain };
export default connect(mapStateToProps)(PortfolioMain);