import React from 'react';
import {Grid, Col, Row} from 'react-bootstrap';

export default (props) => (
  <Grid>
    <Row className="show-grid">
      <Col sm={12} md={12}>
        <div>Contacts</div>
      </Col>
    </Row>
  </Grid>
);