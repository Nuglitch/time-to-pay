import React from 'react';
import {Grid, Col, Row} from 'react-bootstrap';
import DebtorsList from '../debtors-list/DebtorsList.jsx'

export default (props) => (
  <Grid>
    <Row className="show-grid">
      <Col sm={6} md={6} mdOffset={3}>
        <DebtorsList></DebtorsList>
      </Col>
    </Row>
  </Grid>
);