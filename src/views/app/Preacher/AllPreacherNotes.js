import React, { useState, useEffect } from 'react';
import { db, } from "helpers/Firebase";

import { onSnapshot, collection, addDoc, setDoc, updateDoc, doc, deleteDoc, serverTimestamp, query, orderBy } from "firebase/firestore";
import {
    Button, UncontrolledDropdown,
    DropdownItem,
    DropdownToggle,
    DropdownMenu, Label, FormGroup, Row, Card, CardBody, List, Collapse, Modal, ModalBody, ModalFooter, Input
} from 'reactstrap';
import ReactQuill from 'react-quill';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';
import sermonicon from 'assets/img/SemronIcon.png';
import { NavLink } from 'react-router-dom';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';


const AllPreacherNotes = ({ match }) => {

    return (
        <>
            <Row>
                <Colxx xxs="12">
                    <div className="text-zero top-right-button-container">
                        <div className="user d-inline-block">
                            <UncontrolledDropdown className="dropdown-menu-right">
                                <DropdownToggle className="p-0" color="empty">
                                    <Button color="primary" size="lg" className="top-right-button" style={{ fontSize: "15px", }}  >
                                        <AddCircleOutlineIcon />
                                        &nbsp;
                                        &nbsp;
                                        New Note
                                    </Button>
                                </DropdownToggle>
                                <DropdownMenu className="mt-3" right style={{ borderRadius: "30px", textAlign: "center", fontWeight: "bold", boxShadow: "1px 1px 10px #AEB7C4", }}>
                                    <NavLink to="/App/NewSermon">
                                        <DropdownItem style={{ fontSize: "20px", borderRadius: "30px", }} >
                                            Sermon
                                        </DropdownItem>
                                    </NavLink>

                                    <NavLink to="/App/SOAP/Scripture">
                                        <DropdownItem style={{ fontSize: "20px", borderRadius: "30px", }}  >
                                            SOAP Devotion
                                        </DropdownItem>
                                    </NavLink>

                                    <NavLink to="/App/Personal/Scripture">
                                        <DropdownItem style={{ fontSize: "20px", borderRadius: "30px", }}  >
                                            Personal Devotion
                                        </DropdownItem>
                                    </NavLink>
                                    <NavLink to="/App/Preacher/Sermon">
                                        <DropdownItem style={{ fontSize: "20px", borderRadius: "30px", }}  >
                                            Preacher Notes
                                        </DropdownItem>
                                    </NavLink>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </div>
                    </div>
                    <Breadcrumb heading="Preacher Notes" match={match} />
                    <div style={{ paddingBottom: "20px" }} />
                    <Separator className="mb-5" />

                </Colxx>
            </Row>
            <div style={{ paddingTop: "5px" }}>
                <Card style={{ borderRadius: "20px", backgroundColor: "#f7f7f7", boxShadow: "1px 3px 10px #9E9E9E", }}>
                    <CardBody>
                        <Row className="mb-4">
                            <Colxx xxs="12" lg="4">
                                <Card style={{ borderRadius: "20px", boxShadow: "1px 3px 5px #9E9E9E", }}>
                                    <Row  >
                                        <Colxx lg="12" >
                                            <CardBody>
                                                <Row>
                                                    <img
                                                        style={{ borderRadius: 10, width: '55px' }}
                                                        alt="image"
                                                        src={sermonicon}
                                                    />
                                                    <Colxx>
                                                        <Colxx>
                                                            <h3>Sermon Name</h3>
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
                            <Colxx xxs="12" lg="4">
                                <Card style={{ borderRadius: "20px", boxShadow: "1px 3px 5px #9E9E9E" }}>
                                    <Row  >
                                        <Colxx lg="12" >
                                            <CardBody>
                                                <Row>
                                                    <img
                                                        style={{ borderRadius: 10, width: '55px' }}
                                                        alt="image"
                                                        src={sermonicon}
                                                    />
                                                    <Colxx>
                                                        <Colxx>
                                                            <h3>Sermon Name</h3>
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
                            <Colxx xxs="12" lg="4">
                                <Card style={{ borderRadius: "20px", boxShadow: "1px 3px 5px #9E9E9E" }}>
                                    <Row  >
                                        <Colxx lg="12" >
                                            <CardBody>
                                                <Row>
                                                    <img
                                                        style={{ borderRadius: 10, width: '55px' }}
                                                        alt="image"
                                                        src={sermonicon}
                                                    />
                                                    <Colxx>
                                                        <Colxx>
                                                            <h3>Sermon Name</h3>
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
                                                        src={sermonicon}
                                                    />
                                                    <Colxx>
                                                        <Colxx>
                                                            <h3>Sermon Name</h3>
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
                                                        src={sermonicon}
                                                    />
                                                    <Colxx>
                                                        <Colxx>
                                                            <h3>Sermon Name</h3>
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
                                                        src={sermonicon}
                                                    />
                                                    <Colxx>
                                                        <Colxx>
                                                            <h3>Sermon Name</h3>
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
            </div>
        </>
    );
};
export default AllPreacherNotes;
