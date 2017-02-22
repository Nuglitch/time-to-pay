import React from 'react';
import {ButtonGroup, Button} from 'react-bootstrap';

const MenuBarView = (props) => {
  const {calculations} = props;

  return (
    <ButtonGroup>
      <Button href="/">Debtors</Button>
      <Button href="/calculations">Calculations</Button>
      <Button href="/contacts">Contacts</Button>
    </ButtonGroup>
  );
};

export default MenuBarView;
