import React, { useState, useEffect } from 'react';
import { db, } from "helpers/Firebase";

import { onSnapshot, collection, addDoc, setDoc, updateDoc, doc, deleteDoc, serverTimestamp, query, orderBy } from "firebase/firestore";
import {
    Button, Label, FormGroup, Row, Card, CardBody, List, Collapse, Modal, ModalBody, ModalFooter, Input
} from 'reactstrap';
import ReactQuill from 'react-quill';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';
import IntlMessages from 'helpers/IntlMessages';
import devotionicon from 'assets/img/DevotionIcon.png';


import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';


const AllDevotions = ({ match }) => {




    return (
        <>
            <Row>
                <Colxx xxs="12">
                    <Breadcrumb heading="All Devotions" match={match} />
                    <Separator className="mb-5" />
                </Colxx>
            </Row>

            <Card style={{ borderRadius: "20px", backgroundColor: "#f7f7f7", boxShadow: "1px 3px 10px #9E9E9E" }}>
                <CardBody>
                    <Row className="mb-4">
                        <Colxx xxs="12" lg="4" style={{ paddingTop: "30px" }}>
                            <Card style={{ borderRadius: "20px", boxShadow: "1px 3px 5px #9E9E9E", }}>
                                <Row  >
                                    <Colxx lg="12" >
                                        <CardBody>
                                            <Row>
                                                <img
                                                    style={{ borderRadius: 10, width: '55px' }}
                                                    alt="image"
                                                    src={devotionicon}
                                                />
                                                <Colxx>
                                                    <Colxx>
                                                        <h3>Devotion Name</h3>
                                                    </Colxx>
                                                    <Colxx>
                                                        Date
                                                    </Colxx>
                                                </Colxx>
                                            </Row>
                                        </CardBody>
                                    </Colxx>
                                </Row>
                            </Card >
                        </Colxx>
                        <Colxx xxs="12" lg="4" style={{ paddingTop: "30px" }}>
                            <Card style={{ borderRadius: "20px", boxShadow: "1px 3px 5px #9E9E9E" }}>
                                <Row  >
                                    <Colxx lg="12" >
                                        <CardBody>
                                            <Row>
                                                <img
                                                    style={{ borderRadius: 10, width: '55px' }}
                                                    alt="image"
                                                    src={devotionicon}
                                                />
                                                <Colxx>
                                                    <Colxx>
                                                        <h3>Devotion Name</h3>
                                                    </Colxx>
                                                    <Colxx>
                                                        Date
                                                    </Colxx>
                                                </Colxx>
                                            </Row>
                                        </CardBody>
                                    </Colxx>
                                </Row>
                            </Card >
                        </Colxx>
                        <Colxx xxs="12" lg="4" style={{ paddingTop: "30px" }}>
                            <Card style={{ borderRadius: "20px", boxShadow: "1px 3px 5px #9E9E9E" }}>
                                <Row  >
                                    <Colxx lg="12" >
                                        <CardBody>
                                            <Row>
                                                <img
                                                    style={{ borderRadius: 10, width: '55px' }}
                                                    alt="image"
                                                    src={devotionicon}
                                                />
                                                <Colxx>
                                                    <Colxx>
                                                        <h3>Devotion Name</h3>
                                                    </Colxx>
                                                    <Colxx>
                                                        Date
                                                    </Colxx>
                                                </Colxx>
                                            </Row>
                                        </CardBody>
                                    </Colxx>
                                </Row>
                            </Card >
                        </Colxx>
                        <Colxx xxs="12" lg="4" style={{ paddingTop: "30px" }}>
                            <Card style={{ borderRadius: "20px", boxShadow: "1px 3px 5px #9E9E9E", }}>
                                <Row  >
                                    <Colxx lg="12" >
                                        <CardBody>
                                            <Row>
                                                <img
                                                    style={{ borderRadius: 10, width: '55px' }}
                                                    alt="image"
                                                    src={devotionicon}
                                                />
                                                <Colxx>
                                                    <Colxx>
                                                        <h3>Devotion Name</h3>
                                                    </Colxx>
                                                    <Colxx>
                                                        Date
                                                    </Colxx>
                                                </Colxx>
                                            </Row>
                                        </CardBody>
                                    </Colxx>
                                </Row>
                            </Card >
                        </Colxx>
                        <Colxx xxs="12" lg="4" style={{ paddingTop: "30px" }}>
                            <Card style={{ borderRadius: "20px", boxShadow: "1px 3px 5px #9E9E9E" }}>
                                <Row  >
                                    <Colxx lg="12" >
                                        <CardBody>
                                            <Row>
                                                <img
                                                    style={{ borderRadius: 10, width: '55px' }}
                                                    alt="image"
                                                    src={devotionicon}
                                                />
                                                <Colxx>
                                                    <Colxx>
                                                        <h3>Devotion Name</h3>
                                                    </Colxx>
                                                    <Colxx>
                                                        Date
                                                    </Colxx>
                                                </Colxx>
                                            </Row>
                                        </CardBody>
                                    </Colxx>
                                </Row>
                            </Card >
                        </Colxx>
                        <Colxx xxs="12" lg="4" style={{ paddingTop: "30px" }}>
                            <Card style={{ borderRadius: "20px", boxShadow: "1px 3px 5px #9E9E9E", }}>
                                <Row  >
                                    <Colxx lg="12" >
                                        <CardBody>
                                            <Row>
                                                <img
                                                    style={{ borderRadius: 10, width: '55px' }}
                                                    alt="image"
                                                    src={devotionicon}
                                                />
                                                <Colxx>
                                                    <Colxx>
                                                        <h3>Devotion Name</h3>
                                                    </Colxx>
                                                    <Colxx>
                                                        Date
                                                    </Colxx>
                                                </Colxx>
                                            </Row>
                                        </CardBody>
                                    </Colxx>
                                </Row>
                            </Card >
                        </Colxx>

                    </Row>
                </CardBody></Card>

        </>
    );
};
export default AllDevotions;
