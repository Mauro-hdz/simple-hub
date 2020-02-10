import React from 'react';
import { Card, Grid, Icon, Checkbox } from 'semantic-ui-react';


const TaskCard = () => {
    return (
        <Card fluid color='red' className="task-card">
            <Card.Content>
                <Grid columns='4'>
                    <Grid.Row>
                        <Grid.Column>
                            <Checkbox label="Completed" />
                        </Grid.Column>
                        <Grid.Column>
                            <Card.Header as="h4">Onboard new developer</Card.Header>
                        </Grid.Column>
                        <Grid.Column>
                            <Card.Content>IT</Card.Content>
                        </Grid.Column>
                        <Grid.Column>
                            <Icon name="trash alternate outline" color="red" size="large" />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Card.Content>
        </Card>
    )
}

export default TaskCard;