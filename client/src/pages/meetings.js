import React from 'react';
import {Header, Grid, Button, Menu} from 'semantic-ui-react';
import MeetingCard from '../components/meetingCard';
import MeetingModal from '../components/meetingModal';

const Meetings = () => {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Menu secondary>
                        <Menu.Item>
                        <Header as='h1' size='huge' floated='left'>Meetings</Header>
                        </Menu.Item>
                        <Menu.Item>
                            <MeetingModal trigger={
                            <Button color='orange' floated='left' inverted>+ New Meeting</Button>
                                    } />
                        </Menu.Item>
                    </Menu>
                </Grid.Row>
            </Grid>
            <Grid>
                <Grid.Row>
                    {/* Render all meeting cards here */}
                    <MeetingCard />
                </Grid.Row>
            </Grid>

        </div>
    )
}

export default Meetings;