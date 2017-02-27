import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const DebtorsListView = (props) => {
  const {debtors, onSelectItem, itemKey} = props;

  return (
    <ListGroup>
      {debtors.map((debt) => (
          <ListGroupItem onClick={(e) => { onSelectItem(debt.id) }} active={itemKey === debt.id}>
              <div>{debt.name}
                <span>{debt.value}</span>  
              </div>            
          </ListGroupItem>))
      }
    </ListGroup>


  );
};

export default DebtorsListView;
