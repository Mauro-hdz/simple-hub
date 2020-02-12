import React, { Component } from 'react';
import {Header, Grid, Button, Menu} from 'semantic-ui-react';
import MeetingCard from '../components/MeetingCard';
import MeetingModal from '../components/MeetingModal';
import axios from 'axios';

class Meetings extends Component {
    state = {
        meetings: []
    }
    
    
    componentDidMount() {
        axios.get('/api/meeting/all')
        .then(res => {
            console.log(res, 'Meetings')
            this.setState({
                meetings: res.data.data
            })
        })
        .catch(err => {
            console.log('Error: ', err)
        });
    };

    rerender = () => {
        console.log('rerender')
        axios.get('/api/meeting/all')
        .then(res => {
            console.log(res, 'Meetings')
            this.setState({
                meetings: res.data.data
            })
        })
        .catch(err => {
            console.log('Error: ', err)
        });
    };

    render() {
        return (
            <div>
                <Grid>
                    <Grid.Row>
                        <Menu secondary>
                            <Menu.Item>
                            <Header as='h1' size='huge' floated='left'>Meetings</Header>
                            </Menu.Item>
                            <Menu.Item>
                                <MeetingModal rerenderParent={this.rerender} trigger={
                                <Button color='orange' floated='left' inverted>+ New Meeting</Button>
                                        } />
                            </Menu.Item>
                        </Menu>
                    </Grid.Row>
                </Grid>
                <Grid>
                    <Grid.Row>
                        {/* Render all meeting cards here */}
                        {this.state.meetings.map(meeting => {
                            console.log(meeting)
                            return (
                                <MeetingCard
                                subject={meeting.subject}
                                location={meeting.location}
                                date={meeting.date}
                                time={meeting.time}
                                attending={meeting.attending}
                                id={meeting.id}
                                key={meeting.id}
                                />
                            )
                        })}
                    </Grid.Row>
                </Grid>
            </div>
        )
    }


};

export default Meetings;