import React, { useState } from 'react';
import { Row, Card, CardBody, Form, Button } from 'reactstrap';
import ReactQuill from 'react-quill';
import { addDoc, collection } from "firebase/firestore";
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';
import { NavLink } from 'react-router-dom';
import { db, auth } from "helpers/Firebase";
import date from 'date-and-time';
import { useHistory } from "react-router-dom";
import { NotificationManager } from 'components/common/react-notifications';

import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';

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

const personalDevotion = ({ match, }) => {
    const [textQuillStandart, setTextQuillStandart] = useState('');
    const [textQuillBubble, setTextQuillBubble] = useState('');
    const [personalScripture, setPersonalScripture] = useState("");
    const [personalDevotion, setPersonalDevotion] = useState("");


    const now = new Date();
    const todaysdate = date.format(now, 'dddd, MMMM DD, YYYY');
    const todaysdatetime = date.format(now, 'DD MMM YYYY HH:mm:ss A ');


    const [loader, setLoader] = useState(false);

    const postsCollectionRef = collection(db, "personalDevotionalNotes");
    const docid = db.collection('personalDevotionalNotes').doc().id

    let history = useHistory();

    const createPersonalNote = async () => {
        setLoader(true);
        await addDoc(postsCollectionRef, {
            personalScripture,
            personalDevotion,
            dataid: docid,
            date: todaysdatetime,
            dateTime: todaysdate,
            uid: auth.currentUser.uid,
        });
        NotificationManager.primary("Note Saved", "Success")
        history.push('/app/home');
    };

    return (
        <>
            <Row>
                <Colxx xxs="12">
                    {/* <div className="text-zero top-right-button-container">
                        <NavLink to="/app" className="white">
                            <Button color="primary" size="lg"
                            >Save</Button>
                        </NavLink>
                    </div> */}

                    <Breadcrumb heading="New Devotion" match={match} />
                    <Separator className="mb-5" />
                    {/* <div style={{
                        margin: "auto",
                        width: "10%",
                    }}>
                        <Box sx={{ maxWidth: 120 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Bible</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={translation}
                                    label="NIV"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={10}>NIV</MenuItem>
                                    <MenuItem value={20}>NKJV</MenuItem>
                                    <MenuItem value={30}>ESV</MenuItem>
                                    <MenuItem value={40}>KJV</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </div> */}

                </Colxx>
            </Row>
            <Row className="mb-4">

                <Colxx xxs="12">
                    <Row>
                        <Colxx xxs="12">
                            <div className="text-zero top-right-button-container">
                                <Button type="submit" onClick={createPersonalNote} color="primary">Save</Button>
                            </div>
                            {todaysdate}
                        </Colxx>
                    </Row>
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    <Card style={{ borderRadius: "30px" }}><CardBody>
                        <h3 style={{ fontWeight: "bold" }}>Scripture</h3>
                        <h6>Type in a scripture below and tap space</h6>
                        <ReactQuill
                            style={{ height: "200px" }}
                            theme="bubble"
                            value={personalScripture}
                            onChange={setPersonalScripture}
                            modules={quillModules}
                            formats={quillFormats}
                        />
                    </CardBody>
                    </Card>
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    <Card style={{ borderRadius: "30px" }}><CardBody>
                        <h3 style={{ fontWeight: "bold" }
                        } > Devotion</h3>
                        <ReactQuill
                            style={{ height: "500px" }}
                            theme="bubble"
                            value={personalDevotion}
                            onChange={setPersonalDevotion}
                            modules={quillModules}
                            formats={quillFormats}
                        />
                    </CardBody>
                    </Card>


                </Colxx>
            </Row>
        </>
    );
};
export default personalDevotion;
