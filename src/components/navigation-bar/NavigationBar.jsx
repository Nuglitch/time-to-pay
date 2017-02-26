import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import NavigationBarView from './NavigationBarView';
import { changeNavKey } from '../../actions/actions.js';

export class NavigationBarContainer extends Component {

	static propTypes = {

	}

	constructor(props) {
		super(props);
	}

	changeKey(prop, key) {
		this.props.onSelectItem(prop, key);
	}



	render() {
		const {itemKey, itemRightKey} = this.props;

		return (
			<NavigationBarView
				itemKey={itemKey}
				itemRightKey={itemRightKey}
				onSelectItem={this.changeKey.bind(this)} />
		);
	}

};

const mapStateToProps = (state) => ({
	itemKey: state.navStates.navBarKey,
	itemRightKey: state.navStates.navBarRightKey
});

const mapDispatchToProps = (dispatch) => ({
	onSelectItem: (prop, key) => {
		dispatch(changeNavKey(prop, key));
	}
});

const NavigationBar = connect(
	mapStateToProps,
	mapDispatchToProps
)(NavigationBarContainer);

export default NavigationBar;
