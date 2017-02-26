import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import CalculationsListView from './CalculationsListView';
import { changeNavKey } from '../../actions/actions.js';

export class CalculationsListContainer extends Component {

	static propTypes = {

	}

	constructor(props) {
		super(props);
		this.state = { itemKey: 0 };
	}

	changeKey(key) {
		this.setState({
      		itemKey: key
    	});
	}

	render() {
		const {calculations} = this.props;

		return (
			<CalculationsListView
				calculations={calculations}
				itemKey={this.state.itemKey}
				onSelectItem={this.changeKey.bind(this)} />
		);
	}
};

const mapStateToProps = (state) => ({
	calculations: state.calculations
});

const mapDispatchToProps = (dispatch) => ({});

const CalculationsList = connect(
	mapStateToProps,
	mapDispatchToProps
)(CalculationsListContainer);

export default CalculationsList;
