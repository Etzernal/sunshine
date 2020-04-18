import React, { Component } from 'react'
import { Card, CardColumns } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import hiking2 from './assets/hikinggirl2.jpg'
import happygirl from './assets/happygirl.jpg'
import hiking from "./assets/hiking.jpg"

class Contact extends Component {
    render() {
        return (
            <React.Fragment>
            <Helmet>
                <title>Contact</title>
            </Helmet>
                <div className="text-center">
                    <h1>Contact Us</h1>
                    <p>Feel free to drop us a message!</p>
                    <hr className="my-4" />
                </div>
                <CardColumns>
                    <Card className="text-center">
                        <Card.Img variant="top" src={hiking2} />
                        <Card.Body>
                            <Card.Title>FAQ</Card.Title>
                            <Card.Text>
                                You can check out the frequently asked question here!
                    </Card.Text>
                            {/* <Button variant="primary">Go To FAQ</Button> */}
                            <button type="submit" className="btn btn-primary" style={{ backgroundColor: "white", color: "black", borderColor: "lightgray" }}>Go To FAQ</button>
                        </Card.Body>
                    </Card>

                    <Card className="text-center">
                        <Card.Img variant="top" src={happygirl} />
                        <Card.Body>
                            <Card.Title>Send Us An Email</Card.Title>
                            <Card.Text>
                                Send us an email for enquiry or feedback here!
                    </Card.Text>
                            {/* <Button variant="primary">Go To Email</Button> */}
                            <button type="submit" className="btn btn-primary" style={{ backgroundColor: "white", color: "black", borderColor: "lightgray" }}>Go To Email</button>
                        </Card.Body>
                    </Card>

                    <Card className="text-center">
                        <Card.Img variant="top" src={hiking} />
                        <Card.Body>
                            <Card.Title>Live Chat</Card.Title>
                            <Card.Text>
                                If you would like to chat with an agent now, press the button below.
                    </Card.Text>
                            <Link to="/livechat">
                                {/* <Button className="is-rounded">Go To Live Chat</Button> */}
                                <button type="submit" className="btn btn-primary" style={{ backgroundColor: "white", color: "black", borderColor: "lightgray" }}>Go To Live Chat</button>
                            </Link>
                        </Card.Body>
                    </Card>
                </CardColumns>
            </React.Fragment>
        )
    }
}

export default Contact;