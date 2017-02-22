import React from 'react';
import {Nav, NavItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

const CalculationsListView = (props) => {
  const {calculations, onSelectItem, itemKey} = props;
  var i = 0;

  return (
    <Nav bsStyle="pills" stacked onSelect={(e) => {onSelectItem('calculationsKey', e)}} activeKey={itemKey}>
      {calculations.map((calc) => {
        i++;
        return (
          <LinkContainer to={`/calculations/calc/${calc.id}`}>
            <NavItem eventKey={i}>
              {calc.name}
            </NavItem>
          </LinkContainer>)})
      }
    </Nav>
  );
};

export default CalculationsListView;
