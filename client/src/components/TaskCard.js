import React from 'react';
import { Card, Grid, Icon, Checkbox } from 'semantic-ui-react';


const TaskCard = (props) => {
    return (
        <Card raised fluid color='red' className="task-card">
            <Card.Content>
                <Grid columns='4'>
                    <Grid.Row>
                        <Grid.Column>
                            <Checkbox label="Completed" />
                        </Grid.Column>
                        <Grid.Column>
                            <Card.Header as="h4"> {props.task} </Card.Header>
                        </Grid.Column>
                        <Grid.Column>
                            <Card.Content> {props.category} </Card.Content>
                        </Grid.Column>
                        <Grid.Column>
                            <Icon onClick={() => props.clickDelete(props.id)} link name="trash alternate outline" color="red" size="large" />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Card.Content>
        </Card>
    )
}

export default TaskCard;