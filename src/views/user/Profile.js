import React, { useState, useEffect } from 'react';
import {
    Row,
    Card,
    Form,
    CardBody,
    Nav,
    NavItem,
    Button,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownItem,
    DropdownMenu,
    TabContent,
    TabPane,
    Badge,
    CardTitle,
    Input,
    Label,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import GalleryDetail from 'containers/pages/GalleryDetail';
import GalleryProfile from 'containers/pages/GalleryProfile';
import Breadcrumb from 'containers/navs/Breadcrumb';
import { Colxx } from 'components/common/CustomBootstrap';
import IntlMessages from 'helpers/IntlMessages';
import SingleLightbox from 'components/pages/SingleLightbox';
import whotoFollowData from 'data/follow';
import UserFollow from 'components/common/UserFollow';
import UserCardBasic from 'components/cards/UserCardBasic';
import recentPostsData from 'data/recentposts';
import RecentPost from 'components/common/RecentPost';
import posts from 'data/posts';
import Post from 'components/cards/Post';
import churchnotes from 'assets/img/churchnotes.jpg'
import logo from 'assets/img/churchnoteslogo.png'
import { auth, db } from 'helpers/Firebase';
import { useAuthState } from "react-firebase-hooks/auth";



const friendsData = whotoFollowData.slice();
const followData = whotoFollowData.slice(0, 5);

export const Profile = ({ match }) => {
    const [activeTab, setActiveTab] = useState('profile');

    const [user, loading] = useAuthState(auth);
    const [setDisplayName] = useState("");


    const fetchUserName = async () => {
        try {
            const query = await db
                .collection("user")
                .where("uid", "==", user?.uid)
                .get("firstName");
            const data = await query.docs[0].data();
            setDisplayName(data.displayName);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        if (loading) return;
        fetchUserName();
    }, [user, loading]);


    var str = "Hello"




    return (
        <>
            <Row>
                <Colxx xxs="12">
                    <h1> {user?.displayName}</h1>
                    <Breadcrumb match={match} />
                    <TabContent activeTab={activeTab}>
                        <TabPane tabId="profile">
                            <Row>
                                <Colxx xxs="12" className="mb-5">
                                    <Card style={{ height: "250px" }}>
                                        <img src={churchnotes} style={{ height: "250px", borderRadius: "15px", objectFit: "cover" }} ></img>
                                    </Card>
                                </Colxx>
                                <Colxx xxs="12" lg="5" xl="4" className="col-left" >
                                    <SingleLightbox

                                        thumb={logo}
                                        large={logo}
                                        className="img-thumbnail card-img social-profile-img"
                                    />

                                    <Card className="mb-4" style={{ borderRadius: "30px" }}>
                                        <CardBody>
                                            <div className="text-center pt-4">
                                                <p> {user?.displayName.split(" ")[0]}</p>
                                            </div>
                                            <p className="mb-3">
                                                Church Notes empowers Christians around the world to take notes at Church and grow closer to God through his word.
                                            </p>

                                        </CardBody>
                                    </Card>
                                    <Card className="mb-4" style={{ borderRadius: "30px" }}>
                                        <CardBody>
                                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
                                                <Button color="primary" style={{ textAlign: "center", width: "200px", }}>Upgrade to Premium</Button></div>

                                        </CardBody>
                                    </Card>
                                </Colxx>
                                <Colxx xxs="12" lg="7" xl="8" className="col-right">
                                    <Card style={{ borderRadius: "30px" }}>
                                        <CardBody>
                                            <Row>
                                                <Colxx xs="12" md="6" className="mb-3" >
                                                    <div style={{ textAlign: 'center', border: '2px solid', borderRadius: "20px", height: "170px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                        <div style={{}}>
                                                            <h1 style={{ fontSize: "50px" }}>128</h1>
                                                            <h3>Total Sermons</h3>
                                                        </div>
                                                    </div>
                                                </Colxx>
                                                <Colxx xs="12" md="6" className="mb-3" >
                                                    <div style={{ textAlign: 'center', border: '2px solid', borderRadius: "20px", height: "170px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                        <div style={{}}>
                                                            <h1 style={{ fontSize: "50px" }}>63</h1>
                                                            <h3>Total Devotions</h3>
                                                        </div>
                                                    </div>
                                                </Colxx>
                                            </Row>
                                        </CardBody>
                                    </Card>
                                    &nbsp;
                                    &nbsp;
                                    &nbsp;
                                    <Card style={{ borderRadius: "30px" }}>
                                        <CardBody>
                                            <Form>
                                                <h3>Profile</h3>
                                                <Label style={{ paddingTop: "20px" }}>First Name</Label>
                                                <Input placeholder='First Name'></Input>
                                                &nbsp;
                                                <Label style={{ paddingTop: "20px" }}>Last Name</Label>
                                                <Input placeholder='First Name'></Input>
                                                <Label style={{ paddingTop: "20px" }}>Email Address</Label>
                                                <Input placeholder='First Name'></Input>
                                                <div style={{ display: "flex", paddingTop: "30px", justifyContent: "center", alignItems: "center" }} >
                                                    <Button color="primary" style={{ width: "200px", }} >Edit Profile</Button>
                                                </div>
                                            </Form>
                                        </CardBody>
                                    </Card>

                                </Colxx>
                            </Row>
                        </TabPane>
                        <TabPane tabId="images">
                            <GalleryProfile />
                        </TabPane>
                        <TabPane tabId="friends">
                            <Row>
                                {friendsData.map((itemData) => {
                                    return (
                                        <Colxx
                                            xxs="12"
                                            md="6"
                                            lg="4"
                                            key={`friend_${itemData.key}`}
                                        >
                                            <UserCardBasic data={itemData} />
                                        </Colxx>
                                    );
                                })}
                            </Row>
                        </TabPane>
                    </TabContent>
                </Colxx>
            </Row>
        </>
    );
};
export default Profile;
