import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const CalculationsListView = (props) => {
  const {calculations, onSelectItem, itemKey} = props;

  return (
    <ListGroup>
      {calculations.map((calc) => (
        <LinkContainer to={`/calculations/calc/${calc.id}`} >
          <ListGroupItem onClick={(e) => { onSelectItem(calc.id) }} active={itemKey === calc.id}>
            {calc.name}
          </ListGroupItem>
        </LinkContainer>))
      }
    </ListGroup>


  );
};

export default CalculationsListView;
