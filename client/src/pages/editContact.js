import React, { Component } from 'react';
import { Card, Form, Grid, TextArea, Button } from 'semantic-ui-react';
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
        axios.get('/api/contact/one/' + this.props.match.params.id)
        .then(res => {
            this.setState({
                id: res.data.id,
                name: res.data.name,
                email: res.data.email,
                title: res.data.title,
                phoneNumber: res.data.phoneNumber,
                note: res.data.note
            })
        });
    };

    onChangeName = (e) => {
        this.setState({
            name: e.target.value
        })
    };

    onChangeEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    };

    onChangeTitle = (e) => {
        this.setState({
            title: e.target.value
        })
    };

    onChangePhoneNumber = (e) => {
        this.setState({
            phoneNumber: e.target.value
        })
    };

    onChangeNote = (e) => {
        this.setState({
            note: e.target.value
        })
    };

    updateContact = (e) => {
        const updatedContact = {
            name: this.state.name,
            title: this.state.title,
            email: this.state.email,
            phoneNumber: this.state.phoneNumber,
            note: this.state.note
        };
        console.log(this.state)
        axios.put('/api/contact/update/' + this.state.id, updatedContact)
        .then(res => {
            console.log(res)
            this.props.history.push('/')
        })
        .catch(err => console.log('Contact failed to update: ' + err));
    };

    render() {
        return (
            <div>
                <Card className="edit-card">
                    <Card.Content>
                        <h1>Edit Contact: {this.state.name} </h1>
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
                                        <TextArea placeholder="Add notes about your contact" value={this.state.note} onChange={this.onChangeNote} />
                                    {/* </Form.Group> */}
                                </Grid.Row>
                            {/* </Grid> */}
                        </Form>
                    </Card.Content>
                    <Card.Content>
                        <Button color="blue" onClick={this.updateContact}>Update Contact</Button>    
                    </Card.Content>
                </Card>                
            </div>
        )
    }
}

export default EditContact;