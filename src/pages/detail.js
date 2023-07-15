import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Detail() {
    return (<Container>
        <Row>
            <Col>1 of 1</Col>

            <Col>1 of 1</Col>

            <Col
                sm={12}
                className='d-lg-none d-md-none d-xl-none d-xxl-none'
                style={{backgroundColor: 'red'}}>
                <Row>
                    <span>12 of mobile</span>.
                </Row>
                <Row>
                    <span>12 of mobile</span>.
                </Row>
            </Col>
        </Row>
    </Container>)
}

export default Detail;
