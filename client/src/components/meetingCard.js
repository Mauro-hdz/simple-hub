import React from 'react';
import { Card } from 'semantic-ui-react';


const MeetingCard = (props) => {
    return (
        <div>
            <Card>
                <Card.Content>
                <Card.Header> {props.subject} </Card.Header>
                <Card.Meta> {props.location} </Card.Meta>
                <Card.Description> {props.date} @ {props.time} </Card.Description>
                </Card.Content>
                <Card.Content>
                    Attending:
                    <Card.Meta> {props.attending} </Card.Meta>
                </Card.Content>
                <Card.Content as='button' className='bg-blue' extra>
                 <Card.Description>Details</Card.Description>
                </Card.Content>
            </Card>
        </div>
    )
}

export default MeetingCard;