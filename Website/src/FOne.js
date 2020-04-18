import React, { Component } from 'react'
import { Col, Card } from 'react-bootstrap'
// import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { LiveChatHeader } from './components/LiveChatHeader'
import { Helmet } from 'react-helmet';
export default class FOne extends Component {

    render() {
        return (
            <React.Fragment>
                <Helmet><title>Skill 1</title></Helmet>
                <LiveChatHeader />
                <div className="text-center" style={{ backgroundColor: "#E8E8E8", padding: "2rem", marginLeft: '15%', marginRight: '15%' }}>
                    <h5 className="text-center mb-3">What is your question about?</h5>
                    <Col>
                        <Link to="/LiveChat" style={{ color: 'black' }}>
                            <div className="text-center" style={{ backgroundColor: 'powderblue' }}>
                                <Card>
                                    <Card body>Book And Join A Tour (change option)</Card>
                                </Card>
                            </div>
                        </Link>
                    </Col>
                    <h5 className="text-center mb-3 mt-3"> And more specifically...</h5>
                    <Col>
                        <Link to="/FilterOneA" style={{ color: 'black' }}>
                            <div className="text-center" style={{ marginTop: "1rem" }}>
                                <Card>
                                    <Card body>Group Bookings</Card>
                                </Card>
                            </div>
                        </Link>
                    </Col>
                    <Col>
                        <Link to="/FilterOneB" style={{ color: 'black' }}>
                            <div className="text-center"><Card>
                                <Card body>Advanced Bookings</Card>
                            </Card>
                            </div>
                        </Link>
                    </Col>
                    <Col>
                        <Link to="/FilterOneC" style={{ color: 'black' }}>
                            <div className="text-center"><Card>
                                <Card body>Payment and Travel Insurance</Card>
                            </Card>
                            </div>
                        </Link>
                    </Col>

                    <div className="mt-3">
                        <Col>
                            <Link to="/contact" style={{ color: 'black' }}>
                                <p className="text-center">Cancel</p>
                            </Link>
                        </Col>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

