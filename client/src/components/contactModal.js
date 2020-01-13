import React from 'react';
import { Button, Header, Modal, Form, Grid, Icon} from 'semantic-ui-react';
import InputMask from 'react-input-mask';

const ContactModal = (props) => (
  <Modal trigger={props.trigger} size='tiny'>
    <Modal.Header>Add A New Contact</Modal.Header>
    <Modal.Content>
        <Form>
            <Form.Group>
                <Form.Input label='First Name' placeholder='First Name' />
                <Form.Input label='Last Name' placeholder='Last Name' />
            </Form.Group>
            <Form.Group>
                <Form.Input label='Job Title' placeholder='i.e accountant' />
            </Form.Group>
            <Form.Group>
                <Grid.Row>
                    <Grid.Column className='ui field' width={12}>
                    <label>Phone Number</label>
                    <Form.Input placeholder='(100)-100-1000' as={InputMask} mask='(999)-999-9999' />
                    </Grid.Column>
                </Grid.Row>
            </Form.Group>
            <Form.Group>
                <Form.Input label='Email' placeholder='Parker@StarkIndustries.com' />
            </Form.Group>
        </Form>
        <Modal.Actions>
            {/* <Button color='red'>
                <Icon name='remove' /> Cancel
            </Button> */}
            <Button color='green'>
                <Icon name='checkmark' /> Submit
            </Button>
        </Modal.Actions>
    </Modal.Content>
  </Modal>
)

export default ContactModal;