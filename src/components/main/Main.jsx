import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import NavigationBar from '../navigation-bar/NavigationBar';
import {Jumbotron} from 'react-bootstrap';

export class MainContainer extends Component {

	static propTypes = {

	}

	constructor(props) {
		super(props);
	}



	render() {

		return (
      <div>
				<NavigationBar />
				<Jumbotron>
					<h1>Time To Pay</h1>
					<p>This is a simple web app where you can manage your debts.</p>
				</Jumbotron>
        <div>
  			     {this.props.children}
        </div>
      </div>
		);
	}

};

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({

});

const Main = connect(
	mapStateToProps,
	mapDispatchToProps
)(MainContainer);

export default Main;
