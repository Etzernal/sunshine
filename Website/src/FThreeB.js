import React, { Component } from 'react'
import { Col, Card } from 'react-bootstrap'
// import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Details } from './components/Details'
import { LiveChatHeader } from './components/LiveChatHeader'

export default class FThreeB extends Component {
    render() {
        return (
            <React.Fragment>
                <LiveChatHeader />
                <div class="text-center" style={{ backgroundColor: "#E8E8E8", padding: "2rem", marginLeft: '15%', marginRight: '15%'}}>
                    <h5 class="text-center mb-3">What is your question about?</h5>
                    <Col>
                        <Link to="/LiveChat" style={{ color: 'black', display: 'block' }}>
                            <div class="text-center"><Card>
                                <Card body>Activities On Tour (change option)</Card>
                            </Card>
                            </div>
                        </Link>
                    </Col>
                    <h5 class="text-center mb-3 mt-3"> And more specifically...</h5>
                    <Col>
                        <Link to="/FilterThree" style={{ color: 'black', display: 'block' }}>
                            <div class="text-center"><Card>
                                <Card body>Add Ons (change option)</Card>
                            </Card>
                            </div>
                        </Link>
                    </Col>

                    </div>

                <div style={{ backgroundColor: "#E8E8E8", padding: "2rem", marginLeft: '15%', marginRight: '15%'}}>
                    <Col style={{ color: 'black', display: 'block'}} >
                        <h5 class="text-center mb-3">Customer Information</h5>
                        <Card>
                            <Details />
                        </Card>
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



