import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Button} from "react-bootstrap";



class App extends React.Component {


    firstForm() {

        return (
        <Container fluid className ="cont1 p-3">
            <Row>
                <Col md={{span: 6, offset: 3}}>
                    <h1 className='display-1 pg1'>Welcome to LifeStats!</h1>
                    <h3 className='followUp'>LifeStats is a fun way to game-ify your information that normally isn't that interesting. Enter your details
                        in the following form and you will get an exciting take on your credentials!</h3>
                </Col>
            </Row>


            <div className='form'>
                <Row>
                    <Col md={{span: 6, offset: 3}}>
                        <Form>
                            <Form.Group controlId="fullName">
                                <Form.Label>Full Name:</Form.Label>
                                <Form.Control type="text" placeholder="Enter your Full Name"/>
                            </Form.Group>
                            <Form.Group controlId="prefix">
                                <Form.Label>Prefix:</Form.Label>
                                <Form.Control as="select">
                                    <option>Mr</option>
                                    <option>Miss</option>
                                    <option>Mrs</option>
                                    <option>Other</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="age">
                                <Form.Label>Age: </Form.Label>
                                <Form.Control type="text" placeholder="Enter your Age:"/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>
                                    Profession:
                                </Form.Label>
                                <Form.Control type='text' placeholder='Enter your Profession:'/>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </div>

            <div className='wideSubmit'>
                <Row>
                    <Col md={{span: 6, offset: 3}}>
                <Button block>
                    Submit!
                </Button>
                    </Col>
                </Row>
            </div>
        </Container>
        );
    }

    render() {
        return (
            this.firstForm()
        );
    }
}



export default App;




