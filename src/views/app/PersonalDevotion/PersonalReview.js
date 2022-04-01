import React, { useState } from 'react';
import { Row, Card, CardBody, Form, Button } from 'reactstrap';
import ReactQuill from 'react-quill';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';
import { NavLink } from 'react-router-dom';


const personalReview = ({ match }) => {

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
                    <Breadcrumb heading="Devotion Review" match={match} />
                    <Separator className="mb-5" />
                    <p>todays date</p>
                </Colxx>
            </Row>
            <Row className="mb-4">
                <Colxx xxs="12">
                    <h3 style={{ fontWeight: "bold" }}>Scripture</h3>
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    <h3 >John 3:16</h3>
                    <h3>For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.</h3>

                    &nbsp;
                    &nbsp;
                    &nbsp;
                    <h3 style={{ fontWeight: "bold" }}>Devotion</h3>
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    <p >This is a note that a user has created, example. This is them review the note.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacus orci, efficitur quis ex vitae, elementum tristique quam. Vivamus ut urna et nunc interdum fringilla. Nam id mollis augue. Quisque condimentum enim a lorem posuere, et venenatis tellus egestas. Nullam suscipit odio nec consectetur tincidunt. Praesent quis ex hendrerit, consequat eros non, finibus tellus. Curabitur dapibus eu dui sit amet venenatis. Suspendisse non congue purus. Aliquam non enim ac urna euismod congue nec malesuada dolor. Vestibulum dignissim ipsum felis, ut sodales nibh feugiat in. Donec commodo lectus eget nibh suscipit luctus non in ex. Donec eget tellus gravida, mattis quam nec, semper diam. Nullam efficitur fringilla vehicula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.

                        Fusce venenatis ornare eros egestas gravida. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce id dolor nec mauris malesuada cursus. Curabitur sollicitudin commodo lacus, sit amet aliquam ante tincidunt ac. Cras erat turpis, condimentum id luctus eu, facilisis ut neque. Integer euismod auctor sapien, in lacinia orci malesuada non. Morbi turpis elit, placerat at justo sit amet, tempor scelerisque est. Donec mollis ac quam a volutpat.

                        Phasellus convallis risus ut neque molestie rhoncus. Nulla sem purus, laoreet vel nisl sit amet, egestas efficitur orci. Phasellus convallis nec orci ut vestibulum. In nibh quam, maximus convallis risus vel, feugiat auctor massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis tincidunt ante quis sapien dignissim dapibus in vitae augue. Nulla sed sem pulvinar, vulputate odio vel, feugiat neque. Nullam lacinia condimentum nisi, sodales ullamcorper justo. Nullam eros eros, tempus vel ex in, luctus porttitor arcu. Ut consectetur dui eu efficitur malesuada. Ut ut tellus a massa interdum lacinia. Suspendisse suscipit mollis gravida.

                        Donec euismod dolor massa, congue egestas nisl sagittis sed. Maecenas congue bibendum sodales. Nullam ullamcorper ornare ex, hendrerit tincidunt justo tempus a. Nulla ut feugiat lorem. Donec sed vulputate leo. Etiam hendrerit congue maximus. In hac habitasse platea dictumst. Nulla vel pharetra dui. Nulla facilisis lectus nibh, vitae laoreet dolor tristique non. Cras pellentesque, magna non molestie venenatis, nisl diam ultricies ligula, a vulputate ex tellus ut orci.

                        Donec ornare, tellus at tristique ornare, lorem enim egestas ex, a hendrerit nulla metus at dolor. Suspendisse vel lobortis ante. Vivamus nulla magna, maximus malesuada commodo ut, dignissim ac magna. Maecenas diam mauris, commodo vitae luctus eu, blandit sed erat. Sed feugiat vehicula euismod. Nunc lorem magna, laoreet non justo scelerisque, fringilla vestibulum eros. Aenean odio lectus, consectetur nec orci a, bibendum congue nulla.</p>


                </Colxx>
            </Row>
        </>
    );
};
export default personalReview;
