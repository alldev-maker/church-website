import React, { useState, useEffect } from 'react';
import {
    Button, Label, FormGroup, Row, Card, CardBody, List, Collapse, Modal, ModalBody, ModalFooter, Input
} from 'reactstrap';
import ReactQuill from 'react-quill';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';
import sermonicon from 'assets/img/SemronIcon.png';
import { auth, db } from 'helpers/Firebase';
import { collection, getDocs } from "firebase/firestore"

import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';


const AllSermons = ({ match }) => {

    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, "SermonNotes")


    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };

        getUsers();
    }, []);

    return (
        <>
            <Row>
                <Colxx xxs="12">
                    <Breadcrumb heading="All Sermons" match={match} />
                    <Separator className="mb-5" />
                </Colxx>
            </Row>

            {users.map((user) => {
                return <div >
                    <List style={{
                        alignItems: 'space-between', flex: "1"
                    }} >
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
                                                        <h3>sds{user.sermonTitle}</h3>
                                                    </Colxx>
                                                    <Colxx>
                                                        {user.sermonDate}
                                                    </Colxx>
                                                </Colxx>
                                            </Row>
                                        </CardBody>
                                    </Colxx>
                                </Row>
                            </Card >
                        </Colxx>
                    </List>
                </div>;
            })}
            {/* <Card style={{ borderRadius: "20px", backgroundColor: "#f7f7f7", boxShadow: "1px 3px 10px #9E9E9E" }}>
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
                </CardBody></Card> */}
        </>
    );
};
export default AllSermons;
