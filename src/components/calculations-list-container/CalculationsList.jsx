import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import CalculationsListContainerView from './CalculationsListContainerView'

export class CalculationsListContainer extends Component {

	static propTypes = {

	}

	constructor(props) {
		super(props);
	}



	render() {
		const {calculations} = this.props;

		return (
			<CalculationsListContainerView
				calculations={calculations} />
		);
	}

};

const mapStateToProps = (state) => ({
	calculations: state.calculations
});

const mapDispatchToProps = (dispatch) => ({

});

const CalculationsList = connect(
	mapStateToProps,
	mapDispatchToProps
)(CalculationsListContainer);

export default CalculationsList;
