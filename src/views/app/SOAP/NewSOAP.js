import React, { useState } from 'react';
import { Row, Card, CardBody, Form, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import ReactQuill from 'react-quill';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';
import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';
import date from 'date-and-time';
import { db, auth } from "helpers/Firebase";
import { useHistory } from "react-router-dom";
import { NotificationManager } from 'components/common/react-notifications';
import { addDoc, collection } from "firebase/firestore";


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

const soap = ({ match, props }) => {
    const [scriptureLabel, setScriptureLabel] = useState("");
    const [scriptureBookLabel, setScriptureBookLabel] = useState("");
    const [applicationLabel, setApplicationLabel] = useState("");
    const [prayerLabel, setPrayerLabel] = useState("");
    const [textQuillBubble, setTextQuillBubble] = useState('');

    const [translation, setBibleTranslation] = React.useState('');

    const handleChange = (event) => {
        setBibleTranslation(event.target.value);
    };

    const now = new Date();
    const todaysdate = date.format(now, 'dddd, MMMM DD, YYYY');
    const todaysdatetime = date.format(now, 'DD MMM YYYY HH:mm:ss A ');
    const [loader, setLoader] = useState(false);

    const postsCollectionRef = collection(db, "VerseOfthedayDevotionalNotes");
    const docid = db.collection('VerseOfthedayDevotionalNotes').doc().id

    let history = useHistory();

    const createSOAPNote = async () => {
        setLoader(true);
        await addDoc(postsCollectionRef, {
            scriptureLabel,
            scriptureBookLabel,
            applicationLabel,
            prayerLabel,
            dataid: docid,
            date: todaysdatetime,
            datetimeLabel: todaysdate,
            uid: auth.currentUser.uid,
        });
        NotificationManager.primary("Note Saved", "Success")
        history.push('/app/home');
    };

    return (
        <>
            <Row>
                <Colxx xxs="12">
                    <Breadcrumb heading="New S.O.A.P" match={match} />
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
                                <Button onClick={createSOAPNote} type="submit" color="primary">Save</Button>
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
                            value={scriptureLabel}
                            onChange={setScriptureLabel}
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
                        } > Observation</h3>
                        <h6>What are your thoughts around this verse?</h6>
                        <ReactQuill
                            style={{ height: "200px" }}
                            theme="bubble"
                            value={scriptureBookLabel}
                            onChange={setScriptureBookLabel}
                            modules={quillModules}
                            formats={quillFormats}
                        />
                    </CardBody>
                    </Card>
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    <Card style={{ borderRadius: "30px" }}><CardBody>
                        <h3 style={{ fontWeight: "bold" }}>Application</h3>
                        <h6>How can you apply this to your life?</h6>
                        <ReactQuill
                            style={{ height: "200px" }}
                            theme="bubble"
                            value={applicationLabel}
                            onChange={setApplicationLabel}
                            modules={quillModules}
                            formats={quillFormats}
                        />
                    </CardBody>
                    </Card>
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    <Card style={{ borderRadius: "30px" }}><CardBody>
                        <h3 style={{ fontWeight: "bold" }}>Prayer</h3>
                        <h6>Dear God,</h6>
                        <ReactQuill
                            style={{ height: "200px" }}
                            theme="bubble"
                            value={prayerLabel}
                            onChange={setPrayerLabel}
                            modules={quillModules}
                            formats={quillFormats}
                        />
                        &nbsp;
                        <h6>Amen</h6>
                    </CardBody>
                    </Card>
                </Colxx>
            </Row>
        </>
    );
};
export default soap;
