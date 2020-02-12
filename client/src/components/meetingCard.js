import React from 'react';
import { Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


const MeetingCard = (props) => {
    return (
        <div>
            <Card raised className="meeting-card">
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
                    <Link to={'/edit/meeting/'+props.id}>
                    <Card.Description as={'h4'}>Details</Card.Description>
                    </Link>
                </Card.Content>
            </Card>
        </div>
    )
}

export default MeetingCard;