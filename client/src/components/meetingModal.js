import React, { Component } from 'react';
import { Button, Modal, Form, Icon, List} from 'semantic-ui-react';
import InputMask from 'react-input-mask';

class MeetingModal extends Component {
    state = {
        person: '',
        people: []
    };

onClickAddPerson = (event) => {
    event.preventDefault();
    this.setState({
        people: [...this.state.people, this.state.person],
        person: ''
    });
};

onChangePerson = () => {
    const personInput = document.getElementById('person-input').value; //grabs text input
    this.setState({person: personInput });
};

  render() {
    const timeOptions = [{text: 'AM', value: 'AM'}, {text: 'PM', value: 'PM'}]

    return (
        <Modal trigger={this.props.trigger} size='small'>
          <Modal.Header>Add A New Meeting</Modal.Header>
          <Modal.Content>
              <Form>
                  <Form.Group>
                      <Form.Input label='Subject' placeholder='i.e consultation' />
                  </Form.Group>
                  <Form.Group>
                          <Form.Input label='Location' placeholder='i.e Dallas, 123 Sesame St.' />
                  </Form.Group>
                  <Form.Group>
                          <Form.Field>
                              <label>Date</label>
                              <Form.Input className='ui input' as={InputMask} mask='99/99/9999' placeholder='01/15/2020' />
                          </Form.Field>
                          <Form.Field>
                              <label>Time</label>
                              <Form.Field as={InputMask} placeholder='i.e 04:29' mask='99:99' className='ui input' />
                          </Form.Field>
                          <Form.Field>
                              <label>AM/PM</label>
                              <Form.Select placeholder='i.e PM' options={timeOptions} />
                          </Form.Field>
                  </Form.Group>
                  <Form.Group inline>
                      <Form.Field>
                          <label>Add People</label>
                          <Form.Input id='person-input' value={this.state.person} onChange={this.onChangePerson} placeholder='i.e Elon Musk' />
                      </Form.Field>
                        <Button id='add-person' className='margin-top-button' onClick={this.onClickAddPerson} color='green'>Add Person</Button>                     
                  </Form.Group>
              </Form>
              <List>
                {this.state.people.map(person => {
                    return (
                    <List.Item>
                        <List.Icon name='x' />
                        <List.Content>{person}</List.Content>
                    </List.Item>
                    )
                })}
              </List>
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
    }
  }

export default MeetingModal;