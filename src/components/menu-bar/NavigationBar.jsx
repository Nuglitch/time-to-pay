import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import MenuBarView from './MenuBarView'

export class MenuBarContainer extends Component {

	static propTypes = {

	}

	constructor(props) {
		super(props);
	}



	render() {

		return (
			<MenuBarView/>
		);
	}

};

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({

});

const MenuBar = connect(
	mapStateToProps,
	mapDispatchToProps
)(MenuBarContainer);

export default MenuBar;
