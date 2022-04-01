import React, { useState } from 'react';
import {
    Row, Card, CardBody, Form, Input, UncontrolledDropdown,
    DropdownItem,
    DropdownToggle,
    DropdownMenu, Button
} from 'reactstrap';
import ReactQuill from 'react-quill';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import IntlMessages from 'helpers/IntlMessages';
import { NavLink } from 'react-router-dom';
import Breadcrumb from 'containers/navs/Breadcrumb';

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';
import { borderBottom } from '@mui/system';


const quillModules = {
    toolbar: [
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [
            { list: 'ordered' },
            { list: 'bullet' },
            { indent: '-1' },
            { indent: '+1' },
        ],
        ['clean'],
    ],
};

const quillFormats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
];

const PreacherSermon = ({ match }) => {
    const [textQuillStandart, setTextQuillStandart] = useState('');
    const [textQuillBubble, setTextQuillBubble] = useState('');


    return (

        <>
            <Row>
                <Colxx xxs="12">
                    <div className="text-zero top-right-button-container">
                        <div className="user d-inline-block">
                            <Row>
                                <Button color="primary" size="xxs" className="top-right-button" style={{ fontSize: "13px", width: "100px", height: "40px" }}  >
                                    Save
                                </Button>
                                &nbsp;
                                &nbsp;
                                <UncontrolledDropdown className="dropdown-menu-right">
                                    <DropdownToggle className="p-0" color="empty">
                                        <Button color="primary" size="xxs" className="top-right-button" style={{ fontSize: "13px", width: "100px", height: "40px" }}  >
                                            Publish
                                        </Button>
                                    </DropdownToggle>
                                    <DropdownMenu className="mt-3" right style={{ borderRadius: "30px", textAlign: "center", fontWeight: "bold", boxShadow: "1px 1px 10px #AEB7C4", }}>
                                        <DropdownItem style={{ fontSize: "20px", borderRadius: "30px", }} >
                                            Publish Now
                                        </DropdownItem>

                                        <DropdownItem style={{ fontSize: "20px", borderRadius: "30px", }}  >
                                            Schedule
                                        </DropdownItem>

                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </Row>
                        </div>
                    </div>

                </Colxx>
            </Row>
            <Row className="mb-4">
                <Colxx xxs="12">

                    <Form style={{
                        border: "none",
                        borderBottom: "10px solid white"
                    }}>
                        <Input placeholder='Sermon Title' style={{ border: 'none', backgroundColor: "white", height: "60px", fontSize: "30px" }}></Input>
                        <Input placeholder='Preacher' style={{ border: 'none', height: "40px", backgroundColor: "white", fontSize: "20px" }}></Input>
                        &nbsp;
                        &nbsp;
                        <ReactQuill
                            theme="snow"
                            style={{ height: "500px" }}
                            value={textQuillStandart}
                            onChange={(val) => setTextQuillStandart(val)}
                            modules={quillModules}
                            formats={quillFormats}
                        />
                    </Form>

                </Colxx>
            </Row>
        </>
    );
};
export default PreacherSermon;
