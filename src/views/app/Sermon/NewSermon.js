import React, { useState, useRef, useCallback, useMemo } from 'react';
import { Row, Nav, Button, Form, Input, Spinner } from 'reactstrap';
import ReactQuill from 'react-quill';
import { addDoc, collection } from 'firebase/firestore';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import { doc, setDoc } from 'firebase/firestore';
import { db, auth } from 'helpers/Firebase';
import date from 'date-and-time';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { throttle, debounce } from 'lodash';

import { NotificationManager } from 'components/common/react-notifications';

import IntlMessages from 'helpers/IntlMessages';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';
import { borderBottom } from '@mui/system';
import Moment from 'react-moment';

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

const EditorsUi = ({ match }) => {
  const [translation, setBibleTranslation] = React.useState('');

  const [sermonTitle, setSermonTitle] = useState('');
  const [sermonPreacher, setSermonPreacher] = useState('');
  const [sermonNote, setSermonNote] = useState('');
  const [dataid] = useState('');

  const [loader, setLoader] = useState(false);
  const now = new Date();
  const todaysdate = date.format(now, 'dddd, MMMM DD, YYYY');
  const todaysdatetime = date.format(now, 'DD MMM YYYY HH:mm:ss A ');

  const postsCollectionRef = collection(db, 'SermonNotes');
  const docid = db.collection('SermonNotes').doc().id;

  let history = useHistory();

  const [isLoading, setLoading] = useState(false);
  const reactQuillRef = useRef();
  const quillRef = reactQuillRef.current?.getEditor();
  const baseURL = 'https://api.esv.org/v3/passage/';

  const createSermonNote = async () => {
    setLoader(true);
    await addDoc(postsCollectionRef, {
      sermonNotes: {
        sermonTitle,
        sermonPreacher,
        sermonNote,
        dataid: docid,
        date: todaysdatetime,
        sermonDate: todaysdate,
      },
      uid: auth.currentUser.uid,
    });
    console.log(docid);
    NotificationManager.primary('Note Saved', 'Success');
    history.push('/app/home');
  };

  const sendRequest = useCallback(
    (request) => {
      if (request.replace('.', ':').trim().length !== 0) {
        axios
          .get(`${baseURL}text/?q=${request}`, {
            headers: {
              Authorization: 'Token 00a6d7a42af1e40825bfaa9f947930e4f21337d1',
            },
            params: {
              'include-headings': false,
              'include-footnotes': false,
              'include-verse-numbers': false,
              'include-short-copyright': false,
              'include-passage-references': false,
            },
          })
          .then((response) => {
            setLoading(false);
            const text = response.data?.passages;
            if (text && text[0]) {
              const data = text[0].replace('“', '');
              quillRef.insertText(
                quillRef.getSelection().index,
                `\n${data.trim()}\n`
              );
            }
          })
          .catch((e) => {
            setLoading(false);
            console.log(e);
          });
      }
    },
    [quillRef]
  );

  const onKeyChange = useCallback(
    (e) => {
      if (e.keyCode !== 32) return;
      const curRange = quillRef.getSelection();
      const value = quillRef.getText(0, curRange.index);
      const line = value.substring(value.lastIndexOf('\n') + 1);
      sendRequest(line);
    },
    [sendRequest, quillRef]
  );

  const onKey = useMemo(() => debounce(onKeyChange, 2000), [onKeyChange]);

  const onKeyDown = (e) => {
    if (e.keyCode !== 32) return;
    const curRange = quillRef.getSelection();
    const value = quillRef.getText(0, curRange.index);
    const line = value.substring(value.lastIndexOf('\n') + 1);
    if (line.trim().length > 0) setLoading(true);
  };
  return (
    <Row className="mb-4">
      <Colxx xxs="12">
        {/* <div style={{
                    margin: "auto",
                    width: "10%",
                }}>
                    <Box sx={{ maxWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Bible</InputLabel>
                            <Select
                                style={{ borderRadius: "15px" }}
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
        {/* <Form
                    // onSubmit={createSermonNote}
                    style={{
                        border: "none",
                        borderBottom: "10px solid white"
                    }}
                > */}
        <div className="text-zero top-right-button-container">
          <Button type="submit" onClick={createSermonNote} color="primary">
            Save
          </Button>
        </div>
        <div>
          <p>{todaysdate}</p>
        </div>
        <Input
          placeholder="Title"
          type="text"
          value={sermonTitle}
          onChange={(event) => setSermonTitle(event.target.value)}
          style={{
            border: 'none',
            backgroundColor: 'white',
            height: '60px',
            fontSize: '30px',
          }}
        ></Input>
        <Input
          placeholder="Preacher"
          type="text"
          value={sermonPreacher}
          onChange={(event) => setSermonPreacher(event.target.value)}
          style={{
            border: 'none',
            height: '40px',
            backgroundColor: 'white',
            fontSize: '20px',
          }}
        ></Input>
        &nbsp; &nbsp;
        <div style={{ position: 'relative' }}>
          <ReactQuill
            ref={reactQuillRef}
            theme="snow"
            type="text"
            value={sermonNote}
            onChange={setSermonNote}
            modules={quillModules}
            className="quill-size"
            formats={quillFormats}
            onKeyUp={onKey}
            onKeyDown={onKeyDown}
          />
          {isLoading ? (
            <Spinner
              animation="border"
              role="status"
              size="sm"
              className="loading-spinner"
            >
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          ) : null}
        </div>
      </Colxx>
    </Row>
  );
};
export default EditorsUi;
