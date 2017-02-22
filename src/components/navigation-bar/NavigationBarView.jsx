import React from 'react';
import {Navbar, Nav, NavItem, Badge} from 'react-bootstrap';
import {Link} from 'react-router';
import {LinkContainer} from 'react-router-bootstrap';

const NavigationBarView = (props) => {
  const {itemKey, itemRightKey, onSelectItem} = props;

  return (

    <Navbar inverse fixedTop collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/" onClick={(e) => {onSelectItem('navBarKey', itemKey + 1)}}>Time To Pay</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav navbar onSelect={(e) => {onSelectItem('navBarKey', itemKey + 1)}}>
          <LinkContainer to="/debtors">
            <NavItem eventKey={1}>Debtors</NavItem>
          </LinkContainer>
          <LinkContainer to="/calculations">
            <NavItem eventKey={2}>Calculations</NavItem>
          </LinkContainer>
          <LinkContainer to="/contacts">
            <NavItem eventKey={3}>Contacts</NavItem>
          </LinkContainer>
        </Nav>
        <Nav pullRight onSelect={(e) => {onSelectItem('navBarKey', itemKey + 1)}}>
          <LinkContainer to="/addcalculation">
            <NavItem eventKey={1}>Add Calculation</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBarView;
