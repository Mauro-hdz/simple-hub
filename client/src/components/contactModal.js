import React, { Component } from 'react';
import { Button, Modal, Form, Grid, Icon} from 'semantic-ui-react';
import InputMask from 'react-input-mask';
import axios from 'axios';

class ContactModal extends Component {
    constructor(props) {
        super(props);

        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onClickSubmit = this.onClickSubmit.bind(this);

        this.state = {
            firstName: '',
            lastName: '',
            name: '',
            title: '',
            phoneNumber: '',
            email: ''
        }
    }

    onChangeFirstName(e) {
        this.setState({
            firstName: e.target.value,
            name: e.target.value + ' ' + this.state.lastName
        })
    };

    onChangeLastName(e) {
        this.setState({
            lastName: e.target.value,
            name: this.state.firstName + ' ' + e.target.value
        })
    };

    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        })
    };

    onChangePhoneNumber(e) {
        this.setState({
            phoneNumber: e.target.value
        })
    };

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        })
    };

    onClickSubmit() {
        const contact = {
            name: this.state.name,
            title: this.state.title,
            email: this.state.email,
            phoneNumber: this.state.phoneNumber
        };
        axios.post('/api/contact/add', contact)
        .then(res => {
            this.setState({
                firstName: '',
                lastName: '',
                name: '',
                title: '',
                phoneNumber: '',
                email: ''
            });
            console.log(res)
            console.log('post made')
            this.props.rerenderParent();

        })
        .catch(err => {
            console.log('Error: ', err)
        })
    };

    render() {
        return (
            <Modal trigger={this.props.trigger} size='tiny'>
                <Modal.Header>Add A New Contact</Modal.Header>
                <Modal.Content>
                    <Form>
                        <Form.Group>
                            <Form.Input value={this.state.firstName} onChange={this.onChangeFirstName} label='First Name' placeholder='First Name' />
                            <Form.Input value={this.state.lastName} onChange={this.onChangeLastName} label='Last Name' placeholder='Last Name' />
                        </Form.Group>
                        <Form.Group>
                            <Form.Input value={this.state.title} onChange={this.onChangeTitle} label='Job Title' placeholder='i.e accountant' />
                        </Form.Group>
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
                    </Form>
                    <Modal.Actions>
                        {/* <Button color='red'>
                            <Icon name='remove' /> Cancel
                        </Button> */}
                        <Button onClick={this.onClickSubmit} color='green'>
                            <Icon name='checkmark' /> Submit
                        </Button>
                    </Modal.Actions>
                </Modal.Content>
            </Modal>
        )
    }
};

export default ContactModal;