import React from "react";
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

function Detail() {
    return (<div className={"container"}>
        {/*<Row>*/}
        {/*    <Col>1 of 1</Col>*/}
        {/*    <Col>1 of 1</Col>*/}
        {/*    <Col*/}
        {/*        sm={12}*/}
        {/*        className='d-lg-none d-md-none d-xl-none d-xxl-none'*/}
        {/*        style={{backgroundColor: 'red'}}>*/}
        {/*        <Row>*/}
        {/*            <span>12 of mobile</span>.*/}
        {/*        </Row>*/}
        {/*    </Col>*/}
        {/*</Row>*/}
        {/*<Row>*/}
        {/*    <Col>1 of 3</Col>*/}
        {/*    <Col xs={6}>2 of 3 (wider)</Col>*/}
        {/*    <Col>3 of 3</Col>*/}
        {/*</Row>*/}
        {/*<Row>*/}
        {/*    /!*<Col>1 of 3</Col>*!/*/}
        {/*    /!*<Col xs={5} xl={2}>2 of 3 (wider)</Col>*!/*/}
        {/*    /!*<Col>3 of 3</Col>*!/*/}
        {/*    <Col xs lg="2" className="bg-dark">*/}
        {/*        3 of 3*/}
        {/*    </Col>*/}
        {/*    <Col xs={1} lg="2" className="bg-info">*/}
        {/*        3 of 3*/}
        {/*    </Col>*/}
        {/*</Row>*/}

        <div className="row">
            <div className="col">
                Column
            </div>
            <div className="col">
                Column
            </div>
            <div className="col">
                Column
            </div>
        </div>
    </div>)
}

export default Detail;
