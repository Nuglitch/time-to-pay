import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ContactsListView from './ContactsListView';
import { changeNavKey } from '../../actions/actions.js';
import { joinArrays } from '../../Utils.js';

export class ContactsListContainer extends Component {

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
        const {contacts} = this.props;

        return (
            <ContactsListView
                contacts={contacts}
                itemKey={this.state.itemKey}
                onSelectItem={this.changeKey.bind(this)} />
        );
    }
};

const mapStateToProps = (state) => ({
    contacts: state.contacts
});

const mapDispatchToProps = (dispatch) => ({});

const ContactsList = connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactsListContainer);

export default ContactsList;
