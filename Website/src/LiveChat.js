import React, { Component } from 'react'
import { Container, Col, Card } from 'react-bootstrap'
// import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { LiveChatHeader } from './parts/LiveChatHeader'
class LiveChat extends Component {

    render() {
        return (
            <React.Fragment>
                <LiveChatHeader />
                <div class="text-center" style={{ backgroundColor: "#E8E8E8", padding: "2rem", marginLeft: '15%', marginRight: '15%'}}>
                    <h5 class="text-center mb-3">What is your question about?</h5>
                    <Col>
                        <Link to="/filterone" style={{ color: 'black' }}>
                            <div class="text-center"><Card>
                                <Card body>Book And Join A Tour</Card>
                            </Card>
                            </div>
                        </Link>
                    </Col>
                    <Col>
                        <Link to="/filtertwo" style={{ color: 'black' }}>
                            <div class="text-center"><Card>
                                <Card body>Before And After Your Tour</Card>
                            </Card>
                            </div>
                        </Link>
                    </Col>
                    <Col>
                        <Link to="/FilterThree" style={{ color: 'black' }}>
                            <div class="text-center"><Card>
                                <Card body>Activities On Tour</Card>
                            </Card>
                            </div>
                        </Link>
                    </Col>
                    <Col>
                        <Link to="/FilterFour" style={{ color: 'black' }}>
                            <div class="text-center"><Card>
                                <Card body>Packages and Promotions</Card>
                            </Card>
                            </div>
                        </Link>
                    </Col>
                    <div class="mt-3">
                        <Col>
                            <Link to="/contact" style={{ color: 'black' }}>
                                <p class="text-center">Cancel</p>
                            </Link>
                        </Col>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default LiveChat;


