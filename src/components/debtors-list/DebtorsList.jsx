import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import DebtorsListView from './DebtorsListView';
import { changeNavKey } from '../../actions/actions.js';
import { joinArrays } from '../../Utils.js';

export class DebtorsListContainer extends Component {

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
        const {debtors} = this.props;

        return (
            <DebtorsListView
                debtors={debtors}
                itemKey={this.state.itemKey}
                onSelectItem={this.changeKey.bind(this)} />
        );
    }
};

const mapStateToProps = (state) => ({
    debtors: joinArrays(state.debtors, state.contacts, 'contactRef', 'id')
});

const mapDispatchToProps = (dispatch) => ({});

const DebtorsList = connect(
    mapStateToProps,
    mapDispatchToProps
)(DebtorsListContainer);

export default DebtorsList;
