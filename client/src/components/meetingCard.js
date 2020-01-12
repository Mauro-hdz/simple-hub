import React from 'react';
import { Card, Button } from 'semantic-ui-react';


const MeetingCard = () => {
    return (
        <div>
            <Card>
                <Card.Content>
                <Card.Header>Consultation</Card.Header>
                <Card.Meta>Austin, Tx</Card.Meta>
                <Card.Description>FRI. 14 Feb @ 10:30 AM</Card.Description>
                </Card.Content>
                <Card.Content>
                    Attending:
                    <Card.Meta>Richard, Jane, Steve</Card.Meta>
                </Card.Content>
                <Card.Content as='button' className='bg-blue' inverted extra>
                 <Card.Description>Details</Card.Description>
                </Card.Content>
            </Card>
        </div>
    )
}

export default MeetingCard;