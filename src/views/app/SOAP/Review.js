import React, { useState } from 'react';
import { Row, Card, CardBody, Form, Button } from 'reactstrap';
import ReactQuill from 'react-quill';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';
import { NavLink } from 'react-router-dom';
import date from 'date-and-time';

const soapReview = ({ match }) => {

    const now = new Date();
    const todaysdate = date.format(now, 'dddd, MMMM DD, YYYY');

    return (
        <>
            <Row>
                <Colxx xxs="12">
                    <div className="text-zero top-right-button-container">
                        <Button color="primary">Edit</Button>
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        <Button color="primary">Delete</Button>
                    </div>
                    <Breadcrumb heading="New S.O.A.P" match={match} />
                    <Separator className="mb-5" />
                    {todaysdate}
                </Colxx>
            </Row>
            <Row className="mb-4">
                <Colxx xxs="12">
                    <Form>
                        <h3 style={{ fontWeight: "bold" }}>Scripture</h3>
                        <Card>
                            <CardBody>
                                <h3 >John 3:16</h3>
                                <h3>For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.</h3>
                            </CardBody>
                        </Card>
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        <h3 style={{ fontWeight: "bold" }}>Observation</h3>
                        <Card>
                            <CardBody>
                                <h3 >This is the observation</h3>
                                <h3>For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.</h3>
                            </CardBody>
                        </Card>
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        <h3 style={{ fontWeight: "bold" }}>Application</h3>
                        <Card>
                            <CardBody>
                                <h3 >This is the application</h3>
                                <h3>For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.</h3>
                            </CardBody>
                        </Card>
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        <h3 style={{ fontWeight: "bold" }}>Prayer</h3>
                        <Card>
                            <CardBody>
                                <h3 >This is the prayer</h3>
                                <h3>For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.</h3>
                            </CardBody>
                        </Card>
                        &nbsp;
                        &nbsp;
                        &nbsp;
                    </Form>
                </Colxx>
            </Row>
        </>
    );
};
export default soapReview;
