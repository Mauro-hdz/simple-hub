import React from 'react';
import {Header, Grid} from 'semantic-ui-react';
import MeetingCard from '../components/meetingCard';

const Meetings = () => {
    return (
        <div>
            <Grid>
                <Grid.Row>
                <Header as='h1' size='huge' floated='left'>Meetings</Header>
                </Grid.Row>
            </Grid>
            <Grid>
                <Grid.Row>
                <MeetingCard />
                </Grid.Row>
            </Grid>

        </div>
    )
}

export default Meetings;