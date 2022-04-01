import React, { useState, Fragment } from 'react';
import {
    Row,
    Card,
    CardBody,
} from 'reactstrap';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import { adminRoot } from 'constants/defaultValues';
import Breadcrumb from 'containers/navs/Breadcrumb';
import churchnotes from 'assets/img/churchnotes.jpg'
import churchnotesqrcode from 'assets/img/churchnotesqrcode.png'
import { NavLink } from 'react-router-dom';
import UserManagement from './Usermanagement';


export const Admin = ({ match }) => {

    return (
        <>
            <Row>
                <Colxx xxs="12">
                    <Breadcrumb heading="Admin Panel" match={match} />
                    <div className="text-zero top-right-button-container">
                        <div className="user d-inline-block">

                        </div>
                    </div>
                    <Colxx xxs="12" className="mb-5">
                        <Card style={{ height: "250px" }}>
                            <img src={churchnotes} style={{ height: "250px", borderRadius: "15px", objectFit: "cover" }} ></img>
                        </Card>
                    </Colxx>
                    <div style={{ paddingLeft: "15px", paddingRight: "15px" }}>
                        <Row>
                            <Colxx xxs="12" lg="4" >
                                <Card style={{ borderRadius: "20px", boxShadow: "1px 3px 5px #9E9E9E" }}>
                                    <Row  >
                                        <Colxx lg="12" >
                                            <CardBody>
                                                <Row>
                                                    <Colxx>
                                                        <Colxx>
                                                            <h3>Current Plan</h3>
                                                        </Colxx>
                                                        <Colxx>
                                                            Premium 100
                                                        </Colxx>
                                                        <Colxx>
                                                            Active
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
                                                    <Colxx>
                                                        <Colxx>
                                                            <h3>Payment</h3>
                                                        </Colxx>
                                                        <Colxx>
                                                            Visa ending *0687
                                                        </Colxx>
                                                        <Colxx>
                                                            Next Billing Date: 03/03/2022
                                                        </Colxx>
                                                    </Colxx>
                                                </Row>
                                            </CardBody>
                                        </Colxx>
                                    </Row>
                                </Card >

                            </Colxx>
                            <Colxx xxs="12" lg="4">
                                <NavLink
                                    to={`${adminRoot}/Admin/Users`}
                                >
                                    <Card style={{ borderRadius: "20px", boxShadow: "1px 3px 5px #9E9E9E" }}>
                                        <Row  >
                                            <Colxx lg="12" >
                                                <CardBody>
                                                    <Row>
                                                        <Colxx>
                                                            <Colxx>
                                                                <h3>Users</h3>
                                                            </Colxx>
                                                            <Colxx>
                                                                Total Users
                                                            </Colxx>
                                                            <Colxx>
                                                                5
                                                            </Colxx>
                                                        </Colxx>
                                                    </Row>
                                                </CardBody>
                                            </Colxx>
                                        </Row>
                                    </Card >
                                </NavLink>
                            </Colxx>
                        </Row>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                        <Colxx xxs="12" lg="12" style={{ paddingTop: "40px", textAlign: "center", }}>
                            <Card style={{ borderRadius: "20px", boxShadow: "1px 3px 5px #9E9E9E", }}>
                                <Row  >
                                    <Colxx lg="12" >
                                        <CardBody>
                                            <Row>
                                                <Colxx>
                                                    <Colxx>
                                                        <h3>Church Name:</h3>
                                                    </Colxx>
                                                    <Colxx>
                                                        City Church
                                                        &nbsp;
                                                        &nbsp;
                                                        &nbsp;
                                                        <h3>https://citychurch.churchnotes.com</h3>
                                                        <img src={churchnotesqrcode} style={{ height: "150px", }} ></img>
                                                    </Colxx>

                                                </Colxx>


                                            </Row>
                                        </CardBody>
                                    </Colxx>
                                </Row>
                            </Card >
                        </Colxx>
                    </div>

                </Colxx>
            </Row>
        </>
    );
};
export default Admin;