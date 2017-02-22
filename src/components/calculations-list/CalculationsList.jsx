import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import CalculationsListView from './CalculationsListView';
import {changeNavKey} from '../../actions/actions.js';

export class CalculationsListContainer extends Component {

	static propTypes = {

	}

	constructor(props) {
		super(props);
	}

	changeKey(key) {
		this.props.onSelectItem(key);
	}

	render() {
		const {calculations, itemKey} = this.props;

		return (
			<CalculationsListView
				calculations={calculations}
				itemKey={itemKey}
				onSelectItem={this.changeKey.bind(this)} />
		);
	}

};

const mapStateToProps = (state) => ({
	calculations: state.calculations,
	itemKey: state.navStates.calculationsKey
});

const mapDispatchToProps = (dispatch) => ({
	onSelectItem: (key) => {
		dispatch(changeNavKey('calculationsKey', key));
	}
});

const CalculationsList = connect(
	mapStateToProps,
	mapDispatchToProps
)(CalculationsListContainer);

export default CalculationsList;
