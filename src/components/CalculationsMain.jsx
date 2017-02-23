import React from 'react';
import {Grid, Col, Row} from 'react-bootstrap';
import CalculationsList from './calculations-list/CalculationsList.jsx'

export default (props) => (
  <Grid>
    <Row className="show-grid">
      <Col sm={4} md={4}>
        <CalculationsList></CalculationsList>
      </Col>
      <Col sm={8} md={8}>
        {props.children}
      </Col>
    </Row>
  </Grid>
);
