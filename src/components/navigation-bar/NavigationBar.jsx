import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import NavigationBarView from './NavigationBarView'

export class NavigationBarContainer extends Component {

	static propTypes = {

	}

	constructor(props) {
		super(props);
	}



	render() {

		return (
			<NavigationBarView/>
		);
	}

};

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({

});

const NavigationBar = connect(
	mapStateToProps,
	mapDispatchToProps
)(NavigationBarContainer);

export default NavigationBar;
