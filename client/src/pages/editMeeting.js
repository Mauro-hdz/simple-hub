import React, { Component } from 'react';
import { Card, Form, Button, List } from 'semantic-ui-react';
import InputMask from 'react-input-mask';
import axios from 'axios';


class EditMeeting extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            subject: '',
            location: '',
            date: '',
            time: '',
            hour: '',
            AmPm: '',
            person: '',
            people: []
        }
    }


    componentDidMount() {
        axios.get('/api/meeting/one/' + this.props.match.params.id)
        .then(res => {
            console.log(res)
            const time = res.data.time.split(" ");
            const people = res.data.attending.split(', ');
            this.setState({
                id: res.data.id,
                subject: res.data.subject,
                location: res.data.location,
                date: res.data.date,
                time: time[0] + ' ' + time[1],
                hour: time[0],
                AmPm: time[1],
                person: '',
                people: people
            });
        })
    };

    onClickAddPerson = (e) => {
        this.setState({
            people: [...this.state.people, this.state.person],
            person: ''
        });
    };

    onChangePerson = (e) => {
        this.setState({person: e.target.value });
    };

    onClickRemovePerson = (person) => {
        const index = this.state.people.findIndex(element => element === person)
        this.state.people.splice(index, 1)
        this.setState({
            people: this.state.people
        })
    };

    onChangeSubject = (e) => {
        this.setState({
            subject: e.target.value
        })
    };

    onChangeLocation = (e) => {
        this.setState({
            location: e.target.value
        })
    };

    onChangeDate = (e) => {
        this.setState({
            date: e.target.value
        })
    };

    onChangeHour = (e) => {
        this.setState({
            hour: e.target.value,
            time: e.target.value + ' ' + this.state.AmPm
        })
    };

    onChangeAmPm = (e, {value}) => {
        console.log(value)
        this.setState({
            AmPm: value,
            time: this.state.hour + ' ' + value
        })
    };

    onClickUpdate = (e) => {
        console.log('MEETING')
        const updateMeeting = {
            subject: this.state.subject,
            location: this.state.location,
            date: this.state.date,
            time: this.state.time,
            attending: this.state.people.join(', ')
        };
        axios.put('/api/meeting/update/' + this.state.id, updateMeeting)
        .then(res => {
            console.log(res)
        })
        .catch(err => console.log('Update Meeting Failed: ' + err))
    };

    render() {
        const timeOptions = [{text: 'AM', value: 'AM'}, {text: 'PM', value: 'PM'}]

        return (
            <div>
                <Card className="edit-card">
                    <Card.Content>
                        <h1>Edit Meeting: {this.state.subject} </h1>
                        <Form>
                  <Form.Group>
                      <Form.Input value={this.state.subject} onChange={this.onChangeSubject} label='Subject' placeholder='i.e consultation' />
                  </Form.Group>
                  <Form.Group>
                          <Form.Input value={this.state.location} onChange={this.onChangeLocation} label='Location' placeholder='i.e Dallas, 123 Sesame St.' />
                  </Form.Group>
                  <Form.Group>
                          <Form.Field>
                              <label>Date</label>
                              <Form.Input value={this.state.date} onChange={this.onChangeDate} className='ui input' as={InputMask} mask='99/99/9999' placeholder='01/15/2020' />
                          </Form.Field>
                          <Form.Field>
                              <label>Time</label>
                              <Form.Field value={this.state.hour} onChange={this.onChangeHour} as={InputMask} placeholder='i.e 04:29' mask='99:99' className='ui input' />
                          </Form.Field>
                          <Form.Field>
                              <label>AM/PM</label>
                              <Form.Select value={this.state.AmPm} onChange={this.onChangeAmPm} placeholder='i.e PM' options={timeOptions} />
                          </Form.Field>
                  </Form.Group>
                  <Form.Group inline>
                      <Form.Field>
                          <label>Add People</label>
                          <Form.Input id='person-input' value={this.state.person} onChange={this.onChangePerson} placeholder='i.e Elon Musk' />
                      </Form.Field>
                      <Button id='add-person' className='margin-top-button' onClick={this.onClickAddPerson} color='green'>Add Person</Button>  
                  </Form.Group>
                  <List className="list-item">
                    {this.state.people.map(person => {
                        return (
                        <List.Item key={person}>
                            <List.Icon value={person} color="red" onClick={() => this.onClickRemovePerson(person)} link name='x' />
                            <List.Content>{person}</List.Content>
                        </List.Item>
                        )
                    })}
                </List>
              </Form>
                    </Card.Content>
                    <Card.Content>
                        <Button color="blue" onClick={this.onClickUpdate}>Update Meeting</Button>
                    </Card.Content>
                </Card>                
            </div>
        )
    }
}

export default EditMeeting;