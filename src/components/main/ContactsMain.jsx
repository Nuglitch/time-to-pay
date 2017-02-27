import React from 'react';
import {Grid, Col, Row} from 'react-bootstrap';
import ContactsList from '../contacts-list/ContactsList.jsx'

export default (props) => (
  <Grid>
    <Row className="show-grid">
      <Col sm={6} md={6} mdOffset={3}>
        <ContactsList></ContactsList>
      </Col>
    </Row>
  </Grid>
);