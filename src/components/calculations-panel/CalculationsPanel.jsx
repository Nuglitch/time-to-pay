import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

export class CalculationsPanelContainer extends Component {

	static propTypes = {

	}

	constructor(props) {
		super(props);
	}



	render() {

		return (
			<a>{this.props.params.id}</a>
		);
	}

};

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({

});

const CalculationsPanel = connect(
	mapStateToProps,
	mapDispatchToProps
)(CalculationsPanelContainer);

export default CalculationsPanel;
