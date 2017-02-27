import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const ContactsListView = (props) => {
  const {contacts, onSelectItem, itemKey} = props;

  return (
    <ListGroup>
      {contacts.map((contact) => (
          <ListGroupItem onClick={(e) => { onSelectItem(contact.id) }} active={itemKey === contact.id}>
              <div>{contact.name} 
              </div>            
          </ListGroupItem>))
      }
    </ListGroup>


  );
};

export default ContactsListView;
