import React, { Component } from 'react';
import { Card, Form, Grid, TextArea } from 'semantic-ui-react';
import InputMask from 'react-input-mask';
import axios from 'axios';


class EditContact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            name: '',
            email: '',
            title: '',
            phoneNumber: '',
            note: ''
        }
    };

    componentDidMount() {
        console.log(this.props)
        axios.get('/api/contact/one/' + this.props.match.params.id)
        .then(res => {
            console.log(res.data)
        })
    };

    render() {
        return (
            <div>
                <Card className="edit-card">
                    <Card.Content>
                        <h1>Hello There My ID is: {this.props.match.params.id} </h1>
                        <Form>
                            {/* <Grid> */}
                                <Grid.Row>
                                    <Form.Group>
                                        <Form.Input value={this.state.name} onChange={this.onChangeName} label='Full Name' placeholder='Full Name' />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Input value={this.state.title} onChange={this.onChangeTitle} label='Job Title' placeholder='i.e accountant' />
                                    </Form.Group>
                                </Grid.Row>
                                <Grid.Row>
                                    <Form.Group>
                                        <Grid.Row>
                                            <Grid.Column className='ui field' width={12}>
                                                <label>Phone Number</label>
                                                <Form.Input value={this.state.phoneNumber} onChange={this.onChangePhoneNumber} placeholder='(100)-100-1000' as={InputMask} mask='(999)-999-9999' />
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Input value={this.state.email} onChange={this.onChangeEmail} label='Email' placeholder='Parker@StarkIndustries.com' />
                                    </Form.Group>
                                </Grid.Row>
                                <Grid.Row centered>
                                    {/* <Form.Group> */}
                                        <TextArea placeholder="Add notes about your contact" />
                                    {/* </Form.Group> */}
                                </Grid.Row>
                            {/* </Grid> */}
                        </Form>
                    </Card.Content>
                </Card>                
            </div>
        )
    }
}

export default EditContact;