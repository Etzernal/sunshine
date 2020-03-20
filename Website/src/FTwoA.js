import React, { Component } from 'react'
import { Col, Card } from 'react-bootstrap'
// import styled from 'styled-parts';
import { Link } from 'react-router-dom';
import { Details } from './parts/Details'
import { LiveChatHeader } from './parts/LiveChatHeader'

export default class FTwoA extends Component {
    render() {
        return (
            <React.Fragment>
                <LiveChatHeader />
                <div class="text-center" style={{ backgroundColor: "#E8E8E8", padding: "2rem", marginLeft: '15%', marginRight: '15%'}}>
                    <h5 class="text-center mb-3">What is your question about?</h5>
                    <Col>
                        <Link to="/LiveChat" style={{ color: 'black', display: 'block'}}>
                            <div>
                            <Card>
                                <Card body>Before And After Your Tour (change option)</Card>
                            </Card>
                            </div>
                        </Link>
                    </Col>
                    <h5 class="text-center mb-3 mt-3"> And more specifically...</h5>
                    <Col>
                        <Link to="/filtertwo" style={{ color: 'black', display: 'block'}}>
                            <div>
                            <Card>
                                <Card body>Before My Tour (change option)</Card>
                            </Card>
                            </div>
                        </Link>
                    </Col>
                    </div>
                    
                    <div style={{ backgroundColor: "#E8E8E8", padding: "2rem", marginLeft: '15%', marginRight: '15%'}}>
                    <Col style={{ color: 'black', display: 'block'}} >
                    <h5 class="text-center mb-3 mt-3">Customer Information</h5>
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



