import React from 'react';
import { Button, Header, Modal, Form, Grid} from 'semantic-ui-react';
import MaskedInput from 'react-text-mask';

const ModalContacts = (props) => (
  <Modal trigger={props.trigger}>
    <Modal.Header>Add A New Contact</Modal.Header>
    <Modal.Content>
        <Form>
            <Form.Group>
                <Form.Input label='First Name' placeholder='First Name' />
                <Form.Input label='Last Name' placeholder='Last Name' />
            </Form.Group>
            <Form.Group>
                <Grid.Row>
                <Grid.Column width={6}>
                    <MaskedInput />
                </Grid.Column>
                </Grid.Row>                
            </Form.Group>
        </Form>
      <Modal.Description>
        <Header>Default Profile Image</Header>
        <p>
          We've found the following gravatar image associated with your e-mail
          address.
        </p>
        <p>Is it okay to use this photo?</p>
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default ModalContacts;