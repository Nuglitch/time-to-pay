import React from 'react';
import {Grid, Col, Row} from 'react-bootstrap';
import DebtorsList from '../debtors-list/DebtorsList.jsx'

export default (props) => (
  <Grid>
    <Row className="show-grid">
      <Col sm={3} md={3}>
      </Col>
      <Col sm={6} md={6}>
        <DebtorsList></DebtorsList>
      </Col>
      <Col sm={3} md={3}>
      </Col>
    </Row>
  </Grid>
);